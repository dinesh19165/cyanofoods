/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Download, ArrowRight, Eye, CheckCircle2, X } from 'lucide-react';
import SEO from '../components/SEO';
import TiltCard from '../components/UI/TiltCard';
import RevealAnimation from '../components/UI/RevealAnimation';
import RippleButton from '../components/UI/RippleButton';
import { PAGE_VIDEOS, PRODUCT_IMAGES } from '../constants/brand';
import { PRODUCTS_DATA } from '../data';
import { ProductItem } from '../types';

type CategoryFilter = 'all' | ProductItem['category'];

const CATEGORY_TABS: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'spirulina', label: 'Spirulina' },
  { value: 'superfoods', label: 'Superfoods' },
  { value: 'functional_foods', label: 'Functional' },
  { value: 'nutraceuticals', label: 'Nutraceuticals' },
  { value: 'agricultural_inputs', label: 'Agriculture' },
  { value: 'healthy_foods', label: 'Healthy Foods' },
  { value: 'future_products', label: 'Future' },
];

const FLOATING_NUTRIENTS = ['Protein', 'Iron', 'B12', 'Phycocyanin', 'Beta-Carotene', 'Omega-3'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    let list = activeCategory === 'all' ? PRODUCTS_DATA : PRODUCTS_DATA.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return list;
  }, [activeCategory, search]);

  const heroProduct = PRODUCTS_DATA.find((p) => p.isFeatured) || PRODUCTS_DATA[0];

  return (
    <div id="products-page-container" className="min-h-screen bg-slate-950">
      <SEO title="Product Catalog" description="Discover Cyano Foods India's clinical-grade organic Spirulina, Phycocyanin extracts, algal soil stimulants, vegan Omega-3 nutraceuticals, and clean functional foods." />

      {/* Gradient mesh hero with floating 3D products */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(15,107,62,0.4),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(201,162,39,0.15),transparent_40%),radial-gradient(ellipse_at_60%_80%,rgba(46,139,87,0.3),transparent_50%)]" />
        <video className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src={PAGE_VIDEOS.products} type="video/mp4" />
        </video>

        {FLOATING_NUTRIENTS.map((item, i) => (
  <motion.span
    key={item.name}
    className="absolute z-20 text-xs md:text-sm font-bold text-emerald-300/70 uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md pointer-events-none"
    style={{
      left: item.left,
      top: item.top,
    }}
    animate={{
      y: [0, -10, 0],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 5 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {item.name}
  </motion.span>
))}

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Product Showcase</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Advanced <span className="text-gradient-dark">Product Lines</span>
            </h1>
            <p className="text-slate-300 leading-relaxed max-w-lg">
              Clinical-grade microalgae concentrates and bio-intelligent soil formulations, strictly certified for high bioavailability and extreme purity.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
          </div>

          <div className="flex justify-center relative">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative"
            >
              {PRODUCTS_DATA.slice(0, 3).map((p, i) => (
                <motion.img
                  key={p.id}
                  src={PRODUCT_IMAGES[p.id]}
                  alt={p.name}
                  className="absolute w-32 h-44 object-cover rounded-2xl shadow-2xl border border-white/20"
                  style={{
                    transform: `rotateY(${i * 120}deg) translateZ(140px)`,
                    left: '50%', top: '50%', marginLeft: '-4rem', marginTop: '-5.5rem',
                  }}
                  loading="lazy"
                />
              ))}
            </motion.div>
            <motion.img
              src={PRODUCT_IMAGES[heroProduct.id]}
              alt={heroProduct.name}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative z-40 w-48 h-64 object-cover rounded-3xl shadow-glow border-2 border-emerald-400/30"
            />
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="sticky top-20 z-30 py-4 bg-slate-950/90 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {CATEGORY_TABS.map((tab) => (
            <motion.button
              key={tab.value}
              onClick={() => { setActiveCategory(tab.value); setSelectedProduct(null); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === tab.value
                  ? 'bg-emerald-600 text-white shadow-glow'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className={`${selectedProduct ? 'lg:col-span-7' : 'lg:col-span-12'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
              {filteredProducts.map((prod, i) => (
                <RevealAnimation key={prod.id} direction="up" delay={i * 0.05}>
                  <TiltCard glow>
                    <div
                      onClick={() => setSelectedProduct(prod)}
                      className={`cursor-pointer bg-white rounded-3xl overflow-hidden shadow-premium card-lift border-2 transition-colors ${
                        selectedProduct?.id === prod.id ? 'border-emerald-500' : 'border-transparent'
                      }`}
                    >
                      <div className="img-zoom-container h-48">
                        <img src={PRODUCT_IMAGES[prod.id]} alt={prod.name} className="img-zoom w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-5 space-y-2">
                        <span className="text-xs font-bold text-emerald-600 uppercase">{prod.categoryLabel}</span>
                        <h3 className="font-bold font-display">{prod.name}</h3>
                        <p className="text-slate-500 text-sm line-clamp-2">{prod.description}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 pt-2">
                          Inspect Specs <Eye className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </RevealAnimation>
              ))}
            </div>

            <AnimatePresence>
              {selectedProduct && (
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  className="lg:col-span-5 lg:sticky lg:top-36 bg-white rounded-3xl border border-slate-100 p-8 shadow-premium-lg space-y-6 max-h-[80vh] overflow-y-auto"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase">Technical Spec Sheet</span>
                      <h2 className="text-xl font-bold mt-1">{selectedProduct.name}</h2>
                    </div>
                    <button onClick={() => setSelectedProduct(null)} className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer"><X className="w-5 h-5" /></button>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {selectedProduct.benefits.map((b, idx) => (
                      <li key={idx} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                  <div className="border rounded-2xl overflow-hidden text-sm">
                    {selectedProduct.specifications.map((spec, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-3 border-b last:border-0 ${idx % 2 ? 'bg-slate-50' : ''}`}>
                        <span className="text-slate-500">{spec.key}</span>
                        <span className="font-semibold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <RippleButton to="/downloads" variant="primary" className="w-full justify-center">
                      <Download className="w-4 h-4" /> Download Reports
                    </RippleButton>
                    <RippleButton to="/partner?type=dealer" variant="outline" className="w-full justify-center">
                      Request Samples <ArrowRight className="w-4 h-4" />
                    </RippleButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
