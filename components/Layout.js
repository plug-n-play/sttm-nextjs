import React from 'react';
import HtmlHead from './HtmlHead';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div>
    <HtmlHead />
    <Header homepage={props.homepage} />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
