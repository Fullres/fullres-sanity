import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="stylesheet" href="/styles.css" />
    </Head>
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src="/fullres.svg" alt="fullres Logo" /> fullres
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://www.npmjs.com/package/fullres-nextjs">NPM Package</a></li>
            <li><a href="https://docs.fullres.com">fullres Docs</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>{children}</main>
  </>
);

export default Layout;