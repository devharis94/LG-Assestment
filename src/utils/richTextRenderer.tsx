/* eslint-disable */
import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

const customRenderer = {
  render: (content: any) => {
    return render(content, {
      markResolvers: {
        bold: (children: React.ReactNode) => (
          <strong className="block !mb-0 font-bold text-brand-blue">
            {children}
          </strong>
        ),
      },
      nodeResolvers: {
        paragraph: (children: React.ReactNode) => (
          <p className="mb-10">{children}</p>
        ),
      },
    });
  },
};

export default customRenderer;