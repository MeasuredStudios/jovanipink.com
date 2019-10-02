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
        <Helmet>
          <html lang="en" />
          <meta name="description" content="Jovani Pink's Personal Website." />
          <meta
            name="keywords"
            content="JovaniPink, Jovani Pink, Product Manager, product development, product owner, product management, project management, scrum, agile, product marketing"
          />
          <meta
            name="google-site-verification"
            content="6SRTBRT4tzXza3XAAZ3hYqVFbujaHXgbxDBos3Sjd64"
          />
          <meta
            name="msvalidate.01"
            content="DB6D40F5ADF954CF7A904C6A2A5700AA"
          />
          <meta property="og:title" content="Jovani Pink" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.jovanipink.com/" />
          <meta property="og:site_name" content="Jovani Pink" />
          <meta
            property="og:description"
            content="Jovani Pink's Personal Website.​"
          />
          <meta property="fb:app_id" content="" />
          <meta property="og:image" content="" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1079" />
          <meta property="og:image:height" content="719" />
          <meta property="og:image:alt" content="Jovani Pink Logo" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@JovaniPink" />
          <meta property="twitter:title" content="Joavni Pink" />
          <meta
            property="twitter:description"
            content="Jovani Pink's Personal Website.​"
          />
          <meta property="twitter:creator" content="@JovaniPink" />
          <meta property="twitter:image:src" content="" />
          <title>Jovani Pink</title>
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>Do you need a ...</h2>
              </header>
            </div>
          </section>
          <section id="two" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Website</h3>
                <p>Details</p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Mobile App</h3>
                <p>Details</p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Automation</h3>
                <p>Details</p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Data Solution</h3>
                <p>Details</p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Marketing Campaign</h3>
                <p>Details</p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Team Support</h3>
                <p>Details</p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
          </section>
          <section id="three">
            <div className="inner">
              <header className="major">
                <h2>Agency</h2>
              </header>
              <p>
                Apart from the Measured Studios Product Tool... we offer full
                stack development consulting.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/agency" className="button special next">
                    Work With US!
                  </Link>
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
