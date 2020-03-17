import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerAbout from '../components/BannerAbout';

import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';

const About = (props) => (
  <Layout>
    <Helmet>
      <title>About Jovani</title>
      <meta name="description" content="About Jovani Pink" />
    </Helmet>

    <BannerAbout />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>My Drive</h2>
          </header>
          <p>
          I believe in EMPOWERING people by sharing knowledge through PERSONAL CONNECTIONS and in bringing value for a BETTER FUTURE.
          </p>
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
                <h3>My Why</h3>
              </header>
              <p>
              Committed to MINDFULNESS, practicing kindness, generosity, humor, and sense of curiosity discussing ideas, creating feedback systems, and test MVPs.
              </p>
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
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>My How</h3>
              </header>
              <p>
              Committed to MINDFULNESS, practicing kindness, generosity, humor, and sense of curiosity discussing ideas, creating feedback systems, and test MVPs.
              </p>
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
                <h3>My What</h3>
              </header>
              <p>
              I enjoy challenges and teamwork with a high interest in complex systems, data, and stories. I assist in creating digital products with JavaScript and TypeScript.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>My Passions</h3>
              </header>
              <p>
              I have a passion for conversing about ideas, methodologies, worldviews, and systems. Not for their own sake but for new perspectives or ideas to challenge, change, and grow the status quo. I do read about can not be fully utilized myself so I’ve stated measured studios to take my knowledge to assist others who need help in creating digital systems.
              </p>
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

export default About;
