/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ArrowRight, Download, Calendar, Mail, FileIcon } from 'lucide-react';
import SEO from '../components/SEO';
import Marquee from '../components/UI/Marquee';
import ReadingProgress from '../components/UI/ReadingProgress';
import RevealAnimation from '../components/UI/RevealAnimation';
import { PAGE_VIDEOS } from '../constants/brand';
import { NEWS_LIST } from '../data';
import { NewsItem } from '../types';

const GALLERY_RECORDS = [
  { title: "Pune Biotechnology Complex", category: "R&D Complex", desc: "Aseptic laboratory benches, seed culture incubator chambers, and analytic chromatography setups.", emoji: "🔬" },
  { title: "Vertical Photobioreactor Block", category: "Production Block", desc: "Our patented closed-system borosilicate glass loop arrays capturing natural light spectrums.", emoji: "🧪" },
  { title: "Solar Post-Harvest Facility", category: "KhetiBharat", desc: "Thermodynamic post-harvest cleaning, grading, sorting, and dehydration lines powered entirely by solar energy.", emoji: "☀️" },
  { title: "Anantapur Demonstration Farm", category: "Field Agronomy", desc: "Farmer training plots showcasing bio-stimulant soil treatments and multi-crop bio-diversity.", emoji: "🌾" },
];

const NEWS_IMAGES = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsp3Q97NkoSd5ltvfaodapimbQhT0NFUSUbXaKuKvZqw&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsp3Q97NkoSd5ltvfaodapimbQhT0NFUSUbXaKuKvZqw&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KOEZB1GimZlSdcxtHL5bjDoAPObSqRSnloglG_GTdw&s',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
];

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams();
  const newsId = searchParams.get('id');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | NewsItem['category']>('all');

  useEffect(() => {
    if (newsId) {
      const found = NEWS_LIST.find((n) => n.id === newsId);
      setSelectedArticle(found || null);
    } else setSelectedArticle(null);
  }, [newsId]);

  const featured = NEWS_LIST[0];
  const filteredNews = activeCategory === 'all' ? NEWS_LIST.slice(1) : NEWS_LIST.filter((n) => n.category === activeCategory && n.id !== featured.id);

  return (
    <div id="news-page-container" className="min-h-screen bg-[#faf9f7]">
      <ReadingProgress />
      <SEO title="News Room & Media Kit" description="Access official Cyano Foods India press releases, success stories from KhetiBharat, upcoming food tech events, and our downloadable media kit." />

      {/* News ticker */}
      <div className="bg-emerald-900 text-emerald-100 py-2.5 border-b border-emerald-800">
        <Marquee speed={20}>
          {NEWS_LIST.map((n) => (
            <span key={n.id} className="mx-8 text-sm font-medium">{n.title} • {n.date}</span>
          ))}
        </Marquee>
      </div>

      {/* Magazine featured hero */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
          <div className="lg:col-span-8 relative overflow-hidden cursor-pointer group" onClick={() => setSearchParams({ id: featured.id })}>
            <img src={NEWS_IMAGES[0]} alt="" className="w-full h-full min-h-[50vh] lg:min-h-[70vh] object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">{featured.categoryLabel}</span>
              <h1 className="text-3xl sm:text-5xl font-bold mt-3 leading-tight font-display max-w-3xl">{featured.title}</h1>
              <p className="text-slate-300 mt-4 max-w-2xl line-clamp-2">{featured.summary}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-emerald-300">
                Read Featured Story <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-900 flex flex-col">
            <video autoPlay muted loop playsInline className="w-full h-48 lg:h-1/2 object-cover opacity-80">
              <source src={PAGE_VIDEOS.news} type="video/mp4" />
            </video>
            <div className="p-8 flex-1 flex flex-col justify-center text-white">
              <span className="text-emerald-400 text-xs uppercase tracking-widest">Corporate Communications</span>
              <h2 className="text-2xl font-bold mt-2 font-display">Press Room & Media</h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">Direct access to official announcements, agricultural breakthroughs, and brand compliance guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-20 z-20 py-4 bg-[#faf9f7]/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {(['all', 'news', 'success_story', 'event'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all ${
                activeCategory === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat === 'all' ? 'All' : cat === 'news' ? 'Press' : cat === 'success_story' ? 'Success Stories' : 'Events'}
            </button>
          ))}
        </div>
      </section>

      {/* Article grid — magazine layout */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === 'all' ? NEWS_LIST.slice(1) : filteredNews).map((news, i) => (
            <RevealAnimation key={news.id} direction="up" delay={i * 0.06}>
              <article
                onClick={() => setSearchParams({ id: news.id })}
                className="group cursor-pointer bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="img-zoom-container h-52">
                  <img src={NEWS_IMAGES[(i + 1) % NEWS_IMAGES.length]} alt="" className="img-zoom w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 border-l-4 border-emerald-600">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-emerald-700 uppercase">{news.categoryLabel}</span>
                    <span className="text-slate-400">{news.date}</span>
                  </div>
                  <h3 className="font-bold text-lg font-display group-hover:text-emerald-700 transition-colors line-clamp-2">{news.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">{news.summary}</p>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Corporate Operations Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_RECORDS.map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl card-lift text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <span className="text-xs font-bold text-emerald-700 uppercase">{item.category}</span>
                <h4 className="font-bold mt-2">{item.title}</h4>
                <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media kit */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Corporate Media Kit</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Download our certified brand kit including vector logos, executive portraits, and company factsheets.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/downloads" className="px-5 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold inline-flex items-center gap-2">
              <Download className="w-4 h-4" /> Brand Assets
            </Link>
            <Link to="/contact" className="px-5 py-3 border border-slate-200 rounded-xl text-sm font-bold inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact PR
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          {['Cyano Foods Corporate Profile Sheet (PDF | 2.4 MB)', 'Vector Brand Guidelines & Logos (SVG/PNG | 4.8 MB)'].map((t) => (
            <div key={t} className="p-4 bg-slate-50 rounded-xl flex gap-4 items-center">
              <FileIcon className="w-8 h-8 text-emerald-700 shrink-0" />
              <span className="text-sm font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSearchParams({})}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-emerald-700 uppercase">{selectedArticle.categoryLabel}</span>
                  <button onClick={() => setSearchParams({})} className="text-slate-400 hover:text-slate-600 cursor-pointer text-xl">✕</button>
                </div>
                <h2 className="text-2xl font-bold font-display mb-4">{selectedArticle.title}</h2>
                <p className="text-slate-500 text-sm mb-2 flex items-center gap-1"><Calendar className="w-4 h-4" />{selectedArticle.date}</p>
                <p className="font-semibold bg-slate-50 p-4 rounded-xl mb-6">{selectedArticle.summary}</p>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{selectedArticle.content}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
