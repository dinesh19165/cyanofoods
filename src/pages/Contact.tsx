/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import RevealAnimation from '../components/UI/RevealAnimation';
import RippleButton from '../components/UI/RippleButton';
import { PAGE_VIDEOS, LOGO_PATH } from '../constants/brand';
import { OFFICE_LOCATIONS } from '../data';

type ContactChannel = 'general' | 'farmer' | 'media' | 'investor';

export default function Contact() {
  const [activeChannel, setActiveChannel] = useState<ContactChannel>('general');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const channels: { id: ContactChannel; label: string }[] = [
    { id: 'general', label: 'General & Sales' },
    { id: 'farmer', label: 'Farmer Support' },
    { id: 'media', label: 'PR & Media' },
    { id: 'investor', label: 'Investor Liaison' },
  ];

  return (
    <div id="contact-page-container" className="min-h-screen bg-slate-50">
      <SEO title="Contact Operations" description="Reach out to Cyano Foods India's Pune HQ, Anantapur regional centers, farmer support desk, or corporate PR team." />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.1),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-emerald-300 font-semibold text-xs uppercase tracking-widest">Global Logistics Hub</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">Contact Our Offices</h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to our processing facilities, biotech research benches, or localized Farmer Support desks.
          </p>
        </div>
      </section>

      {/* Office Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICE_LOCATIONS.map((loc, idx) => (
            <RevealAnimation key={idx} direction="up" delay={idx * 0.1}>
              <div className="glass-panel rounded-3xl p-8 card-lift space-y-6">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase">
                  {idx === 0 ? 'Corporate HQ & R&D' : 'Deccan Southern Hub'}
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900">{loc.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  {loc.address}
                </p>
                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Phone</span>
                    <a href={`tel:${loc.phone}`} className="text-slate-900 font-semibold hover:text-emerald-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" /> {loc.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Email</span>
                    <a href={`mailto:${loc.email}`} className="text-slate-900 font-semibold hover:text-emerald-700 flex items-center gap-2 break-all">
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0" /> {loc.email}
                    </a>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </section>

      {/* Split: Map + Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RevealAnimation direction="left">
            <div className="space-y-6 h-full">
              <div>
                <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Find Us</span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-2">Geographical Operations</h3>
              </div>
              {/* 3D office illustration */}
              <div className="relative rounded-3xl overflow-hidden shadow-premium-lg h-64 lg:h-80 bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center">
                <motion.img
                  src={LOGO_PATH}
                  alt="Cyano Foods"
                  animate={{ y: [0, -12, 0], rotateY: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="w-32 h-32 object-contain drop-shadow-2xl relative z-10"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-800/20 to-transparent" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBIMzkuOVYwSDQwdjQwSDB6TTQwIDQwVjM5LjlIMFY0MFoiIGZpbGw9IiMwRjZCM0UiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-50" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-premium-lg h-[300px] border border-slate-100">
                <iframe
                  title="Cyano Foods India Location"
                  src="https://maps.google.com/maps?q=Hinjawadi,Pune,Maharashtra,India&z=14&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-slate-500">Hinjawadi IT & Biotech Park, Pune • Anantapur Regional Hub</p>
            </div>
          </RevealAnimation>

          {/* Contact Form */}
          <RevealAnimation direction="right">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 space-y-6 h-full">
              <div>
                <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Communications Gateway</span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-2">Send a Message</h3>
                <p className="text-slate-500 text-sm mt-2">Select your enquiry category for proper routing.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {channels.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => { setActiveChannel(ch.id); setSubmitted(false); }}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      activeChannel === ch.id
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-300'
                    }`}
                  >
                    {ch.label}
                  </button>
                ))}
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                  <h4 className="font-bold text-emerald-900">Enquiry Submitted Successfully</h4>
                  <p className="text-emerald-700 text-sm">Our team will respond within 48 operational hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-700">Full Name *</label>
                      <input type="text" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500" placeholder="Your name" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-700">Email *</label>
                      <input type="email" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-700">Phone *</label>
                      <input type="tel" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-700">Subject *</label>
                      <input type="text" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500" placeholder="Your inquiry subject" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-slate-700">Message *</label>
                    <textarea required rows={5} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      Secure routing enforced
                    </span>
                    <RippleButton type="submit" variant="primary">
                      Send Message <ArrowRight className="w-4 h-4" />
                    </RippleButton>
                  </div>
                </form>
              )}
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
