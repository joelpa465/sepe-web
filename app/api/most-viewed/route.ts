import { NextResponse } from 'next/server';
import { getMostViewedBlogs } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const result = await getMostViewedBlogs(limit);

    if (result.error) {
      return NextResponse.json(
        { error: 'Failed to get most viewed blogs' },
        { status: 500 }
      );
    }

    return NextResponse.json({ blogs: result.blogs });
  } catch (error) {
    console.error('Error in most-viewed API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

