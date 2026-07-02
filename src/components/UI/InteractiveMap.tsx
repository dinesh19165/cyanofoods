/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Building2, GraduationCap, Sprout, Landmark } from 'lucide-react';

interface MapPoint {
  id: string;
  name: string;
  type: 'hq' | 'research' | 'council' | 'hub';
  coordinates: { x: number; y: number }; // Percentage values for SVG container
  region: string;
  state: string;
  details: string;
  farmers: string;
}

const mapPoints: MapPoint[] = [
  {
    id: "pune-hq",
    name: "Corporate Headquarters & R&D",
    type: "hq",
    coordinates: { x: 38, y: 55 },
    region: "West",
    state: "Maharashtra (Pune)",
    details: "Central analytical labs, bioreactor testing bays, administrative offices, and global sales.",
    farmers: "N/A (HQ Complex)"
  },
  {
    id: "anantapur-hub",
    name: "Southern Regional Hub & Academy",
    type: "council",
    coordinates: { x: 44, y: 76 },
    region: "South",
    state: "Andhra Pradesh (Anantapur)",
    details: "KhetiBharat Southern Academy, group organic auditing, local microalgae production tank trial beds.",
    farmers: "450+ Active Farmers"
  },
  {
    id: "kurnool-center",
    name: "Solar Collection & Grading Center",
    type: "hub",
    coordinates: { x: 46, y: 72 },
    region: "South",
    state: "Andhra Pradesh (Kurnool)",
    details: "Primary sorting, thermodynamic low-temperature drying, and direct QR-traceability bagging.",
    farmers: "350+ Active Farmers"
  },
  {
    id: "pune-rural-center",
    name: "Western Biomanure Production Hub",
    type: "hub",
    coordinates: { x: 35, y: 59 },
    region: "West",
    state: "Maharashtra (Pune District)",
    details: "Decentralized nitrogen-fixing bacterial inoculation and organic composting hubs.",
    farmers: "400+ Active Farmers"
  }
];

export default function InteractiveMap() {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(mapPoints[0]);

  const getPointIcon = (type: string) => {
    switch (type) {
      case 'hq': return <Building2 className="w-5 h-5 text-emerald-500" />;
      case 'research': return <GraduationCap className="w-5 h-5 text-blue-500" />;
      case 'council': return <Landmark className="w-5 h-5 text-amber-500" />;
      default: return <Sprout className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <div id="interactive-map-root" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
      <div id="map-info-section" className="lg:col-span-5 space-y-6">
        <div id="map-badge" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide">
          <MapPin className="w-3.5 h-3.5" />
          Interactive Operations Map
        </div>
        
        <h3 id="map-heading" className="text-3xl font-bold tracking-tight text-white font-display">
          Our Geographic <span className="text-emerald-400">Footprint</span>
        </h3>
        
        <p id="map-intro" className="text-slate-400 text-sm leading-relaxed">
          Cyano Foods India operates across optimized bio-climatic zones, placing advanced biotech labs and decentralized processing facilities right at the heart of our rural agricultural networks.
        </p>

        <div id="map-point-cards" className="space-y-4">
          {mapPoints.map((point) => (
            <button
              id={`btn-${point.id}`}
              key={point.id}
              onClick={() => setSelectedPoint(point)}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex gap-4 items-start ${
                selectedPoint?.id === point.id
                  ? 'bg-slate-800 border-emerald-500 shadow-lg shadow-emerald-500/5'
                  : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${
                selectedPoint?.id === point.id ? 'bg-emerald-500/20' : 'bg-slate-700/50'
              }`}>
                {getPointIcon(point.type)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm font-display text-white">{point.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    point.type === 'hq' ? 'bg-emerald-500/10 text-emerald-400' :
                    point.type === 'council' ? 'bg-amber-500/10 text-amber-400' :
                    'bg-green-500/10 text-green-400'
                  }`}>
                    {point.type.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs text-slate-400">{point.state}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div id="map-svg-container" className="lg:col-span-7 relative bg-slate-950 rounded-2xl border border-slate-800 p-6 flex items-center justify-center min-h-[450px]">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />
        
        {/* Stylized Minimal Map of India SVG */}
        <svg
          id="india-outline-svg"
          viewBox="0 0 100 100"
          className="w-full max-w-[400px] h-auto text-slate-800 opacity-80"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {/* Extremely simplified, elegant geometric boundary of India for abstract dashboard visual */}
          <path
            d="M 40 10 L 43 15 L 45 13 L 48 18 L 50 18 L 52 14 L 54 20 L 52 24 L 55 26 L 59 28 L 62 25 L 60 30 L 64 32 L 68 28 L 73 30 L 71 33 L 75 35 L 72 38 L 76 41 L 80 40 L 82 43 L 88 43 L 85 46 L 80 47 L 76 46 L 75 50 L 70 52 L 67 49 L 65 52 L 60 51 L 58 53 L 56 50 L 52 52 L 53 55 L 50 58 L 51 63 L 48 68 L 49 74 L 46 80 L 44 86 L 43 90 L 42 92 L 41 90 L 39 84 L 38 78 L 37 72 L 35 68 L 36 62 L 34 58 L 31 56 L 28 58 L 26 55 L 22 55 L 20 52 L 18 48 L 15 45 L 20 42 L 23 45 L 25 40 L 27 35 L 30 32 L 33 28 L 36 26 L 38 22 L 39 15 Z"
            fill="rgba(15, 118, 110, 0.05)"
            stroke="rgba(16, 185, 129, 0.15)"
            strokeWidth="1.2"
          />
          {/* Grid lines */}
          <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
          <line x1="40" y1="0" x2="40" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
          <line x1="60" y1="0" x2="60" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
          <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
          <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
          <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
          <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" />
        </svg>

        {/* Pulse elements representing the hubs */}
        {mapPoints.map((point) => {
          const isSelected = selectedPoint?.id === point.id;
          return (
            <div
              id={`marker-${point.id}`}
              key={point.id}
              className="absolute group cursor-pointer transition-all duration-300"
              style={{ left: `${point.coordinates.x}%`, top: `${point.coordinates.y}%` }}
              onClick={() => setSelectedPoint(point)}
            >
              {/* Outer Pulsing Glow */}
              <span className={`absolute -left-2.5 -top-2.5 h-7 w-7 rounded-full opacity-75 animate-ping transition-all ${
                isSelected ? 'bg-emerald-400' : 'bg-slate-400/50'
              }`} />
              
              {/* Inner Dot */}
              <div className={`relative h-2.5 w-2.5 rounded-full border border-white shadow-md transition-all duration-300 ${
                isSelected ? 'bg-emerald-400 scale-125' : 'bg-slate-300 group-hover:bg-emerald-300'
              }`} />

              {/* Tooltip on Hover */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-slate-900 text-white text-[11px] font-medium font-display px-2 py-1 rounded border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                {point.name}
              </div>
            </div>
          );
        })}

        {/* Floating Detail Card for Selected Point */}
        {selectedPoint && (
          <div id="selected-point-popup" className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 animate-fade-in">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-sm font-semibold font-display text-emerald-400">{selectedPoint.name}</h4>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">{selectedPoint.state}</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono border border-slate-700">
                {selectedPoint.region} India
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedPoint.details}</p>
            <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] font-mono">
              <span className="text-slate-400">Farmers Connected:</span>
              <span className="text-emerald-400 font-semibold">{selectedPoint.farmers}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
