import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
import Head from './components/head'
import Footer from "./components/Footer";
import ScrollToTop from './ScrollToTop'
import PreNav from "./components/PreNav";

function Layout() {
  return (
    <>
        <ScrollToTop/>
        {/* <PreNav/> */}
        <Head />
        <Outlet />
        <Footer />
    </>
  );
}

export default Layout;
