import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/style.scss';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarTop from './components/NavbarTop';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import ContactsPage from './pages/ContactsPage';
import PortfolioPage from './pages/PortfolioPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
<BrowserRouter>
<NavbarTop />
<Navbar />
<ScrollToTop/>
 <Routes>
   <Route path="/" element={<App />} />
   <Route path="/about" element={<AboutPage />} />
   <Route path="/catalog" element={<CatalogPage />} />
   <Route path="/contacts" element={<ContactsPage />} />
   <Route path="/portfolio" element={<PortfolioPage />} />

 </Routes>
<Footer/>
</BrowserRouter>
</React.StrictMode>
);