import React from 'react';

import { Link } from 'react-router-dom';

/**
 * Sidebar component
 * Renders sidebar with all the links
 */
const Sidebar = () => {
  return (
    <div className="sidebar" data-color="orange">
      <div className="logo">
        <a href="http://acme.com" className="simple-text logo-mini">
          OB
        </a>
        <a href="http://acme.com" className="simple-text logo-normal">
          Post CC
        </a>
      </div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">
            <Link to="/posts" className="btn btn-sm btn-outline-secondary">
              <i className="now-ui-icons design_app" />
              <p>Posts</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
