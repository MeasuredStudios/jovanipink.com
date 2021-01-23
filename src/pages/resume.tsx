import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Projects from 'components/Projects';
import Skills from 'components/Skills';
import Experience from 'components/Experience';
import Education from 'components/Education';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Projects />
    <hr />
    <Skills />
    <hr />
    <Experience />
    <hr />
    <Education />
  </Layout>
);

export default ResumePage;
