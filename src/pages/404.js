import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <ul className="actions">
            <li>
              <Link to="/" className="button next scrolly">
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://www.measuredstudios.com/"
                className="button next"
                rel="noopener"
                rel="noreferrer"
                target="_blank"
                className="button next scrolly"
              >
                Measured Studios
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
