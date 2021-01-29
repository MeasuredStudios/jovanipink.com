import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Testimonials from 'components/Testimonials';
import Skills from 'components/Skills';
import Experience from 'components/Experience';
import IFrameSection from 'components/ui/IFrame';
import Education from 'components/Education';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Testimonials />
    <hr />
    <Skills />
    <hr />
    <Experience />
    <hr />
    <IFrameSection />
    <Education />
  </Layout>
);

export default ResumePage;
