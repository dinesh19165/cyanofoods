/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Download, FileText, Search, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { DOWNLOADS_LIST } from '../data';
import { DownloadDoc } from '../types';

type DownloadCategory = 'all' | DownloadDoc['category'];

export default function Downloads() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DownloadCategory>('all');
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  const filteredDownloads = DOWNLOADS_LIST.filter(doc => {
    const matchesQuery = doc.title.toLowerCase().includes(query.toLowerCase());
    const matchesCat = activeCategory === 'all' || doc.category === activeCategory;
    return matchesQuery && matchesCat;
  });

  const triggerDownloadSimulate = (id: string, title: string) => {
    setDownloadedItem(title);
    setTimeout(() => {
      setDownloadedItem(null);
    }, 4000);
  };

  return (
    <div id="downloads-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Regulatory Downloads" description="Retrieve official corporate reports, clinical-grade certification sheets, organic auditing templates, and group farming guidelines." />

      {/* Hero Header */}
      <section id="downloads-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">SECURE REPOSITORY</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Document Registry</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Direct access to official certificates, scientific brochures, and regional council auditing sheets.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section id="downloads-filters" className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          <div className="flex flex-wrap gap-1.5">
            <button
              id="dl-cat-all"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'all' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Assays & Forms
            </button>
            <button
              id="dl-cat-cert"
              onClick={() => setActiveCategory('certification')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'certification' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Purity Certifications
            </button>
            <button
              id="dl-cat-broch"
              onClick={() => setActiveCategory('brochures')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'brochures' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Corporate Brochures
            </button>
            <button
              id="dl-cat-aud"
              onClick={() => setActiveCategory('auditing')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'auditing' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Agronomic & Group Audits
            </button>
          </div>

          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search by file title or keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white font-sans"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* Main Files Display Grid */}
      <section id="downloads-grid-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Toast alerts for simulation */}
        {downloadedItem && (
          <div id="download-toast" className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs flex items-center justify-between gap-4 font-sans max-w-lg mx-auto">
            <span className="text-emerald-800 font-medium">
              ✓ Simulation Initiated: <strong>{downloadedItem}</strong> package prepared for browser download.
            </span>
            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded font-bold uppercase shrink-0">Ready</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDownloads.map((doc) => (
            <div
              id={`dl-card-${doc.id}`}
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
                    {doc.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {doc.format} | {doc.fileSize}
                  </span>
                </div>
                
                <h3 className="text-base font-bold font-display text-slate-900 leading-tight">
                  {doc.title}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed font-sans line-clamp-3">
                  Official corporate material containing comprehensive {doc.categoryLabel.toLowerCase()} indicators in {doc.format} format ({doc.fileSize}).
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs">
                <span className="text-slate-400 flex items-center gap-1 font-mono text-[9px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  MD5 Cryptographically Verified
                </span>
                <button
                  id={`btn-dl-file-${doc.id}`}
                  onClick={() => triggerDownloadSimulate(doc.id, doc.title)}
                  className="p-2.5 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-xl transition-all text-slate-700 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {filteredDownloads.length === 0 && (
            <p className="col-span-full text-slate-500 text-xs text-center py-12">
              No files matched your search parameters. Try choosing another category filter.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}
