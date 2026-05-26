import { useState, useRef } from 'react';

// Mini waveform generator
function Waveform({ color, amplitude, noisy, width = 500, height = 80 }) {
  const points = 200;
  let d = '';
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    const t = (i / points) * Math.PI * 12;
    const base = Math.sin(t) * amplitude;
    const noise = noisy ? (Math.sin(t * 3.7) * amplitude * 0.4 + Math.sin(t * 7.1) * amplitude * 0.2) : 0;
    const y = height / 2 + base + noise;
    d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
      <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke={color} strokeWidth="0.5" opacity="0.2" />
      <path d={d} stroke={color} strokeWidth="1.5" fill="none" opacity="0.8" />
    </svg>
  );
}

// Spectrum bars
function Spectrum({ color, noisy, height = 80 }) {
  const bars = 40;
  return (
    <svg viewBox={`0 0 400 ${height}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
      {Array.from({ length: bars }).map((_, i) => {
        const x = (i / bars) * 400;
        const w = 400 / bars - 1;
        const baseH = noisy
          ? (20 + Math.sin(i * 0.8) * 15 + Math.random() * 18 + Math.exp(-Math.pow((i - 8) / 8, 2)) * 35)
          : (8 + Math.sin(i * 0.8) * 4 + Math.exp(-Math.pow((i - 6) / 10, 2)) * 12);
        const barH = Math.min(height - 4, baseH);
        return (
          <rect
            key={i}
            x={x}
            y={height - barH}
            width={w}
            height={barH}
            fill={color}
            opacity={0.7 + Math.sin(i) * 0.2}
          />
        );
      })}
    </svg>
  );
}

export default function BeforeAfterSlider() {
  const [sliderX, setSliderX] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const handlePointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    setSliderX(pct);
  };

  const handlePointerUp = () => { dragging.current = false; };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative overflow-hidden border border-obsidian/10 select-none"
        style={{ cursor: 'col-resize' }}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* BEFORE side */}
        <div className="p-6 bg-parchment">
          <p className="font-mono text-xs text-amber tracking-widest uppercase mb-3">BEFORE // UNTREATED</p>
          <div className="space-y-3">
            <Waveform color="#9B6B18" amplitude={22} noisy={true} />
            <Spectrum color="#9B6B18" noisy={true} />
          </div>
          <div className="mt-4 flex gap-6">
            <div>
              <p className="font-mono text-xs text-obsidian/30">AVG SPL</p>
              <p className="font-mono text-xl text-amber">62 dB</p>
            </div>
            <div>
              <p className="font-mono text-xs text-obsidian/30">PEAK</p>
              <p className="font-mono text-xl text-amber">74 dB</p>
            </div>
          </div>
        </div>

        {/* AFTER overlay — clips from right of slider */}
        <div
          className="absolute inset-0 p-6 bg-white overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderX}%)` }}
        >
          <p className="font-mono text-xs text-slate tracking-widest uppercase mb-3">AFTER // TREATED</p>
          <div className="space-y-3">
            <Waveform color="#3A5F8A" amplitude={7} noisy={false} />
            <Spectrum color="#3A5F8A" noisy={false} />
          </div>
          <div className="mt-4 flex gap-6">
            <div>
              <p className="font-mono text-xs text-obsidian/30">AVG SPL</p>
              <p className="font-mono text-xl text-slate">24 dB</p>
            </div>
            <div>
              <p className="font-mono text-xs text-obsidian/30">REDUCTION</p>
              <p className="font-mono text-xl text-slate">−38 dB</p>
            </div>
          </div>
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center"
          style={{ left: `calc(${sliderX}% - 1px)` }}
          onPointerDown={handlePointerDown}
        >
          <div className="w-px h-full bg-obsidian/30" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-obsidian/20 rounded-full shadow-md flex items-center justify-center cursor-col-resize">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M4 2L2 6L4 10M8 2L10 6L8 10" stroke="#1A1A1A" strokeWidth="1.2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-mono text-xs text-obsidian/30 mt-3 text-center">Drag the divider to compare before and after treatment</p>
    </div>
  );
}