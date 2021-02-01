import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

interface About {
  node: {
    id: string;
    body: string;
    frontmatter: {
      title: string;
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const About: React.FC = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "about section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(filter: { frontmatter: { category: { eq: "about" } } }) {
        edges {
          node {
            id
            body
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const testimonials: About[] = allMdx.edges;

  return (
    <Container section>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.About>
        {testimonials.map((item) => {
          const {
            id,
            body,
            frontmatter: { cover, title },
          } = item.node;

          return (
            <Styled.AboutItem key={id}>
              <Styled.Image>
                <Img fluid={cover.childImageSharp.fluid} alt={title} />
              </Styled.Image>
              <Styled.Title>{title}</Styled.Title>
              <FormatHtml content={body} />
            </Styled.AboutItem>
          );
        })}
      </Styled.About>
    </Container>
  );
};

export default About;
