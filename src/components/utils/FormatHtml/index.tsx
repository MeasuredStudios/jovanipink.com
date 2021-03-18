import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <article className="markdown">
    <MDXRenderer>{content}</MDXRenderer>
  </article>
);

export default FormatHtml;
