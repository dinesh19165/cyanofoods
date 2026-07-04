/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, ArrowRight, Sprout, ShieldAlert, Award, FileText, Info } from 'lucide-react';
import MagneticButton from '../UI/MagneticButton';
import BrandLogo from '../UI/BrandLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups = {
    about: {
      label: "Our Identity",
      items: [
        { path: "/about", label: "Who We Are", desc: "Our story, vision, mission & leadership", icon: Info },
        { path: "/research", label: "Research & Innovation", desc: "Precision microalgal biotech & technology", icon: Award },
        { path: "/sustainability", label: "Sustainability & ESG", desc: "Carbon-capture ratios & circular refinery", icon: Sprout },
      ]
    },
    solutions: {
      label: "Solutions",
      items: [
        { path: "/products", label: "Our Products", desc: "Pure Spirulina & functional nutraceuticals", icon: Sprout },
        { path: "/services", label: "Core Services", desc: "Farming systems, consulting & manufacturing", icon: Award },
      ]
    },
    ecosystem: {
      label: "Farmer Ecosystem",
      items: [
        { path: "/khetibharat", label: "KhetiBharat", desc: "Social enterprise & rural procurement", icon: Sprout },
        { path: "/regional-council", label: "Regional Councils", desc: "PGS organic auditing & regional committees", icon: ShieldAlert },
      ]
    },
    knowledge: {
      label: "Knowledge & News",
      items: [
        { path: "/knowledge-centre", label: "Knowledge Centre", desc: "Scientific articles, guides & blogs", icon: FileText },
        { path: "/news", label: "News & Media", desc: "Press releases, events & success stories", icon: FileText },
        { path: "/downloads", label: "Resource Downloads", desc: "Technical guides, brochures & manuals", icon: FileText },
        { path: "/faq", label: "Frequently Asked", desc: "General & technical queries resolved", icon: FileText },
      ]
    }
  };

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent border-b border-transparent py-5'
          : isScrolled
            ? 'glass-navbar-scrolled py-3'
            : 'glass-navbar py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <BrandLogo size="md" className={isTransparent ? '[&_span]:text-white [&_.text-emerald-600]:text-emerald-300' : ''} />

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-300 ${
                location.pathname === '/'
                  ? isTransparent ? 'text-white bg-white/10' : 'text-emerald-700 bg-emerald-50'
                  : isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50'
              }`}
            >
              Home
            </Link>

            {Object.entries(navGroups).map(([key, group]) => {
              const isGroupActive = group.items.some(item => location.pathname === item.path);
              return (
                <div key={key} className="relative group/menu">
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      isGroupActive
                        ? isTransparent ? 'text-white font-semibold' : 'text-emerald-700 font-semibold'
                        : isTransparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-emerald-700'
                    }`}
                  >
                    {group.label}
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover/menu:rotate-180 transition-transform duration-300" />
                  </button>

                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto transition-all duration-300 z-50 w-[360px]">
                    <div className="glass-panel rounded-2xl p-3 space-y-1 shadow-premium-lg">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex gap-3 items-start p-3 rounded-xl transition-all duration-300 ${
                              location.pathname === item.path
                                ? 'bg-emerald-50 text-emerald-800'
                                : 'hover:bg-emerald-50/50 text-slate-800'
                            }`}
                          >
                            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 group-hover:rotate-12 transition-transform duration-300">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="font-semibold text-sm font-display">{item.label}</div>
                              <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              to="/careers"
              className={`px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-300 ${
                location.pathname === '/careers'
                  ? isTransparent ? 'text-white bg-white/10' : 'text-emerald-700 bg-emerald-50'
                  : isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50'
              }`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-300 ${
                location.pathname === '/contact'
                  ? isTransparent ? 'text-white bg-white/10' : 'text-emerald-700 bg-emerald-50'
                  : isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 240, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-full top-1/2 -translate-y-1/2 pr-3"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-sm glass-panel rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-slate-900"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isTransparent ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
                aria-label="Toggle Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <MagneticButton>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white font-semibold text-sm shadow-lg shadow-emerald-900/20 transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full cursor-pointer ${
                isTransparent ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-emerald-700'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl cursor-pointer ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-emerald-700'
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass-panel border-t border-emerald-100/50 px-4 py-3"
          >
            <input
              type="text"
              placeholder="Search news, products, services..."
              className="w-full text-sm glass-panel rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 glass-panel border-b border-emerald-100/50 shadow-2xl overflow-y-auto max-h-[85vh] z-50"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              <Link to="/" className="block px-4 py-3 text-sm font-semibold font-display text-slate-800 hover:bg-emerald-50 rounded-xl">
                Home
              </Link>
              {Object.entries(navGroups).map(([key, group]) => (
                <div key={key} className="space-y-1">
                  <div className="px-4 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                    {group.label}
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl"
                      >
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link to="/careers" className="block px-4 py-3 text-sm font-semibold font-display text-slate-800 hover:bg-emerald-50 rounded-xl">
                Careers
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-sm font-semibold font-display text-slate-800 hover:bg-emerald-50 rounded-xl">
                Contact
              </Link>
              <div className="pt-4 border-t border-emerald-100">
                <Link
                  to="/partner"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-bold text-sm shadow-lg"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
