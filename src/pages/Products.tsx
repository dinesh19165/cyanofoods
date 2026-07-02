/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Download, Award, Beaker, HelpCircle, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { PRODUCTS_DATA } from '../data';
import { ProductItem } from '../types';

type CategoryFilter = 'all' | ProductItem['category'];

const CATEGORY_TABS: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All Formulations' },
  { value: 'spirulina', label: 'Spirulina' },
  { value: 'superfoods', label: 'Superfoods' },
  { value: 'functional_foods', label: 'Functional Foods' },
  { value: 'nutraceuticals', label: 'Nutraceuticals' },
  { value: 'agricultural_inputs', label: 'Agriculture Inputs' },
  { value: 'healthy_foods', label: 'Healthy Foods' },
  { value: 'future_products', label: 'Future Concepts' }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div id="products-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Product Catalog" description="Discover Cyano Foods India's clinical-grade organic Spirulina, Phycocyanin extracts, algal soil stimulants, vegan Omega-3 nutraceuticals, and clean functional foods." />

      {/* Hero Header */}
      <section id="products-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">PRODUCT DIRECTORY</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Advanced Product Lines</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Clinical-grade microalgae concentrates and bio-intelligent soil formulations, strictly certified for high bioavailability and extreme purity.
          </p>
        </div>
      </section>

      {/* Main Filter Tabs */}
      <section id="products-filtering" className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORY_TABS.map((tab) => (
              <button
                id={`tab-filter-${tab.value}`}
                key={tab.value}
                onClick={() => {
                  setActiveCategory(tab.value);
                  setSelectedProduct(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display transition-all cursor-pointer ${
                  activeCategory === tab.value
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/10'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-emerald-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Display Split Grid */}
      <section id="products-catalog-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: Filtered Products */}
          <div id="products-grid-wrapper" className={`${selectedProduct ? 'lg:col-span-7' : 'lg:col-span-12'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300`}>
            {filteredProducts.map((prod) => (
              <div
                id={`product-card-${prod.id}`}
                key={prod.id}
                className={`bg-white rounded-3xl border transition-all p-6 flex flex-col justify-between hover:shadow-md cursor-pointer ${
                  selectedProduct?.id === prod.id
                    ? 'border-emerald-600 shadow-md shadow-emerald-500/5 bg-emerald-50/5'
                    : 'border-slate-200 shadow-sm'
                }`}
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
                      {prod.categoryLabel}
                    </span>
                    {prod.isFeatured && (
                      <span className="text-[9px] font-bold font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase">
                        ★ Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-base font-bold font-display text-slate-900 leading-tight">
                    {prod.name}
                  </h3>
                  
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-slate-400">
                    {prod.specifications[0]?.key}: {prod.specifications[0]?.value}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800">
                    Inspect Specs
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel: Selected Product Technical Specifications Sheet */}
          <AnimatePresence>
            {selectedProduct && (
              <motion.div
                id="technical-spec-sheet"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6 lg:sticky lg:top-28"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                      Technical Spec Sheet
                    </span>
                    <h2 className="text-xl font-bold font-display text-slate-900 mt-2">
                      {selectedProduct.name}
                    </h2>
                  </div>
                  <button
                    id="close-spec-sheet"
                    onClick={() => setSelectedProduct(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  >
                    ✕
                  </button>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider">
                    Biological Profile & Benefits
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 font-sans">
                    {selectedProduct.benefits.map((b, idx) => (
                      <li id={`spec-benefit-${idx}`} key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications Grid */}
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider">
                    Chemical & Botanical Specifications
                  </h4>
                  <div className="border border-slate-100 rounded-2xl overflow-hidden text-xs">
                    {selectedProduct.specifications.map((spec, idx) => (
                      <div
                        id={`spec-row-${idx}`}
                        key={idx}
                        className={`grid grid-cols-5 p-3 font-sans ${
                          idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                        } border-b border-slate-100/60 last:border-0`}
                      >
                        <span className="col-span-2 font-medium text-slate-500">{spec.key}</span>
                        <span className="col-span-3 font-mono font-semibold text-slate-900 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <Link
                    to="/downloads"
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-display flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Analysis Reports
                  </Link>
                  <Link
                    to="/partner?type=dealer"
                    className="w-full py-3 rounded-xl border border-slate-200 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 font-bold text-xs font-display flex items-center justify-center gap-1.5 transition-colors"
                  >
                    Request Bulk Samples / Dealership
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Catalog Download Banner */}
      <section id="catalog-download-banner" className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left bg-gradient-to-br from-emerald-950/40 to-slate-900 p-8 sm:p-12 rounded-[40px] border border-slate-800">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-display text-white">Download Corporate Product Catalog</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans leading-relaxed">
              Retrieve full chromatography assays, toxicological clearance sheets, and complete pricing parameters for our global B2B contracts.
            </p>
          </div>
          <Link
            to="/downloads"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shadow-lg shadow-emerald-700/10"
          >
            <Download className="w-4 h-4" />
            Access B2B Downloads
          </Link>
        </div>
      </section>

    </div>
  );
}
