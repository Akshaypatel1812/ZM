// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop component

function Layout() {
  return (
    <>
      <ScrollToTop /> {/* Render ScrollToTop inside Layout */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
