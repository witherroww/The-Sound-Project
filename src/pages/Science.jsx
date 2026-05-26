import SectionLabel from '../components/shared/SectionLabel';
import RevealWrapper from '../components/shared/RevealWrapper';
import WallDiagram from '../components/science/WallDiagram';
import FrequencyChart from '../components/science/FrequencyChart';
import MethodsSection from "../components/science/MethodsSection";
import ScienceNav from "../components/science/ScienceNav";

const principles = [
  {
    title: 'Mass Law',
    code: 'PHY_01',
    desc: 'In general, heavier materials are more difficult to vibrate. Using heavier materials like thick rugs can reduce the amount of sound energy transmitted through a structure. The relationship is logarithmic, so even small increases in mass can lead to significant reductions in sound transmission.',
    cite: 1,
    equation: 'TL ≈ 20log(m·f) − 48',
  },
  {
    title: 'Decoupling',
    code: 'PHY_02',
    desc: 'Sound and vibration transfer most efficiently through rigid physical connections. Introducing separation or soft interfaces can reduce the direct transmission of structure-borne vibration. Basically this is the premise of "softening" hard surfaces!',
    cite: 2,
    equation: 'F = kx : Hooke\'s Law',

  },
  {
    title: 'Absorption',
    code: 'PHY_03',
    desc: 'Soft and porous materials absorb part of the acoustic energy passing through them. Also the premise of "softening" hard surfaces.',
    cite: 3,
    equation: 'α = Eabsorbed / Eincident : Absorption coefficient',
  },
  {
    title: 'Damping',
    code: 'PHY_04',
    desc: 'Some materials dissipate vibrational energy internally as heat. Damping reduces resonance and helps prevent surfaces from amplifying vibration AFTER impact.',
    cite: 4,
    equation: 'x(t) = Ae^-bt cos(ωt + φ) : vibration energy decays',
  },
];

const materials = [
  {
    name: 'Recommended Lubricant', spec: '', note:
      ['White lithium grease for long-lasting hinge lubrication (best for iron/steel!)', 'Silicone-based lubricant for cleaner indoor application (best for brass, because brass is "softer" than steel)',
        'Light household oils such as 3-in-One oil for quick maintenance.',
        'WD-40 can help temporarily loosen stuck hinges and remove debris, but it is not ideal as a long-term lubricant by itself.'
      ]
  },
  {
    name: 'Felt Pads', note: ['Small foam pads placed on the inside of the door frame',
      'Rubber bumpers to soften contact points',
      'Felt pads commonly used for cabinets or furniture',
      'Soft-close hardware for frequently used doors (although not budget/time friendly!)']
  },
  {
    name: 'Damping Materials', stc: null, note: ['Rugs or carpet runners',
      'Soft soled socks', 'Rubber stoppers for furnature legs']
  },
  {
    name: 'Noise Producer', note: ['Air Purfier (dont let small size fool you!)', 'Small fan', 'Humidifier'
    ]
  },
  
];

const sources = [
  
];

export default function Science() {
  return (
    <div className="bg-white min-h-screen pt-16">
      {<ScienceNav />}
      {/* Header */}
      <section className="bg-parchment py-24 border-b border-obsidian/8">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>

            <h1 className="text-6xl font-inter font-semibold text-obsidian mt-4 mb-6" style={{ letterSpacing: '-0.04em' }}>
              The Methods
            </h1>
            <p className="text-lg text-obsidian/50 max-w-xl font-light leading-relaxed">
              Practical methods and material selection I used.
            </p>
          </RevealWrapper>
        </div>
      </section>
      <div id="practical-methods"><MethodsSection /></div>


      {/* Principles grid */}
      <section id="physics-foundation" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <SectionLabel code="PHY_01" label="FUN AND APPLICABLE PRINCIPLES" />
            <h2 className="text-4xl font-inter font-semibold text-obsidian mt-4 mb-16" style={{ letterSpacing: '-0.04em' }}>
              The Physics
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-obsidian/8">
            {principles.map((p, i) => (
              <RevealWrapper key={p.code} delay={i * 80}>
                <div className="bg-white p-10">
                  <div className="flex items-start justify-between mb-4">
                    <p className="font-mono text-xs text-slate tracking-widest">{p.code}</p>
                    <span className="font-mono text-xs text-obsidian/20">[{p.cite}]</span>
                  </div>
                  <h3 className="text-xl font-inter font-semibold text-obsidian mb-3" style={{ letterSpacing: '-0.04em' }}>{p.title}</h3>
                  <p className="text-sm text-obsidian/60 leading-relaxed mb-6">{p.desc}</p>
                  <div className="bg-parchment px-4 py-3 font-mono text-xs text-slate border-l-2 border-slate/30">
                    {p.equation}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Wall diagram */}
      <section id="wall-anatomy" className="bg-parchment py-24">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <SectionLabel code="DGM_01" label="WALL ASSEMBLY" />
            <h2 className="text-4xl font-inter font-semibold text-obsidian mt-4 mb-4" style={{ letterSpacing: '-0.04em' }}>
              Exploded Wall Anatomy
            </h2>
            <p className="text-base text-obsidian/50 max-w-lg mb-12 font-light">
              Five layers, each targeting a different mechanism of transmission. Click any layer to inspect its specification.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <WallDiagram />
          </RevealWrapper>
        </div>
      </section>

      <section id="selected-materials" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <SectionLabel code="MAT_01" label="MATERIAL SPECIFICATIONS" />
            <h2 className="text-4xl font-inter font-semibold text-obsidian mt-4 mb-12" style={{ letterSpacing: '-0.04em' }}>
              Selected Materials
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <div className="border-t border-obsidian/10">
              {materials.map((m, i) => (
                <div key={m.name} className="grid grid-cols-12 gap-6 py-6 border-b border-obsidian/8 group hover:bg-parchment/50 transition-colors -mx-4 px-4">
                  <div className="col-span-1">
                    <span className="font-mono text-xs text-obsidian/25">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="col-span-3">
                    <p className="font-inter font-medium text-obsidian text-sm">{m.name}</p>
                    <p className="font-mono text-xs text-obsidian/35 mt-1">{m.spec}</p>
                  </div>
                  <div className="col-span-2">
                    {m.stc && (
                      <div>
                        <p className="font-mono text-xs text-obsidian/30 mb-1">STC</p>
                        <p className="font-mono text-lg text-slate">{m.stc}</p>
                      </div>
                    )}
                  </div>
                  <div className="col-span-6">
                    <div className="col-span-6">
                      {Array.isArray(m.note) ? (
                        <ul className="space-y-2">
                          {m.note.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-obsidian/55 leading-relaxed"
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-obsidian/55 leading-relaxed">
                          {m.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-parchment py-20 border-t border-obsidian/8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="max-w-4xl mx-auto px-8">
                  <RevealWrapper>
                    <p className="font-mono text-base text-slate tracking-widest uppercase mb-6">

                      Continue
                    </p>

                    <p
                      className="text-2xl font-inter font-light text-obsidian leading-relaxed"
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      What do the numbers tell us?
                    </p>

                    <div className="mt-8">
                      <a
                        href="/results"
                        className="inline-flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-obsidian border-b-2 border-obsidian pb-1 hover:text-slate hover:border-slate transition-colors"
                      >
                        Results →
                      </a>
                    </div>
                  </RevealWrapper>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>




    </div>
  );
}