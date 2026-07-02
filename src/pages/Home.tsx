/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sprout, Award, Beaker, Leaf, ArrowRight, ShieldCheck, Microscope, Database, Trees, Building, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import CountUp from '../components/UI/CountUp';
import InteractiveMap from '../components/UI/InteractiveMap';
import { ABOUT_OVERVIEW, SERVICES_DATA, PRODUCTS_DATA, KHETI_BHARAT_DETAILS, NEWS_LIST, COUNCIL_DATA, SUSTAINABILITY_ESG } from '../data';

export default function Home() {
  const featuredServices = SERVICES_DATA.slice(0, 3);
  const featuredProducts = PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 3);
  const latestNews = NEWS_LIST.slice(0, 3);

  return (
    <div id="home-page-container" className="pt-20">
      <SEO title="Home" description="Cyano Foods India OPC Private Limited combines molecular biology with natural agronomy to engineer premium Spirulina, high-efficiency organic inputs, and circular food systems." />

      {/* Hero Banner Section */}
      <section id="hero-banner" className="relative min-h-[90vh] flex items-center bg-[#F8FAF8] border-b border-[#E0E7E0] overflow-hidden py-16 pt-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.06),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-[0.2em] font-mono"
            >
              <div className="w-8 h-[2px] bg-[#22c55e]" />
              Agriculture • Biotech • Food Technology
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold leading-[1.05] tracking-tighter text-[#1A3317] font-display"
            >
              Cultivating the <br />
              <span className="text-emerald-700">Future of Food</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              India’s premier biotechnology hub revolutionizing functional foods and sustainable agriculture through advanced Spirulina research and rural empowerment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                to="/products"
                className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-900/10 transition-all text-sm cursor-pointer"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/khetibharat"
                className="px-8 py-4 bg-white border border-[#E0E7E0] hover:bg-slate-50 active:scale-[0.98] text-emerald-700 font-bold rounded-xl transition-all text-sm cursor-pointer"
              >
                Our Ecosystem
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6 grid grid-cols-2 grid-rows-2 gap-4 bg-[#F0F4F0] p-6 sm:p-8 rounded-[32px] border border-[#E0E7E0] relative shadow-sm">
            
            {/* Box 1: Innovation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-[#E0E7E0] min-h-[160px]"
            >
              <div className="w-12 h-12 bg-[#F0F4F0] text-emerald-700 rounded-2xl flex items-center justify-center">
                <Beaker className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#1A3317] font-display">Innovation</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Future Foods Lab</p>
              </div>
            </motion.div>

            {/* Box 2: KhetiBharat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-emerald-700 p-6 rounded-3xl shadow-xl flex flex-col justify-between text-white min-h-[160px]"
            >
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center text-white">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 font-display">KhetiBharat</h3>
                <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Direct Sourcing Hub</p>
              </div>
            </motion.div>

            {/* Box 3: Farmers Stats & Certification Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between col-span-2 relative overflow-hidden border border-[#E0E7E0] min-h-[180px]"
            >
              <div className="absolute top-0 right-0 p-6">
                 <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold font-display shadow-sm">C</div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-emerald-800 text-xs font-bold font-display shadow-sm">F</div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-300 flex items-center justify-center text-emerald-900 text-xs font-bold font-display shadow-sm">I</div>
                 </div>
              </div>
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-700 tracking-tight font-display">
                  <CountUp end={12500} />+
                </span>
                <p className="text-sm text-slate-600 font-bold font-display">Farmers Empowered via Regional Councils</p>
              </div>
              <div className="h-[1px] w-full bg-slate-100 my-4" />
              <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Certification Status</span>
                 <span className="px-3 py-1 bg-[#F0F4F0] text-emerald-700 rounded-full text-[10px] font-bold uppercase font-mono border border-[#E0E7E0]">ISO 22000 Certified</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section id="about-overview-section" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase border-b-2 border-emerald-700 pb-1">
                CORPORATE INTRODUCTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
                Where Science Meets the <span className="text-emerald-700">Regenerative Earth</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {ABOUT_OVERVIEW.whoWeAre}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm tracking-wide group"
                >
                  Read Our Corporate Narrative
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-base font-display text-slate-900">Algal Biotechnology</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Closed-system borosilicate photobioreactors that isolate Arthrospira platensis from open-air pollutants, securing medical-grade cell purity.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-base font-display text-slate-900">Natural Agronomy</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Eliminating synthetic chemical dependencies entirely. Restoring organic microbial structures using advanced soil bio-stimulants.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Trees className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-base font-display text-slate-900">KhetiBharat Program</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Organizing smallholders into block directories, providing free bio-inputs, and committing to pre-harvest stable price buybacks.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-base font-display text-slate-900">Regional Governance</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Decentralized advisory councils mapping heavy metals, certifying transition soils, and verifying local fair pricing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics-section" className="py-16 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {KHETI_BHARAT_DETAILS.statistics.map((stat, i) => (
              <div id={`stat-box-${i}`} key={i} className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-emerald-400">
                  <CountUp end={parseInt(stat.value)} suffix={stat.suffix || ""} />
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-display font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ecosystem & Core Divisions */}
      <section id="ecosystem-divisions" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">THE CIRCULAR BIO-MODEL</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Our Closed-Loop Ecosystem</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We coordinate biology and technology into a single circular infrastructure where carbon emissions are locked into active nourishment, and processing waste returns to heal agricultural soils.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Division 1: Algae Biotech */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-emerald-600 to-green-500" />
              <div className="flex justify-between items-start">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
                  <Microscope className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Biotechnology Block
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-slate-900">Algal Biotechnology Division</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Focuses on isolated culture isolation, borosilicate vertical arrays, mechanical vacuum dewatering, and spray-dehydration. We specialize in synthesizing Phycocyanin, Beta-Carotene, and raw clean-lipid biomass.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">✓ Pure Arthrospira platensis culture lines</li>
                <li className="flex items-center gap-2">✓ Controlled light spectra & nutrient profiling</li>
                <li className="flex items-center gap-2">✓ Heavy-metal & toxin-free cultivation protocols</li>
                <li className="flex items-center gap-2">✓ Low-temperature pharmaceutical drying technology</li>
              </ul>
              <div className="pt-2">
                <Link to="/products" className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs group">
                  Browse Algal Formulations
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Division 2: Natural Agronomy */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-green-600 to-teal-500" />
              <div className="flex justify-between items-start">
                <div className="p-3 bg-green-50 text-green-700 rounded-2xl">
                  <Trees className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold font-mono text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Agronomic Block
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-slate-900">Sustainable Natural Agronomy</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Drives our farmer integration networks, organic certification protocols, and the deployment of microalgae soil stimulants. We lead the complete restoration of rhizospheric bacterial cycles in depleted crop soils.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">✓ Zero synthetic pesticide conversion pathways</li>
                <li className="flex items-center gap-2">✓ Microbial inoculants & algae soil biostimulants</li>
                <li className="flex items-center gap-2">✓ PGS-India cluster certification auditing</li>
                <li className="flex items-center gap-2">✓ Guaranteed pre-harvest buyback directories</li>
              </ul>
              <div className="pt-2">
                <Link to="/khetibharat" className="inline-flex items-center gap-2 text-green-700 font-bold text-xs group">
                  Explore KhetiBharat
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="featured-services" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">TECHNICAL CAPABILITIES</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Featured Services</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 font-bold text-xs transition-colors">
              View All 9 Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div id={`svc-card-${service.id}`} key={service.id} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                    {service.iconName === 'Beaker' ? <Beaker className="w-6 h-6" /> :
                     service.iconName === 'Leaf' ? <Leaf className="w-6 h-6" /> :
                     <Award className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{service.shortDescription}</p>
                </div>
                <div className="pt-6 border-t border-slate-200/60 mt-6">
                  <Link to={`/services?id=${service.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800">
                    Explore Benefits & Process
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">SCIENTIFIC NUTRITION</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Clinical-Grade Products</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 font-bold text-xs transition-colors">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((prod) => (
              <div id={`prod-card-${prod.id}`} key={prod.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 space-y-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                    {prod.categoryLabel}
                  </span>
                  <h3 className="text-base font-bold font-display text-slate-900 leading-tight">{prod.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{prod.description}</p>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <Link to="/products" className="text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center gap-1">
                    Technical Specifications
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Geography Map (Regional Council + KhetiBharat) */}
      <section id="interactive-map-section" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-400 font-bold font-mono tracking-wider text-xs uppercase">REGIONAL COMPLIANCE & HUB NETWORK</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">National Operating Infrastructure</h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Click on the active operational points across the map to inspect regional farmer connections, soil validation networks, and collection facilities.
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* Sustainability ESG Highlights Section */}
      <section id="sustainability-highlights" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase border-b-2 border-emerald-700 pb-1">
                ECOLOGICAL FOOTPRINT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
                Our Zero-Waste Biorefinery Standard
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {SUSTAINABILITY_ESG.overview}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-center">
                  <div className="text-2xl font-bold text-emerald-700 font-mono">2.4x</div>
                  <div className="text-[10px] text-slate-500 font-display font-medium uppercase tracking-wider">Carbon Capture</div>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-center">
                  <div className="text-2xl font-bold text-emerald-700 font-mono">94%</div>
                  <div className="text-[10px] text-slate-500 font-display font-medium uppercase tracking-wider">Water Recycled</div>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/sustainability" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800">
                  Read Full ESG Disclosures
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative flex justify-center">
              {/* Beautiful vector diagram detailing the circularity of Cyano Foods */}
              <div className="w-full max-w-lg bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
                <h4 className="text-sm font-bold font-display text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-200">
                  Industrial Circular Bio-Flow
                </h4>
                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-900">Carbon & Sunlight Ingestion</span>
                      <p className="text-[10px] text-slate-500">Vertical borosilicate photobioreactors lock in atmospheric CO2.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-900">Metabolic Protein Synthesis</span>
                      <p className="text-[10px] text-slate-500">Separating phycocyanin blue crystals and clinical-grade dry biomass.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-900">Upcycling Refinery Co-Products</span>
                      <p className="text-[10px] text-slate-500">Transforming cellulosic membrane residues into nitrogen soil bio-stimulants.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">4</span>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-900">Soil Microbiome Rejuvenation</span>
                      <p className="text-[10px] text-slate-500">Enrolling farmers in KhetiBharat, increasing organic soil organic carbon levels.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Latest News & Media Section */}
      <section id="news-highlights" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">MEDIA CENTER</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Scientific News & Press</h2>
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 font-bold text-xs transition-colors">
              Access Media Kit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <div id={`news-card-${news.id}`} key={news.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 space-y-3.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-emerald-700 font-semibold uppercase">{news.categoryLabel}</span>
                    <span className="text-slate-400">{news.date}</span>
                  </div>
                  <h3 className="text-base font-bold font-display text-slate-900 line-clamp-2 leading-snug">{news.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{news.summary}</p>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                  <Link to={`/news?id=${news.id}`} className="text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center gap-1">
                    Read Press Statement
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Call To Action */}
      <section id="global-cta-section" className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(16,185,129,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">JOIN THE CIRCULAR FUTURE</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">Let's Co-Engineer Abundance</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you are a farming cooperative seeking stable organic markets, a bioprocess academic looking for research synergies, or an institutional investor backing carbon-negative technology—there is a verified channel for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/partner"
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-sm tracking-wide transition-all shadow-md"
            >
              Access Partner Registration
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all"
            >
              Speak to Our Liaison
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
