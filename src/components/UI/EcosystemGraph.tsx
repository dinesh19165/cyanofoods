import React from 'react';

type Props = {
  nodes: string[];
  size?: number;
  centerLabel?: string;
};

export default function EcosystemGraph({ nodes, size = 800, centerLabel = 'Cyano Foods' }: Props) {
  const width = size;
  const height = Math.round((size * 520) / 800);
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.28; // space for labels

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      role="img"
      aria-label="KhetiBharat ecosystem graph: central hub with connected partners"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="eg-green" x1="0" x2="1">
          <stop offset="0%" stopColor="#6DCF8C" />
          <stop offset="100%" stopColor="#115E3B" />
        </linearGradient>
      </defs>

      {/* soft central glow */}
      <circle cx={cx} cy={cy} r={radius * 1.15} fill="url(#eg-green)" opacity="0.08" />

      {/* connectors */}
      {nodes.map((_, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2; // start from top
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * radius;
        const innerX = cx + Math.cos(angle) * (radius * 0.45);
        const innerY = cy + Math.sin(angle) * (radius * 0.45);
        return (
          <g key={`conn-${i}`}> 
            <line
              x1={innerX}
              y1={innerY}
              x2={nx}
              y2={ny}
              stroke="#0E5C36"
              strokeWidth={3}
              strokeDasharray="8 10"
              strokeLinecap="round"
              opacity={0.9}
            />
          </g>
        );
      })}

      {/* central hub */}
      <g>
        <circle cx={cx} cy={cy} r={radius * 0.42} fill="#0E5C36" />
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontWeight={700} fontSize={Math.max(14, radius * 0.12)}>
          {centerLabel}
        </text>
      </g>

      {/* peripheral labels as rounded rectangles */}
      {nodes.map((label, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * radius;
        const rectWidth = 140;
        const rectHeight = 36;
        // offset label outward
        const offset = 24;
        const lx = nx + Math.cos(angle) * offset - rectWidth / 2;
        const ly = ny + Math.sin(angle) * offset - rectHeight / 2;

        return (
          <g key={`node-${i}`} transform={`translate(${lx}, ${ly})`} aria-label={label} role="group">
            <rect width={rectWidth} height={rectHeight} rx={20} ry={20} fill="#0E5C36" opacity={1} />
            <text x={rectWidth / 2} y={rectHeight / 2} textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontWeight={700} fontSize={13}>
              {label}
            </text>
          </g>
        );
      })}

      {/* subtle outer guide circle */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#C8EED3" strokeWidth={1} strokeDasharray="3 6" opacity={0.45} />
    </svg>
  );
}
