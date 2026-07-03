/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import {
  Sprout, Award, Beaker, Leaf, ArrowRight, ShieldCheck, Microscope, Trees,
  Factory, Globe, Package, Pill, Apple, Truck,
  Play, Sprout as Seedling, Wheat, FlaskConical, TestTube, Box, Ship, Lightbulb,
  HeartHandshake, Star, Download, ChevronDown,
} from 'lucide-react';
import SEO from '../components/SEO';
import CountUp from '../components/UI/CountUp';
import InteractiveMap from '../components/UI/InteractiveMap';
import ParticleBackground from '../components/UI/ParticleBackground';
import RippleButton from '../components/UI/RippleButton';
import MagneticButton from '../components/UI/MagneticButton';
import RevealAnimation from '../components/UI/RevealAnimation';
import Marquee from '../components/UI/Marquee';
import TestimonialCarousel from '../components/UI/TestimonialCarousel';
import MasonryGallery from '../components/UI/MasonryGallery';
import {
  ABOUT_OVERVIEW, PRODUCTS_DATA, KHETI_BHARAT_DETAILS,
  NEWS_LIST, SUSTAINABILITY_ESG, FAQS_DATA
} from '../data';

const HERO_VIDEO = 'https://cdn.coverr.co/videos/coverr-green-algae-in-a-laboratory-9765/1080p.mp4';

const HOME_SERVICES = [
  { icon: Beaker, title: 'Research', desc: 'Translational microalgal strain improvement and bioactive extraction.', link: '/services?id=research' },
  { icon: Factory, title: 'Manufacturing', desc: 'GMP-certified spray-drying and closed-system cultivation.', link: '/services?id=manufacturing' },
  { icon: Globe, title: 'Export', desc: 'Global market linkages with full compliance documentation.', link: '/services' },
  { icon: Package, title: 'Private Label', desc: 'Custom branding and formulation for your product line.', link: '/partner?type=private-label' },
  { icon: Box, title: 'OEM', desc: 'Contract manufacturing with scalable production capacity.', link: '/partner?type=oem' },
  { icon: Pill, title: 'Nutraceuticals', desc: 'Clinical-grade supplements and functional food development.', link: '/services?id=product-development' },
  { icon: Apple, title: 'Organic Foods', desc: 'Certified organic Spirulina and clean-label formulations.', link: '/products' },
  { icon: Leaf, title: 'Natural Farming', desc: 'Scientific protocols for organic agronomy transition.', link: '/services?id=natural-farming' },
];

const WHY_CHOOSE = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Pioneering closed photobioreactor technology and Phycocyanin extraction.' },
  { icon: ShieldCheck, title: 'Quality', desc: 'ISO 22000, GMP, and HACCP certified with zero-compromise purity standards.' },
  { icon: Microscope, title: 'Research', desc: 'State-of-the-art labs with university collaborations and IP development.' },
  { icon: Globe, title: 'Global Standards', desc: 'FSSAI, NPOP, and international export compliance built-in.' },
  { icon: Truck, title: 'Export', desc: 'Serving 15+ countries with end-to-end logistics support.' },
  { icon: HeartHandshake, title: 'Customer Support', desc: 'Dedicated liaison teams for farmers, brands, and institutional partners.' },
];

const CORPORATE_STATS = [
  { value: 20, suffix: '+', label: 'Products' },
  { value: 100, suffix: '+', label: 'Clients' },
  { value: 15, suffix: '+', label: 'Countries' },
  { value: 100, suffix: '%', label: 'Quality' },
];

const MANUFACTURING_STEPS = [
  { icon: Seedling, title: 'Seed', desc: 'Pure Arthrospira platensis culture isolation' },
  { icon: Sprout, title: 'Cultivation', desc: 'Closed photobioreactor growth systems' },
  { icon: Wheat, title: 'Harvesting', desc: 'Mechanical vacuum dewatering' },
  { icon: FlaskConical, title: 'Processing', desc: 'Spray-drying & freeze-drying' },
  { icon: TestTube, title: 'Testing', desc: 'Heavy-metal & toxin-free verification' },
  { icon: Package, title: 'Packaging', desc: 'Nitrogen-flushed sterile packaging' },
  { icon: Ship, title: 'Export', desc: 'Global logistics & compliance docs' },
];

