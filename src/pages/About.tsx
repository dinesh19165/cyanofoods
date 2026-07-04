/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, Microscope, Sprout, Users, Award } from 'lucide-react';
import SEO from '../components/SEO';
import BrandLogo from '../components/UI/BrandLogo';
import RevealAnimation from '../components/UI/RevealAnimation';
import TiltCard from '../components/UI/TiltCard';
import GradientBlobs from '../components/UI/GradientBlobs';
import ParticleBackground from '../components/UI/ParticleBackground';
import { PAGE_VIDEOS } from '../constants/brand';
import { ABOUT_OVERVIEW, CORE_VALUES, TIMELINE_EVENTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    gsap.fromTo(items, { opacity: 0, x: -60 }, {
      opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const getIcon = (title: string) => {
    if (title.includes('Scientific')) return Microscope;
    if (title.includes('Ecological')) return Sprout;
    if (title.includes('Farmer')) return Users;
    return Award;
  };

  return (
    <div id="about-page-container" className="min-h-screen bg-slate-50">
      <SEO title="About Us" description="Learn about the corporate narrative, molecular biotechnology achievements, vision, and mission of Cyano Foods India OPC Private Limited, led by Dr. Avanish Kumar." />

      {/* Split hero — laboratory video + identity */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 lg:w-1/2 lg:left-auto lg:right-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={PAGE_VIDEOS.about} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent lg:from-slate-50 lg:via-slate-50/40 lg:to-emerald-900/30" />
        </div>
        <GradientBlobs />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">
              Our Identity
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Our Corporate <span className="text-gradient">Narrative</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-600 leading-relaxed max-w-lg">
              Uniting scientific exploration in biotechnology with regenerative agronomy to serve the national interest.
            </motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: 'spring' }} className="flex justify-center lg:justify-start">
              <BrandLogo size="xl" showText={false} linkToHome={false} animate />
            </motion.div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Who We Are + Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealAnimation direction="left">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="text-slate-600 leading-relaxed space-y-4 text-sm">
              <p>{ABOUT_OVERVIEW.whoWeAre}</p>
              <p className="font-semibold text-emerald-800">
                By bringing together bioprocess engineers and dedicated agronomists, we have established a state-of-the-art closed loop ecosystem where biological inputs restore soil micro-carbon, and clinical-grade nutrients nourish humans.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation direction="right">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-slate-600 leading-relaxed text-sm">{ABOUT_OVERVIEW.story}</p>
          </RevealAnimation>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <ParticleBackground count={25} color="rgba(46, 139, 87, 0.2)" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <RevealAnimation direction="left">
            <div className="gradient-border p-8 space-y-4">
              <div className="p-3 w-12 h-12 bg-emerald-100 rounded-xl"><Target className="w-6 h-6 text-emerald-700" /></div>
              <h3 className="text-2xl font-bold text-emerald-700">Our Vision Statement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{ABOUT_OVERVIEW.vision}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation direction="right">
            <div className="gradient-border p-8 space-y-4">
              <div className="p-3 w-12 h-12 bg-emerald-100 rounded-xl"><Heart className="w-6 h-6 text-emerald-700" /></div>
              <h3 className="text-2xl font-bold text-emerald-700">Our Mission Mandate</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{ABOUT_OVERVIEW.mission}</p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center mb-16">
            <span className="text-emerald-600 text-xs font-semibold uppercase tracking-widest">Ethical Directives</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Our Core Operating Values</h2>
          </RevealAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = getIcon(val.title);
              return (
                <RevealAnimation key={val.title} direction="up" delay={idx * 0.08}>
                  <TiltCard glow className="h-full">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-premium h-full space-y-3">
                      <div className="p-2.5 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold font-display">{val.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </TiltCard>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="scale">
            <div className="relative bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-10 sm:p-16 rounded-[2.5rem] overflow-hidden">
              <div className="absolute top-0 right-0 text-[12rem] font-display font-bold text-white/5 leading-none select-none">"</div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-4 text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-white/10 flex items-center justify-center text-5xl mb-4">
                    {ABOUT_OVERVIEW.leadershipMessage.avatar}
                  </div>
                  <h3 className="font-bold text-emerald-300 text-lg">{ABOUT_OVERVIEW.leadershipMessage.author}</h3>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">{ABOUT_OVERVIEW.leadershipMessage.role}</p>
                </div>
                <div className="lg:col-span-8">
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Executive Message</span>
                  <p className="text-xl sm:text-2xl leading-relaxed italic mt-4 text-slate-200">
                    "{ABOUT_OVERVIEW.leadershipMessage.text}"
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation direction="up" className="text-center mb-16">
            <span className="text-emerald-600 text-xs font-semibold uppercase tracking-widest">Corporate Chronology</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Our Path of Progression</h2>
          </RevealAnimation>
          <div ref={timelineRef} className="flex gap-6 overflow-x-auto timeline-scroll pb-4 snap-x">
            {TIMELINE_EVENTS.map((evt) => (
              <div key={evt.year} className="timeline-item snap-center shrink-0 w-72 p-6 bg-white rounded-2xl border border-slate-100 shadow-premium card-lift">
                <div className="text-3xl font-bold text-emerald-600 font-display mb-2">{evt.year}</div>
                <h3 className="font-bold text-slate-900 mb-2">{evt.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{evt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
