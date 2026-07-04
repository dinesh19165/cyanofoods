import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_PATH } from '../../constants/brand';

interface PremiumLoaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function PremiumLoader({ onComplete, minDuration = 2200 }: PremiumLoaderProps) {
  const [fill, setFill] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setFill((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 600);
    }, minDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center"
        >
          <div className="relative w-40 h-40 mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-emerald-900/50 overflow-hidden">
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-400"
                style={{ height: `${fill}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="absolute inset-2 flex items-center justify-center">
              <motion.img
                src={LOGO_PATH}
                alt="Cyano Foods"
                className="w-24 h-24 object-contain relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
              />
            </div>
          </div>
          <motion.p
            className="text-emerald-400 text-sm font-semibold tracking-widest uppercase"
            animate={{ opacity: done ? 0 : 1 }}
          >
            {fill < 100 ? 'Loading Experience...' : 'Welcome'}
          </motion.p>
          <div className="w-48 h-1 bg-emerald-900/50 rounded-full mt-6 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
              style={{ width: `${fill}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
