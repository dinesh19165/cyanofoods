/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import RegionalCouncil from './pages/RegionalCouncil';
import KhetiBharat from './pages/KhetiBharat';
import Products from './pages/Products';
import Research from './pages/Research';
import Sustainability from './pages/Sustainability';
import Partner from './pages/Partner';
import KnowledgeCentre from './pages/KnowledgeCentre';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';

// Helper component to scroll window to top on path transit
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id="app-root-layout" className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-700 selection:text-white">
        {/* Global sticky header */}
        <Header />

        {/* Primary viewport wrapper */}
        <main id="primary-view-port" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/regional-council" element={<RegionalCouncil />} />
            <Route path="/khetibharat" element={<KhetiBharat />} />
            <Route path="/products" element={<Products />} />
            <Route path="/research" element={<Research />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/knowledge-centre" element={<KnowledgeCentre />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal" element={<Legal />} />
            {/* Fallback route redirection */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
