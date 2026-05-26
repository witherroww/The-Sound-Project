import { useState, useEffect, useRef } from 'react';

const sections = [
  {
    id: 'practical-methods',
    label: 'Practical Methods',
    children: [
      { id: 'method-mth01', label: 'Door Hinge Lubrication' },
      { id: 'method-mth02', label: 'Softening Door Impact' },
      { id: 'method-mth03', label: 'Floor & Footstep Control' },
      { id: 'method-mth04', label: 'Structural Vibration' },
    ],
  },
  { id: 'physics-foundation', label: 'Physics Foundation' },
  { id: 'wall-anatomy', label: 'Wall Anatomy' },
  { id: 'selected-materials', label: 'Selected Materials' },
  { id: 'method-mth05', label: 'Background Noise' },
];

export default function ScienceNav() {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const allIds = sections.flatMap(s => s.children ? [s.id, ...s.children.map(c => c.id)] : [s.id]);

    const onScroll = () => {
      setVisible(window.scrollY > 200);
      for (let i = allIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(allIds[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(allIds[i]);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setDropdownOpen(false);
  };

  const isMethodActive = sections[0].children?.some(c => c.id === active) || active === 'practical-methods';

  return (
    <div
      className="fixed left-0 right-0 z-40 transition-all duration-300"
      style={{
        top: '64px',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
      }}
    >
      <div className="bg-white/90 backdrop-blur-md border-b border-obsidian/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center flex-wrap gap-1 py-3">
            <span className="font-mono text-xs text-obsidian/25 mr-4 shrink-0 tracking-widest uppercase">Jump to</span>

            {sections.map((s) => {
              if (s.children) {
                return (
                  <div key={s.id} className="relative shrink-0" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(v => !v)}
                      onMouseEnter={() => setDropdownOpen(true)}
                      className={`flex items-center gap-1 px-4 py-1.5 font-mono text-xs tracking-wide transition-all rounded-sm border-b-2 ${
                        isMethodActive
                          ? 'text-slate border-slate'
                          : 'text-obsidian/50 border-transparent hover:text-obsidian'
                      }`}
                    >
                      {s.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 mt-px">
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 bg-white border border-obsidian/10 shadow-lg z-50 w-56"
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        <div className="px-4 pt-3 pb-2 border-b border-obsidian/8">
                          <span className="font-mono text-xs text-obsidian/30 tracking-widest uppercase">Sub-sections</span>
                        </div>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className="w-full text-left px-4 py-2.5 font-mono text-xs text-obsidian/40 hover:text-obsidian/70 tracking-wide border-b border-obsidian/8 transition-colors"
                        >
                          ↑ All Methods Overview
                        </button>
                        {s.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => scrollTo(child.id)}
                            className={`w-full text-left px-4 py-2.5 font-mono text-xs tracking-wide transition-colors border-b border-obsidian/5 last:border-0 ${
                              active === child.id
                                ? 'text-slate bg-parchment'
                                : 'text-obsidian/55 hover:text-obsidian hover:bg-parchment/60'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`shrink-0 px-4 py-1.5 font-mono text-xs tracking-wide transition-all rounded-sm border-b-2 ${
                    active === s.id
                      ? 'text-slate border-slate'
                      : 'text-obsidian/50 border-transparent hover:text-obsidian'
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}