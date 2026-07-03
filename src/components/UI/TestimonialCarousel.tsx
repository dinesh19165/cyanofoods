/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. Rajesh Mehta',
    role: 'Chief Nutritionist, Wellness Corp',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Cyano Foods delivers pharmaceutical-grade Spirulina with unmatched purity standards. Their commitment to scientific rigor and sustainable sourcing sets them apart in the nutraceutical industry.',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Procurement Director, Global Foods Ltd',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'We have partnered with Cyano Foods for private label manufacturing. Their GMP-certified facilities, transparent supply chain, and export-ready documentation make them an ideal OEM partner.',
  },
  {
    id: 3,
    name: 'Prof. Anil Deshmukh',
    role: 'Director, National Biotech Institute',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Their research collaboration on Phycocyanin extraction has been groundbreaking. Cyano Foods bridges academic innovation with commercial viability like no other Indian biotech firm.',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setAutoPlay(false);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative"
        >
          <Quote className="w-10 h-10 text-emerald-600/20 absolute top-6 left-6" />
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto italic">
            "{testimonial.text}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover ring-4 ring-emerald-100"
              loading="lazy"
            />
            <div className="text-left">
              <p className="font-bold text-slate-900 font-display">{testimonial.name}</p>
              <p className="text-sm text-emerald-600">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-3 rounded-full glass-panel hover:bg-emerald-50 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-emerald-700" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoPlay(false); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === current ? 'bg-emerald-600 w-8' : 'bg-emerald-200'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-3 rounded-full glass-panel hover:bg-emerald-50 transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-emerald-700" />
        </button>
      </div>
    </div>
  );
}
