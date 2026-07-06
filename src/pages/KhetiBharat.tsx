/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Banknote,
  BookOpen,
  ChevronDown,
  CircleDot,
  Compass,
  Droplets,
  Handshake,
  Landmark,
  Leaf,
  Microscope,
  Play,
  ShieldCheck,
  Sparkles,
  Sprout,
  Store,
  SunMedium,
  Tractor,
  Trees,
  Users,
  Wheat,
} from 'lucide-react';
import SEO from '../components/SEO';
import CountUp from '../components/UI/CountUp';
import MagneticButton from '../components/UI/MagneticButton';
import RevealAnimation from '../components/UI/RevealAnimation';
import { KHETI_BHARAT_DETAILS } from '../data';

const HERO_STATS = [
  { value: '12', suffix: '', label: 'States' },
  { value: '25,000', suffix: '+', label: 'Farmers' },
  { value: '150', suffix: '+', label: 'Villages' },
  { value: '100', suffix: '%', label: 'Organic' },
];

const MAP_STATES = [
  { id: 'maharashtra', label: 'Maharashtra', x: 28, y: 38, projects: '84', farmers: '7,800', products: '12', training: '32', certification: '100%' },
  { id: 'karnataka', label: 'Karnataka', x: 45, y: 56, projects: '66', farmers: '5,600', products: '9', training: '21', certification: '98%' },
  { id: 'tamil-nadu', label: 'Tamil Nadu', x: 54, y: 68, projects: '57', farmers: '4,900', products: '8', training: '19', certification: '97%' },
  { id: 'rajasthan', label: 'Rajasthan', x: 20, y: 44, projects: '39', farmers: '3,100', products: '6', training: '14', certification: '95%' },
  { id: 'odisha', label: 'Odisha', x: 66, y: 41, projects: '43', farmers: '3,400', products: '7', training: '17', certification: '96%' },
];

const FARMER_JOURNEY = [
  { step: '01', title: 'Discover', desc: 'Field diagnostics and soil intelligence mapping.' },
  { step: '02', title: 'Training', desc: 'Hands-on regenerative and biological farming clinics.' },
  { step: '03', title: 'Transition', desc: 'Natural input kits and crop-specific conversion plans.' },
  { step: '04', title: 'Certification', desc: 'Peer-reviewed audits and organic compliance support.' },
  { step: '05', title: 'Market Linkage', desc: 'Stable buyback agreements and premium buyer access.' },
  { step: '06', title: 'Higher Income', desc: 'Premium pricing and resilient farm economics.' },
];

const IMPACT_METRICS = [
  { value: 25000, suffix: '+', label: 'Farmers Empowered' },
  { value: 120000, suffix: '', label: 'Acres Converted' },
  { value: 95, suffix: '%', label: 'Income Growth' },
  { value: 100, suffix: '%', label: 'Organic Certified' },
];

const PROGRAM_CARDS = [
  { icon: Leaf, title: 'Organic Farming', desc: 'Regenerative protocols that restore soil biology and lift yields naturally.', accent: 'from-emerald-600 to-emerald-400' },
  { icon: Droplets, title: 'Soil Health', desc: 'Bio-stimulants and moisture systems built for dryland resilience.', accent: 'from-lime-500 to-emerald-500' },
  { icon: Microscope, title: 'Microalgae Biotechnology', desc: 'Spirulina and algal inputs that elevate crop vitality and farmer productivity.', accent: 'from-emerald-700 to-teal-500' },
  { icon: BookOpen, title: 'Training', desc: 'Village academies with live demonstrations and field coaching.', accent: 'from-amber-500 to-emerald-500' },
  { icon: Award, title: 'Certification', desc: 'Audit-ready compliance pathways for premium organic markets.', accent: 'from-green-700 to-emerald-500' },
  { icon: Handshake, title: 'Market Access', desc: 'Transparent trade channels and direct procurement buyback models.', accent: 'from-emerald-700 to-lime-500' },
  { icon: Banknote, title: 'Financial Inclusion', desc: 'Micro-credit pathways and fair pricing for long-term farmer stability.', accent: 'from-amber-600 to-emerald-500' },
];

