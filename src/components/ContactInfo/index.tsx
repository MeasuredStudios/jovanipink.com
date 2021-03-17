import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';

import { SectionTitle } from 'tailwind.macro';

import * as Styled from './styles';

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
    };
  };
}

const ConctactInfo: React.FC = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "contact" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = mdx.frontmatter;
  const contacts: Contact[] = allMdx.edges;
  const linkFix = ['fab', 'linkedin-in'];

  return (
    <Container section>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      {contacts.map((item) => {
        const {
          id,
          frontmatter: { title, icon, content },
        } = item.node;

        return (
          <Styled.ContactInfoItem key={id}>
            <InfoBlock icon={icon} title={title} content={content} center />
          </Styled.ContactInfoItem>
        );
      })}
    </Container>
  );
};

export default ConctactInfo;
