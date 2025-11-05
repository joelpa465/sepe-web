import { NextRequest, NextResponse } from 'next/server';
import { trackBlogView } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { blogId, blogType } = body;

    if (!blogId || !blogType) {
      return NextResponse.json(
        { error: 'blogId and blogType are required' },
        { status: 400 }
      );
    }

    if (blogType !== 'blog' && blogType !== 'tutorial') {
      return NextResponse.json(
        { error: 'blogType must be "blog" or "tutorial"' },
        { status: 400 }
      );
    }

    const result = await trackBlogView(blogId, blogType);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to track view' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in track-view API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

