import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Head from "./components/head";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
        <Head/>
        <Outlet />
        <Footer />
    </>
  );
}

export default Layout;
