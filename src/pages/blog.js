import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg';

const Blog = (props) => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Blog</title>
      <meta name="description" content="Jovani's Blog" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Blog</h1>
          </header>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Coming Soon.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Blog;