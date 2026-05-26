import SectionLabel from '../components/shared/SectionLabel';
import RevealWrapper from '../components/shared/RevealWrapper';

const timelineItems = [
  {
    id: 'problem',
    code: 'SEC_01A',
    heading: 'The Problem',
    color: '#9B6B18',
    body: `
   Old houses are built different. In the 1930’s, the American mindset was undergoing a massive shift, and New England builders were thinking about survival, efficiency, and progress, especially after the Great Depression. Thus, the philosophy of home construction stripped away the heavy, dense, sound-absorbing materials of the Victorian era and, in their place, builders embraced a new, modernized ethos. Build homes that are strong, fast, and low-cost. 

Thus, when the original builders laid the foundation of my house, their primary goal was to maximize every square foot while keeping material costs low. Including the utilization of a revolutionary technique popularized by the 1930s FHA guidelines, which called for uniform, platform framing using mass-produced, standardized lumber. On top of that, multi-layered wood lath and thick lime plaster were ditched for the cutting-edge 1930s innovation, rock lath, which uses rigid gypsum board panels fastened to wall studs, with a thin layer of plaster applied on top rather than over wood strips.

However, materials were not the only category subject to change because the 1930s builder prided themselves on tightly clustered kitchens and bedrooms to minimize plumbing runs, and they removed heavy hallway partitions to make small floor plans feel more spacious. Therefore, the combination of lightweight walls and continuous framing cavities, without modern insulation, causes the house to essentially behave like the body of an acoustic guitar.

This architectural blueprint means that my late-night routines were constantly at odds with the house itself. Every creaking floorboard during my midnight snack run echoed through the hollow wall cavities, waking my mom up. Which is a HUGE problem because my mother is an incredibly light sleeper, and the sounds affect her rest.

So this project did not begin as a helpful guide on making older homes quieter; it started because I love my mother and want to help her sleep better. Listen, she works her a*s off to support our family, so reducing night time noise became my goal! 

I also wanted to share this process with others living in old homes, in the hope that some of these ideas might help other families sleep a little better, too.

(Even dogs sleep better in quieter environments!! — Cooper, 2026) `,
    stat: { val: '1930s', label: 'Original construction era' },
  },

  {
    id: 'house',
    code: 'SEC_01B',
    heading: 'The House',
    color: '#9B6B18',
    body: `Built in the early 1930s, the house my family lives in reflects a restrained form of early American vernacular residential architecture common throughout the Northeast. Its steep roof pitch, vertically proportioned façade, narrow window spacing, and compact rectangular massing create a structure that feels like home to me.

 `,
    stat: { val: '2,100 sq. ft.', label: 'Family home' },
  },


];

export default function Story() {
  return (
    <div className="null">
      {/* Header */}
      <section className="bg-parchment py-24 border-b border-obsidian/8">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <SectionLabel code="SEC_01" label="NARRATIVE ARC" />
            <h1 className="text-6xl sfont-inter font-semibold text-obsidian mt-4 mb-6" style={{ letterSpacing: '-0.04em' }}>
              The Story
            </h1>
            <p className="text-lg text-obsidian/50 max-w-xl font-light leading-relaxed">
              Every story starts with a problem.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Timeline spine */}
          <div className="relative">
            

            <div className="space-y-24">
              {timelineItems.map((item, i) => (
                <RevealWrapper key={item.id} delay={i * 100}>
                  <div className="grid grid-cols-1 gap-12 items-start max-w-7xl">
                    {/* Text side */}
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: item.color }}>
                        {item.code}
                      </p>
                      <h2 className="text-3xl font-inter font-semibold text-obsidian mb-6" style={{ letterSpacing: '-0.04em' }}>
                        {item.heading}
                      </h2>
                      {item.body.split('\n\n').map((para, j) => (
                        <p key={j} className="text-base text-obsidian/65 leading-relaxed mb-4 font-light">
                          {para}
                        </p>
                      ))}
                      {/* Stat */}
                      <div className="mt-8 pt-6 border-t border-obsidian/10 inline-block">
                        <p className="font-mono text-3xl text-slate" style={{ letterSpacing: '-0.04em' }}>{item.stat.val}</p>
                        <p className="font-mono text-xs text-obsidian/35 uppercase tracking-wider mt-1">{item.stat.label}</p>
                      </div>
                    </div>


                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transition */}
      <section className="bg-parchment py-20 border-t border-obsidian/8">
        <div className="max-w-4xl mx-auto px-8">
          <RevealWrapper>
            <p className="font-mono text-xs text-slate tracking-widest uppercase mb-6">WHAT CAME NEXT</p>
            <p className="text-2xl font-inter font-light text-obsidian leading-relaxed" style={{ letterSpacing: '-0.03em' }}>
              With the problem voiced, the next step is to determine what practical changes can be implemented WITHOUT demolition to meaningfully reduce night time noise....
            </p>
            <div className="mt-8">
              <a href="/science" className="inline-flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-obsidian border-b-2 border-obsidian pb-1 hover:text-slate hover:border-slate transition-colors">
                Continue →
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}