import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
import { useLocation } from 'react-router-dom';
import Head from './components/head'
import Footer from "./components/Footer";
import ScrollToTop from './ScrollToTop';

function Layout() {
  const location = useLocation();
  const isProductPage = /^\/product\/\d+$/.test(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!isProductPage && <Head />}
      <Outlet />
      {!isProductPage && <Footer />}
    </>
  );
}

export default Layout;
