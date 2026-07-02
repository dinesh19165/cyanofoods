/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Users, Landmark, FileText, CheckCircle, ArrowRight, MapPin, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { COUNCIL_DATA, DOWNLOADS_LIST, FAQS_DATA } from '../data';

export default function RegionalCouncil() {
  // Pull council specific materials
  const councilDownloads = DOWNLOADS_LIST.filter(d => d.id === 'dl-5' || d.id === 'dl-6');
  const councilFaqs = FAQS_DATA.filter(f => f.category === 'regional_council' || f.category === 'certification');

  return (
    <div id="council-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Regional Councils" description="Explore the structure and regulatory responsibilities of the Cyano Foods Regional Councils, maintaining pesticide audits and PGS organic certifications." />

      {/* Hero Header */}
      <section id="council-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">REGULATORY COMPLIANCE</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">The Regional Councils</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Autonomous state committees consisting of senior scientists, soil agronomists, and certification auditors monitoring regional natural farming compliance.
          </p>
        </div>
      </section>

      {/* Overview Block */}
      <section id="council-overview" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase border-b-2 border-emerald-700 pb-1">
                REGULATORY OVERSIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                Guarding the Ecological Purity of Our Supply Chain
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {COUNCIL_DATA.overview}
              </p>
              
              <div className="pt-2 space-y-3 text-xs text-slate-600 font-sans">
                {COUNCIL_DATA.responsibilities.map((resp, i) => (
                  <div id={`resp-${i}`} key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Illustration/Visual stats */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6">
              <h4 className="text-sm font-bold font-display text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                Council Validation Parameters
              </h4>
              <ul className="space-y-4 text-xs font-mono text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Soil Carbon Baseline</span>
                  <span className="text-emerald-700 font-semibold">&gt; 1.2% SOC</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Chemical Pesticide Residue</span>
                  <span className="text-emerald-700 font-semibold">0.00% (Undetectable)</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Pond Heavy Metal Testing</span>
                  <span className="text-emerald-700 font-semibold">FDA Clinically Clear</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Minimum Farm Buyback Rate</span>
                  <span className="text-emerald-700 font-semibold">40% Above Market Baseline</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Council Board Members */}
      <section id="council-members" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">COUNCIL MEMBERSHIP</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Board of Trustees & Directors</h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Our regional operations are overseen by distinguished figures in agronomic research and rural development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COUNCIL_DATA.members.map((member, i) => (
              <div id={`member-card-${i}`} key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold">
                    {member.name.substring(3, 4)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base font-display text-slate-900 leading-tight">{member.name}</h3>
                    <p className="text-[10px] text-emerald-600 font-semibold font-mono tracking-wide uppercase mt-1">{member.role}</p>
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans leading-relaxed">{member.qualification}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-6 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{member.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Core Activities */}
      <section id="council-activities" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">FIELD OPERATIONS</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Ongoing Activities & Auditing Schedules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COUNCIL_DATA.activities.map((act, i) => (
              <div id={`act-box-${i}`} key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex gap-4 items-start">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base font-display text-slate-900 leading-snug">{act.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Resources & Downloads */}
      <section id="council-resources" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Downloads list */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-700" />
              Council Regulatory Downloads
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Retrieve formal guidance documents, training handbooks, and group certification forms drafted by our regional agronomists.
            </p>
            <div className="space-y-4 pt-2">
              {councilDownloads.map((doc) => (
                <div id={`doc-item-${doc.id}`} key={doc.id} className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold uppercase">{doc.categoryLabel}</span>
                    <h4 className="font-bold text-xs font-display text-slate-900">{doc.title}</h4>
                    <p className="text-[10px] text-slate-400 font-mono">Format: {doc.format} | Size: {doc.fileSize}</p>
                  </div>
                  <Link
                    to="/downloads"
                    className="p-2.5 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-lg transition-colors text-slate-600 shrink-0"
                    aria-label={`Download ${doc.title}`}
                  >
                    ↓
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Regulatory FAQs */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              Certification FAQs
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Direct responses to regulatory compliance, organic NPOP transition protocols, and heavy-metal testing schedules.
            </p>
            <div className="space-y-4 pt-2">
              {councilFaqs.map((faq) => (
                <div id={`faq-box-${faq.id}`} key={faq.id} className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2">
                  <h4 className="font-bold text-xs sm:text-sm font-display text-slate-900 flex gap-2">
                    <span className="text-emerald-700 font-mono">Q:</span>
                    {faq.question}
                  </h4>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-sans pl-4">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Council Enrolment CTA */}
      <section id="council-cta" className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">FARMER REGISTRATION & COMPLIANCE</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Transition Your Farm to Natural Sovereignty</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
            Contact your local regional council to request soil baseline sampling, PGS-India group registration support, and access to subsidized KhetiBharat bio-stimulants.
          </p>
          <div className="pt-4">
            <Link
              to="/partner?type=farmer"
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide transition-all shadow-md inline-flex items-center gap-2"
            >
              Register for Local Auditing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
