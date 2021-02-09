import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import { MDXProvider } from '@mdx-js/react';

import Layout from 'components/Layout';
import BlogSEO from 'components/BlogSEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';
import components from './mdx';

interface Post {
  body: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    cover: string;
  };
}

interface Props {
  data: {
    mdx: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <BlogSEO title={post.frontmatter.title} image={post.frontmatter.cover} />
      <Container section>
        <TitleSection
          title={post.frontmatter.date}
          subtitle={post.frontmatter.title}
        />
        <MDXProvider components={components}>
          <FormatHtml content={post.body} />
        </MDXProvider>
        <Styled.Links>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        cover {
          publicURL
        }
      }
    }
  }
`;
