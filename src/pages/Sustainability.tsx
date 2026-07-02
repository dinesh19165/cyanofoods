/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Leaf, Users, ShieldCheck, Droplet, Sun, Sprout, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { SUSTAINABILITY_ESG } from '../data';

export default function Sustainability() {
  return (
    <div id="sustainability-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Sustainability & ESG" description="Review the environmental, social, and governance (ESG) indices, water recycling metrics, carbon-capture statistics, and social impact of Cyano Foods India." />

      {/* Hero Header */}
      <section id="sustainability-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">ECOLOGICAL STEWARDSHIP</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Sustainability & ESG</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Structuring commercial operations around strict thermodynamic efficiency, carbon locking, and community equity.
          </p>
        </div>
      </section>

      {/* ESG Metrics Section */}
      <section id="sustainability-metrics" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">EMPIRICAL INDICES</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Our Current ESG Metrics</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUSTAINABILITY_ESG.metrics.map((metric, i) => (
              <div id={`esg-metric-${i}`} key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-2 hover:shadow-md transition-shadow">
                <span className="text-2xl sm:text-3.5xl font-bold font-mono text-emerald-700">{metric.value}</span>
                <h3 className="font-bold text-xs sm:text-sm font-display text-slate-900 leading-snug">{metric.title}</h3>
                <p className="text-slate-500 text-[10.5px] leading-relaxed font-sans">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Biorefinery & CSR */}
      <section id="sustainability-pillars" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase border-b-2 border-emerald-700 pb-1">
              ZERO-WASTE REFINING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              The Circular Economy in Practice
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
              At Cyano Foods, we operate a zero-waste biorefinery concept. The water used in our closed photobioreactors is recycled using advanced ceramic filtration. More importantly, the nutrient-rich organic waste left after extracting active blue proteins is not discarded—it is biological manure and amino-acids for natural agriculture, forming a highly optimized, complete circular loop.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
              Our CSR (Corporate Social Responsibility) budget is deployed entirely into establishing KhetiBharat village libraries, constructing community biogas plants, and running free health screening camps for smallholder farming families in Anantapur and Pune rural sectors.
            </p>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="p-2.5 w-10 h-10 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center">
                <Droplet className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm font-display text-slate-900">Hydrological Conserv</h4>
              <p className="text-slate-500 text-[10.5px] leading-relaxed">
                By recycling 94% of liquid growth media, our microalgae cultivation uses 10x less water per ton of protein than soy or beef.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="p-2.5 w-10 h-10 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm font-display text-slate-900">Thermodynamic Solar</h4>
              <p className="text-slate-500 text-[10.5px] leading-relaxed">
                All rural collection centers and sorting systems are powered by solar rooftop microgrids, minimizing grid dependency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm sm:col-span-2">
              <div className="p-2.5 w-10 h-10 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm font-display text-slate-900">Social Capital & Rural Development</h4>
              <p className="text-slate-500 text-[10.5px] leading-relaxed">
                We reinvest directly in rural communities, providing clean energy biogas plants and educational resources to farming cooperatives in our network.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Comprehensive ESG Disclosures */}
      <section id="sustainability-disclosure" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">REGULATORY ALIGNMENT</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Our Strategic ESG Mandate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <span className="text-[10px] font-mono font-bold text-emerald-700 tracking-wider uppercase flex items-center gap-1.5">
                <Leaf className="w-4 h-4" />
                ENVIRONMENTAL INDEX
              </span>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {SUSTAINABILITY_ESG.esgStrategy.environmental}
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <span className="text-[10px] font-mono font-bold text-emerald-700 tracking-wider uppercase flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                SOCIAL COVENANT
              </span>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {SUSTAINABILITY_ESG.esgStrategy.social}
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <span className="text-[10px] font-mono font-bold text-emerald-700 tracking-wider uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                GOVERNANCE STANDARD
              </span>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {SUSTAINABILITY_ESG.esgStrategy.governance}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
