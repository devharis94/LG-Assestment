import { storyblokInit, apiPlugin, getStoryblokApi } from '@storyblok/react';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
});

const storyblokApi = getStoryblokApi();

export const getStories = async () => {
  try {
    const { data } = await storyblokApi.get('cdn/stories', {
      version: 'draft', // or 'published'
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
};

export const getStory = async (slug: string) => {
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: 'draft', // or 'published'
    });
    return data.story;
  } catch (error) {
    console.error(`Error fetching story for slug ${slug}:`, error);
    return null;
  }
};