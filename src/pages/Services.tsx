/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Beaker, Leaf, Award, Briefcase, Sparkles, Hammer, GraduationCap, Globe, RefreshCw, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

// Extend services to complete all 9 corporate divisions
const ALL_SERVICES: ServiceItem[] = [
  ...SERVICES_DATA,
  {
    id: "training",
    title: "Scientific Training Academies",
    shortDescription: "Zero-cost educational hubs providing structured modules in natural farming, micro-algae culture management, and organic compliance.",
    description: "Our dedicated training academies equip rural youth, farmers, and women self-help groups (SHGs) with operational knowledge of biology-first agronomy. Curriculums are validated by agrarian universities, covering bio-manure preparation, polyculture crop rotation, and water conservation engineering.",
    iconName: "GraduationCap",
    benefits: [
      "Access to official certification training recognized under PGS-India mandates",
      "Free biological starter cultures and heirloom crop seed kits",
      "Comprehensive digital manuals accessible in regional Indian languages",
      "Hands-on demonstration models at local community research test beds"
    ],
    process: [
      { step: 1, title: "Curriculum Enrolment", desc: "Selecting state-appropriate regional programs tailored for local soil profiles." },
      { step: 2, title: "On-Field Demonstration", desc: "Hands-on instruction in organic liquid composting and pest-repellent preparation." },
      { step: 3, title: "Competency Verification", desc: "Practical and theoretical field review led by Regional Council agronomists." },
      { step: 4, title: "Certification & Licensing", desc: "Issuing formal KhetiBharat agronomy credentials and launching village inputs." }
    ]
  },
  {
    id: "market-linkage",
    title: "Global Market Linkages",
    shortDescription: "Connecting certified farmer clusters directly to global and premium national buyers, completely removing predatory middlemen.",
    description: "We handle the complete storage, logistical routing, documentation, and compliance required to place certified organic Indian grains, superfoods, and microalgae on premium global shelves, ensuring maximum return value for grassroots cooperatives.",
    iconName: "Globe",
    benefits: [
      "100% elimination of commission agents, brokers, and predatory local lenders",
      "Stable pre-harvest pricing agreements signed directly with the farmer",
      "Integration into block-chain mapped QR-code trace systems for end-users",
      "Direct exposure to European Union, USDA, and FSSAI export clearance avenues"
    ],
    process: [
      { step: 1, title: "Crop Volume Registry", desc: "Estimating harvest outputs using field diaries and satellite canopy analysis." },
      { step: 2, title: "Purity Grade Batching", desc: "Running chemical testing for heavy metals to assign international grades." },
      { step: 3, title: "Logistics Synchronization", desc: "Direct consolidation of materials from rural collection hubs into central sorting." },
      { step: 4, title: "Trade Clearance", desc: "Handling custom clearances, phytosanitary certificates, and buyer shipments." }
    ]
  },
  {
    id: "value-addition",
    title: "Post-Harvest Value Addition",
    shortDescription: "Deploying farmgate solar processing, sorting, grading, and vacuum-dehydration to retain maximum product quality and wealth within villages.",
    description: "Cyano Foods India establishes solar-powered primary processing hubs right in farming blocks. By grading, sorting, cleaning, and dry-packaging crops at the source, we prevent moisture damage, extend crop shelf-lives, and employ rural youth.",
    iconName: "RefreshCw",
    benefits: [
      "Significant reduction of post-harvest cargo losses from 25% down to under 2%",
      "Preservation of temperature-sensitive enzymes and delicate crop proteins",
      "Primary processing margins retained in local rural community directories",
      "HACCP and clean-room equivalent grading environments right in the village"
    ],
    process: [
      { step: 1, title: "Local Ingestion & Check", desc: "Receiving raw crops from regional farms at off-grid solar-powered centers." },
      { step: 2, title: "Pneumatic Seed Cleaning", desc: "Using mechanical separators to remove field stones, dust, and non-target seeds." },
      { step: 3, title: "Dehydration & Infiltration", desc: "Low-temperature vacuum drying to achieve standard water activity profiles." },
      { step: 4, title: "Sealed Barrier Packaging", desc: "Nitrogen flushing and high-barrier bag sealing to safeguard nutritional properties." }
    ]
  }
];

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceId = searchParams.get('id') || ALL_SERVICES[0].id;
  const [activeService, setActiveService] = useState<ServiceItem>(
    ALL_SERVICES.find(s => s.id === serviceId) || ALL_SERVICES[0]
  );

  useEffect(() => {
    const found = ALL_SERVICES.find(s => s.id === serviceId);
    if (found) {
      setActiveService(found);
    }
  }, [serviceId]);

  const selectService = (id: string) => {
    setSearchParams({ id });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Beaker': return <Beaker className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Hammer': return <Hammer className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <RefreshCw className="w-5 h-5" />;
    }
  };

  return (
    <div id="services-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Services & Capabilities" description="Explore our 9 core business divisions, including Algal Biotech R&D, Natural Farming conversions, organic certification support, and clean-label manufacturing." />

      {/* Hero Header */}
      <section id="services-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">BUSINESS CAPABILITIES</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Our Core Business Divisions</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From industrial microalgae photobioreactors to grassroots farmer training academies—we govern an integrated circular value chain.
          </p>
        </div>
      </section>

      {/* Services Directory & Main Detail Split */}
      <section id="services-layout" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Rail (List of 9 Services) */}
          <div id="services-nav-rail" className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/80 p-4 space-y-1 shadow-sm">
            <span className="px-3 text-[10px] font-bold font-mono text-emerald-700 tracking-wider uppercase block mb-3">
              SELECT DIVISION
            </span>
            <div className="space-y-1.5">
              {ALL_SERVICES.map((s) => (
                <button
                  id={`btn-select-${s.id}`}
                  key={s.id}
                  onClick={() => selectService(s.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-xs font-semibold font-display flex items-center justify-between gap-3 transition-all ${
                    activeService.id === s.id
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/10'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`p-1.5 rounded-lg ${
                      activeService.id === s.id ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {getIcon(s.iconName)}
                    </span>
                    <span>{s.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 opacity-50 transition-transform ${
                    activeService.id === s.id ? 'translate-x-0.5 opacity-100' : ''
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Detail Block */}
          <div id="services-detail-panel" className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 animate-fade-in">
            
            {/* Header / Overview */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {activeService.title} Details
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-bold font-display text-slate-900 tracking-tight leading-none">
                {activeService.title}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans pt-2">
                {activeService.description}
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold font-display text-slate-900 uppercase tracking-wider">
                Key Operational Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.benefits.map((benefit, bIdx) => (
                  <div id={`benefit-${activeService.id}-${bIdx}`} key={bIdx} className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <span className="text-[11px] sm:text-xs text-slate-600 leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold font-display text-slate-900 uppercase tracking-wider">
                Our Execution Methodology
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
                {activeService.process.map((p, pIdx) => (
                  <div id={`process-${activeService.id}-${pIdx}`} key={pIdx} className="space-y-3 relative">
                    <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                      <span className="w-8 h-8 rounded-xl bg-slate-900 text-emerald-400 font-mono font-bold flex items-center justify-center text-xs">
                        {p.step}
                      </span>
                      <h4 className="font-bold text-xs font-display text-slate-900 leading-tight">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-[10.5px] leading-relaxed font-sans sm:pl-0 pl-12">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabbed Action Call */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 mt-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-sm sm:text-base font-display text-emerald-400">Ready to leverage this capability?</h4>
                <p className="text-slate-400 text-[10px] sm:text-xs font-sans">
                  Speak with our technical liaisons to coordinate trials, audits, or group integrations.
                </p>
              </div>
              <Link
                to="/partner"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1"
              >
                Launch Collaboration
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
          
        </div>
      </section>

    </div>
  );
}
