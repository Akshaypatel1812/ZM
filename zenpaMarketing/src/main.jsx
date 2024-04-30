import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation,BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import ContactUs from './components/ContactUs.jsx';
import Aboutus from './components/Aboutus.jsx';
import Products from './components/Products.jsx';
import Location from './components/Location.jsx';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Reset scroll whenever the pathname changes

  return null;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/aboutUs" element={<Aboutus />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/location" element={<Location />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  </React.StrictMode>
);
