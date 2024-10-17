/* eslint-disable */
import { ISbStoryData } from '@storyblok/react';

interface Image {
  filename: string;
  alt?: string;
}

interface Content {
  title: string;
  subtitle?: string;
  image?: Image;
  richtext: any; // Define a more specific type if possible
}

export interface ArticleStoryblok extends ISbStoryData {
  content: Content;
}