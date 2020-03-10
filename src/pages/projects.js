import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerProjects from '../components/BannerProjects';

import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';

const Projects = (props) => (
  <Layout>
    <Helmet>
      <title>Jovani's Projects</title>
      <meta name="description" content="Projects Page" />
    </Helmet>

    <BannerProjects />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Measured Studios</h2>
          </header>
          <p>More info to come.</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Swigged</h3>
              </header>
              <p>More info to come.</p>
              <ul className="actions">
                <li>
                  <Link to="" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>AIDA.Solutions</h3>
              </header>
              <p>More info to come.</p>
              <ul className="actions">
                <li>
                  <Link to="" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Jovi</h3>
              </header>
              <p>More info to come.</p>
              <ul className="actions">
                <li>
                  <Link to="" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Projects;
