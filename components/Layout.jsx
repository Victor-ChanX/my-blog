// components/Layout.js
import React from 'react';
import FrontPage from './FrontPage';

const Layout = ({ children }) => {
  return (
    <>
      <FrontPage />
      <main>{children}</main>
    </>
  );
};

export default Layout;
