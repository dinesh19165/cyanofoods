/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Heart, Award, ShieldAlert, Users, Microscope, Sprout } from 'lucide-react';
import SEO from '../components/SEO';
import { ABOUT_OVERVIEW, CORE_VALUES, TIMELINE_EVENTS } from '../data';

export default function About() {
  const getCoreValueIcon = (title: string) => {
    switch (title) {
      case "Scientific Rigor": return <Microscope className="w-5 h-5 text-emerald-600" />;
      case "Ecological Circularity": return <Sprout className="w-5 h-5 text-emerald-600" />;
      case "Farmer Sovereignty": return <Users className="w-5 h-5 text-emerald-600" />;
      default: return <Award className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div id="about-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="About Us" description="Learn about the corporate narrative, molecular biotechnology achievements, vision, and mission of Cyano Foods India OPC Private Limited, led by Dr. Avanish Kumar." />

      {/* Hero Header */}
      <section id="about-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">CORPORATE PROFILE</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Our Corporate Narrative</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Uniting scientific exploration in biotechnology with regenerative agronomy to serve the national interest.
          </p>
        </div>
      </section>

      {/* Overview & Who We Are */}
      <section id="about-overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Who We Are</h2>
              <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-4">
                <p>{ABOUT_OVERVIEW.whoWeAre}</p>
                <p className="font-semibold text-emerald-800">
                  By bringing together bioprocess engineers and dedicated agronomists, we have established a state-of-the-art closed loop ecosystem where biological inputs restore soil micro-carbon, and clinical-grade nutrients nourish humans.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Our Story</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {ABOUT_OVERVIEW.story}
              </p>
            </div>
          </div>

          {/* Vision and Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="p-3 w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-emerald-400">Our Vision Statement</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {ABOUT_OVERVIEW.vision}
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl space-y-4 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/50 rounded-full blur-2xl" />
              <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-emerald-800">Our Mission Mandate</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {ABOUT_OVERVIEW.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="about-values" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">ETHICAL DIRECTIVES</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Our Core Operating Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div id={`val-box-${idx}`} key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2.5 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  {getCoreValueIcon(val.title)}
                </div>
                <h3 className="font-bold text-sm sm:text-base font-display text-slate-900 leading-snug">{val.title}</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership message */}
      <section id="about-leadership" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 text-white p-8 sm:p-12 rounded-[40px] border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_70%)]" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left avatar/bio */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
              <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-4xl shadow-inner shadow-black/10">
                {ABOUT_OVERVIEW.leadershipMessage.avatar}
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base font-display text-emerald-400">{ABOUT_OVERVIEW.leadershipMessage.author}</h3>
                <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-1">{ABOUT_OVERVIEW.leadershipMessage.role}</p>
              </div>
            </div>

            {/* Message block */}
            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-[10px] font-bold font-mono text-emerald-400 tracking-widest uppercase">EXECUTIVE MESSAGE</span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic font-sans">
                "{ABOUT_OVERVIEW.leadershipMessage.text}"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="about-timeline" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold font-mono tracking-wider text-xs uppercase">CORPORATE CHRONOLOGY</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Our Path of Progression</h2>
          </div>

          <div className="relative border-l-2 border-emerald-700/20 ml-4 md:ml-32 space-y-8">
            {TIMELINE_EVENTS.map((evt, idx) => (
              <div id={`timeline-evt-${idx}`} key={idx} className="relative pl-6 md:pl-8">
                {/* Visual marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-700 border-4 border-slate-50" />
                
                {/* Floating year label on wide screens */}
                <div className="md:absolute md:right-full md:mr-8 md:top-1 font-mono font-bold text-lg text-emerald-700">
                  {evt.year}
                </div>
                
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm max-w-2xl space-y-1">
                  <h3 className="font-bold text-xs sm:text-sm font-display text-slate-900">{evt.title}</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
