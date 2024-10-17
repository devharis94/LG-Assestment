import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

export async function getStories() {
  try {
    const { data } = await Storyblok.get('cdn/stories', {
      version: 'draft'  // Change this to 'published' for production
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching Storyblok data:', error);
    return [];
  }
}

export async function getStory(slug: string) {
  try {
    const { data } = await Storyblok.get(`cdn/stories/${slug}`, {
      version: 'draft'  // Change this to 'published' for production
    });
    console.log('Fetched story:', JSON.stringify(data.story, null, 2));
    return data.story;
  } catch (error) {
    console.error(`Error fetching Storyblok story for slug ${slug}:`, error);
    return null;
  }
}