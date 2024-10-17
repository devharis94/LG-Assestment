import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

const customRenderer = {
  render: (content: any) => {
    return render(content, {
      markResolvers: {
        bold: (children: React.ReactNode) => <strong className="font-bold">{children}</strong>,
      },
      nodeResolvers: {
        paragraph: (children: React.ReactNode) => <p className="mb-4">{children}</p>,
      },
    });
  },
};

export default customRenderer;