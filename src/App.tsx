/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import AOS from 'aos';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollProgress from './components/UI/ScrollProgress';
import CustomCursor from './components/UI/CustomCursor';
import WhatsAppButton from './components/UI/WhatsAppButton';
import { SmoothScrollProvider } from './components/UI/PageTransition';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const RegionalCouncil = lazy(() => import('./pages/RegionalCouncil'));
const KhetiBharat = lazy(() => import('./pages/KhetiBharat'));
const Products = lazy(() => import('./pages/Products'));
const Research = lazy(() => import('./pages/Research'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Partner = lazy(() => import('./pages/Partner'));
const KnowledgeCentre = lazy(() => import('./pages/KnowledgeCentre'));
const News = lazy(() => import('./pages/News'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Downloads = lazy(() => import('./pages/Downloads'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Legal = lazy(() => import('./pages/Legal'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
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
          <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main id="primary-view-port" className="flex-grow">
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <div id="app-root-layout" className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
          <AppRoutes />
        </div>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}