const CERTIFICATIONS = [
  { name: 'ISO 22000', desc: 'Food Safety Management' },
  { name: 'FSSAI', desc: 'Food Safety Standards Authority' },
  { name: 'GMP', desc: 'Good Manufacturing Practice' },
  { name: 'HACCP', desc: 'Hazard Analysis Critical Control' },
  { name: 'Organic', desc: 'NPOP & PGS-India Certified' },
  { name: 'WHO', desc: 'WHO-GMP Compliant Facility' },
];

const PRODUCT_IMAGES: Record<string, string> = {
  'spirulina-powder': 'https://images.unsplash.com/photo-1576086213369-97a3d619cf1f?w=600&h=400&fit=crop',
  'spirulina-crunchies': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
  'phycocyanin-blue': 'https://images.unsplash.com/photo-1550583724-b2692b85b199?w=600&h=400&fit=crop',
  'cyano-soil-reviver': 'https://images.unsplash.com/photo-1464226187744-90997a736a1c?w=600&h=400&fit=crop',
  'algal-omega3': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredProducts = PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 6);
  const latestNews = NEWS_LIST.slice(0, 3);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { opacity: 0, y: 80, duration: 1.2, ease: 'power3.out', delay: 0.3 });
      gsap.from('.hero-subtitle', { opacity: 0, y: 60, duration: 1, ease: 'power3.out', delay: 0.6 });
      gsap.from('.hero-cta', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.9, stagger: 0.15 });
      gsap.from('.hero-float', { opacity: 0, scale: 0.8, duration: 1.5, ease: 'elastic.out(1, 0.5)', delay: 1.2, stagger: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handleParallax = (e: MouseEvent<HTMLElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    gsap.to('.hero-parallax', { x: x * 20, y: y * 20, duration: 0.8, ease: 'power2.out' });
  };

  return (
    <div id="home-page-container">
      <SEO title="Home" description="Cyano Foods India - Empowering Global Nutrition Through Spirulina Innovation. Premium food manufacturing and nutraceutical solutions from India." />

      {/* ═══════════ HERO ═══════════ */}
      <section
        ref={heroRef}
        id="hero-banner"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseMove={handleParallax}
      >
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=1920&h=1080&fit=crop"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        <ParticleBackground count={40} color="rgba(46, 139, 87, 0.3)" />

        {/* Floating shapes */}
        <div className="hero-float absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20 animate-float" />
        <div className="hero-float absolute top-1/3 right-[15%] w-32 h-32 rounded-3xl bg-emerald-400/5 backdrop-blur-sm border border-emerald-300/10 animate-float-slow rotate-12" />
        <div className="hero-float absolute bottom-1/4 left-[20%] w-16 h-16 rounded-2xl bg-amber-400/10 backdrop-blur-sm border border-amber-300/20 animate-float" style={{ animationDelay: '2s' }} />

        <div className="hero-parallax relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel-dark text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Agriculture • Biotech • Food Technology
          </motion.div>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white font-display mb-6">
            Empowering Global Nutrition<br />
            <span className="text-gradient-dark">Through Spirulina Innovation</span>
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Premium food manufacturing and nutraceutical solutions from India.
          </p>

          <div className="hero-cta flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <RippleButton to="/products" variant="primary">
                Explore Products <ArrowRight className="w-4 h-4" />
              </RippleButton>
            </MagneticButton>
            <MagneticButton>
              <RippleButton to="/contact" variant="secondary">
                Contact Us
              </RippleButton>
            </MagneticButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-scroll-bounce" />
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="py-6 bg-emerald-950 border-y border-emerald-800/50">
        <Marquee speed={25}>
          {['ISO 22000 Certified', 'GMP Facility', 'FSSAI Approved', 'NPOP Organic', 'Export to 15+ Countries', 'Zero Heavy Metals', 'Clinical-Grade Spirulina', 'KhetiBharat Program'].map((text) => (
            <span key={text} className="mx-8 text-sm font-semibold text-emerald-300/80 uppercase tracking-wider flex items-center gap-3">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              {text}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ═══════════ ABOUT OVERVIEW ═══════════ */}
      <section id="about-overview-section" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl animate-blob" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <RevealAnimation direction="left" className="lg:col-span-5 space-y-6">
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Corporate Introduction</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Where Science Meets the <span className="text-gradient">Regenerative Earth</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">{ABOUT_OVERVIEW.whoWeAre}</p>
              <Link to="/about" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold group">
                Read Our Corporate Narrative
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealAnimation>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Beaker, title: 'Algal Biotechnology', desc: 'Closed-system borosilicate photobioreactors securing medical-grade cell purity.' },
                { icon: Sprout, title: 'Natural Agronomy', desc: 'Eliminating synthetic chemical dependencies with advanced soil bio-stimulants.' },
                { icon: Trees, title: 'KhetiBharat Program', desc: 'Organizing smallholders with free bio-inputs and stable price buybacks.' },
                { icon: Award, title: 'Regional Governance', desc: 'Decentralized councils certifying transition soils and fair pricing.' },
              ].map((card, i) => (
                <RevealAnimation key={card.title} direction="right" delay={i * 0.1}>
                  <div className="card-lift p-6 glass-panel rounded-2xl space-y-4 group" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="p-3 w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg font-display text-slate-900">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="featured-services" className="section-padding bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Premium Services</h2>
            <p className="text-slate-500">End-to-end solutions from research to global export.</p>
          </RevealAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SERVICES.map((svc, i) => (
              <RevealAnimation key={svc.title} direction="up" delay={i * 0.05}>
                <Link
                  to={svc.link}
                  className="card-lift group block p-6 bg-white rounded-2xl border border-slate-100 shadow-premium hover:shadow-glow transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <div className="p-3 w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg font-display text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCTS ═══════════ */}
      <section id="featured-products" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Scientific Nutrition</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Clinical-Grade Products</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-emerald-200 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-all">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((prod, i) => (
              <RevealAnimation key={prod.id} direction="scale" delay={i * 0.08}>
                <div className="card-lift group bg-white rounded-3xl border border-slate-100 shadow-premium overflow-hidden hover:shadow-glow transition-all duration-500">
                  <div className="img-zoom-container h-52 relative">
                    <img
                      src={PRODUCT_IMAGES[prod.id] || 'https://images.unsplash.com/photo-1576086213369-97a3d619cf1f?w=600&h=400&fit=crop'}
                      alt={prod.name}
                      className="img-zoom w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-full uppercase">
                        {prod.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold font-display text-slate-900">{prod.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{prod.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Link to="/products" className="flex-1 text-center px-4 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors">
                        View Details
                      </Link>
                      <Link to="/downloads" className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1">
                        <Download className="w-3.5 h-3.5" /> Brochure
                      </Link>
                      <Link to="/contact" className="px-4 py-2.5 rounded-xl border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50 transition-colors">
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section id="why-choose-us" className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,139,87,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <RevealAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-400 font-semibold text-xs uppercase tracking-widest">Our Promise</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why Choose Cyano Foods</h2>
          </RevealAnimation>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent -translate-y-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {WHY_CHOOSE.map((item, i) => (
                <RevealAnimation key={item.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                  <div className="glass-panel-dark rounded-2xl p-8 space-y-4 card-lift group" data-aos="fade-up">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors">
                      <item.icon className="w-7 h-7 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold font-display">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CORPORATE NUMBERS ═══════════ */}
      <section id="corporate-numbers" className="py-20 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CORPORATE_STATS.map((stat, i) => (
              <RevealAnimation key={stat.label} direction="up" delay={i * 0.1}>
                <div className="text-center space-y-2" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MANUFACTURING PROCESS ═══════════ */}
      <section id="manufacturing-process" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Manufacturing Excellence</h2>
          </RevealAnimation>

          <div className="timeline-scroll flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
            {MANUFACTURING_STEPS.map((step, i) => (
              <RevealAnimation key={step.title} direction="up" delay={i * 0.08}>
                <div className="snap-center shrink-0 w-64 p-6 bg-slate-50 rounded-2xl border border-slate-100 card-lift group text-center" data-aos="fade-left" data-aos-delay={i * 80}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-emerald-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-xs font-bold text-emerald-600 mb-1">Step {i + 1}</div>
                  <h3 className="font-bold text-lg font-display text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CERTIFICATIONS ═══════════ */}
      <section id="certifications" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Trust & Compliance</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Certifications & Standards</h2>
          </RevealAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <RevealAnimation key={cert.name} direction="scale" delay={i * 0.05}>
                <div className="gradient-border p-6 text-center card-lift group" data-aos="flip-up" data-aos-delay={i * 50}>
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-sm font-display text-slate-900">{cert.name}</h3>
                  <p className="text-slate-500 text-xs mt-1">{cert.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ KHETIBHARAT STATISTICS ═══════════ */}
      <section id="statistics-section" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <ParticleBackground count={30} color="rgba(46, 139, 87, 0.2)" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {KHETI_BHARAT_DETAILS.statistics.map((stat, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400">
                  <CountUp end={parseInt(stat.value)} suffix={stat.suffix || ''} />
                </div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ECOSYSTEM ═══════════ */}
      <section id="ecosystem-divisions" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <RevealAnimation direction="up" className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">The Circular Bio-Model</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Our Closed-Loop Ecosystem</h2>
            <p className="text-slate-500">Biology and technology in a single circular infrastructure.</p>
          </RevealAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { icon: Microscope, tag: 'Biotechnology Block', title: 'Algal Biotechnology Division', color: 'emerald', desc: 'Isolated culture, borosilicate vertical arrays, mechanical vacuum dewatering, and spray-dehydration.', items: ['Pure Arthrospira platensis culture lines', 'Controlled light spectra & nutrient profiling', 'Heavy-metal & toxin-free protocols', 'Low-temperature pharmaceutical drying'], link: '/products', linkText: 'Browse Algal Formulations' },
              { icon: Trees, tag: 'Agronomic Block', title: 'Sustainable Natural Agronomy', color: 'green', desc: 'Farmer integration networks, organic certification protocols, and microalgae soil stimulants.', items: ['Zero synthetic pesticide conversion', 'Microbial inoculants & algae biostimulants', 'PGS-India cluster certification', 'Guaranteed pre-harvest buyback'], link: '/khetibharat', linkText: 'Explore KhetiBharat' },
            ].map((div, i) => (
              <RevealAnimation key={div.title} direction={i === 0 ? 'left' : 'right'}>
                <div className="card-lift bg-white rounded-3xl border border-slate-100 p-8 space-y-6 shadow-premium relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${div.color}-600 to-${div.color}-400`} />
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl group-hover:rotate-6 transition-transform">
                      <div.icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">{div.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display">{div.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{div.desc}</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {div.items.map(item => (
                      <li key={item} className="flex items-center gap-2"><span className="text-emerald-500">✓</span>{item}</li>
                    ))}
                  </ul>
                  <Link to={div.link} className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm group/link">
                    {div.linkText} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ VIDEO SECTION ═══════════ */}
      <section id="factory-tour" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealAnimation direction="up">
            <span className="text-emerald-400 font-semibold text-xs uppercase tracking-widest">Virtual Experience</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-8">Factory Tour</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-12">Experience our state-of-the-art GMP-certified manufacturing facility.</p>

            <button
              onClick={() => setVideoPlaying(!videoPlaying)}
              className="group relative w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              aria-label="Play factory tour video"
            >
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </button>
          </RevealAnimation>

          {videoPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
            >
              <video autoPlay muted controls className="w-full aspect-video" poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&h=720&fit=crop">
                <source src="https://cdn.coverr.co/videos/coverr-a-man-working-in-a-factory-9764/1080p.mp4" type="video/mp4" />
              </video>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section id="gallery" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Visual Journey</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Our Gallery</h2>
          </RevealAnimation>
          <MasonryGallery />
        </div>
      </section>

      {/* ═══════════ INTERACTIVE MAP ═══════════ */}
      <section id="interactive-map-section" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <RevealAnimation direction="up" className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-emerald-400 font-semibold text-xs uppercase tracking-widest">Regional Network</span>
            <h2 className="text-3xl sm:text-4xl font-bold">National Operating Infrastructure</h2>
          </RevealAnimation>
          <InteractiveMap />
        </div>
      </section>

      {/* ═══════════ SUSTAINABILITY ═══════════ */}
      <section id="sustainability-highlights" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <RevealAnimation direction="left" className="lg:col-span-5 space-y-6">
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Ecological Footprint</span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Our Zero-Waste Biorefinery Standard</h2>
              <p className="text-slate-600 leading-relaxed">{SUSTAINABILITY_ESG.overview}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 glass-panel rounded-2xl text-center">
                  <div className="text-3xl font-bold text-emerald-700"><CountUp end={2} suffix=".4x" /></div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Carbon Capture</div>
                </div>
                <div className="p-5 glass-panel rounded-2xl text-center">
                  <div className="text-3xl font-bold text-emerald-700"><CountUp end={94} suffix="%" /></div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Water Recycled</div>
                </div>
              </div>
              <Link to="/sustainability" className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm group">
                Read Full ESG Disclosures <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealAnimation>

            <RevealAnimation direction="right" className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-8 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider pb-3 border-b border-slate-200">Industrial Circular Bio-Flow</h4>
                {['Carbon & Sunlight Ingestion — Vertical photobioreactors lock atmospheric CO2.', 'Metabolic Protein Synthesis — Separating phycocyanin and clinical-grade biomass.', 'Upcycling Refinery Co-Products — Cellulosic residues into nitrogen soil bio-stimulants.', 'Soil Microbiome Rejuvenation — KhetiBharat increases organic soil carbon levels.'].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <p className="text-sm text-slate-600">{step}</p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section id="testimonials" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Client Voices</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">What Our Partners Say</h2>
          </RevealAnimation>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ═══════════ BLOG / NEWS ═══════════ */}
      <section id="news-highlights" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Media Center</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Latest Insights</h2>
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-emerald-200 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, i) => (
              <RevealAnimation key={news.id} direction="up" delay={i * 0.1}>
                <article className="card-lift group bg-white rounded-3xl border border-slate-100 shadow-premium overflow-hidden" data-aos="fade-up">
                  <div className="img-zoom-container h-48">
                    <img
                      src={`https://images.unsplash.com/photo-${['1622206151226-18ca2c9ab4a1', '1464226187744-90997a736a1c', '1532187863486-abf9db3851ce'][i]}?w=600&h=300&fit=crop`}
                      alt=""
                      className="img-zoom w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-emerald-600 font-semibold uppercase">{news.categoryLabel}</span>
                      <span className="text-slate-400">{news.date}</span>
                    </div>
                    <h3 className="font-bold text-lg font-display line-clamp-2 group-hover:text-emerald-700 transition-colors">{news.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{news.summary}</p>
                    <Link to={`/news?id=${news.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                      Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq-section" className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center mb-16 space-y-4">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </RevealAnimation>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, i) => (
              <RevealAnimation key={faq.id} direction="up" delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" data-aos="fade-up">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                    aria-expanded={openFaq === faq.id}
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === faq.id ? 'auto' : 0, opacity: openFaq === faq.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="text-emerald-700 font-semibold text-sm hover:underline">View all FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ GLOBAL CTA ═══════════ */}
      <section id="global-cta-section" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.1),transparent_60%)]" />
        <ParticleBackground count={25} color="rgba(201, 162, 39, 0.2)" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <RevealAnimation direction="up">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest">Join the Circular Future</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-4">Let's Co-Engineer Abundance</h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mt-4">
              Whether you are a farming cooperative, bioprocess academic, or institutional investor — there is a verified channel for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <RippleButton to="/partner" variant="gold">Access Partner Registration</RippleButton>
              <RippleButton to="/contact" variant="secondary">Speak to Our Liaison</RippleButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
