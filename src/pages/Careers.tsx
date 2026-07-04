/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ClipboardList, MapPin, ArrowRight, ShieldCheck, CheckCircle2, Heart, Coffee, GraduationCap, Globe, Users } from 'lucide-react';
import SEO from '../components/SEO';
import RevealAnimation from '../components/UI/RevealAnimation';
import RippleButton from '../components/UI/RippleButton';
import { PAGE_VIDEOS } from '../constants/brand';
import { CAREER_LISTINGS } from '../data';
import { CareerPosition } from '../types';

const BENEFITS = [
  { icon: Coffee, title: 'Wellness & Nutrition', desc: 'Complimentary Spirulina supplements and organic cafeteria meals.' },
  { icon: GraduationCap, title: 'Research Grants', desc: 'Access to lab facilities and publication support for PhD candidates.' },
  { icon: Globe, title: 'Global Exposure', desc: 'International conference attendance and cross-border collaborations.' },
  { icon: Users, title: 'Farmer Field Days', desc: 'Quarterly KhetiBharat immersion programs in rural India.' },
];

const HIRING_STEPS = [
  { step: 1, title: 'Apply', desc: 'Submit your dossier online' },
  { step: 2, title: 'Review', desc: 'HR & team screening' },
  { step: 3, title: 'Interview', desc: 'Technical & culture fit' },
  { step: 4, title: 'Offer', desc: 'Welcome to Cyano Foods' },
];

const OFFICE_IMAGES = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop',
];

export default function Careers() {
  const [activeTab, setActiveTab] = useState<'all' | 'full_time' | 'internship'>('all');
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);
  const [applyJob, setApplyJob] = useState<CareerPosition | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = activeTab === 'all' ? CAREER_LISTINGS : CAREER_LISTINGS.filter((j) => j.type === activeTab);

  const handleApplySubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setApplyJob(null); }, 5000);
  };

  return (
    <div id="careers-page-container" className="min-h-screen bg-slate-50">
      <SEO title="Careers & Internships" description="Join the scientific, agronomic, or social development teams at Cyano Foods India OPC Private Limited." />

      {/* Split hero with culture video */}
      <section className="relative min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center p-8 sm:p-16 lg:p-20 bg-slate-900 text-white order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Human Capital</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-display">
              Join Our <span className="text-gradient-dark">Scientific Mission</span>
            </h1>
            <p className="text-slate-400 leading-relaxed max-w-lg">
              Co-engineer sustainable nutrition, optimize biological carbon capture, and restore soils alongside elite bioprocess scientists and agronomists.
            </p>
            <RippleButton to="#openings" variant="gold">View Open Positions</RippleButton>
          </motion.div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full order-1 lg:order-2">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={PAGE_VIDEOS.careers} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-emerald-900/20" />
        </div>
      </section>

      {/* Hiring process */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Our Hiring Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIRING_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-emerald-50 border border-emerald-100"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <h3 className="font-bold text-emerald-900">{s.title}</h3>
                <p className="text-slate-500 text-xs mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Life at Cyano Foods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <RevealAnimation key={b.title} direction="up" delay={i * 0.08}>
                <div className="glass-panel-dark p-6 rounded-2xl card-lift h-full">
                  <b.icon className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="font-bold mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm">{b.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Office gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Our Workspaces</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICE_IMAGES.map((src, i) => (
              <div key={i} className="img-zoom-container rounded-2xl overflow-hidden h-40 sm:h-48">
                <img src={src} alt="" className="img-zoom w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="p-8 bg-emerald-950 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-400 text-xs font-bold uppercase flex items-center gap-1"><Heart className="w-4 h-4" /> Grassroots Mobilization</span>
            <h3 className="text-xl font-bold mt-2">Looking to Volunteer?</h3>
            <p className="text-slate-300 text-sm mt-2">Join KhetiBharat as a rural field volunteer supporting regional councils and natural agronomy demonstrations.</p>
          </div>
          <Link to="/partner?type=internship" className="px-6 py-3 bg-emerald-600 rounded-xl font-bold text-sm whitespace-nowrap inline-flex items-center gap-2">
            Register as Volunteer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Job openings */}
      <section id="openings" className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
        <div className="flex justify-center gap-2 mb-10">
          {(['all', 'full_time', 'internship'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSelectedJob(null); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                activeTab === tab ? 'bg-emerald-700 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              {tab === 'all' ? 'All' : tab === 'full_time' ? 'Full-Time' : 'Internships'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className={`${selectedJob ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-4`}>
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`p-5 bg-white rounded-2xl border cursor-pointer card-lift flex justify-between items-center gap-4 ${
                  selectedJob?.id === job.id ? 'border-emerald-500 shadow-glow' : 'border-slate-100'
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase">{job.typeLabel}</span>
                  <h4 className="font-bold mt-1">{job.title}</h4>
                  <p className="text-sm text-slate-500 flex items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" />{job.location}</p>
                </div>
                <Briefcase className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
            ))}
          </div>

          <AnimatePresence>
            {selectedJob && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                className="lg:col-span-6 lg:sticky lg:top-28 bg-white rounded-3xl border p-8 shadow-premium space-y-6"
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold">{selectedJob.title}</h2>
                  <button onClick={() => setSelectedJob(null)} className="text-slate-400 cursor-pointer">✕</button>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedJob.description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />{req}</li>
                  ))}
                </ul>
                <RippleButton onClick={() => { setApplyJob(selectedJob); setSubmitted(false); }} variant="primary" className="w-full justify-center">
                  <ClipboardList className="w-4 h-4" /> Apply Now
                </RippleButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {applyJob && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="font-bold">Apply: {applyJob.title}</h3>
                <button onClick={() => setApplyJob(null)} className="cursor-pointer">✕</button>
              </div>
              <div className="p-6">
                {submitted ? (
                  <div className="text-center p-8 bg-emerald-50 rounded-2xl">
                    <div className="text-3xl mb-2">✓</div>
                    <h4 className="font-bold text-emerald-900">Application Filed Successfully</h4>
                    <p className="text-emerald-700 text-sm mt-2">Our HR team will contact you if your skills align with {applyJob.title}.</p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <input type="text" required placeholder="Full Name" className="w-full border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/30 focus:outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="email" required placeholder="Email" className="w-full border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/30 focus:outline-none" />
                      <input type="tel" required placeholder="Phone" className="w-full border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/30 focus:outline-none" />
                    </div>
                    <input type="text" required placeholder="CV / LinkedIn URL" className="w-full border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/30 focus:outline-none" />
                    <textarea required rows={4} placeholder="Statement of purpose..." className="w-full border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/30 focus:outline-none resize-none" />
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-slate-400 flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure</span>
                      <RippleButton type="submit" variant="primary">Submit Dossier</RippleButton>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