const ECOSYSTEM_NODES = [
  { label: 'Farmers', position: 'left-[8%] top-[20%]' },
  { label: 'Cyano Foods', position: 'left-[40%] top-[10%]' },
  { label: 'Regional Councils', position: 'left-[72%] top-[18%]' },
  { label: 'Scientists', position: 'left-[72%] top-[72%]' },
  { label: 'Buyers', position: 'right-[8%] top-[34%]' },
  { label: 'Government', position: 'left-[28%] bottom-[14%]' },
  { label: 'Consumers', position: 'right-[12%] bottom-[18%]' },
];

const KNOWLEDGE_ITEMS = [
  { title: 'Research', desc: 'Read peer-reviewed insights on regenerative systems and Spirulina biology.', icon: Microscope },
  { title: 'Guides', desc: 'Download practical farmer handbooks for transition and certification.', icon: BookOpen },
  { title: 'Training Videos', desc: 'Explore immersive field modules for extension and community learning.', icon: Play },
  { title: 'Government Schemes', desc: 'Stay updated on public support pathways and climate-smart incentives.', icon: Landmark },
  { title: 'Download PDFs', desc: 'Access high-resolution explainers and onboarding documents.', icon: Store },
];

const FAQ_ITEMS = [
  { question: 'How does KhetiBharat support farmers financially?', answer: 'We provide zero-cost transition assistance, guaranteed buybacks, and premium market access so farmers can earn more without being exposed to volatile middlemen.' },
  { question: 'Is the program truly organic?', answer: 'Yes. We support participatory and third-party certification pathways so every transition is traceable, documented, and audited.' },
  { question: 'Can smallholder farmers join the network?', answer: 'Absolutely. We organize village clusters and provide onboarding, training, and certification support for farms of all sizes.' },
];

