import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic05 from '../assets/images/pic05.jpg';

const Community = (props) => (
  <Layout>
    <Helmet>
      <title>Community</title>
      <meta name="description" content="Community Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Community</h1>
          </header>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p>
            Coming Soon.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Community;
