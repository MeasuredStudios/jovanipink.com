import React from 'react';

import Layout from 'components/Layout';
import BlogSEO from 'components/BlogSEO';
import Posts from 'components/Posts';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <BlogSEO title="Blog" />
      <Posts />
    </Layout>
  );
};

export default BlogPage;
