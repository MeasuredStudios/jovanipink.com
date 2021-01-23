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
    html: string;
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
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
      ) {
        edges {
          node {
            id
            html
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

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const testimonials: Project[] = allMarkdownRemark.edges;

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
            html,
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
              <FormatHtml content={html} />
            </Styled.Project>
          );
        })}
      </Styled.Projects>
    </Container>
  );
};

export default Projects;
