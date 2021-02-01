import React, { ReactNode } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  // <span
  //   className="format-html"
  //   dangerouslySetInnerHTML={{
  //     __html: content,
  //   }}
  // />
  <MDXRenderer>{content}</MDXRenderer>
);

export default FormatHtml;
