import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/empowerment">
            Empowerment
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/community">
            Community
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
