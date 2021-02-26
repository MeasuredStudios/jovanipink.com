module.exports = {
  siteMetadata: {
    title: 'Jovani Pink',
    author: 'Jovani Pink',
    description: "Jovani Pink's Personal Website.",
    keywords:
      'JovaniPink, Jovani Pink, Product Manager, Product Development, Product Owner, Product Management, Product Marketing, Project Management, Scrum, Agile​',
    siteUrl: 'https://www.jovanipink.com',
    image: `/jovanirosado.png`,
    social: {
      twitter: `@JovaniPink`,
    },
  },
  flags: { DEV_SSR: true },
  plugins: [
    // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
    // don't need to define it here (just if you need to change the options)
    // `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     tailwind: true,
    //     purgeOnly: [`src/assets/styles/global.css`],
    //   },
    // },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 768,
        linkImagesToOriginal: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false,
            },
          },
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jovani Pink',
        short_name: 'Jovani Pink',
        description: "Jovani Pink's Personal Website.",
        start_url: '/',
        background_color: '#f9f9f9',
        theme_color: '#242943',
        display: 'minimal-ui',
        icon: './static/favicon/project-logo.jpg',
        icons: [
          {
            src: './static/favicon/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75',
          },
          {
            src: './static/favicons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: './static/favicons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: './static/favicons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: './static/favicons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: './static/favicons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.jovanipink.com',
        sitemap: 'https://www.jovanipink.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-124955643-1',
        // Puts tracking script in the head instead of the body
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'jovanipink.com',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': ['Strict-Transport-Security: max-age=63072000'],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
