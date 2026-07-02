/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Camera, ArrowRight, Download, Calendar, Mail, FileIcon } from 'lucide-react';
import SEO from '../components/SEO';
import { NEWS_LIST } from '../data';
import { NewsItem } from '../types';

interface GalleryItem {
  title: string;
  category: string;
  desc: string;
  emoji: string;
}

const GALLERY_RECORDS: GalleryItem[] = [
  { title: "Pune Biotechnology Complex", category: "R&D Complex", desc: "Aseptic laboratory benches, seed culture incubator chambers, and analytic chromatography setups.", emoji: "🔬" },
  { title: "Vertical Photobioreactor Block", category: "Production Block", desc: "Our patented closed-system borosilicate glass loop arrays capturing natural light spectrums.", emoji: "🧪" },
  { title: "Solar Post-Harvest Facility", category: "KhetiBharat", desc: "Thermodynamic post-harvest cleaning, grading, sorting, and dehydration lines powered entirely by solar energy.", emoji: "☀️" },
  { title: "Anantapur Demonstration Farm", category: "Field Agronomy", desc: "Farmer training plots showcasing bio-stimulant soil treatments and multi-crop bio-diversity.", emoji: "🌾" }
];

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams();
  const newsId = searchParams.get('id');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | NewsItem['category']>('all');

  useEffect(() => {
    if (newsId) {
      const found = NEWS_LIST.find(n => n.id === newsId);
      if (found) {
        setSelectedArticle(found);
      }
    } else {
      setSelectedArticle(null);
    }
  }, [newsId]);

  const openArticle = (id: string) => {
    setSearchParams({ id });
  };

  const closeArticle = () => {
    setSearchParams({});
  };

  const filteredNews = activeCategory === 'all'
    ? NEWS_LIST
    : NEWS_LIST.filter(n => n.category === activeCategory);

  return (
    <div id="news-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="News Room & Media Kit" description="Access official Cyano Foods India press releases, success stories from KhetiBharat, upcoming food tech events, and our downloadable media kit." />

      {/* Hero Header */}
      <section id="news-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">CORPORATE COMMUNICATIONS</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Press Room & Media</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Direct access to official announcements, agricultural breakthroughs, events, and brand compliance guidelines.
          </p>
        </div>
      </section>

      {/* Categories Filter tab */}
      <section id="news-categories" className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
          <button
            id="cat-news-all"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Announcements
          </button>
          <button
            id="cat-news-press"
            onClick={() => setActiveCategory('news')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display transition-all cursor-pointer ${
              activeCategory === 'news'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Press Releases
          </button>
          <button
            id="cat-news-success"
            onClick={() => setActiveCategory('success_story')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display transition-all cursor-pointer ${
              activeCategory === 'success_story'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            KhetiBharat Success Stories
          </button>
          <button
            id="cat-news-events"
            onClick={() => setActiveCategory('event')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display transition-all cursor-pointer ${
              activeCategory === 'event'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Upcoming Events
          </button>
        </div>
      </section>

      {/* Main Grid: News Articles */}
      <section id="news-grid-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <div
              id={`news-card-wrapper-${news.id}`}
              key={news.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => openArticle(news.id)}
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-emerald-700 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded-full">
                    {news.categoryLabel}
                  </span>
                  <span className="text-slate-400">{news.date}</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 leading-snug line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                  {news.summary}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 hover:text-emerald-700">
                <span>Read Full Press Statement</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="news-gallery" className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">VISUAL PORTFOLIO</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Corporate Operations Gallery</h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              An inside view of our biotechnology centers, vertical photobioreactors, and rural agronomical hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_RECORDS.map((item, idx) => (
              <div id={`gallery-card-${idx}`} key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="w-full h-32 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-center text-5xl select-none">
                    {item.emoji}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-sm font-display text-slate-900 leading-tight mt-1">{item.title}</h4>
                  </div>
                  <p className="text-slate-500 text-[10.5px] leading-relaxed font-sans">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Camera className="w-3.5 h-3.5 text-slate-400" />
                  <span>Verified Photo Asset</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit and Downloads */}
      <section id="news-mediakit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold font-display text-slate-900">Corporate Media Kit</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
              Are you writing an article or covering our sustainable farmer integration models? Download our certified brand kit. It includes verified vector logo formats, authorized executive portraits, high-resolution processing photographs, and general company factsheets.
            </p>
            <div className="flex gap-4">
              <Link
                to="/downloads"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-display flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Brand Assets (.ZIP)
              </Link>
              <Link
                to="/contact?tab=media"
                className="px-5 py-3 rounded-xl border border-slate-200 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 font-bold text-xs font-display flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact PR Liaison
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4 text-xs font-sans">
              <FileIcon className="w-8 h-8 text-emerald-700 shrink-0" />
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 block">Cyano Foods Corporate Profile Sheet</span>
                <p className="text-[10px] text-slate-500">Includes complete executive bios, founding narrative, and technology indicators. (PDF | 2.4 MB)</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4 text-xs font-sans">
              <FileIcon className="w-8 h-8 text-emerald-700 shrink-0" />
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 block">Vector Brand Guidelines & Logos</span>
                <p className="text-[10px] text-slate-500">Official vector and raster logos, color configurations, and usage parameters. (SVG/PNG | 4.8 MB)</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Floating Article Modal Viewer */}
      <AnimatePresence>
        {selectedArticle && (
          <div id="modal-backdrop" className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              id="news-modal"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                    {selectedArticle.categoryLabel}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{selectedArticle.date}</span>
                </div>
                <button
                  id="close-news-modal"
                  onClick={closeArticle}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans text-slate-700 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg sm:text-2xl font-bold font-display text-slate-900 leading-snug">
                  {selectedArticle.title}
                </h2>
                
                <p className="font-semibold text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedArticle.summary}
                </p>

                <p className="whitespace-pre-line">
                  {selectedArticle.content}
                </p>
                
                <p className="text-[11px] text-slate-400 italic">
                  Pune Complex & Deccan Southern Board Verification Panel, {selectedArticle.date}.
                </p>
              </div>

              <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50 shrink-0 text-xs">
                <span className="text-slate-400 flex items-center gap-1 font-mono text-[10px]">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  Released for General Distribution
                </span>
                <button
                  onClick={closeArticle}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-display cursor-pointer"
                >
                  Close Press Statement
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
