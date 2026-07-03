/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600&h=800&fit=crop', alt: 'Spirulina cultivation ponds', height: 'h-72' },
  { id: 2, src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop', alt: 'Healthy organic food', height: 'h-48' },
  { id: 3, src: 'https://images.unsplash.com/photo-1532187863486-abf9db3851ce?w=600&h=500&fit=crop', alt: 'Laboratory research', height: 'h-56' },
  { id: 4, src: 'https://images.unsplash.com/photo-1464226187744-90997a736a1c?w=600&h=700&fit=crop', alt: 'Organic farming', height: 'h-64' },
  { id: 5, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop', alt: 'Manufacturing facility', height: 'h-52' },
  { id: 6, src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop', alt: 'Nature and sustainability', height: 'h-60' },
  { id: 7, src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=500&fit=crop', alt: 'Green fields', height: 'h-56' },
  { id: 8, src: 'https://images.unsplash.com/photo-1576086213369-97a3d619cf1f?w=600&h=400&fit=crop', alt: 'Spirulina powder product', height: 'h-48' },
];

export default function MasonryGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="masonry-grid">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={img.id}
            className="masonry-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <button
              onClick={() => setLightbox(img.id)}
              className={`img-zoom-container relative w-full ${img.height} rounded-2xl overflow-hidden cursor-pointer group`}
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="img-zoom w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/50 transition-all duration-500 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white cursor-pointer"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={GALLERY_IMAGES.find((g) => g.id === lightbox)?.src}
              alt=""
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
