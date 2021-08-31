import React, { useEffect } from 'react';
import Header from '../Header';
import Cursor from '../Cursor';
import Kursor from 'kursor';

const Layout = ({ children }) => {
  useEffect(() => {
    new Kursor({
      type: 4
    });
  }, []);

  return (
    <>
      <Header />
      <Cursor />
      <main>{children}</main>
    </>
  );
};

export default Layout;
