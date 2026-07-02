/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Youtube, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="main-app-footer" className="bg-[#F8FAF8] text-[#1A3317] border-t border-[#E0E7E0] font-sans">
      
      {/* Top Newsletter & Contact Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#E0E7E0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-xl font-bold text-[#1A3317] font-display">Subscribe to Our Biotech & Agronomy Journal</h3>
            <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
              Receive quarterly breakthroughs on microalgae protein development, soil restoration metrics, and KhetiBharat success stories direct from our scientific board.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto">
              <input
                type="email"
                required
                placeholder="Enter corporate or personal email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#E0E7E0] rounded-xl px-4 py-3 text-sm text-[#1A3317] focus:outline-none focus:border-emerald-600 placeholder-slate-400 font-sans shadow-inner"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-bold text-sm transition-all whitespace-nowrap cursor-pointer shadow-md"
              >
                {subscribed ? "Subscribed" : "Subscribe"}
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-700 text-xs mt-2 font-mono text-right max-w-md lg:ml-auto">
                ✓ Thank you. Your email has been registered for our next science briefing.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Link Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Corporate Summary */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-700 text-white font-bold text-lg shadow-sm">
                C
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-display text-[#1A3317] tracking-tight">CYANO FOODS</span>
                <span className="text-[8px] font-semibold font-mono tracking-wider text-emerald-700 uppercase">INDIA OPC PVT LTD</span>
              </div>
            </Link>
            
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Cyano Foods India OPC Private Limited is a global pioneer in microalgae biotechnology, climate-resilient natural agronomy, and clean functional nutrients. We bridge laboratory innovation with grassroots Indian farmer networks.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-slate-600">Hinjawadi, Pune, MH, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-slate-600">+91 (20) 555-8392</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-slate-600">corporate@cyanofoodsindia.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A3317] uppercase tracking-wider font-display border-l-2 border-emerald-700 pl-2">Corporate</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link to="/about" className="text-slate-500 hover:text-emerald-700 transition-colors">Who We Are</Link></li>
              <li><Link to="/research" className="text-slate-500 hover:text-emerald-700 transition-colors">Research & Biotech</Link></li>
              <li><Link to="/sustainability" className="text-slate-500 hover:text-emerald-700 transition-colors">Sustainability & ESG</Link></li>
              <li><Link to="/careers" className="text-slate-500 hover:text-emerald-700 transition-colors">Careers & Internships</Link></li>
              <li><Link to="/partner" className="text-slate-500 hover:text-emerald-700 transition-colors">Partner Registry</Link></li>
            </ul>
          </div>

          {/* Offerings Group */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A3317] uppercase tracking-wider font-display border-l-2 border-emerald-700 pl-2">Solutions</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link to="/products" className="text-slate-500 hover:text-emerald-700 transition-colors">Our Product Lines</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-emerald-700 transition-colors">Technical Services</Link></li>
              <li><Link to="/khetibharat" className="text-slate-500 hover:text-emerald-700 transition-colors">KhetiBharat Program</Link></li>
              <li><Link to="/regional-council" className="text-slate-500 hover:text-emerald-700 transition-colors">Regional Councils</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-emerald-700 transition-colors">Contact Relations</Link></li>
            </ul>
          </div>

          {/* Resources Group */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A3317] uppercase tracking-wider font-display border-l-2 border-emerald-700 pl-2">Knowledge</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link to="/knowledge-centre" className="text-slate-500 hover:text-emerald-700 transition-colors">Knowledge Base</Link></li>
              <li><Link to="/news" className="text-slate-500 hover:text-emerald-700 transition-colors">News & Media Kit</Link></li>
              <li><Link to="/downloads" className="text-slate-500 hover:text-emerald-700 transition-colors">Downloads Center</Link></li>
              <li><Link to="/faq" className="text-slate-500 hover:text-emerald-700 transition-colors">Frequently Asked</Link></li>
            </ul>
          </div>

          {/* Legal Compliance Group */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A3317] uppercase tracking-wider font-display border-l-2 border-emerald-700 pl-2">Compliance</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link to="/legal?tab=privacy" className="text-slate-500 hover:text-emerald-700 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal?tab=terms" className="text-slate-500 hover:text-emerald-700 transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal?tab=disclaimer" className="text-slate-500 hover:text-emerald-700 transition-colors">Disclaimers</Link></li>
              <li><Link to="/legal?tab=refund" className="text-slate-500 hover:text-emerald-700 transition-colors">Refund Policies</Link></li>
              <li><Link to="/legal?tab=shipping" className="text-slate-500 hover:text-emerald-700 transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Geometric Bottom Feature Bar */}
      <div className="border-t border-b border-[#E0E7E0] bg-white py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E0E7E0]">
          <div className="p-4 md:px-6">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Core Division</p>
            <p className="font-bold text-sm text-[#1A3317] font-display">Bio-Nutraceuticals</p>
          </div>
          <div className="p-4 md:px-6 pt-6 md:pt-4">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Focus Area</p>
            <p className="font-bold text-sm text-[#1A3317] font-display">Sustainable ESG</p>
          </div>
          <div className="p-4 md:px-6 pt-6 md:pt-4">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Farmer Support</p>
            <p className="font-bold text-sm text-[#1A3317] font-display">1800-FOOD-INDIA</p>
          </div>
          <div className="p-4 md:px-6 pt-6 md:pt-4">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Headquarters</p>
            <p className="font-bold text-sm text-[#1A3317] font-display">Mumbai • Bengaluru</p>
          </div>
        </div>
      </div>

      {/* Legal Footer & Accreditations Strip */}
      <div className="bg-emerald-800 text-white py-6 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <p className="font-display tracking-wide">
              &copy; 2024 Cyano Foods India OPC Pvt Ltd. All Rights Reserved.
            </p>
            <p className="text-[10px] text-emerald-200 flex items-center justify-center md:justify-start gap-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              NPOP India Certified | PGS-India Verified | FSSAI Lic No: 11524999000123
            </p>
          </div>
          
          <div className="flex gap-6 uppercase text-[10px] tracking-widest font-bold">
            <Link to="/legal?tab=privacy" className="hover:text-emerald-100 transition-colors">Legal & Privacy</Link>
            <Link to="/legal?tab=terms" className="hover:text-emerald-100 transition-colors">Terms of Service</Link>
            <Link to="/legal?tab=accessibility" className="hover:text-emerald-100 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
