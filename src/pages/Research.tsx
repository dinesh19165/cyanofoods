/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Microscope, Award, BookOpen, GraduationCap, ArrowRight, Beaker, Zap, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { RESEARCH_DETAILS } from '../data';

export default function Research() {
  return (
    <div id="research-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Research & Biotechnology" description="Explore the scientific publications, biotech laboratories, and academic collaborations of Cyano Foods India OPC Private Limited, led by Dr. Avanish Kumar." />

      {/* Hero Header */}
      <section id="research-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">SCIENTIFIC BASELINE</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Research & Innovation</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Bridging molecular genetics, microalgal physiology, fluid engineering, and advanced human nutrition.
          </p>
        </div>
      </section>

      {/* R&D Overview and Areas */}
      <section id="research-areas" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase border-b-2 border-emerald-700 pb-1">
                MOLECULAR BIOLOGY LABS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">
                Pioneering the Boundaries of Cyanobacterial Engineering
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {RESEARCH_DETAILS.overview}
              </p>
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4">
                <Microscope className="w-10 h-10 text-emerald-700 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-bold text-xs text-slate-900 font-display">HPLC Clean-Cell Audits</span>
                  <p className="text-[10px] text-slate-500 font-sans">We run continuous high-performance liquid chromatography checks on every single production lot.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {RESEARCH_DETAILS.areas.map((area, idx) => (
                <div id={`area-card-${idx}`} key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2.5 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    {idx === 0 ? <Microscope className="w-5 h-5" /> :
                     idx === 1 ? <Beaker className="w-5 h-5" /> :
                     idx === 2 ? <Zap className="w-5 h-5" /> :
                     <Award className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base font-display text-slate-900 leading-snug">{area.title}</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-sans">{area.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Innovation Block (Biotech, Food Tech, Future Foods) */}
      <section id="research-innovation" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">CLEAN TECHNOLOGY</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Next-Generation Biotechnology & Food Formulation</h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We leverage clean process engineering to isolate biological molecules, completely bypassing chemical extraction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Division 1: Biotechnology */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base sm:text-lg font-display text-slate-900">Advanced Biotechnology</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                Our cellular biologists selectively cultivate microalgal cultures with high active compound profiles. Operating sterile vertical glass tubes with controlled fluid velocities and nutrient balances, we protect sensitive enzymes from oxidation.
              </p>
            </div>

            {/* Division 2: Food Technology */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                <Beaker className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base sm:text-lg font-display text-slate-900">Clean Food Formulation</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                Our formulation team designs high-end functional recipes that mask microalgal odors while protecting nutrient profiles. We develop natural, water-soluble sky-blue extracts and thermal-stable proteins suitable for B2B contracts.
              </p>
            </div>

            {/* Division 3: Future Foods */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base sm:text-lg font-display text-slate-900">Future Food Concepts</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                Active pilot trials are underway for our upcoming Phyco-isolate Pure Protein Powder—a highly-bioavailable plant protein isolate featuring neutral visual appearance, perfect solubility, and a balanced, hypoallergenic amino acid spectrum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Collaborations */}
      <section id="research-academics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Publications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-700" />
              Peer-Reviewed Scientific Publications
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Our research team continuously publishes primary findings regarding algae physiology and soil restoration metrics in accredited international journals.
            </p>
            <div className="space-y-4 pt-2">
              {RESEARCH_DETAILS.publications.map((pub, i) => (
                <div id={`pub-box-${i}`} key={i} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <div className="flex justify-between items-start text-[10px] font-mono text-slate-400">
                    <span>{pub.journal}</span>
                    <span>{pub.year}</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm font-display text-slate-900 leading-snug">{pub.title}</h4>
                  <p className="text-xs text-emerald-700 font-medium font-sans">Authors: {pub.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborations */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-700" />
              Academic & Industrial Collaborations
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              We co-engineer biotechnology and agronomical research with leading research institutes, universities, and organic scientific panels globally.
            </p>
            <div className="space-y-3 pt-2">
              {RESEARCH_DETAILS.collaborations.map((col, i) => (
                <div id={`col-item-${i}`} key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 font-sans text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{col}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
