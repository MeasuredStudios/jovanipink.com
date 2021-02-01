import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta =
  | {
      name: string;
      content: any;
    }
  | {
      property: string;
      content: any;
    };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  image?: string;
}

const BlogSEO: React.FC<Props> = ({
  description,
  lang,
  meta,
  title,
  image,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            keywords
            author
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content:
            'JovaniPink, Jovani Pink, Product Manager, Product Development, Product Owner, Product Management, Product Marketing, Project Management, Scrum, Agile​',
        },
        {
          'http-equiv': `content-language`,
          content: `en-us`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `site.siteMetadata.siteUrl`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `Jovani Pink`,
        },
        {
          property: `og:image:alt`,
          content: `An image of an open notebook with a drawn graph.`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
        },
        {
          name: 'twitter:image',
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
        },
        {
          property: `twitter:image:alt`,
          content: `An image of an open notebook with a drawn graph.`,
        },
        {
          property: `twitter:url`,
          content: `site.siteMetadata.siteUrl`,
        },
      ].concat(meta!)}
      link={[
        {
          rel: `canonical`,
          href: site.siteMetadata.siteUrl,
        },
      ]}
    />
  );
};

BlogSEO.defaultProps = {
  lang: `en`,
  meta: [] as Meta[],
  description: ``,
  image: `https://repository-images.githubusercontent.com/282072592/9a7d9900-5d63-11eb-8990-8d8e7c39f88d`,
};

export default BlogSEO;
