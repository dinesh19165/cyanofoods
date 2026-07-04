/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Youtube, ShieldCheck, Award } from 'lucide-react';
import RevealAnimation from '../UI/RevealAnimation';
import FooterWave from '../UI/FooterWave';
import BrandLogo from '../UI/BrandLogo';

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

  const certifications = ['ISO 22000', 'FSSAI', 'GMP', 'HACCP', 'NPOP Organic', 'PGS-India'];

  return (
    <footer id="main-app-footer" className="relative bg-slate-900 text-white overflow-hidden">
      <FooterWave />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,139,87,0.15),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Newsletter */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/10">
        <RevealAnimation direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Stay Connected</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Subscribe to Our Biotech & Agronomy Journal
              </h3>
              <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
                Receive quarterly breakthroughs on microalgae protein development, soil restoration metrics, and KhetiBharat success stories.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-900/30 cursor-pointer whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </RevealAnimation>
      </div>

      {/* Main links */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo size="md" linkToHome showText className="[&_span]:text-white [&_.text-emerald-600]:text-emerald-400" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Cyano Foods India is a global pioneer in microalgae biotechnology, climate-resilient natural agronomy, and clean functional nutrients.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                Hinjawadi, Pune, MH, India
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                +91 (20) 555-8392
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                corporate@cyanofoodsindia.com
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-emerald-600/30 text-slate-300 hover:text-white transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Corporate', links: [
              { to: '/about', label: 'Who We Are' },
              { to: '/research', label: 'Research & Biotech' },
              { to: '/sustainability', label: 'Sustainability & ESG' },
              { to: '/careers', label: 'Careers' },
              { to: '/partner', label: 'Partner Registry' },
            ]},
            { title: 'Solutions', links: [
              { to: '/products', label: 'Our Products' },
              { to: '/services', label: 'Technical Services' },
              { to: '/khetibharat', label: 'KhetiBharat' },
              { to: '/regional-council', label: 'Regional Councils' },
              { to: '/contact', label: 'Contact' },
            ]},
            { title: 'Knowledge', links: [
              { to: '/knowledge-centre', label: 'Knowledge Base' },
              { to: '/news', label: 'News & Media' },
              { to: '/downloads', label: 'Downloads' },
              { to: '/faq', label: 'FAQ' },
            ]},
            { title: 'Compliance', links: [
              { to: '/legal?tab=privacy', label: 'Privacy Policy' },
              { to: '/legal?tab=terms', label: 'Terms of Service' },
              { to: '/legal?tab=disclaimer', label: 'Disclaimers' },
              { to: '/legal?tab=refund', label: 'Refund Policies' },
            ]},
          ].map((col) => (
            <div key={col.title} className="lg:col-span-2 space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-display">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications strip */}
      <div className="relative border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-slate-950/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm text-slate-400">
              &copy; 2024 Cyano Foods India OPC Pvt Ltd. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-500 flex items-center justify-center md:justify-start gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              NPOP India Certified | PGS-India Verified | FSSAI Lic No: 11524999000123
            </p>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-wider font-semibold text-slate-400">
            <Link to="/legal?tab=privacy" className="hover:text-emerald-400 transition-colors">Legal</Link>
            <Link to="/legal?tab=terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
            <Link to="/legal?tab=accessibility" className="hover:text-emerald-400 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
