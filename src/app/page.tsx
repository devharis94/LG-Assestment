import { getStories } from '@/lib/storyblok';
import ArticleList from '@/components/ArticleList';

export default async function Home() {
  const stories = await getStories();

  return (
    <main className="py-8">
      <h1 className="mb-8 font-bold text-3xl">Latest Articles</h1>
      <ArticleList articles={stories} />
    </main>
  );
}