interface FloatingLeavesProps {
  count?: number;
  className?: string;
}

const LEAVES = ['🍃', '🌿', '🍀'];

export default function FloatingLeaves({ count = 8, className = '' }: FloatingLeavesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute text-2xl opacity-20 animate-float"
          style={{
            left: `${(i * 13 + 5) % 95}%`,
            top: `${(i * 17 + 10) % 90}%`,
            animationDuration: `${6 + (i % 4) * 2}s`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {LEAVES[i % LEAVES.length]}
        </span>
      ))}
    </div>
  );
}
