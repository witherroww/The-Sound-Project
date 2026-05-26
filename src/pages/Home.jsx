import { Link } from 'react-router-dom';
import HeroWaveform from '../components/home/HeroWaveform';
import RevealWrapper from '../components/shared/RevealWrapper';

const sections = [
  { path: '/story', code: 'SEC_01', title: 'The Story', desc: 'Discover the motivation behind this project.', color: '#9B6B18' },
  { path: '/science', code: 'SEC_02', title: 'Methods', desc: 'Materials selection and the rationale behind every decision.', color: '#3A5F8A' },
  { path: '/results', code: 'SEC_03', title: 'The Results', desc: 'Surprising outcome... ', color: '#3A5F8A' },
  { path: '/about', code: 'SEC_04', title: 'About', desc: 'Who built this?', color: '#9B6B18' },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center grid-hairline pt-16">
        {/* Coordinate marker */}
        <div className="absolute top-24 left-8 writing-mode-vertical">
          <p className="font-mono text-xs text-slate/40 tracking-widest [writing-mode:vertical-rl] rotate-180">
          
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-8 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <RevealWrapper delay={0}>
                <p className="font-mono text-xs text-slate tracking-widest uppercase mb-8">
                  Making an Older Home Quieter at Night
                </p>
              </RevealWrapper>

              <RevealWrapper delay={100}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-semibold leading-none mb-8 text-obsidian" style={{ letterSpacing: '-0.04em' }}>
                  The Sound<br />Project
                </h1>
              </RevealWrapper>

              <RevealWrapper delay={200}>
                <p className="text-lg text-obsidian/60 leading-relaxed mb-10 max-w-md font-light">
                  How I reduced noise in my 1930s wood-framed home to save my mother!
                </p>
              </RevealWrapper>

              <RevealWrapper delay={300}>
                <div className="flex items-center gap-6">
                  <Link
                    to="/story"
                    className="inline-flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-obsidian border-b-2 border-obsidian pb-1 hover:text-slate hover:border-slate transition-colors duration-200"
                  >
                    Read the Story
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                      <path d="M0 4H14M11 1L14 4L11 7" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </Link>
                  <Link
                    to="/science"
                    className="inline-flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-obsidian/40 hover:text-slate transition-colors duration-200"
                  >
                    Jump to Methods
                  </Link>
                </div>
              </RevealWrapper>

              {/* Spec row */}
              <RevealWrapper delay={400}>
                <div className="mt-16 pt-8 border-t border-obsidian/10 grid grid-cols-3 gap-8">
                  {[
                    { val: '2100 sq. ft', label: 'Total Living Area' },
                    { val: '1930s', label: 'Home construction' },
                    { val: '5 layers', label: 'Wall assembly' },
                  ].map(s => (
                    <div key={s.label}>
                      <p className="font-mono text-2xl text-slate mb-1" style={{ letterSpacing: '-0.04em' }}>{s.val}</p>
                      <p className="font-mono text-xs text-obsidian/35 uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
              </RevealWrapper>
            </div>

            {/* Right — interactive waveform */}
            <RevealWrapper delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 font-mono text-xs text-slate/20 tracking-widest">
                  INTERACTIVE — PLAY WITH IT BECAUSE IT TOOK A LONG TIME TO MAKE WORK!!
                </div>
                <div className="border border-obsidian/8 p-4 bg-white/50">
                  <HeroWaveform />
                  <p className="font-mono text-xs text-obsidian/25 mt-3 text-center tracking-wider">
                    Conceptual visualization for illustrative purposes ONLY
                  </p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-obsidian animate-pulse" />
        </div>
      </section>

      {/* Section grid */}
      <section className="bg-parchment py-32">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <p className="font-mono text-xs text-slate tracking-widest uppercase mb-2"> CONTENTS</p>
            <h2 className="text-4xl font-inter font-semibold text-obsidian mb-16" style={{ letterSpacing: '-0.04em' }}>
              
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-obsidian/8">
            {sections.map((s, i) => (
              <RevealWrapper key={s.path} delay={i * 80}>
                <Link
                  to={s.path}
                  className="group block bg-parchment hover:bg-white p-10 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <p className="font-mono text-xs tracking-widest uppercase" style={{ color: s.color }}>{s.code}</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                      <path d="M4 10H16M12 6L16 10L12 14" stroke={s.color} strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-inter font-semibold text-obsidian mb-3" style={{ letterSpacing: '-0.04em' }}>{s.title}</h3>
                  <p className="text-sm text-obsidian/50 leading-relaxed">{s.desc}</p>
                  <div className="mt-8 pt-4 border-t border-obsidian/10">
                    <span className="font-mono text-xs tracking-wider uppercase text-obsidian/30 group-hover:text-obsidian/60 transition-colors" style={{ color: undefined }}>
                      Enter section →
                    </span>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <RevealWrapper>
            <p className="font-mono text-xs text-slate tracking-widest uppercase mb-6">THE PREMISE</p>
            <blockquote className="text-3xl md:text-4xl font-inter font-light text-obsidian leading-relaxed" style={{ letterSpacing: '-0.03em' }}>
              My mom needs and deserves her rest!!!
            </blockquote>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}