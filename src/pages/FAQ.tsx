/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQS_DATA } from '../data';
import { FAQItem } from '../types';

type FAQCategoryFilter = 'all' | FAQItem['category'];

export default function FAQ() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategoryFilter>('all');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true }); // Default first open

  const toggleFaq = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQS_DATA.filter(faq => {
    const matchesQuery = faq.question.toLowerCase().includes(query.toLowerCase()) || faq.answer.toLowerCase().includes(query.toLowerCase());
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    return matchesQuery && matchesCat;
  });

  return (
    <div id="faq-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Frequently Asked Questions" description="Find answers to common questions about organic farming, group PGS certifications, microalgae biological inputs, and B2B specifications." />

      {/* Hero Header */}
      <section id="faq-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">INFORMATION DESK</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Frequently Asked Questions</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Direct responses regarding organic verification regimes, agronomic parameters, and commercial contracts.
          </p>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section id="faq-filters" className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            <button
              id="faq-cat-all"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'all' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Queries
            </button>
            <button
              id="faq-cat-gen"
              onClick={() => setActiveCategory('general')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'general' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              General
            </button>
            <button
              id="faq-cat-prod"
              onClick={() => setActiveCategory('products')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'products' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Products Specs
            </button>
            <button
              id="faq-cat-kb"
              onClick={() => setActiveCategory('khetibharat')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'khetibharat' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              KhetiBharat
            </button>
            <button
              id="faq-cat-cert"
              onClick={() => setActiveCategory('certification')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'certification' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Certifications
            </button>
            <button
              id="faq-cat-coun"
              onClick={() => setActiveCategory('regional_council')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer transition-colors ${
                activeCategory === 'regional_council' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Regional Councils
            </button>
          </div>

          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search by topic, keyword, or query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white font-sans"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* Accordion List */}
      <section id="faq-accordion-section" className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                id={`faq-row-${faq.id}`}
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                {/* Header/Question Trigger button */}
                <button
                  id={`btn-faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display text-xs sm:text-sm font-bold text-slate-900 cursor-pointer hover:bg-slate-50/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-700 font-mono text-xs sm:text-sm">Q:</span>
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Answer panel */}
                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-500 text-[11px] sm:text-xs leading-relaxed font-sans border-t border-slate-100/50 bg-slate-50/50"
                  >
                    <div className="pl-6 space-y-2">
                      <p>{faq.answer}</p>
                      <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold inline-block uppercase">
                        Verified by {faq.category === 'khetibharat' ? "KhetiBharat" : faq.category === 'regional_council' ? "Regional Council" : faq.category === 'products' ? "Products Specs" : faq.category === 'certification' ? "Certification" : "General Administration"} Panel
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <p className="text-slate-500 text-xs text-center py-12">
              No matching questions found. Try refining your search query.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}
