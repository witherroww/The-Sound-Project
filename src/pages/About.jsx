import SectionLabel from '../components/shared/SectionLabel';
import RevealWrapper from '../components/shared/RevealWrapper';

const learnings = [
  {
    code: 'L_01',
    heading: 'Physics before products',
    body: 'Every material recommendation online references products, not principles. Understanding the underlying physics — mass law, decoupling, absorption — let me evaluate claims critically and avoid expensive dead-ends.',
  },
  {
    code: 'L_02',
    heading: 'Low frequencies are hardest',
    body: 'The 63–125 Hz range (footfalls, HVAC rumble, bass-heavy content) requires genuine mass and decoupling to address. No amount of "acoustic foam" — marketed aggressively — helps here. This was the most important thing I learned.',
  },
  {
    code: 'L_03',
    heading: 'Old homes require constraint-aware design',
    body: 'I could not remove lath-and-plaster. I could not move electrical. I had to design within a real built constraint, which forced creative solutions: interior furring walls, floating floors, careful penetration sealing.',
  },
  {
    code: 'L_04',
    heading: 'Measurement is everything',
    body: 'Without a calibrated SPL meter and a rigorous before/after protocol, I would have had no way to know what worked and what did not. Perception alone is wildly unreliable. Measure before, measure during, measure after.',
  },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Header */}
      <section className="bg-parchment py-24 border-b border-obsidian/8">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            
            <h1 className="text-6xl font-inter font-semibold text-obsidian mt-4 mb-6" style={{ letterSpacing: '-0.04em' }}>
              About Me!
            </h1>
            <p className="text-lg text-obsidian/50 max-w-xl font-light leading-relaxed">
              Who built this..
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Bio */}
<section className="py-24">
  <div className="max-w-4xl mx-auto px-8">
    <RevealWrapper>
      <p className="font-mono text-xs text-slate tracking-widest uppercase mb-6">
        BACKGROUND
      </p>

      <div className="mb-10 space-y-2">
        {[
          ['Field', 'Student!'],
          ['Context', 'Independent research project'],
          ['Location', 'Connecticut, USA'],
        ].map(([k, v]) => (
          <div key={k} className="flex gap-4">
            <span className="font-mono text-xs text-obsidian/30 w-20 shrink-0">{k}</span>
            <span className="font-mono text-xs text-obsidian/70">{v}</span>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-obsidian/10">
        <p className="font-mono text-2xl text-obsidian/30 uppercase tracking-wider mb-4">
          WHY THIS SITE
        </p>

        <p className="text-xl text-obsidian/60 leading-relaxed font-light">
          This project initially started off as an html file (soundproject.html) and a simple CSS file (soundproject.css). However, I wanted to create something to track and share what I was doing at home, with the hope of sharing it. That being said after messing around at my basic gradient filled css file and using the go live file extension in VS Code, I was like f**k it, its time to learn react. And after a lot of work and way too many long nights, the webpage you are viewing right now was created. Thus, this site holds a sentimental place in my heart. Yes, it is a personal problem and solution, but it also represents the journey of learning, trial and error, and many long, frustrating nights coding in JSX. This is the first real Java program I ever did, and I am now super comfortable with it, so much so that I created a more helpful, different tool called the Native Plant Locator. If you want to learn more, you should click the link and maybe help bring back some native plants! I loved doing all of this, and thanks for reading. 
        </p>
      </div>
    </RevealWrapper>
  </div>
</section>

     

      {/* Closing */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <RevealWrapper>
            <div className="text-center">
              <p className="font-mono text-xs text-slate tracking-widest uppercase mb-6">Sign Off</p>
              <p className="text-3xl font-inter font-light text-obsidian mb-8" style={{ letterSpacing: '-0.04em' }}>
                "I spent way too much time on this project, and I regret NONE of it." - Ryan McGurk 
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-obsidian/20" />
                <span className="font-mono text-xs text-obsidian/30">THE SOUND PROJECT</span>
                <span className="w-12 h-px bg-obsidian/20" />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}