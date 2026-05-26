import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { path: '/', label: 'Home', code: '00' },
  { path: '/story', label: 'Story', code: '01' },
  { path: '/science', label: 'Methods', code: '02' },
  { path: '/results', label: 'Results', code: '03' },
  { path: '/about', label: 'About Me!', code: '04' },
];

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const currentIndex = navLinks.findIndex(l => l.path === location.pathname);
  const stepNum = currentIndex === -1 ? 1 : currentIndex + 1;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-black/8' : 'bg-transparent'
      }`}
      style={{ borderBottomColor: scrolled ? 'rgba(26,26,26,0.08)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo / Project name */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-5 h-5 relative">
            <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
              <circle cx="10" cy="10" r="1.5" fill="#3A5F8A" />
              <circle cx="10" cy="10" r="4" stroke="#3A5F8A" strokeWidth="0.75" fill="none" opacity="0.6" />
              <circle cx="10" cy="10" r="7.5" stroke="#3A5F8A" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>
          </div>
          <span className="font-mono text-xs tracking-widest text-obsidian uppercase">
            The Sound Project
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-0">
          {navLinks.map((link, i) => {
            const active = location.pathname === link.path;
            return (
              <div key={link.path} className="flex items-center">
                {i > 0 && <span className="text-obsidian/20 font-mono text-xs px-2">|</span>}
                <Link
                  to={link.path}
                  className={`font-mono text-xs tracking-wider uppercase px-2 py-1 transition-all duration-200 relative group ${
                    active ? 'text-slate' : 'text-obsidian/50 hover:text-obsidian'
                  }`}
                >
                  <span className="text-[9px] opacity-40 mr-1">{link.code}</span>
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-slate block" />
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Step indicator */}
        <div className="font-mono text-xs text-obsidian/40 tracking-wider">
          <span className="text-slate">{String(stepNum).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          <span>05</span>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex gap-4 px-8 pb-3 overflow-x-auto">
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-mono text-xs whitespace-nowrap tracking-wider uppercase pb-1 border-b transition-colors ${
              location.pathname === link.path
                ? 'text-slate border-slate'
                : 'text-obsidian/40 border-transparent'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}