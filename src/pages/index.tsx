import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import About from 'components/About';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Jovani Pink" />
      <HeroBanner />
      <Services />
      <hr />
      <About />
    </Layout>
  );
};

export default IndexPage;
