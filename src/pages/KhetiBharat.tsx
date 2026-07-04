/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sprout, Warehouse, Sun, Store, ArrowRight, Wheat, Cloud, Bird } from 'lucide-react';
import SEO from '../components/SEO';
import CountUp from '../components/UI/CountUp';
import RevealAnimation from '../components/UI/RevealAnimation';
import Marquee from '../components/UI/Marquee';
import { PAGE_VIDEOS } from '../constants/brand';
import { KHETI_BHARAT_DETAILS } from '../data';

const SOIL_LAYERS = [
  { name: 'Topsoil', desc: 'Organic matter & microbial life restored via bio-stimulants', color: 'bg-amber-700' },
  { name: 'Rhizosphere', desc: 'Root-zone bacteria activated by algal amino acids', color: 'bg-amber-600' },
  { name: 'Subsoil', desc: 'Moisture retention improved through carbon sequestration', color: 'bg-amber-500' },
  { name: 'Bedrock', desc: 'Mineral matrix stabilized with natural farming protocols', color: 'bg-amber-400' },
];

const FARMER_STORIES = [
  { name: 'Ramesh Patil', village: 'Anantapur Block', quote: 'KhetiBharat gave us guaranteed buyback prices and free bio-inputs. Our soil organic carbon doubled in 18 months.' },
  { name: 'Lakshmi Devi', village: 'Maharashtra Cluster', quote: 'The regional council helped us achieve PGS-India certification. We now sell directly to premium organic markets.' },
];

export default function KhetiBharat() {
  const [beforeAfter, setBeforeAfter] = useState<'before' | 'after'>('before');
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <div id="kb-page-container" className="min-h-screen bg-amber-50">
      <SEO title="KhetiBharat Initiative" description="Explore KhetiBharat, Cyano Foods India's social enterprise empowering Indian farmers through natural farming, local solar collection hubs, and direct procurement buybacks." />

      {/* Golden sunrise hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={PAGE_VIDEOS.khetibharat} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-orange-800/50 to-amber-200/30" />

        {/* Animated clouds */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute text-white/30"
            style={{ top: `${15 + i * 12}%` }}
            animate={{ x: ['-10%', '110%'] }}
            transition={{ duration: 25 + i * 8, repeat: Infinity, ease: 'linear', delay: i * 5 }}
          >
            <Cloud className="w-24 h-24 sm:w-32 sm:h-32" />
          </motion.div>
        ))}

        {/* Birds */}
        <motion.div className="absolute top-1/4 right-1/4 text-amber-200/60" animate={{ x: [0, 80, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity }}>
          <Bird className="w-8 h-8" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-32 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-amber-200 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Wheat className="w-4 h-4 animate-pulse" /> Flagship Social Enterprise
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mt-4 leading-tight font-display">
              {KHETI_BHARAT_DETAILS.title}
            </h1>
            <p className="text-amber-100 text-lg mt-2 font-display">{KHETI_BHARAT_DETAILS.subtitle}</p>
            <p className="text-amber-50/80 mt-4 leading-relaxed max-w-2xl">{KHETI_BHARAT_DETAILS.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Impact counters */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {KHETI_BHARAT_DETAILS.statistics.map((stat, i) => (
            <RevealAnimation key={stat.label} direction="up" delay={i * 0.1}>
              <div className="text-3xl sm:text-4xl font-bold font-display">
                <CountUp end={parseInt(stat.value)} suffix={stat.suffix || ''} />
              </div>
              <div className="text-amber-200 text-sm mt-2 uppercase tracking-wider">{stat.label}</div>
            </RevealAnimation>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealAnimation direction="left">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Empowering the Smallholder, Rejuvenating the Soil</h2>
            <p className="text-slate-600 leading-relaxed">{KHETI_BHARAT_DETAILS.overview}</p>
          </RevealAnimation>

          {/* Before / After */}
          <RevealAnimation direction="right">
            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
              <div className="flex gap-2 mb-4">
                {(['before', 'after'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setBeforeAfter(mode)}
                    className={`flex-1 py-2 rounded-xl text-sm font-bold capitalize cursor-pointer transition-all ${
                      beforeAfter === mode ? 'bg-amber-700 text-white' : 'bg-white text-amber-800 border border-amber-200'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <motion.div key={beforeAfter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-48 rounded-2xl flex items-center justify-center text-center p-6"
                style={{ background: beforeAfter === 'before' ? 'linear-gradient(180deg, #a8a29e 0%, #78716c 100%)' : 'linear-gradient(180deg, #65a30d 0%, #365314 100%)' }}>
                <p className="text-white font-semibold text-sm">
                  {beforeAfter === 'before'
                    ? 'Depleted soil • Low organic carbon • Chemical dependency'
                    : 'Restored microbiome • High SOC • Zero synthetic inputs'}
                </p>
              </motion.div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Interactive soil layers */}
      <section className="py-20 bg-amber-100/50">
        <div className="max-w-7xl mx-auto px-4">
          <RevealAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900">Interactive Soil Layers</h2>
          </RevealAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              {SOIL_LAYERS.map((layer, i) => (
                <button
                  key={layer.name}
                  onClick={() => setActiveLayer(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer flex items-center gap-4 ${
                    activeLayer === i ? 'bg-white shadow-lg scale-105' : 'bg-white/60 hover:bg-white'
                  }`}
                >
                  <div className={`w-4 h-12 rounded ${layer.color}`} />
                  <div>
                    <div className="font-bold text-amber-900">{layer.name}</div>
                    <div className="text-sm text-slate-600">{layer.desc}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="h-64 rounded-3xl overflow-hidden flex flex-col-reverse shadow-xl">
              {SOIL_LAYERS.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  className={`${layer.color} flex items-center justify-center text-white font-bold text-sm`}
                  animate={{ flex: activeLayer === i ? 2 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {layer.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealAnimation direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Operational Divisions</h2>
          </RevealAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KHETI_BHARAT_DETAILS.pillars.map((pillar, i) => (
              <RevealAnimation key={pillar.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.08}>
                <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 card-lift h-full">
                  <Sprout className="w-8 h-8 text-amber-700 mb-4" />
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline horizontal */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">The KhetiBharat Process Flow</h2>
          <div className="flex gap-6 overflow-x-auto timeline-scroll pb-4">
            {KHETI_BHARAT_DETAILS.processFlow.map((step) => (
              <motion.div
                key={step.step}
                whileHover={{ y: -8 }}
                className="shrink-0 w-64 p-6 bg-white rounded-2xl border border-amber-100 shadow-premium text-center"
              >
                <span className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">{step.step}</span>
                <h4 className="font-bold text-amber-900 text-sm mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer stories */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Farmer Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FARMER_STORIES.map((story) => (
              <div key={story.name} className="glass-panel-dark p-8 rounded-3xl">
                <p className="text-amber-100 italic leading-relaxed mb-6">"{story.quote}"</p>
                <div className="font-bold">{story.name}</div>
                <div className="text-amber-300 text-sm">{story.village}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-800 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Join the Sovereign Farmer Revolution</h2>
          <p className="text-amber-100">Whether you represent a rural cooperative or seek a commercial franchise—we offer formal partnership paths.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/partner?type=farmer" className="px-8 py-4 bg-white text-amber-900 font-bold rounded-2xl hover:bg-amber-50 transition-colors inline-flex items-center gap-2">
              Farmers Registration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/regional-council" className="px-8 py-4 border-2 border-white/40 font-bold rounded-2xl hover:bg-white/10 transition-colors">
              Regional Councils
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
