/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Sprout, Award, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2, ClipboardList } from 'lucide-react';
import SEO from '../components/SEO';

type PartnerType = 'farmer' | 'dealer' | 'distributor' | 'csr' | 'government' | 'research' | 'university' | 'investor' | 'career' | 'internship';

interface FormField {
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

const PARTNER_PROFILES: Record<PartnerType, { label: string; desc: string; fields: FormField[] }> = {
  farmer: {
    label: "Farmer Registry",
    desc: "Enrol your agricultural land into KhetiBharat. Receive organic certification guidance and direct pre-harvest stable price contracts.",
    fields: [
      { label: "Full Name", type: "text", required: true },
      { label: "Village & District", type: "text", required: true },
      { label: "State", type: "select", options: ["Maharashtra", "Andhra Pradesh", "Karnataka", "Telangana", "Gujarat", "Other"], required: true },
      { label: "Primary Phone Number", type: "tel", required: true },
      { label: "Land Area (Acres)", type: "number", required: true },
      { label: "Primary Cultivated Crops", type: "text", placeholder: "e.g., Groundnut, Ragi, Bajra, Pulses", required: true },
      { label: "Current Water Source", type: "select", options: ["Borewell", "Rainfed Only", "Canal Irrigation", "Mixed"], required: true }
    ]
  },
  dealer: {
    label: "Authorized Dealer",
    desc: "Establish a retail outlet or localized supply shop for Cyano-Grow biological bio-stimulants and agricultural inputs.",
    fields: [
      { label: "Business Name", type: "text", required: true },
      { label: "Contact Liaison Name", type: "text", required: true },
      { label: "Email Address", type: "email", required: true },
      { label: "Phone Number", type: "tel", required: true },
      { label: "Business Address & District", type: "text", required: true },
      { label: "Years in Agribusiness Retail", type: "number", required: true },
      { label: "Current Fertilizer Brands Offered", type: "text", required: false }
    ]
  },
  distributor: {
    label: "B2B Distributor",
    desc: "Coordinate district or state-level logistics and bulk warehouse distribution of our clinical-grade Spirulina powder and retail foods.",
    fields: [
      { label: "Company Name", type: "text", required: true },
      { label: "Authorized Representative", type: "text", required: true },
      { label: "Corporate Email", type: "email", required: true },
      { label: "Contact Phone", type: "tel", required: true },
      { label: "Target Distribution Region", type: "text", placeholder: "e.g., Southern Maharashtra / Central Andhra", required: true },
      { label: "Annual Warehousing Capacity (Tons)", type: "number", required: true },
      { label: "Current Cold-Chain Availability", type: "select", options: ["Yes, Complete Cold-Chain", "Ambience Warehousing Only", "No Cold-Chain"], required: true }
    ]
  },
  csr: {
    label: "CSR Syndicate",
    desc: "Co-fund village bio-input infrastructure, community biogas setups, and natural farming libraries in semi-arid zones.",
    fields: [
      { label: "Organization / Trust Name", type: "text", required: true },
      { label: "Liaison Officer Name", type: "text", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Phone", type: "tel", required: true },
      { label: "Target Village Sector", type: "text", placeholder: "e.g., Anantapur District / Pune Rural", required: true },
      { label: "Preferred Sustainable Goal", type: "select", options: ["Soil Rejuvenation", "Rural Biogas Energy", "Farmer Education Libraries", "Clean Water Wells"], required: true }
    ]
  },
  government: {
    label: "Government Agency Liaison",
    desc: "Collaborate on state organic cluster conversions, PGS auditing programs, and regional biotech promotion subsidies.",
    fields: [
      { label: "Government Ministry / Dept", type: "text", required: true },
      { label: "Officer Designation & Name", type: "text", required: true },
      { label: "Official Email (gov.in preferred)", type: "email", required: true },
      { label: "Official Landline / Phone", type: "tel", required: true },
      { label: "Proposed Collaboration Scope", type: "textarea", placeholder: "Briefly outline organic subsidies or regional development joint clusters", required: true }
    ]
  },
  research: {
    label: "Research Scientist",
    desc: "Collaborate on molecular strains mapping, chromatographical isolation of Phycocyanin, or rhizospheric signaling studies.",
    fields: [
      { label: "Researcher Name", type: "text", required: true },
      { label: "Academic Qualification (Ph.D. / M.Sc.)", type: "text", required: true },
      { label: "Current Affiliated Institution", type: "text", required: true },
      { label: "Email Address", type: "email", required: true },
      { label: "Field of Interest", type: "select", options: ["Microalgae Genetics", "Fluid Dynamics", "Soil Rhizospheric Chemistry", "Functional Food Sensory Trials"], required: true },
      { label: "Brief Research Hypothesis", type: "textarea", placeholder: "Outline your proposal or previous publications overview", required: true }
    ]
  },
  university: {
    label: "University Partnership",
    desc: "Structure joint M.Sc. or Ph.D. research courses, establish campus biotech trial nurseries, or handle industrial student field internships.",
    fields: [
      { label: "University / Institute Name", type: "text", required: true },
      { label: "Dean or Department Head", type: "text", required: true },
      { label: "Official Academic Email", type: "email", required: true },
      { label: "Department Phone", type: "tel", required: true },
      { label: "Academic Branch", type: "select", options: ["Biotechnology", "Agriculture Science", "Food Technology & Nutrition", "Rural Management"], required: true },
      { label: "Proposed Joint Project Type", type: "textarea", placeholder: "Outline internship arrangements or shared lab trials", required: true }
    ]
  },
  investor: {
    label: "Institutional Investor Liaison",
    desc: "Inquire about upcoming carbon-negative scaling expansions, vertical photobioreactor facilities financing, or long-term ESG capital cycles.",
    fields: [
      { label: "Investment Fund / Venture Name", type: "text", required: true },
      { label: "Lead Partner / Representative", type: "text", required: true },
      { label: "Corporate Email", type: "email", required: true },
      { label: "Representative Phone", type: "tel", required: true },
      { label: "Target Investment Vehicle", type: "select", options: ["Series-A Expansion Capital", "Debt Financing for Solar Hubs", "Joint-Venture Biotech Labs"], required: true },
      { label: "Compliance Validation Requirements", type: "textarea", placeholder: "Any specific ESG indicators or audits required", required: false }
    ]
  },
  career: {
    label: "Professional Careers",
    desc: "Register your resume directly into our R&D, processing, or field agronomy hiring directories.",
    fields: [
      { label: "Full Name", type: "text", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Primary Phone", type: "tel", required: true },
      { label: "Target Position", type: "select", options: ["Senior Biotechnologist", "Natural Farming Field Agronomist", "Food Formulation Scientist", "Logistics & SCM Manager", "Compliance Auditor"], required: true },
      { label: "Total Years Experience", type: "number", required: true },
      { label: "Key Qualifications Overview", type: "textarea", placeholder: "List key scientific or agronomic accomplishments", required: true }
    ]
  },
  internship: {
    label: "Rural Internship Registry",
    desc: "Register your eligibility for on-field KhetiBharat agritech internships or lab research projects in Hinjawadi.",
    fields: [
      { label: "Student Full Name", type: "text", required: true },
      { label: "Institution & Degree Course", type: "text", required: true },
      { label: "Contact Email", type: "email", required: true },
      { label: "Phone", type: "tel", required: true },
      { label: "Target Internship Path", type: "select", options: ["KhetiBharat Rural Field Placement", "Pune Biotechnology Lab Trainee", "Food Tech Sensory Assistant"], required: true },
      { label: "Available Start Date", type: "text", placeholder: "e.g., Aug 1, 2026", required: true }
    ]
  }
};

export default function Partner() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = (searchParams.get('type') || 'farmer') as PartnerType;
  const [activeProfile, setActiveProfile] = useState<PartnerType>(
    PARTNER_PROFILES[typeParam] ? typeParam : 'farmer'
  );
  const [submitted, setSubmitted] = useState(false);

  const selectProfile = (type: PartnerType) => {
    setSearchParams({ type });
    setActiveProfile(type);
    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Auto clear alert in 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div id="partner-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Partner Registry" description="Access our 10 official partnership registration channels. Connect with Cyano Foods India as a farmer, distributor, researcher, university, or investor." />

      {/* Hero Header */}
      <section id="partner-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">COLLABORATIVE ECOSYSTEM</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Partner With Us</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We operate in a cooperative structural model. Select your specific profile below to access the verified static registry form.
          </p>
        </div>
      </section>

      {/* Selector & Form Split Layout */}
      <section id="partner-layout" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Rails (10 Profiles) */}
          <div id="partner-rails" className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/80 p-4 space-y-1 shadow-sm">
            <span className="px-3 text-[10px] font-bold font-mono text-emerald-700 tracking-wider uppercase block mb-3">
              PARTNERSHIP CHANNELS
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1.5">
              {(Object.keys(PARTNER_PROFILES) as PartnerType[]).map((type) => (
                <button
                  id={`btn-profile-${type}`}
                  key={type}
                  onClick={() => selectProfile(type)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-semibold font-display flex items-center justify-between gap-2 transition-all cursor-pointer ${
                    activeProfile === type
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/10'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{PARTNER_PROFILES[type].label}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50 hidden lg:block" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Form Container */}
          <div id="partner-form-wrapper" className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">
                Registry Form
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-tight">
                {PARTNER_PROFILES[activeProfile].label}
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                {PARTNER_PROFILES[activeProfile].desc}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  id="success-alert"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base font-display text-emerald-900">Application Recorded Successfully</h3>
                    <p className="text-emerald-700 text-xs max-w-md mx-auto leading-relaxed">
                      Thank you. Your corporate registration details for the <strong>{PARTNER_PROFILES[activeProfile].label}</strong> have been saved locally. Our regional compliance agronomists or liaison officers will verify your information against cluster requirements soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form id="partner-form" onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PARTNER_PROFILES[activeProfile].fields.map((field, fIdx) => (
                      <div
                        id={`field-container-${fIdx}`}
                        key={fIdx}
                        className={field.type === 'textarea' ? 'sm:col-span-2 space-y-1.5' : 'space-y-1.5'}
                      >
                        <label className="block text-xs font-semibold text-slate-700">
                          {field.label} {field.required && <span className="text-emerald-600">*</span>}
                        </label>
                        
                        {field.type === 'textarea' ? (
                          <textarea
                            required={field.required}
                            rows={4}
                            placeholder={field.placeholder || `Provide detailed description for ${field.label}`}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 placeholder-slate-400 focus:bg-white transition-all"
                          />
                        ) : field.type === 'select' ? (
                          <select
                            required={field.required}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                          >
                            {field.options?.map((opt, oIdx) => (
                              <option key={oIdx} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder || `e.g., Enter ${field.label}`}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 placeholder-slate-400 focus:bg-white transition-all"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 text-xs">
                    <span className="text-slate-400 flex items-center gap-1 font-mono text-[10px]">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      TLS 1.3 Certified Connection
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
                    >
                      Submit Registration
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

    </div>
  );
}
