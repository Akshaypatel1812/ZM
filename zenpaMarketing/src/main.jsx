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

import FireExtinguisher from './components/FireExtinguisher.jsx';
import SafetyHelmet from './components/SafetyHelmet.jsx'
import EyeProtection from './components/EyeProtection.jsx';
import RespiratoryProtection from './components/RespiratoryProtection.jsx';
import HandProtection from './components/HandProtection.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/aboutUs" element={<Aboutus />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/location" element={<Location />} />
      <Route path="/product/2" element={<FireExtinguisher />} />
      <Route path="/product/1" element={< SafetyHelmet/>} />
      <Route path="/product/4" element={< EyeProtection/>} />
      <Route path="/product/5" element={< RespiratoryProtection/>} />
      <Route path="/product/6" element={< HandProtection/>} />
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
