import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  article: any;  // You might want to create a more specific type
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {article.content && article.content.image && (
        <Image 
          src={article.content.image.filename} 
          alt={article.content.image.alt || article.name} 
          width={300} 
          height={200} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="mb-2 font-bold text-xl">{article.name}</h2>
        {article.content && article.content.intro && (
          <p className="mb-4 text-gray-600">{article.content.intro}</p>
        )}
        <Link href={`/${article.full_slug}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;