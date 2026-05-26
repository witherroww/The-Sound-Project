import { useEffect, useRef, useState } from 'react';

export default function HeroWaveform() {
  const [mouseX, setMouseX] = useState(0.5);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouseX((e.clientX - rect.left) / rect.width);
  };

  const width = 560;
  const height = 200;
  const points = 120;

  const buildPath = () => {
    let d = '';
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const normalizedX = i / points;

      // Distance from mouse position
      const dist = Math.abs(normalizedX - mouseX);
      const dampFactor = Math.min(1, dist * 3); // dampen near mouse

      // Amplitude varies — big at edges, quiet in middle-ish
      const baseAmp = 28 * Math.sin(normalizedX * Math.PI);
      const amp = baseAmp * dampFactor;

      const freq = 6 + Math.sin(normalizedX * 5) * 2;
      const y = height / 2 + Math.sin(normalizedX * Math.PI * freq + Date.now() * 0.001) * amp;

      d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }
    return d;
  };

  const [path, setPath] = useState('');

  useEffect(() => {
    let raf;
    const animate = () => {
      setPath(buildPath());
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [mouseX]);

  // House isometric SVG
  const HouseIso = () => (
    <svg viewBox="0 0 200 180" fill="none" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-90">
      {/* House body */}
      <polygon points="60,100 140,100 140,160 60,160" fill="#F7F5F2" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Roof */}
      <polygon points="50,100 100,50 150,100" fill="#F7F5F2" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Side face */}
      <polygon points="140,100 165,85 165,145 140,160" fill="#E8E5E0" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Roof side */}
      <polygon points="150,100 165,85 115,50 100,50" fill="#E0DDD7" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Door */}
      <rect x="85" y="130" width="20" height="30" fill="none" stroke="#3A5F8A" strokeWidth="1" />
      {/* Window left */}
      <rect x="65" y="112" width="16" height="14" fill="none" stroke="#3A5F8A" strokeWidth="0.8" />
      <line x1="73" y1="112" x2="73" y2="126" stroke="#3A5F8A" strokeWidth="0.5" />
      <line x1="65" y1="119" x2="81" y2="119" stroke="#3A5F8A" strokeWidth="0.5" />
      {/* Window right */}
      <rect x="119" y="112" width="16" height="14" fill="none" stroke="#3A5F8A" strokeWidth="0.8" />
      <line x1="127" y1="112" x2="127" y2="126" stroke="#3A5F8A" strokeWidth="0.5" />
      <line x1="119" y1="119" x2="135" y2="119" stroke="#3A5F8A" strokeWidth="0.5" />
      {/* Sound circles emanating */}
      {[1.2, 1.6, 2.0].map((scale, i) => (
        <ellipse
          key={i}
          cx="100" cy="105"
          rx={50 * scale} ry={35 * scale}
          stroke="#9B6B18"
          strokeWidth="0.5"
          fill="none"
          opacity={0.4 - i * 0.12}
          strokeDasharray="3 3"
        />
      ))}
      {/* Ground line */}
      <line x1="40" y1="160" x2="170" y2="160" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
    </svg>
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full cursor-crosshair"
      style={{ height: '200px' }}
    >
      <HouseIso />
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Behind-house wave (amber) */}
        <path
          d={path}
          stroke="#9B6B18"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Dampened overlay — flat near mouse */}
        <rect
          x={Math.max(0, (mouseX - 0.15) * width)}
          width={width * 0.3}
          height={height}
          fill="white"
          opacity="0.7"
        />
        {/* Flat "dampened" line */}
        <line
          x1={(mouseX - 0.12) * width}
          y1={height / 2}
          x2={(mouseX + 0.12) * width}
          y2={height / 2}
          stroke="#3A5F8A"
          strokeWidth="1.5"
          opacity="0.8"
        />
        {/* Labels */}
        <text x="8" y="20" fill="#9B6B18" fontSize="9" fontFamily="JetBrains Mono">AMBIENT NOISE</text>
        <text x={mouseX * width - 30} y={height - 8} fill="#3A5F8A" fontSize="9" fontFamily="JetBrains Mono">TREATED</text>
      </svg>
    </div>
  );
}