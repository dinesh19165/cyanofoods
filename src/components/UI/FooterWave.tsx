export default function FooterWave() {
  return (
    <div className="absolute top-0 left-0 right-0 -translate-y-[99%] overflow-hidden leading-none" aria-hidden="true">
      <svg
        className="relative block w-full h-12 sm:h-16 animate-wave"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C300,120 500,0 600,60 C700,120 900,0 1200,60 L1200,120 L0,120 Z"
          className="fill-slate-900"
        />
      </svg>
    </div>
  );
}
