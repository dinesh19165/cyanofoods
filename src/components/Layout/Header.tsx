/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, ArrowRight, Sprout, ShieldAlert, Award, FileText, Info } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

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

  return (
    <header
      id="main-app-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 shadow-sm py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link id="header-logo" to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-green-600 text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              C
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-none">
                CYANO FOODS
              </span>
              <span className="text-[9px] font-semibold font-mono tracking-wider text-emerald-600 leading-none mt-1 uppercase">
                India OPC Pvt Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {/* Standard Links */}
            <Link
              id="nav-link-home"
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium font-display transition-colors ${
                location.pathname === '/' ? 'text-emerald-700 bg-emerald-50/50' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Megamenu Dropdowns */}
            {Object.entries(navGroups).map(([key, group]) => {
              const isGroupActive = group.items.some(item => location.pathname === item.path);
              return (
                <div id={`dropdown-wrapper-${key}`} key={key} className="relative group/menu">
                  <button
                    id={`dropdown-btn-${key}`}
                    className={`px-3 py-2 rounded-lg text-sm font-medium font-display transition-colors flex items-center gap-1 cursor-pointer ${
                      isGroupActive ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-700'
                    }`}
                  >
                    {group.label}
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover/menu:rotate-180 transition-transform duration-200" />
                  </button>

                  <div id={`dropdown-panel-${key}`} className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto transition-all duration-200 z-50 w-[340px]">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-4 space-y-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            id={`megamenu-item-${item.path.replace('/', '')}`}
                            key={item.path}
                            to={item.path}
                            className={`flex gap-3 items-start p-3 rounded-xl transition-all ${
                              location.pathname === item.path
                                ? 'bg-emerald-50/50 text-emerald-800'
                                : 'hover:bg-slate-50 text-slate-800'
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="font-semibold text-xs font-display">{item.label}</div>
                              <div className="text-[10.5px] text-slate-500 leading-snug">{item.desc}</div>
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
              id="nav-link-careers"
              to="/careers"
              className={`px-3 py-2 rounded-lg text-sm font-medium font-display transition-colors ${
                location.pathname === '/careers' ? 'text-emerald-700 bg-emerald-50/50' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              Careers
            </Link>

            <Link
              id="nav-link-contact"
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium font-display transition-colors ${
                location.pathname === '/contact' ? 'text-emerald-700 bg-emerald-50/50' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Icon */}
            <div className="relative">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    id="search-input-box"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-full top-1/2 -translate-y-1/2 pr-2"
                  >
                    <input
                      type="text"
                      placeholder="Search company or crops..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs bg-slate-100 rounded-full px-4 py-2 border border-slate-200 focus:outline-none focus:border-emerald-500 text-slate-900"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                id="search-toggle-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 rounded-full transition-colors"
                aria-label="Toggle Search"
              >
                <Search className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* CTA Button */}
            <Link
              id="header-partner-cta"
              to="/partner"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold font-display text-xs shadow-md shadow-emerald-700/10 hover:shadow-lg transition-all"
            >
              Partner With Us
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-search-toggle"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-500 hover:text-emerald-700 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-emerald-700 rounded-lg"
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            id="mobile-search-overlay"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 py-3"
          >
            <input
              type="text"
              placeholder="Search news, scientific papers, products..."
              className="w-full text-sm bg-slate-100 rounded-lg px-4 py-2 border border-slate-200 focus:outline-none focus:border-emerald-500 text-slate-900"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl overflow-y-auto max-h-[85vh] z-50"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link
                id="mob-link-home"
                to="/"
                className="block px-3 py-2 text-sm font-semibold font-display text-slate-800 hover:bg-emerald-50/50 rounded-lg"
              >
                Home
              </Link>

              {/* Mega Groups */}
              {Object.entries(navGroups).map(([key, group]) => (
                <div id={`mob-group-wrapper-${key}`} key={key} className="space-y-1">
                  <div className="px-3 text-[10.5px] font-bold font-mono text-emerald-600 uppercase tracking-widest">
                    {group.label}
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {group.items.map((item) => (
                      <Link
                        id={`mob-link-${item.path.replace('/', '')}`}
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg"
                      >
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link
                id="mob-link-careers"
                to="/careers"
                className="block px-3 py-2 text-sm font-semibold font-display text-slate-800 hover:bg-emerald-50/50 rounded-lg"
              >
                Careers
              </Link>

              <Link
                id="mob-link-contact"
                to="/contact"
                className="block px-3 py-2 text-sm font-semibold font-display text-slate-800 hover:bg-emerald-50/50 rounded-lg"
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-2 border-t border-slate-100">
                <Link
                  id="mob-partner-cta"
                  to="/partner"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm tracking-wide shadow-md transition-colors"
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
