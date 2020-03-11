import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic03 from '../assets/images/pic03.jpg';

const Skills = (props) => (
  <Layout>
    <Helmet>
      <title>Jovani's Skills</title>
      <meta name="description" content="Skill Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Skills</h1>
          </header>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Coming Soon.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Skills;