const SUCCESS_STORIES = [
  {
    name: 'Ramesh Patil',
    village: 'Anantapur Block',
    before: '₹18,000/month',
    after: '₹32,000/month',
    quote: 'We moved from debt-driven input dependence to healthy soil, stable revenue, and pride in our farm.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lakshmi Devi',
    village: 'Maharashtra Cluster',
    before: '₹12,500/month',
    after: '₹27,000/month',
    quote: 'The training, buyback guarantee, and certification support turned our farm into a sustainable livelihood.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Arun Rao',
    village: 'Odisha Plains',
    before: '₹14,000/month',
    after: '₹29,500/month',
    quote: 'The rural network helped us build climate resilience while preserving our family farm for the next generation.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
];

export default function KhetiBharat() {
  const [selectedState, setSelectedState] = useState(MAP_STATES[0].id);
  const [activeStory, setActiveStory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStory((prev) => (prev + 1) % SUCCESS_STORIES.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const activeState = MAP_STATES.find((state) => state.id === selectedState) ?? MAP_STATES[0];
  const currentStory = SUCCESS_STORIES[activeStory];

  return (
    <div id="kb-page-container" className="min-h-screen bg-[#F5F9F2] text-slate-900">
      <SEO title="KhetiBharat Initiative" description="Discover KhetiBharat, Cyano Foods India's premium regenerative agriculture initiative that empowers farmers through biotechnology, training, certification, and market access." />

      <section className="relative min-h-screen overflow-hidden bg-[#081e14]">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80"
          alt="Indian farmland at sunrise"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(8,30,20,0.58)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,180,106,0.2),transparent_38%)]" />
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 16 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-2 w-2 rounded-full bg-white/40 blur-[1px]"
              animate={{ y: [0, -120, 0], x: [0, 70, 0], opacity: [0.35, 0.9, 0.35] }}
              transition={{ duration: 8 + index * 0.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
              style={{ left: `${8 + index * 5}%`, top: `${18 + (index % 5) * 11}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-100 backdrop-blur-xl">
                <Wheat className="h-4 w-4" />
                Regenerative agriculture • biotechnology • rural prosperity
              </div>
              <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                KhetiBharat
              </h1>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-emerald-100 sm:text-3xl lg:text-4xl">
                Growing India&apos;s Future Naturally
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Empowering farmers through Spirulina biotechnology, regenerative agriculture, climate-smart farming, and sustainable rural livelihoods.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton>
                  <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-[#38B46A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(56,180,106,0.3)] transition hover:bg-[#2f9157]">
                    Explore Initiative <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/partner" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">
                    Join the Mission
                  </Link>
                </MagneticButton>
              </div>
              <div className="mt-10 flex gap-4">
                {HERO_STATS.map((stat) => (
                  <motion.div key={stat.label} whileHover={{ y: -6, scale: 1.02 }} className="min-w-[112px] rounded-[24px] border border-white/20 bg-white/10 px-4 py-4 text-center backdrop-blur-xl">
                    <div className="text-xl font-bold text-emerald-200">
                      <CountUp end={Number(stat.value.replace(/[^\d]/g, ''))} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-8 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                  alt="Farmer in a thriving field"
                  className="h-[560px] w-full rounded-[24px] object-cover"
                />
                <div className="mt-4 flex items-center justify-between rounded-[20px] border border-white/15 bg-[#0E5C36]/60 px-4 py-3 text-sm text-emerald-50">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-emerald-100/80">Living proof</div>
                    <div className="font-semibold">Organic transition with premium market outcomes</div>
                  </div>
                  <div className="rounded-full bg-white/15 p-2">
                    <Sprout className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em]">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      <section className="section-padding bg-[#FFFDF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">National footprint</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">Interactive network across India</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Hover and click each state to see how KhetiBharat is building resilient farm clusters with science-led support.</p>
          </RevealAnimation>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-[radial-gradient(circle_at_top_left,rgba(56,180,106,0.15),transparent_32%),linear-gradient(135deg,#f8fef8,#f3f8ed)] p-6 shadow-[0_25px_80px_rgba(14,92,54,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-50" />
              <div className="relative mx-auto max-w-3xl rounded-[28px] border border-white/70 bg-[#fbfdf8]/90 p-5 shadow-inner">
                <svg viewBox="0 0 600 700" className="w-full" role="img" aria-label="Stylized India map with clickable state nodes">
                  <path d="M183 148C229 116 274 103 318 102C353 102 386 116 413 139C439 162 458 183 468 217C476 244 477 272 467 296C457 321 436 337 415 354C394 370 371 388 351 406C324 430 303 458 300 493C297 529 316 558 340 585C364 612 372 641 365 672C351 678 332 682 311 681C282 680 252 666 227 646C203 626 186 596 175 560C164 523 164 482 164 446C164 375 144 293 183 148Z" fill="#0E5C36" opacity="0.9" />
                  <path d="M182 160C219 146 247 142 282 144C302 146 327 150 347 158C367 167 386 182 390 203C394 226 381 245 368 260C356 276 340 292 328 304C316 315 309 332 314 349C319 366 338 374 351 391C366 410 372 430 370 451C367 479 353 496 339 514C326 532 311 545 297 549C288 553 275 556 262 556C248 556 233 552 220 543C207 533 198 518 196 501C193 481 198 462 205 445C215 420 225 394 221 368C217 338 198 314 182 289C166 264 159 235 164 210C169 186 178 175 182 160Z" fill="#38B46A" opacity="0.2" />
                  <path d="M203 240C217 228 234 226 251 230C270 235 276 250 280 267C283 284 278 299 271 313C263 327 252 340 246 353C240 367 239 383 248 394C258 405 274 409 288 407C304 405 320 399 332 390C342 382 350 368 349 354C347 332 336 314 324 299C313 284 302 271 302 252C302 232 312 214 326 199C340 184 365 172 389 170" fill="none" stroke="#C8A648" strokeWidth="3" strokeDasharray="6 8" opacity="0.75" />
                </svg>
                {MAP_STATES.map((state) => (
                  <button
                    key={state.id}
                    type="button"
                    onClick={() => setSelectedState(state.id)}
                    className={`absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all ${selectedState === state.id ? 'border-[#C8A648] bg-[#0E5C36] text-white shadow-[0_0_0_8px_rgba(200,166,72,0.16)]' : 'border-white/70 bg-white/95 text-[#0E5C36] hover:scale-110'}`}
                    style={{ left: `${state.x}%`, top: `${state.y}%` }}
                    aria-label={`View ${state.label}`}
                  >
                    <CircleDot className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-4">
              <div className="rounded-[28px] border border-emerald-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(14,92,54,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-[#0E5C36]">
                    <Compass className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0E5C36]">Active region</div>
                    <div className="text-2xl font-semibold text-slate-900">{activeState.label}</div>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: 'Projects', value: activeState.projects },
                    { label: 'Farmers', value: activeState.farmers },
                    { label: 'Products', value: activeState.products },
                    { label: 'Training', value: activeState.training },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[20px] border border-slate-100 bg-[#f8fcf6] p-4">
                      <div className="text-sm text-slate-500">{item.label}</div>
                      <div className="mt-1 text-xl font-semibold text-slate-900">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[20px] border border-emerald-100 bg-emerald-50/80 p-4 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Certification readiness</span>
                    <span className="font-semibold text-[#0E5C36]">{activeState.certification}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9F2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Farmer journey</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">A premium path from potential to prosperity</h2>
          </RevealAnimation>

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent md:block" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
              {FARMER_JOURNEY.map((step, index) => (
                <RevealAnimation key={step.title} direction="up" delay={index * 0.06}>
                  <motion.div whileHover={{ y: -8, scale: 1.02 }} className="rounded-[24px] border border-emerald-100 bg-white/80 p-6 shadow-[0_20px_48px_rgba(14,92,54,0.08)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E5C36] text-sm font-bold text-white">{step.step}</div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.desc}</p>
                  </motion.div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FFFDF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <RevealAnimation direction="left" className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Impact at scale</span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">Proof that transformation can be measurable and beautiful</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">From carbon-aware soil restoration to premium market access, the program is designed to make ecological and financial outcomes reinforce each other.</p>
            </RevealAnimation>
            <div className="grid gap-4 sm:grid-cols-2">
              {IMPACT_METRICS.map((metric, index) => (
                <RevealAnimation key={metric.label} direction="up" delay={index * 0.08}>
                  <motion.div whileHover={{ y: -8, scale: 1.02 }} className="rounded-[24px] border border-emerald-100 bg-white p-6 shadow-[0_20px_60px_rgba(14,92,54,0.08)]">
                    <div className="text-4xl font-black text-[#0E5C36] sm:text-5xl">
                      <CountUp end={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{metric.label}</div>
                  </motion.div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9F2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-white/60 bg-[#0E5C36] shadow-[0_30px_90px_rgba(14,92,54,0.2)]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[420px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80" alt="Farming documentary still" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,92,54,0.82),rgba(14,92,54,0.45))]" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">Documentary story</span>
                  <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A living film of soil, science, and community</h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-emerald-50/90">A cinematic portrait of the field, the farmer, and the future our biosystems can build together.</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_62%)] p-8 sm:p-12">
                <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.25)]" aria-label="Play documentary video">
                  <Play className="ml-1 h-8 w-8 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FFFDF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Success stories</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">Real farmers, real upgrades</h2>
          </RevealAnimation>

          <motion.div key={currentStory.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-14 grid gap-8 rounded-[36px] border border-emerald-100 bg-white p-6 shadow-[0_25px_80px_rgba(14,92,54,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <img src={currentStory.image} alt={currentStory.name} className="h-[320px] w-full rounded-[28px] object-cover" />
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-[#0E5C36]">{currentStory.village}</div>
                <h3 className="mt-5 text-3xl font-semibold text-slate-900">{currentStory.name}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">“{currentStory.quote}”</p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[20px] border border-emerald-100 bg-[#f8fcf6] p-4">
                  <div className="text-sm text-slate-500">Income before</div>
                  <div className="mt-1 text-xl font-semibold text-slate-900">{currentStory.before}</div>
                </div>
                <div className="rounded-[20px] border border-emerald-100 bg-[#f8fcf6] p-4">
                  <div className="text-sm text-slate-500">Income after</div>
                  <div className="mt-1 text-xl font-semibold text-slate-900">{currentStory.after}</div>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                {SUCCESS_STORIES.map((story, index) => (
                  <button key={story.name} type="button" onClick={() => setActiveStory(index)} className={`h-2.5 rounded-full transition-all ${activeStory === index ? 'w-8 bg-[#38B46A]' : 'w-2.5 bg-slate-300'}`} aria-label={`Show ${story.name}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9F2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Program pillars</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">Designed for the next generation of regenerative agriculture</h2>
          </RevealAnimation>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PROGRAM_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <RevealAnimation key={card.title} direction="up" delay={index * 0.05}>
                  <motion.div whileHover={{ y: -8, scale: 1.01 }} className="group rounded-[28px] border border-emerald-100 bg-white/80 p-7 shadow-[0_20px_60px_rgba(14,92,54,0.08)] backdrop-blur">
                    <div className={`inline-flex rounded-[18px] bg-gradient-to-br ${card.accent} p-3 text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.desc}</p>
                  </motion.div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FFFDF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Circular ecosystem</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">Where every actor strengthens the next</h2>
          </RevealAnimation>

          <div className="mt-14 rounded-[36px] border border-emerald-100 bg-[radial-gradient(circle_at_center,rgba(56,180,106,0.12),transparent_42%),linear-gradient(135deg,#f8fef8,#f3f8ed)] p-8 shadow-[0_25px_80px_rgba(14,92,54,0.08)] lg:p-10">
            <div className="relative mx-auto flex min-h-[520px] max-w-5xl items-center justify-center overflow-hidden rounded-[28px] border border-white/80 bg-white/60">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(56,180,106,0.16),transparent_60%)]" />
              <svg viewBox="0 0 800 520" className="absolute inset-0 h-full w-full">
                <path d="M230 160 C 330 120, 470 120, 570 170" stroke="#38B46A" strokeWidth="2.5" strokeDasharray="8 8" fill="none" />
                <path d="M230 180 C 300 230, 360 250, 430 260" stroke="#0E5C36" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
                <path d="M580 200 C 630 260, 610 340, 560 390" stroke="#C8A648" strokeWidth="2.5" strokeDasharray="7 7" fill="none" />
                <path d="M240 350 C 330 380, 410 385, 520 360" stroke="#38B46A" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
                <path d="M240 170 C 190 230, 180 320, 230 360" stroke="#0E5C36" strokeWidth="2.5" strokeDasharray="7 7" fill="none" />
                <path d="M560 180 C 610 220, 610 310, 560 360" stroke="#C8A648" strokeWidth="2.5" strokeDasharray="8 8" fill="none" />
              </svg>
              {ECOSYSTEM_NODES.map((node) => (
                <motion.div key={node.label} whileHover={{ scale: 1.05 }} className={`absolute ${node.position} rounded-full border border-white/80 bg-[#0E5C36] px-4 py-2 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(14,92,54,0.18)]`}>
                  {node.label}
                </motion.div>
              ))}
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }} className="absolute h-28 w-28 rounded-full border border-dashed border-emerald-300/70" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9F2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Image gallery</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">A visual journal of the movement</h2>
          </RevealAnimation>

          <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
            {[
              'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1492496913989-501348b61469?auto=format&fit=crop&w=900&q=80',
            ].map((image) => (
              <motion.div key={image} whileHover={{ scale: 1.02 }} className="mb-6 overflow-hidden rounded-[28px] border border-emerald-100 shadow-[0_20px_60px_rgba(14,92,54,0.08)]">
                <img src={image} alt="KhetiBharat field and community imagery" className="h-auto w-full object-cover transition duration-700 hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FFFDF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Knowledge hub</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">Resources for farmers, partners, and institutions</h2>
          </RevealAnimation>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {KNOWLEDGE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealAnimation key={item.title} direction="up" delay={index * 0.05}>
                  <motion.div whileHover={{ y: -8, scale: 1.01 }} className="rounded-[28px] border border-emerald-100 bg-white p-7 shadow-[0_20px_60px_rgba(14,92,54,0.08)]">
                    <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-[#0E5C36]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </motion.div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9F2]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0E5C36]">Frequently asked questions</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Clarity for every stage of involvement</h2>
          </RevealAnimation>

          <div className="mt-12 space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <RevealAnimation key={item.question} direction="up" delay={index * 0.05}>
                <div className="overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-[0_14px_40px_rgba(14,92,54,0.06)]">
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between px-6 py-5 text-left" aria-expanded={openFaq === index}>
                    <span className="pr-4 text-base font-semibold text-slate-900">{item.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#0E5C36] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="border-t border-slate-100 px-6 py-4 text-sm leading-7 text-slate-600">{item.answer}</div>
                  </motion.div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081e14] py-24 sm:py-28">
        <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80" alt="Green fields at dawn" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(8,30,20,0.7)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <RevealAnimation direction="up">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Join the green revolution</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">Become a KhetiBharat partner</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">Whether you are a farmer, institution, buyer, or visionary investor, the network is built to make regenerative farming attractive, profitable, and future-ready.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/partner" className="inline-flex items-center gap-2 rounded-full bg-[#38B46A] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(56,180,106,0.25)] transition hover:bg-[#2f9157]">
                Join India&apos;s Green Revolution <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">
                Speak to Our Team
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
