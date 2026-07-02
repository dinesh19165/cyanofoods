/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, Search, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { DOWNLOADS_LIST, FAQS_DATA } from '../data';

interface KnowledgeItem {
  id: string;
  title: string;
  category: 'article' | 'guide' | 'note' | 'video';
  categoryLabel: string;
  summary: string;
  readTime: string;
}

const KNOWLEDGE_RECORDS: KnowledgeItem[] = [
  {
    id: "kn-1",
    title: "Microalgae Photobioreactors: Optimizing Light Path Length and Borosilicate Diameters",
    category: "article",
    categoryLabel: "Scientific Article",
    summary: "A technical evaluation of fluid velocities and light dispersion models inside vertical borosilicate tubes to optimize C-Phycocyanin cell-wall synthesis while avoiding bio-crust sedimentation.",
    readTime: "12 min read"
  },
  {
    id: "kn-2",
    title: "Organic Carbon Rebuilding: A 3-Stage Agronomic Protocol for Arid Soil Rejuvenation",
    category: "guide",
    categoryLabel: "Agronomic Guide",
    summary: "Step-by-step biological regimes using fermented cow manure, biological nitrogen-fixing inoculants, and liquid algae bio-stimulants to restore depleted organic soil structures.",
    readTime: "8 min read"
  },
  {
    id: "kn-3",
    title: "Heavy Metal Defense: Securing Contamination-Free Microalgae Cultivation",
    category: "note",
    categoryLabel: "Technical Note",
    summary: "Reviewing lead, cadmium, and arsenic absorption channels in open-pond raceways and contrasting them with sterile closed-system isolated loops.",
    readTime: "5 min read"
  },
  {
    id: "kn-4",
    title: "Solar Sorting & Thermodynamic Low-Temp Dryers (Instructional Training Video)",
    category: "video",
    categoryLabel: "Training Video",
    summary: "Visual step-by-step walkthrough detailing how to operate off-grid KhetiBharat post-harvest grading, pneumatic seed sorting, and thermal dehydration blocks.",
    readTime: "14 min video"
  }
];

export default function KnowledgeCentre() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | KnowledgeItem['category']>('all');

  const filteredItems = KNOWLEDGE_RECORDS.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) || item.summary.toLowerCase().includes(query.toLowerCase());
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    return matchesQuery && matchesTab;
  });

  const recentDownloads = DOWNLOADS_LIST.slice(0, 3);
  const generalFaqs = FAQS_DATA.filter(f => f.category === 'general' || f.category === 'products');

  return (
    <div id="kc-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Knowledge Centre" description="Explore our repository of scientific articles, natural farming guides, technical notes, and training videos compiled by the Cyano Foods India scientific panel." />

      {/* Hero Header */}
      <section id="kc-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">SCIENTIFIC KNOWLEDGE BANK</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">The Knowledge Centre</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Consolidating accredited papers, practical guides, technical notes, and field training curricula compiled by our scientific board.
          </p>
        </div>
      </section>

      {/* Main Filter & Search Hub */}
      <section id="kc-search-hub" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            <button
              id="tab-all"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
                activeTab === 'all' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Records
            </button>
            <button
              id="tab-articles"
              onClick={() => setActiveTab('article')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
                activeTab === 'article' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Scientific Articles
            </button>
            <button
              id="tab-guides"
              onClick={() => setActiveTab('guide')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
                activeTab === 'guide' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Agronomic Guides
            </button>
            <button
              id="tab-notes"
              onClick={() => setActiveTab('note')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
                activeTab === 'note' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Technical Notes
            </button>
            <button
              id="tab-videos"
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
                activeTab === 'video' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Videos
            </button>
          </div>

          {/* Text search bar */}
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search journals, crop guidelines..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs pl-10 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900 font-sans"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* Splitted Records Layout */}
      <section id="kc-main-records" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Main Knowledge Records list */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-lg font-bold font-display text-slate-900 uppercase tracking-wider">
            Filtered Knowledge Base ({filteredItems.length})
          </h3>
          
          <div className="space-y-6">
            {filteredItems.map((item) => (
              <div id={`kc-item-${item.id}`} key={item.id} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-emerald-700 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded">
                    {item.categoryLabel}
                  </span>
                  <span className="text-slate-400">{item.readTime}</span>
                </div>
                
                <h4 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {item.summary}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 flex items-center gap-1">
                    {item.category === 'video' ? <Video className="w-4 h-4 text-slate-400" /> : <BookOpen className="w-4 h-4 text-slate-400" />}
                    Accredited Review Complete
                  </span>
                  <Link to="/contact" className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5">
                    Request Full Document
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <p className="text-slate-500 text-xs text-center py-12">
                No articles or guides matched your query. Try clearing your filters or search terms.
              </p>
            )}
          </div>
        </div>

        {/* Right Sidebar: Downloads & FAQs Quick access */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
          
          {/* Quick Downloads */}
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-700" />
              Latest Downloads
            </h4>
            <div className="space-y-3">
              {recentDownloads.map((doc) => (
                <div id={`kc-dl-item-${doc.id}`} key={doc.id} className="text-xs space-y-0.5 border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                  <Link to="/downloads" className="font-bold text-slate-800 hover:text-emerald-700 block line-clamp-1 leading-snug">
                    {doc.title}
                  </Link>
                  <p className="text-[10px] text-slate-400 font-mono">Format: {doc.format} | Size: {doc.fileSize}</p>
                </div>
              ))}
            </div>
            <Link
              to="/downloads"
              className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 font-bold text-xs font-display flex items-center justify-center gap-1 transition-colors"
            >
              Access Downloads Center
            </Link>
          </div>

          {/* Quick FAQs */}
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              Featured FAQ
            </h4>
            <div className="space-y-3">
              {generalFaqs.slice(0, 2).map((faq) => (
                <div id={`kc-faq-${faq.id}`} key={faq.id} className="text-xs space-y-1.5">
                  <span className="font-bold text-slate-800 font-display block leading-tight">Q: {faq.question}</span>
                  <p className="text-slate-500 leading-relaxed font-sans">{faq.answer.substring(0, 100)}...</p>
                </div>
              ))}
            </div>
            <Link
              to="/faq"
              className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 font-bold text-xs font-display flex items-center justify-center gap-1 transition-colors"
            >
              Search All FAQs
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}
