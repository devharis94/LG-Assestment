import { getStory } from '@/lib/storyblok';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');

  if (!slug) {
    return new Response('No slug provided', { status: 400 });
  }

  const story = await getStory(slug);

  if (!story) {
    return new Response('No story found', { status: 404 });
  }

  return Response.redirect(`/${story.full_slug}`);
}