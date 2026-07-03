/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, MouseEvent, ReactNode, RefObject } from 'react';
import { Link } from 'react-router-dom';

interface RippleButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  type?: 'button' | 'submit';
}

export default function RippleButton({
  children,
  to,
  href,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
}: RippleButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const baseClasses =
    'ripple-container relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 cursor-pointer overflow-hidden';

  const variants = {
    primary:
      'bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5',
    secondary:
      'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:-translate-y-0.5',
    outline:
      'bg-white border-2 border-emerald-200 text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50 hover:-translate-y-0.5',
    gold: 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg shadow-amber-900/20 hover:-translate-y-0.5',
  };

  const handleRipple = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const combinedClass = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} ref={ref as RefObject<HTMLAnchorElement>} className={combinedClass} onClick={handleRipple}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} ref={ref as RefObject<HTMLAnchorElement>} className={combinedClass} onClick={handleRipple} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} ref={ref} className={combinedClass} onClick={(e) => { handleRipple(e); onClick?.(); }}>
      {children}
    </button>
  );
}
