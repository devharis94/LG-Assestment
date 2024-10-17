import { getStories } from '@/lib/storyblok';
import ArticleList from '@/components/ArticleList';

export default async function Home() {
  const stories = await getStories();

  return (
    <main className="py-8">
      <div className='bg-hero mb-12 pt-52 pl-28 h-[1027px] text-white' >
        <h1 className="drop-shadow-xl mb-8 font-bold text-hero">Herausragendes Resultat<br />im Geschäftsjahr 2020</h1>
      </div>
      <ArticleList articles={stories} />
    </main>
  );
}