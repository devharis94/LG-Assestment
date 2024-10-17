import { storyblokEditable, renderRichText, ISbRichtext } from '@storyblok/react'

interface RichTextProps {
  blok: {
    content: ISbRichtext;
  };
}

const RichText: React.FC<RichTextProps> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="max-w-none prose">
      {renderRichText(blok.content)}
    </div>
  )
}

export default RichText