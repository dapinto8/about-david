import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Animations from './animations';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Animations />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
