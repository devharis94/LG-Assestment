import { StoryblokResult, ISbStoryData } from '@storyblok/react';

export interface ArticleStoryblok extends ISbStoryData {
  content: {
    _uid: string;
    component: string;
    title: string;
    subtitle?: string;
    image?: {
      filename: string;
      alt?: string;
    };
    content: any; // This could be a rich text field
  };
}

export type ArticleStoryblokResult = StoryblokResult<ArticleStoryblok>;