import { yearsToDays } from 'date-fns';
import { useState } from 'react';

const layers = [
  {
    id: 'plaster',
    label: 'Lath & Plaster',
    year: 'Original 1930s wall assembly',
    stc: null,
    desc: 'Lime plaster over wood lath. Dense and durable, but rigidly connected to the surrounding structure, allowing vibration and sound to travel between rooms.',
    color: '#E8D5B0',
    stroke: '#9B6B18',
  },
  {
    id: 'air',
    label: 'Air Gap',
    year: 'Decoupling strategy',
    stc: null,
    desc: 'A small air cavity aids in interrupting direct vibration transfer between connected surfaces. Separation is one of the most effective tools in acoustic isolation.',
    color: '#EAF0F8',
    stroke: '#3A5F8A',
  },
  {
    id: 'wool',
    label: 'Mineral Wool',
    year: 'Absorption layer',
    stc: null,
    desc: 'Dense fibrous insulation designed to absorb part of the acoustic energy traveling through the wall, particularly great at reducing mid and high frequencies, which can be problmatic in quiet environments.',
    color: '#D4C5A9',
    stroke: '#9B6B18',
  },
  {
    id: 'mlv',
    label: 'Mass Loaded Vinyl',
    year: 'Flexible barrier layer',
    stc: null,
    desc: 'A dense but flexible material used to increase mass without creating a rigid structural connection, which would otherwise create a direct path for vibration and sound transmission. Particularly useful for reducing lower-frequency transmissions.',
    color: '#B8C8DC',
    stroke: '#3A5F8A',
  },
  {
    id: 'drywall',
    label: 'Acoustic Drywall',
    year: 'Damped surface layer',
    stc: null,
    desc: 'A layered drywall assembly designed to reduce resonance and dissipate part of the vibrational energy traveling through the structure.',
    color: '#F0EDE8',
    stroke: '#1A1A1A',
  },
];

export default function WallDiagram() {
  const [active, setActive] = useState(null);

  const activeLayer = layers.find(l => l.id === active);

  return (
    <div className="relative">
      <div className="flex items-start gap-12">
        {/* SVG diagram */}
        <div className="relative flex-shrink-0">
          <svg viewBox="0 0 320 280" fill="none" className="w-80">
            {/* Labels on left */}
            {layers.map((layer, i) => {
              const y = 20 + i * 48;
              const x = 60 + i * 8;
              const h = 40;
              const isActive = active === layer.id;

              return (
                <g key={layer.id} className="cursor-pointer" onClick={() => setActive(active === layer.id ? null : layer.id)}>
                  {/* Layer block */}
                  <rect
                    x={x}
                    y={y}
                    width={220 - i * 16}
                    height={h}
                    fill={isActive ? layer.color : layer.color + '88'}
                    stroke={isActive ? layer.stroke : layer.stroke + '44'}
                    strokeWidth={isActive ? 1.5 : 0.75}
                  />
                  {/* Label */}
                  <text
                    x={x + 8}
                    y={y + h / 2 + 4}
                    fontSize="10"
                    fill={isActive ? '#1A1A1A' : '#1A1A1A88'}
                    fontFamily="JetBrains Mono"
                  >
                    {layer.label}
                  </text>
                  {/* STC badge */}
                  {layer.stc && (
                    <text
                      x={x + 220 - i * 16 - 8}
                      y={y + h / 2 + 4}
                      fontSize="9"
                      fill={isActive ? layer.stroke : layer.stroke + '88'}
                      fontFamily="JetBrains Mono"
                      textAnchor="end"
                    >
                      STC {layer.stc}
                    </text>
                  )}
                  {/* Hover indicator */}
                  {isActive && (
                    <rect
                      x={x - 3}
                      y={y}
                      width={3}
                      height={h}
                      fill={layer.stroke}
                    />
                  )}
                </g>
              );
            })}

            {/* Sound wave entering from left */}
            {[0, 1, 2].map(i => (
              <path
                key={i}
                d={`M 20 ${100 + i * 25} C 30 ${95 + i * 25} 45 ${110 + i * 25} 55 ${100 + i * 25}`}
                stroke="#9B6B18"
                strokeWidth="1"
                fill="none"
                opacity={0.6 - i * 0.15}
              />
            ))}
            <text x="5" y="88" fill="#9B6B18" fontSize="8" fontFamily="JetBrains Mono">Sounds</text>

            {/* Dampened output right */}
            
            
          </svg>

          <p className="font-mono text-xs text-obsidian/30 mt-2">Click a layer to inspect</p>
        </div>

        {/* Spec card */}
        <div className="flex-1 min-h-[220px]">
          {activeLayer ? (
            <div
              className="p-6 border-l-2 h-full"
              style={{ borderLeftColor: activeLayer.stroke }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: activeLayer.stroke }}>
                SPEC CARD // {activeLayer.label.toUpperCase()}
              </p>
              <p className="font-mono text-xs text-obsidian/40 mb-4">{activeLayer.year}</p>
              {activeLayer.stc && (
                <div className="mb-4">
                  <p className="font-mono text-xs text-obsidian/40 mb-1">STC RATING</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-inter font-light" style={{ letterSpacing: '-0.04em', color: activeLayer.stroke }}>
                      {activeLayer.stc}
                    </span>
                    <span className="font-mono text-xs text-obsidian/40 mb-2">dB isolation</span>
                  </div>
                </div>
              )}
              <p className="text-sm text-obsidian/70 leading-relaxed">{activeLayer.desc}</p>
            </div>
          ) : (
            <div className="p-6 border border-dashed border-obsidian/10 h-full flex items-center justify-center">
              <p className="font-mono text-xs text-obsidian/30 text-center">
                Select a layer in the diagram<br />to view specifications
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}