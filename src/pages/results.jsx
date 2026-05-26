import SectionLabel from '../components/shared/SectionLabel';
import RevealWrapper from '../components/shared/RevealWrapper';
import BeforeAfterSlider from '../components/results/BeforeAfterSlider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';


const metrics = [
  { label: 'Room baseline sample', before: '36.3 dB LAeq', after: '45.4 dB LAeq', delta: '9.1 dB', good: true },
  { label: 'Peak intrusion samples', before: '68.5 dB LCpeak', after: '60.2 dB LCpeak', delta: '−8.3 dB', good: true },

];

const reductionData = [
  { band: '63Hz', reduction: 34 },
  { band: '125Hz', reduction: 37 },
  { band: '250Hz', reduction: 39 },
  { band: '500Hz', reduction: 39 },
  { band: '1kHz', reduction: 40 },
  { band: '2kHz', reduction: 39 },
  { band: '4kHz', reduction: 37 },
  { band: '8kHz', reduction: 34 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-obsidian/10 px-4 py-3 shadow-sm">
      <p className="font-mono text-xs text-obsidian/40 mb-1">{label}</p>
      <p className="font-mono text-sm text-slate">−{payload[0].value} dB</p>
    </div>
  );
};

export default function Results() {
  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Header */}
      <section className="bg-parchment py-24 border-b border-obsidian/8">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <SectionLabel code="SEC_03" label="OUTCOME DATA" />
            <h1 className="text-6xl font-inter font-semibold text-obsidian mt-4 mb-6" style={{ letterSpacing: '-0.04em' }}>
              The Results
            </h1>
            <p className="text-lg text-obsidian/50 max-w-xl font-light leading-relaxed">
              DON'T BE FOOLED!
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Key metrics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <SectionLabel code="DAT_01" label="KEY MEASUREMENTS" />
              </div>

              <h2
                className="text-5xl md:text-6xl font-inter font-semibold text-obsidian mt-4 mb-16"
                style={{ letterSpacing: '-0.04em' }}
              >
                By the Numbers
              </h2>
            </div>
          </RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-obsidian/8 max-w-5xl mx-auto">
            {metrics.map((m, i) => (
              <RevealWrapper key={m.label} delay={i * 80}>
                <div className="bg-white p-10 text-center flex flex-col items-center">
                  <p className="font-mono text-lg text-obsidian/35 uppercase tracking-wider mb-6 leading-relaxed">{m.label}</p>
                  <div className="space-y-4 flex flex-col items-center">
                    <div>
                      <p className="font-mono text-lg text-amber mb-1">BEFORE</p>
                      <p className="font-mono text-xl text-amber">{m.before}</p>
                    </div>
                    <div>
                      <p className="font-mono text-lg text-slate mb-1">AFTER</p>
                      <p className="font-mono text-xl text-slate">{m.after}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-obsidian/10">
                    <p className="font-mono text-2xl text-obsidian">{m.delta}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Interpretation */}
      <section className="bg-parchment py-20 border-t border-obsidian/8">
        <div className="max-w-5xl mx-auto px-8">
          <RevealWrapper>
            <p className="font-mono text-xs text-slate tracking-widest uppercase mb-6">
              INTERPRETATION
            </p>

            <div className="space-y-6 max-w-4xl">
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                The headline metrics above were collected using the NIOSH Sound Level Meter app on my phone. I chose this app because it was developed by the CDC and is generally considered one of the more reliable mobile sound measurement tools available. However, it has important limitations: its accuracy is constrained by the phone’s internal microphone, which is not calibrated for precise sound measurements. Nevertheless, for the purposes of this project, I value having reasonably consistent measurements to compare the environment before and after implementing the methods.
              </p>

              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                To collect the data, I recorded two separate 5-minute nighttime samples inside my mother’s room. One was taken before treatment, and one after. During each sample, I performed the same sequence of sound tests. This kept conditions as consistent as possible. These tests included:

              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                * Closing the wooden office door
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                * Closing two kitchen cabinets
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                * Walking a designated path through the kitchen, living room, and dining room for about one minute.
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                To reduce variables, I walked slowly and barefoot during both tests, and I minimized all unrelated sounds throughout the house as much as possible.
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                Immediately after recording the “before” sample, I implemented the five methods discussed earlier. Once installed, I repeated the same testing sequence under nearly identical conditions: same walking path, doors, cabinets, pacing, and similar nighttime conditions. (The goal here is not perfection!)
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                The first results shown are the LAeq measurements, which represent the average sound level recorded over 5 minutes. Before treatment, the room measured about 36.3 dB LAeq. Notably, this is VERY quiet; for reference, that is quieter than a Rolls Royce Spectre at 40 mph and similar to a calm indoor environment at night.
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                Ironically, this extremely quiet baseline may help explain why nighttime disturbances were so noticeable in the first place. Sudden noises and vibration become much more perceptible and disruptive at 36.3 dB than, say, 45 dB. 
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                The next measurements are LCpeak values, which capture the loudest instant sound intrusions during the test period. These sharp “peak” sounds come from door impacts or hard footsteps. Before treatment, the loudest peak was about 68.5 dB LCpeak, similar to a dishwasher or a nearby conversation.
              </p>
              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
                Interpreting the results, the “after” sample recorded a slightly higher average sound level of 45.4 dB LAeq. However, this does NOT necessarily indicate a worse acoustic environment. In fact, the overall room still remained relatively quiet. This increase in average sound was actually caused by the installed air purifier, which acted as subtle white noise. Yet the air purifier most definitely helped overall because the sharp peak intrusions were noticeably reduced from 68.5 dB LCpeak to 60.2 dB LCpeak. Don’t forget that the scale is logarithmic, meaning each increase or decrease in dB is a significant change. Thus, the -8.3 dB drop is actually a very successful reduction in volume. However, the most important result was not the numbers themselves, but the lived outcome: after using these methods consistently for over two weeks, there was a noticeable reduction in my mother's waking up to nighttime noise. In fact, not once did she get up to complain about sound disturbances after the interventions were implemented.
              </p>
              

              <p
                className="text-xl font-inter font-light text-obsidian leading-relaxed"
                style={{ letterSpacing: '-0.03em' }}
              >
               Thus, I can confidently conclude that these practical methods clearly improved nighttime acoustic comfort in our home and helped my mother sleep better. That is a huge success!
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>
      {/* Before/after slider */}
      <section className="bg-parchment py-24">
        <div className="max-w-7xl mx-auto px-8">
          <RevealWrapper>
            <SectionLabel code="FIG_01" label="NOT TO SCALE... AT ALL!" />
            <h2 className="text-4xl font-inter font-semibold text-obsidian mt-4 mb-4" style={{ letterSpacing: '-0.04em' }}>
              Before / After Waveform Chart Interactive!
            </h2>
            <p className="text-sm text-obsidian/50 mb-12 font-light">
              Visual comparison created to illustrate the intended reduction in sharp nighttime sound events.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <BeforeAfterSlider />
          </RevealWrapper>
        </div>
      </section>
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
              Thank you for reading this far! If you found this project interesting feel free to read the next section about me!
            </p>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-obsidian border-b-2 border-obsidian pb-1 hover:text-slate hover:border-slate transition-colors"
              >
                About Me! →
              </a>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
}