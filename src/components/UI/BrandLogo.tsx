import { Link } from 'react-router-dom';
import { LOGO_PATH } from '../../constants/brand';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  linkToHome?: boolean;
  animate?: boolean;
}

const sizes = {
  sm: { img: 'w-9 h-9', title: 'text-sm', sub: 'text-[8px]' },
  md: { img: 'w-16 h-16', title: 'text-xl', sub: 'text-[10px]' },
  lg: { img: 'w-24 h-24', title: 'text-3xl', sub: 'text-xs' },
  xl: { img: 'w-36 h-36', title: 'text-4xl', sub: 'text-sm' },
};

export default function BrandLogo({ size = 'md', showText = true, className = '', linkToHome = true, animate = false }: BrandLogoProps) {
  const s = sizes[size];

  const content = (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className={`${s.img} shrink-0 ${animate ? 'animate-float-slow' : ''}`}>
        <img
          src={LOGO_PATH}
          alt="Cyano Foods India"
          className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
          width={128}
          height={128}
          loading="eager"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`${s.title} font-bold font-display tracking-tight leading-none`}>CYANO FOODS</span>
          <span className={`${s.sub} font-semibold tracking-widest text-emerald-600 leading-none mt-1 uppercase`}>
            India OPC Pvt Ltd
          </span>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return <Link to="/" className="inline-flex">{content}</Link>;
  }
  return content;
}
