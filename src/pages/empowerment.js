import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic11 from '../assets/images/pic11.jpg';

const Empowerment = (props) => (
  <Layout>
    <Helmet>
      <title>Jovani's Empowerment Process</title>
      <meta name="description" content="Empowerment Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Empowerment</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            Coming Soon.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Empowerment;
