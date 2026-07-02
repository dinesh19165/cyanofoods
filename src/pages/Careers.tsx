/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ClipboardList, MapPin, Search, ArrowRight, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { CAREER_LISTINGS } from '../data';
import { CareerPosition } from '../types';

export default function Careers() {
  const [activeTab, setActiveTab] = useState<'all' | 'full_time' | 'internship'>('all');
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);
  const [applyJob, setApplyJob] = useState<CareerPosition | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = activeTab === 'all'
    ? CAREER_LISTINGS
    : CAREER_LISTINGS.filter(j => j.type === activeTab);

  const handleApplySubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setApplyJob(null);
    }, 5000);
  };

  return (
    <div id="careers-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Careers & Internships" description="Join the scientific, agronomic, or social development teams at Cyano Foods India OPC Private Limited. Browse job openings, internships, and volunteer programs." />

      {/* Hero Header */}
      <section id="careers-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">HUMAN CAPITAL DEVELOPMENT</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Join Our Scientific Mission</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Co-engineer sustainable nutrition, optimize biological carbon capture, and restore soils alongside elite bioprocess scientists and agronomists.
          </p>
        </div>
      </section>

      {/* Volunteer program callout */}
      <section id="careers-volunteer" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-emerald-950 text-white rounded-3xl border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-wider uppercase flex items-center justify-center md:justify-start gap-1">
                <Heart className="w-4 h-4 text-emerald-400" />
                GRASSROOTS SOCIAL MOBILIZATION
              </span>
              <h3 className="text-lg font-bold font-display">Are you looking to Volunteer?</h3>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                Join KhetiBharat as a rural field volunteer. Support regional councils in cataloging soil organic carbon changes, mobilizing FPOs, and hosting natural agronomy demonstrations for rural cooperatives.
              </p>
            </div>
            <Link
              to="/partner?type=internship"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-display whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0 shadow-md"
            >
              Register as a Volunteer
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Jobs Registry split */}
      <section id="careers-split-layout" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle selectors */}
        <div className="flex justify-center gap-1.5 mb-10">
          <button
            id="tab-job-all"
            onClick={() => { setActiveTab('all'); setSelectedJob(null); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
              activeTab === 'all' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Positions
          </button>
          <button
            id="tab-job-full"
            onClick={() => { setActiveTab('full_time'); setSelectedJob(null); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
              activeTab === 'full_time' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Full-Time Research & Field
          </button>
          <button
            id="tab-job-intern"
            onClick={() => { setActiveTab('internship'); setSelectedJob(null); }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-display cursor-pointer ${
              activeTab === 'internship' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Paid Internships
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Careers list */}
          <div className={`${selectedJob ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-4 transition-all duration-300`}>
            {filteredJobs.map((job) => (
              <div
                id={`job-card-${job.id}`}
                key={job.id}
                className={`bg-white rounded-2xl border p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer transition-all ${
                  selectedJob?.id === job.id
                    ? 'border-emerald-600 shadow-md bg-emerald-50/5'
                    : 'border-slate-200 shadow-sm hover:shadow-md'
                }`}
                onClick={() => setSelectedJob(job)}
              >
                <div className="space-y-1.5">
                  <div className="flex gap-2 items-center text-[10px] font-mono">
                    <span className="text-emerald-700 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded">
                      {job.typeLabel}
                    </span>
                    <span className="text-slate-400">{job.department}</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm font-display text-slate-900 leading-tight">{job.title}</h4>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-mono flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <button
                  id={`btn-job-details-${job.id}`}
                  className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-[10px] sm:text-xs font-display flex items-center gap-1 shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedJob(job);
                  }}
                >
                  Review Criteria
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Right: Job details side-panel */}
          <AnimatePresence>
            {selectedJob && (
              <motion.div
                id="job-detail-sheet"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6 lg:sticky lg:top-28"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                      Recruitment Specification
                    </span>
                    <h2 className="text-lg font-bold font-display text-slate-900 mt-2">
                      {selectedJob.title}
                    </h2>
                    <p className="text-[10.5px] text-slate-400 font-mono mt-1">{selectedJob.department} | {selectedJob.location}</p>
                  </div>
                  <button
                    id="close-job-details"
                    onClick={() => setSelectedJob(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider">
                    Role Description
                  </h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-sans">
                    {selectedJob.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold font-display text-slate-900 uppercase tracking-wider">
                    Required Candidate Profile
                  </h4>
                  <ul className="space-y-2 text-[11px] sm:text-xs text-slate-600 font-sans">
                    {selectedJob.requirements.map((req, idx) => (
                      <li id={`req-item-${idx}`} key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button
                    id="btn-apply-job"
                    onClick={() => {
                      setApplyJob(selectedJob);
                      setSubmitted(false);
                    }}
                    className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs font-display flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                  >
                    <ClipboardList className="w-4 h-4" />
                    Submit Formal Application
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Floating Application Form Modal */}
      <AnimatePresence>
        {applyJob && (
          <div id="apply-modal-backdrop" className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              id="apply-form-modal"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">Application Form</span>
                  <h3 className="font-bold text-sm sm:text-base font-display text-slate-900 mt-1">Applying for: {applyJob.title}</h3>
                </div>
                <button
                  id="close-apply-modal"
                  onClick={() => setApplyJob(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto font-sans text-slate-700 text-xs sm:text-sm">
                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                    <h4 className="font-bold font-display text-emerald-900 text-xs sm:text-sm">Application Filed Successfully</h4>
                    <p className="text-emerald-700 text-[11px] leading-relaxed max-w-sm mx-auto">
                      Thank you. Your personal information, credentials list, and application for the role of <strong>{applyJob.title}</strong> have been saved securely in our HR directory. Our laboratory recruitment team or field agronomist coordinator will contact you if your skills align.
                    </p>
                  </div>
                ) : (
                  <form id="apply-now-form" onSubmit={handleApplySubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Full Name *</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 placeholder-slate-400 focus:bg-white" placeholder="e.g., Avanish Roy" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-slate-700">Email Address *</label>
                        <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 placeholder-slate-400 focus:bg-white" placeholder="e.g., avanish@univ.edu" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-slate-700">Contact Number *</label>
                        <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 placeholder-slate-400 focus:bg-white" placeholder="e.g., +91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Link to Curriculum Vitae / LinkedIn *</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 placeholder-slate-400 focus:bg-white" placeholder="e.g., https://linkedin.com/in/username" />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Brief Statement of Purpose *</label>
                      <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 placeholder-slate-400 focus:bg-white" placeholder="Why are you seeking to join Cyano Foods' scientific biotechnology or natural agronomical operations?" />
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 text-xs shrink-0">
                      <span className="text-slate-400 flex items-center gap-1 font-mono text-[9px]">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        SSL Compliance Enforced
                      </span>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs font-display cursor-pointer shadow-md"
                      >
                        Submit Dossier
                      </button>
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
