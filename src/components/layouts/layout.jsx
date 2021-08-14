import React from 'react';
import Header from '../header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-6">{children}</main>
    </>
  );
};

export default Layout;
