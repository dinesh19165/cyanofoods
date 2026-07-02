/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { OFFICE_LOCATIONS } from '../data';

type ContactChannel = 'general' | 'farmer' | 'media' | 'investor';

export default function Contact() {
  const [activeChannel, setActiveChannel] = useState<ContactChannel>('general');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div id="contact-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Contact Operations" description="Reach out to Cyano Foods India's Pune HQ, Anantapur regional centers, farmer support desk, or corporate PR team. Submit bulk trade inquiries." />

      {/* Hero Header */}
      <section id="contact-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">GLOBAL LOGISTICS HUB</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Contact Our Offices</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out directly to our processing facilities, biotech research benches, or localized Farmer Support desks.
          </p>
        </div>
      </section>

      {/* Office Nodes Grid */}
      <section id="contact-offices" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICE_LOCATIONS.map((loc, idx) => (
            <div id={`office-card-${idx}`} key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                  {idx === 0 ? "Corporate Headquarters & R&D" : "Deccan Southern Regional Hub"}
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900 leading-tight">
                  {loc.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  {loc.address}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5">
                  <span className="text-slate-400 font-mono text-[9px] uppercase block">Phone Networks</span>
                  <a href={`tel:${loc.phone}`} className="text-slate-900 font-bold font-mono hover:text-emerald-700 block">
                    {loc.phone}
                  </a>
                </div>
                <div className="space-y-1.5">
                  <span className="text-slate-400 font-mono text-[9px] uppercase block">Official Email</span>
                  <a href={`mailto:${loc.email}`} className="text-slate-900 font-bold font-mono hover:text-emerald-700 block break-all">
                    {loc.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map Visualizer & Form Split Grid */}
      <section id="contact-form-section" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Vector Map Placeholder Box */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900">Geographical Operations Map</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Our biotechnology formulation complex is situated in the Hinjawadi IT & Biotech Park in Pune, Maharashtra. Group certification audits and soil trials are co-managed via our sub-center in Anantapur, Andhra Pradesh.
            </p>
            
            {/* Styled SVG Map Box */}
            <div className="w-full h-72 border border-slate-200 rounded-2xl bg-slate-50 relative flex items-center justify-center p-6 select-none overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_40%)]" />
              <div className="text-center space-y-3 relative z-10">
                <span className="text-4xl">🗺️</span>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Hinjawadi, Pune HQ Coordinates</span>
                  <p className="text-slate-400 text-[11px] font-mono">18.5913° N, 73.7389° E</p>
                  <p className="text-slate-400 text-[11px] font-mono">Anantapur Hub: 14.6819° N, 77.6006° E</p>
                </div>
                <div className="inline-flex gap-2 text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Both Nodes Online
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form with channel selectors */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                COMMUNICATIONS GATEWAY
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900">Send an Operational Message</h3>
              <p className="text-slate-500 text-xs">
                Select your specific enquiry category to routing your packet to the appropriate division supervisor.
              </p>
            </div>

            {/* Sub-channel tabs */}
            <div className="flex flex-wrap gap-1.5">
              <button
                id="btn-channel-gen"
                onClick={() => { setActiveChannel('general'); setSubmitted(false); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  activeChannel === 'general' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                General & Sales
              </button>
              <button
                id="btn-channel-farmer"
                onClick={() => { setActiveChannel('farmer'); setSubmitted(false); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  activeChannel === 'farmer' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Farmer Support
              </button>
              <button
                id="btn-channel-media"
                onClick={() => { setActiveChannel('media'); setSubmitted(false); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  activeChannel === 'media' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                PR & Media Desk
              </button>
              <button
                id="btn-channel-invest"
                onClick={() => { setActiveChannel('investor'); setSubmitted(false); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  activeChannel === 'investor' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Investor Liaison
              </button>
            </div>

            {submitted ? (
              <div id="contact-success" className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                <h4 className="font-bold font-display text-emerald-900 text-xs sm:text-sm">Enquiry Package Submitted</h4>
                <p className="text-emerald-700 text-[11px] leading-relaxed max-w-sm mx-auto font-sans">
                  Your communication has been dispatched to our databases. Your unique tracking ticket is registered locally. Our specialized team handles all responses within 48 operational hours.
                </p>
              </div>
            ) : (
              <form id="contact-message-form" onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700">Full Name *</label>
                    <input type="text" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500" placeholder="e.g., Dr. Avanish Kumar" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700">Email Address *</label>
                    <input type="email" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500" placeholder="e.g., info@cyanofoods.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700">Contact Number *</label>
                    <input type="tel" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500" placeholder="e.g., +91 98765 43210" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700">Subject / Intent *</label>
                    <input type="text" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500" placeholder="e.g., Requesting bulk raw samples" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-semibold text-slate-700">Detailed Message *</label>
                  <textarea required rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500" placeholder="Briefly specify your structural requirements or bulk supply quantities." />
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4 text-xs font-mono text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Secure Routing Enforced
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs font-display flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    Send Packet Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
