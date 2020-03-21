import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Jovani Pink"
          meta={[
            { name: 'description', content: "Jovani Pink's Personal Website." },
            {
              name: 'keywords',
              content:
                'Jovani Pink, Software Engineer, Software Developer, JavaScript, Typescript',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>ABOUT ME</h3>
                <p>Collaborator & Maverick</p>
              </header>
              <Link to="/about" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>SKILLS</h3>
                <p>JavaScript && TypeScript</p>
              </header>
              <Link to="/skills" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>PROJECTS</h3>
                <p>My work & Failures</p>
              </header>
              <Link to="/projects" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>EMPOWERMENT</h3>
                <p>My Process</p>
              </header>
              <Link to="/empowerment" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>COMMUNITY</h3>
                <p>Apart of and Giving Back</p>
              </header>
              <Link to="/community" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>BLOG</h3>
                <p>Let's Talk and Think Together.</p>
              </header>
              <Link to="/blog" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>MEASURED STUDIOS</h2>
              </header>
              <p>
                My passion is Measured Studios, a platform for product managers.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.measuredstudios.com/"
                    className="button next"
                    rel="noopener"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
