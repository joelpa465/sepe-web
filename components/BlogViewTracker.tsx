"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface BlogViewTrackerProps {
  blogId: string;
  blogType: 'blog' | 'tutorial';
}

export default function BlogViewTracker({ blogId, blogType }: BlogViewTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Solo registrar la visualización una vez cuando se monta el componente
    const trackView = async () => {
      try {
        await fetch('/api/track-view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            blogId,
            blogType,
          }),
        });
      } catch (error) {
        // Silenciosamente fallar si no hay conexión a Supabase
        console.error('Failed to track view:', error);
      }
    };

    trackView();
  }, [blogId, blogType, pathname]);

  return null; // Este componente no renderiza nada
}

