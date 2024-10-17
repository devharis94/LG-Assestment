import { ISbStoryData } from '@storyblok/react';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
  articles: ISbStoryData[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard key={article.uuid} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;