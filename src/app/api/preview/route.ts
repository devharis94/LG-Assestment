import Storyblok from '@/lib/storyblok'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug')

  if (!slug) {
    return new Response('No slug provided', { status: 400 })
  }

  const { data } = await Storyblok.get(`cdn/stories/${slug}`, {
    version: 'draft',
  })

  if (!data) {
    return new Response('No story found', { status: 404 })
  }

  return Response.redirect(`/${data.story.full_slug}`)
}