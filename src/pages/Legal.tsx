/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ShieldAlert, Scale, ShieldCheck, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

type LegalSection = 'privacy' | 'terms' | 'disclaimer' | 'cookie' | 'refund' | 'shipping' | 'return' | 'accessibility';

interface LegalDoc {
  title: string;
  category: string;
  content: string[];
}

const LEGAL_DOCUMENTS: Record<LegalSection, LegalDoc> = {
  privacy: {
    title: "Privacy & Data Policy",
    category: "General Compliance",
    content: [
      "Cyano Foods India OPC Private Limited, based in Pune, Maharashtra, is committed to protecting the privacy of our farmers, cooperatives, dealers, and corporate partners. This Privacy Policy documents our compliance under the Information Technology Act, 2000 (and subsequent amendments) of the Government of India.",
      "We collect business coordinates, land size disclosures, crop profiles, and contact details during partner registration. This information is utilized solely to compile agrarian reports for the regional councils and to issue PGS-India group certifications. We strictly enforce that no personal or farming data is sold or leased to third-party marketing brokers.",
      "Data is stored in secured, localized container infrastructures within Indian geographical limits. Partners maintain full rights to request correction or removal of their registered profiles by contacting our PR liaison desk at hq@cyanofoods.com."
    ]
  },
  terms: {
    title: "Terms of Service",
    category: "Commercial Contracts",
    content: [
      "The use of the website and services offered by Cyano Foods India is governed strictly by the following terms. By accessing our products catalogue, applying for dealerships, or entering farmer registries, you agree to comply with these terms.",
      "All procurement buyback arrangements signed between Cyano Foods and farming cooperatives are subject to pre-harvest quality validation overseen by our autonomous regional councils. In the event of pesticide residue detection exceeding FSSAI threshold levels, contracts may be terminated or suspended without liability.",
      "The scientific and technology content, photobioreactor descriptions, and vector graphics featured on this website represent intellectual property owned exclusively by Cyano Foods India. Any unauthorized commercial duplication or framing without written consent is strictly prohibited."
    ]
  },
  disclaimer: {
    title: "General Disclaimer",
    category: "Information Standards",
    content: [
      "The agronomic guides, biotechnology notes, and scientific summaries published on this website are compiled for informational and educational purposes only.",
      "Individual crop yields, soil organic carbon recovery rates, and microalgae growth profiles depend heavily on localized weather fluctuations, water quality parameters, and precise adherence to bio-stimulant schedules. Cyano Foods India offers no absolute financial guarantees on independent farming yields.",
      "Our nutritional, protein-isolate, and nutraceutical products are formulated to support general health and well-being. They do not constitute professional medical diagnoses, prescriptions, or treatments."
    ]
  },
  cookie: {
    title: "Cookie & Tracking Policy",
    category: "Browser Protocols",
    content: [
      "Our website utilizes localized cookie files to maintain navigation states, preserve selected partnership forms, and compile general analytical traffic indicators.",
      "These cookies do not contain encrypted password packages, individual identity profiles, or financial details. You can selectively disable cookies in your browser settings; however, certain interactive components, such as form states and dynamic filtering tabs, may lose persistence.",
      "By continuing to browse our corporate portal, you consent to the storage of essential cookies."
    ]
  },
  refund: {
    title: "Refund & Cancellation Policy",
    category: "Commercial Transactions",
    content: [
      "Our commercial B2B sales of organic agricultural inputs, bio-stimulants, and wholesale Spirulina packages are processed under formal purchasing agreements specifying individual batch delivery parameters.",
      "In the event of a commercial batch failing to meet certificate of analysis (COA) purity parameters, buyers must file a sample assay dispute within 7 operational days. Upon validation by our laboratory auditors in Hinjawadi, a full credit memo or replacement batch is issued.",
      "Retail orders for consumer-packaged items are eligible for cancellation prior to dispatch from our Pune fulfillment facility."
    ]
  },
  shipping: {
    title: "Shipping & Logistics Policy",
    category: "SCM Operations",
    content: [
      "All national shipments of biological inputs, bulk spirulina concentrates, and consumer functional foods are dispatched through authorized logistics agencies possessing biological transit clearances.",
      "Standard logistics transit cycles within India range from 3 to 7 working days, depending on district proximity and block-level warehousing access. Standard tracking IDs are dispatched immediately upon SCM clearance.",
      "Cold-chain or climate-controlled transport parameters are enforced automatically for sensitive C-Phycocyanin liquid extract orders."
    ]
  },
  return: {
    title: "Returns & SCM Rejections",
    category: "Quality Auditing",
    content: [
      "To safeguard biological integrity and avoid cross-contamination of microalgae crops, returned batches of clinical inputs must remain sealed in their original triple-laminated containers.",
      "Authorized returns are routed back to our physical laboratory node in Hinjawadi for chromatographic analysis prior to credit approval.",
      "Refund or exchange credits are computed net of logistics handling charges unless the return is triggered by verified chemical assay deviations."
    ]
  },
  accessibility: {
    title: "Accessibility Standards",
    category: "Public Outreach",
    content: [
      "We believe in digital inclusivity. Our web platform is engineered to align with WCAG 2.1 Level AA parameters to ensure scannability for differently-abled users, screen readers, and low-bandwidth connections.",
      "We utilize high-contrast slate-on-white text, scalable display typography, and responsive touch layout areas to ensure seamless information accessibility.",
      "If you experience usability bottlenecks, please report them to our developer desk at dev@cyanofoods.com."
    ]
  }
};

export default function Legal() {
  const [activeSection, setActiveSection] = useState<LegalSection>('privacy');

  return (
    <div id="legal-page-container" className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Legal & Compliance" description="Access Cyano Foods India's official terms of service, privacy policies, shipping conditions, refund parameters, and FSSAI/PGS compliance data." />

      {/* Hero Header */}
      <section id="legal-hero" className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-emerald-400 font-bold font-mono tracking-widest text-xs uppercase">REGULATORY COMPLIANCE</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white">Legal Disclosures</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Structuring all commercial and agricultural operations around clear legal codification.
          </p>
        </div>
      </section>

      {/* Side-rail navigation split */}
      <section id="legal-split" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left selectors rail */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-4 space-y-1 shadow-sm">
            <span className="px-3 text-[10px] font-bold font-mono text-emerald-700 tracking-wider uppercase block mb-3">
              DISCLOSURE SECTIONS
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
              {(Object.keys(LEGAL_DOCUMENTS) as LegalSection[]).map((section) => (
                <button
                  id={`btn-legal-sec-${section}`}
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-semibold font-display flex items-center justify-between gap-2 transition-all cursor-pointer ${
                    activeSection === section
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{LEGAL_DOCUMENTS[section].title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right detailed display sheet */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                {LEGAL_DOCUMENTS[activeSection].category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                {LEGAL_DOCUMENTS[activeSection].title}
              </h2>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
              {LEGAL_DOCUMENTS[activeSection].content.map((p, i) => (
                <p id={`legal-paragraph-${activeSection}-${i}`} key={i}>
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Authorized Corporate Record
              </span>
              <span>Updated: July 2026</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
