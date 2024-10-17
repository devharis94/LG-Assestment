import { getStory } from "@/lib/storyblok";
import Image from "next/image";
import customRenderer from "@/utils/richTextRenderer";

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const story = await getStory(params.slug);

  if (!story) {
    return (
      <main className="py-8">
        <h1 className="mb-4 font-bold text-3xl">Article Not Found</h1>
        <p>The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      </main>
    );
  }

  return (
    <main className="py-8">
      {story.content.subtitle && (
        <h2 className="mb-1 text-brand-dark text-caption">{story.content.subtitle}</h2>
      )}
      <h1 className="mb-4 text-3xl">{story.content.title}</h1>

      {story.content.image && (
        <Image
          src={story.content.image.filename}
          alt={story.content.image.alt || story.content.title}
          width={1600}
          height={900}
          className="ml-auto w-3/4 h-[767px] object-cover"
        />
      )}
      <div className="max-w-none prose">
        {story.content.richtext && customRenderer.render(story.content.richtext)}
      </div>
    </main>
  );
}