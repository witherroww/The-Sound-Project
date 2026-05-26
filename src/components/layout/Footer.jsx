import { useEffect, useRef } from 'react';

export default function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(155,107,24,0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      for (let x = 0; x < canvas.width; x++) {
        const t = (x / canvas.width) * Math.PI * 8 + frame * 0.02;
        const amp = 12 * Math.sin((x / canvas.width) * Math.PI);
        const y = cy + Math.sin(t) * amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      frame++;
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  const refs = [
    { num: 1, text: 'ISO 140-4:1998 — Measurement of sound insulation in buildings.', url: 'https://www.iso.org/standard/23087.html' },
    { num: 2, text: 'Beranek, L. (1960). Noise Reduction. McGraw-Hill.' },
    { num: 3, text: 'Hongisto, V. (2006). A model predicting the effect of speech of varying intelligibility. JASA.' },
    { num: 4, text: 'ASTM E90-09 — Standard Method for Laboratory Measurement of Airborne Sound Transmission Loss.' },
    { num: 5, text: 'Mass Loaded Vinyl: Acoustic Properties and Applications. Acoustical Society of America.' },
  ];

  return (
    <footer className="bg-obsidian text-white">
      {/* Waveform signature */}
      <div className="border-b border-white/10 py-8">
        <canvas ref={canvasRef} className="w-full h-12 opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Identity */}
          

          

          {/* Correspondence */}
          <div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-mono text-xs text-white/20 tracking-wider">
                THE SOUND PROJECT<br />
                © 2026 - Ryan McGurk 
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}