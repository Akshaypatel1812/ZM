import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
import Head from './components/head'
import Footer from "./components/Footer";
import ScrollToTop from './ScrollToTop'

function Layout() {
  return (
    <>
        <ScrollToTop/>
        <Head />
        <Outlet />
        <Footer />
    </>
  );
}

export default Layout;
