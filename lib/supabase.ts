import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Crear cliente solo si las credenciales están disponibles
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Tipos para la base de datos
export interface BlogView {
  id?: number;
  blog_id: string;
  blog_type: 'blog' | 'tutorial';
  viewed_at?: string;
  ip_address?: string;
  user_agent?: string;
}

// Función para registrar una visualización
export async function trackBlogView(blogId: string, blogType: 'blog' | 'tutorial') {
  if (!supabase) {
    console.warn('Supabase not configured. Skipping view tracking.');
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { error } = await supabase
      .from('blog_views')
      .insert({
        blog_id: blogId,
        blog_type: blogType,
        viewed_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error tracking blog view:', error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error('Error tracking blog view:', error);
    return { success: false, error };
  }
}

// Función para obtener las visualizaciones de un blog
export async function getBlogViews(blogId: string, blogType: 'blog' | 'tutorial') {
  if (!supabase) {
    return { count: 0, error: 'Supabase not configured' };
  }

  try {
    const { data, error } = await supabase
      .from('blog_views')
      .select('id')
      .eq('blog_id', blogId)
      .eq('blog_type', blogType);

    if (error) {
      console.error('Error getting blog views:', error);
      return { count: 0, error };
    }

    return { count: data?.length || 0, error: null };
  } catch (error) {
    console.error('Error getting blog views:', error);
    return { count: 0, error };
  }
}

// Función para obtener los blogs más vistos
export async function getMostViewedBlogs(limit: number = 10) {
  if (!supabase) {
    return { blogs: [], error: 'Supabase not configured' };
  }

  try {
    const { data, error } = await supabase
      .from('blog_views')
      .select('blog_id, blog_type')
      .order('viewed_at', { ascending: false });

    if (error) {
      console.error('Error getting most viewed blogs:', error);
      return { blogs: [], error };
    }

    // Agrupar por blog_id y blog_type y contar
    const blogCounts: { [key: string]: { count: number; blog_type: 'blog' | 'tutorial' } } = {};
    
    data?.forEach((view) => {
      const key = `${view.blog_type}_${view.blog_id}`;
      if (!blogCounts[key]) {
        blogCounts[key] = { count: 0, blog_type: view.blog_type };
      }
      blogCounts[key].count++;
    });

    // Convertir a array y ordenar por count
    const sortedBlogs = Object.entries(blogCounts)
      .map(([key, value]) => {
        const [blog_type, blog_id] = key.split('_');
        return {
          blog_id,
          blog_type: blog_type as 'blog' | 'tutorial',
          count: value.count,
        };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);

    return { blogs: sortedBlogs, error: null };
  } catch (error) {
    console.error('Error getting most viewed blogs:', error);
    return { blogs: [], error };
  }
}

