import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface Project {
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

const Projects: React.FC = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "projects" } } }
      ) {
        edges {
          node {
            id
            body
            frontmatter {
              title
              link
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
  const testimonials: Project[] = allMdx.edges;

  return (
    <Container section>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Projects>
        {testimonials.map((item) => {
          const {
            id,
            body,
            frontmatter: { cover, title, link },
          } = item.node;

          return (
            <Styled.Project key={id}>
              <Styled.Image>
                <Img fluid={cover.childImageSharp.fluid} alt={title} />
              </Styled.Image>
              <a href={link} rel="noopener noreferrer" target="_blank">
                <Styled.Title>{title}</Styled.Title>
              </a>
              <FormatHtml content={body} />
            </Styled.Project>
          );
        })}
      </Styled.Projects>
    </Container>
  );
};

export default Projects;
