import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <MDXRenderer>{content}</MDXRenderer>
);

export default FormatHtml;
