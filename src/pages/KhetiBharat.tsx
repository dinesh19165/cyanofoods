/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sprout, Warehouse, ArrowRight, ShieldCheck, Sun, Store, Award, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import CountUp from '../components/UI/CountUp';
import { KHETI_BHARAT_DETAILS } from '../data';

export default function KhetiBharat() {
  return (
    <div id="kb-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="KhetiBharat Initiative" description="Explore KhetiBharat, Cyano Foods India's social enterprise empowering Indian farmers through natural farming, local solar collection hubs, and direct procurement buybacks." />

      {/* Hero Header */}
      <section id="kb-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">FLAGSHIP SOCIAL ENTERPRISE</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">The KhetiBharat Initiative</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Healing Indian agricultural soils while lifting family farm incomes through structural decentralization, scientific bio-inputs, and premium market pathways.
          </p>
        </div>
      </section>

      {/* Overview Block with Stats counters */}
      <section id="kb-overview" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase border-b-2 border-emerald-700 pb-1">
                OUR COMPREHENSIVE REGIME
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-bold font-display text-slate-900 leading-tight">
                Empowering the Smallholder, Rejuvenating the Soil
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {KHETI_BHARAT_DETAILS.overview}
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600 font-sans">
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Soil Organic Carbon Recovery:</strong> Transitioning dry soils to organic-rich microbial matrices using natural bio-fertilizers.</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Zero Chemical Dependency:</strong> Complete elimination of toxic nitrates and chemical pest management compounds.</span>
                </div>
              </div>
            </div>

            {/* Visual Stats Block */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              {KHETI_BHARAT_DETAILS.statistics.map((stat, i) => (
                <div id={`stat-card-${i}`} key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2 text-center hover:shadow-md transition-shadow">
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">{stat.label}</span>
                  <div className="text-2xl sm:text-3.5xl font-bold text-emerald-700 font-mono">
                    <CountUp end={parseInt(stat.value)} suffix={stat.suffix || ""} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Pillars of KhetiBharat (Ecosystem, Procurement, Collection Centres, Retail, Value Addition) */}
      <section id="kb-pillars" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">Ecosystem Infrastructure</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Our Operational Divisions</h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We manage every stage of the post-harvest cycle to secure maximum product quality and local economic return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Division 1: Procurement */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg font-display text-slate-900">Direct Procurement</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  Guaranteed, legally-binding pre-harvest buyback agreements signed directly with agricultural cooperatives. By establishing stable premium floor prices, we eliminate intermediaries and safeguard families against market crashes.
                </p>
              </div>
              <ul className="text-[11px] text-slate-600 space-y-1 pt-4 border-t border-slate-100 font-mono">
                <li>• No commission brokers</li>
                <li>• Transparent weight auditing</li>
                <li>• Pre-harvest price indexing</li>
              </ul>
            </div>

            {/* Division 2: Collection Centres */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Warehouse className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg font-display text-slate-900">Solar Collection Centres</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  Off-grid, solar-powered sorting and grading stations situated directly within block districts. Bringing modern clean sorting, gentle thermodynamic drying, and pneumatic sifting systems to the village level to preserve active crop compounds.
                </p>
              </div>
              <ul className="text-[11px] text-slate-600 space-y-1 pt-4 border-t border-slate-100 font-mono">
                <li>• Solar thermodynamic drying</li>
                <li>• Farmgate moisture evaluation</li>
                <li>• Local rural youth employment</li>
              </ul>
            </div>

            {/* Division 3: Value Addition */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg font-display text-slate-900">Value Addition</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  Converting raw organic outputs into premium formulations, such as millet-algae blends, micro-extruded sun-dried Spirulina crunchies, and healthy seed-based functional snacks. Sharing manufacturing profits back to the farmer co-ops.
                </p>
              </div>
              <ul className="text-[11px] text-slate-600 space-y-1 pt-4 border-t border-slate-100 font-mono">
                <li>• Certified GMP processing</li>
                <li>• Raw biological enzyme lock</li>
                <li>• Co-operative margin distribution</li>
              </ul>
            </div>

            {/* Division 4: Retail & Franchise */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                    <Store className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg font-display text-slate-900">Retail, Franchise, Dealer & Distributor Opportunities</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans">
                    We offer authorized regional franchises, dealerships, and bulk distribution licenses to qualified agricultural entrepreneurs, corporate supply chains, and retail networks. Gain access to clinical-grade organic inputs and clean-label functional foods backed by strict cellular certifications.
                  </p>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs">
                  <h4 className="font-bold font-display text-slate-900">Establish Your Franchise</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Authorized KhetiBharat hubs receive full marketing materials, continuous compliance guidelines, and direct supply lines of certified organic products.
                  </p>
                  <Link
                    to="/partner?type=distributor"
                    className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 text-[11px]"
                  >
                    Read Franchise Terms
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Flow timeline */}
      <section id="kb-process" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">STEP-BY-STEP SEQUENCE</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">The KhetiBharat Process Flow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {KHETI_BHARAT_DETAILS.processFlow.map((step) => (
              <div id={`flow-step-${step.step}`} key={step.step} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 relative">
                {/* Visual arrow indicator for wider screens */}
                {step.step < 5 && (
                  <span className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-300 font-bold z-10">
                    →
                  </span>
                )}
                <span className="w-8 h-8 rounded-full bg-emerald-700 text-white font-mono font-bold flex items-center justify-center text-xs mx-auto">
                  {step.step}
                </span>
                <h4 className="font-bold text-xs font-display text-slate-900 leading-snug">{step.title}</h4>
                <p className="text-slate-500 text-[10.5px] leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Enrolment */}
      <section id="kb-cta" className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">PARTNER WITH KHETIBHARAT</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Join the Sovereign Farmer Revolution</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
            Whether you represent a rural agricultural cooperative, an agritech supply chain entrepreneur, or are seeking a commercial franchise—we offer formal partnership paths.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/partner?type=farmer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide transition-all shadow-md inline-flex items-center gap-1.5"
            >
              Farmers Registration Form
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/partner?type=distributor"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs tracking-wide transition-all"
            >
              Dealer / Distributor Inquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
