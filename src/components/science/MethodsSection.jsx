import RevealWrapper from '../shared/RevealWrapper';
import SectionLabel from '../shared/SectionLabel';

const methods = [
  {
    code: 'MTH_01',
    title: 'Door Hinge Lubrication',
    intro: 'In homes built during the early 20th century, hinges were commonly manufactured from steel, iron-based alloys, or brass-plated metals. These materials were chosen for their strength and durability, but they require regular maintenance to prevent friction-related issues. As a permanent resident for over 20 years, I can confirm that the hinges in this home had not been lubricated in a very long time... if ever.',
    body: [
      'Thus, protective oils inside the hinge have likely dried out or been absorbed into the surrounding wood over the decades, leaving metal surfaces in direct contact. This causes hinge components to rub against each other with increased friction, generating more vibration and audible noise.',
      'Exposure to oxygen and moisture compounds this problem through a process called oxidation. In iron-containing metals, this forms rust! Plus even minor surface roughness from oxidation significantly increases friction as the hinge rotates through its arc.',
      'The solution is to use appropriate lubricants as they create a thin protective layer between moving surfaces which reduces friction, lowers vibration, and allows the hinge to rotate more smoothly and quietly.',
    ],
    subsections: [
      {
        heading: 'Recommended Lubricants',
        items: [
          { label: 'White lithium grease', note: 'Best long-term choice for iron and steel hinges due to a high viscosity AND it stays in place well. (This is what I used!)' },
          { label: 'Silicone-based lubricant', note: 'Better for brass hardware because brass is softer than steel and benefits from a gentler lubricant.' },
          { label: 'Light household oils (e.g. 3-in-One)', note: 'Good for quick periodic maintenance.' },
          { label: 'WD-40', note: 'Useful for loosening stuck hinges and removing debris, but NOT a long-term lubricant on its own.' },
        ],
      },
      {
        heading: 'Application Process',
        items: [
          { label: 'Step 1', note: 'Open and close the door to identify the loudest hinge.' },
          { label: 'Step 2', note: 'Apply a small amount of lubricant directly to the hinge pin and ALL moving joints.' },
          { label: 'Step 3', note: 'Move the door back and forth several times to distribute the lubricant throughout the mechanism.(Dont skip this step!)' },
          { label: 'Step 4', note: 'Wipe away any excess to prevent dripping or dust accumulation. Plus no one wants greasy looking door hinges!' },
          { label: 'Step 5', note: 'Repeat periodically as the hinge begins to dry out again over time.' },
        ],
      },
    ],
    note: 'Although simple, this lubricating your door hinges can significantly reduce sharp metallic nighttime noises in older homes and it is cost effective.',
  },
  {
    code: 'MTH_02',
    title: 'Softening Door Impact',
    intro: 'Once I addressed the hinge noise, I discoverd a major sound disruption comes from the door meeting the frame. Especially if the door is slammed by the wind!',
    body: [
      'At a basic level, sound is a mechanical wave created through the transfer of vibrational energy between particles. When a door closes against a frame, kinetic energy from the moving door is rapidly transferred into the surrounding structure.',
      'Hard surfaces such as wood and metal transfer vibrational energy efficiently because their atomic structures are rigid and resist deformation. Softer materials such as foam, rubber, or felt behave differently as their structures deform under force, absorbing part of the energy and dissipating it as low-grade heat rather than propagating it as sound.',
      'Therefore by placing soft materials at door-frame contact points, the amount of vibrational energy transferred into the house structure is meaningfully reduced!',
      'I have also noted some behavioral adjustments that can further reduce noise beyond physical damping materials.',
    ],
    subsections: [
      {
        heading: 'Physical Solutions',
        items: [
          { label: 'Foam pads', note: 'Placed on the inside of the door frame at contact points. Be VERY careful about using 3M or adjacent materials on painted doors! (trust me, youll be glad you did)' },
          { label: 'Rubber bumpers', note: 'More durable than foam; better for frequently used doors. However SOME rubber bumpers may not deform under impact and could potentially cause more noise! Test them before installing.' },
          { label: 'Felt pads', note: 'Similar to cabinet furniture pads. Quiet, low-profile, easy to apply. Note that some felt pads may not provide adequate damping and could wear out quickly.' },
          { label: 'Soft-close hardware', note: 'Most effective long-term solution, but higher cost and installation effort. Especailly with older wooden doors which may not have the necessary mounting points for modern door hinge assemblies.' },
        ],
      },
      {
        heading: 'Behavioral Adjustments',
        items: [
          { label: '1', note: 'Turn the handle fully before closing. This eliminates the sharp click of the latch striking the door jamb which is one of the most penetrating nighttime sounds.' },
          { label: '2', note: ' Close doors slowly during nighttime hours ' },
          { label: '3', note: 'Minimize unnecessary door movement. Be aware of when doors are being used late at night.' },
        ],
      },
    ],
    note: 'Combining physical damping materials with small behavioral habits can make a substantial and immediate difference to nighttime impact noise.',
  },
  {
    code: 'MTH_03',
    title: 'Floor and Footstep Control',
    intro: 'Footstep sounds can travel significant distances through floors and supporting structures especially because certain floorboards creak due to decades of repeated impact; which are particularly audible at night!',
    body: [
      'As with the wooden doors wooden floors transfer vibration efficiently, espcailly if hard contact between foot and floor occurs.',
      'Rather than ripping up beuatiufully made wooden floors soft materials such as rugs and carpet runners can effectively absorb some vibration energy before it enters the surrounding structure. I have also included some behavioral observations that can further reduce footstep noise.',
    ],
    subsections: [
      {
        heading: 'Physical Solutions',
        items: [
          { label: 'Rugs and carpet runners', note: 'Most effective intervention! Be sure to place them along primary walking paths.' },
          { label: 'Felt or soft padding under furniture', note: 'Prevents chairs and tables from transmitting vibration when shifted. Very effective! You can reuse some of the materials from the door softening solutions as well.' },
          { label: 'Soft-soled slippers or socks', note: 'Reduces the hardness of the foot-floor contact itself. Surprisingly effective.' },
        ],
      },
      {
        heading: 'Behavioral Observations',
        items: [
          { label: 'Heel impact avoidance', note: 'Be sure to land on the ball of the foot rather than the heel. This can dramatically reduce impact force.' },
          { label: 'Slow, deliberate movement', note: 'Slowing down reduces force and allows quieter foot placement. Obviously, this takes more conscious effort, but give it a try. (also cost free!)' },
          { label: 'Mapping loud areas', note: 'Some boards creak more than others; identifying and consistently avoiding loud areas is a simple, zero-cost strategy.' },
        ],
      },
    ],
    note: 'Over time, you might develop a mental map of quiet routes through the home, a kind of acoustic awareness that becomes second nature.',
  },
  {
    code: 'MTH_04',
    title: 'Managing Structural Vibration',
    intro: 'Sound is not only created through direct noise sources! ',
    body: [
      'Structural vibration occurs when mechanical energy is introduced into a building element directly either through a cabinet closing, furniture shifting, or an appliance running. Thanks to continuous wood framing, vibration pathways are relatively uninterrupted. Meaning that the door cabinet in the kitchen can send vibration all the way to the bedroom!',
      'The approach to managing this is the same as the other methods which is to introduce softer materials at the points where energy enters the structure, and reduce the force of impacts where possible. The cumulative effect of addressing many small vibration sources is very very very effiective!',
    ],
    subsections: [
      {
        heading: 'Common Sources',
        items: [
          { label: 'Doors striking frames', note: 'Covered above but still the most impactful single source in our home.' },
          { label: 'Cabinet doors', note: 'Frequently opened; each closure sends a sharp transient into wall structures. Reusing the door softening solutions is practical!' },
          { label: 'Appliances and fans', note: 'Low-frequency vibration from motors and fans can resonate in connected structures. Be wary of these!' },
          { label: 'Furniture shifting', note: 'Chairs and tables moved on hard floors create sudden impulse vibrations.' },
          { label: 'Loose hardware', note: 'Screws and fixtures that have loosened over decades can rattle sympathetically with other vibration sources.' },
        ],
      },
      {
        heading: 'Practical Solutions',
        items: [
          { label: 'Soft pads at all contact points', note: 'Rubber, felt, or foam wherever a hard object meets another hard surface.' },
          { label: 'Rugs and fabric surfaces', note: 'Absorb vibration energy broadly across room surfaces.' },
          { label: 'Tighten loose hardware', note: 'A simple inspection pass of door handles, cabinet hinges, light fixtures, etc can eliminate rattle sources entirely. (you might be suprised how loud your house can be when you take keen observations!)' },
          { label: 'Soft material under appliances', note: 'Anti-vibration pads under fans, small appliances, and electronics reduce motor-driven resonance transmission. I can not emphasize this enough! Especially if you run laundry or dishwasher at night!' },
        ],
      },
    ],
    note: 'It is the cumulative effect of addressing many small vibration sources that creates a much quieter home environment.',
  },
  {
  code: 'MTH_05',
  title: 'Adding Gentle Background Noise',
  intro: 'Not every nighttime sound can be eliminated at the source no matter how careful everyone is. A small fan, air purifier, or humidifier can help by adding a steady background sound that makes sudden noises feel less sharp.',
  body: [
    'This does not soundproof the house like the other methods. Instead, it changes the listening environment. A consistent low-level sound can help mask sudden interruptions by making the room feel less acoustically empty.',
    'This is especially useful at night because quiet rooms make every small noise feel louder. ',
  ],
  subsections: [
    {
      heading: 'Good Options',
      items: [
        { label: 'Air purifier', note: 'Useful because it creates steady airflow noise while also improving air quality. Small units can be surprisingly effective!' },
        { label: 'Small fan', note: 'Simple, inexpensive, and easy to adjust depending on how much background sound is needed.' },
        { label: 'Humidifier', note: 'Can add gentle sound while improving dry winter air, but it needs regular cleaning. Seriously, mold is NO JOKE!' },
      ],
    },
    {
      heading: 'Use Carefully',
      items: [
        { label: 'Keep it steady', note: 'The goal is a constant background sound, not something that clicks, rattles, or cycles loudly.' },
        { label: 'Place it well', note: 'Keep it near the sleeping area but not so close that it becomes annoying or distracting.' },
        { label: 'Avoid extremes', note: 'Too loud defeats the purpose. The goal is comfort, not replacing one disruption with another.' },
      ],
    },
  ],
  note: 'For this project, background noise was not treated as a cure-all. It was a final comfort layer after reducing the loudest physical noise sources first.',
},
];

export default function MethodsSection() {
  return (
    <section className="py-24 border-t border-obsidian/8">
      <div className="max-w-7xl mx-auto px-8">
        <RevealWrapper>
  <div className="text-center">
    <div className="flex justify-center mb-3">
      <SectionLabel code="MTH_01" label="PRACTICAL METHODS" />
    </div>

    <h2
      className="text-5xl font-inter font-semibold text-obsidian mt-4 mb-4"
      style={{ letterSpacing: '-0.04em' }}
    >
      Whole-Home Noise Reduction Methods
    </h2>

    <p className="text-xl text-obsidian/60 max-w-4xl mx-auto mb-20 font-light leading-relaxed">
      Understanding the house's construction explains why sound travels easily, but the real issue is the smaller sounds, footsteps, creaking floors, rattling doors, vibrating hinges, and late-night movement traveling through the structure itself.

      So instead of approaching the house like a demolition project, this section focuses on practical interventions that target noise at its source.
    </p>
    </div>
    </RevealWrapper>

        <div className="space-y-32">
          {methods.map((method, mi) => (
            <RevealWrapper key={method.code} delay={80}>
              <div
                id={`method-mth0${mi + 1}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-32"
              >
                {/* Left: heading column */}
                <div className="lg:col-span-4">
                  <p className="font-mono text-lg text-slate tracking-widest mb-3">{method.code}</p>
                  <h3 className="text-2xl font-inter font-semibold text-obsidian mb-4" style={{ letterSpacing: '-0.04em' }}>
                    {method.title}
                  </h3>
                  <p className="text-lg text-obsidian/60 leading-relaxed font-light">
                    {method.intro}
                  </p>
                </div>

                {/* Right: content */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Body paragraphs */}
                  <div className="space-y-4 pb-6 border-b border-obsidian/8">
                    {method.body.map((para, pi) => (
                      <p key={pi} className="text-base text-obsidian/65 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Subsections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {method.subsections.map((sub) => (
                      <div key={sub.heading}>
                        <p className="font-mono text-base text-slate tracking-widest uppercase mb-4">{sub.heading}</p>
                        <div className="space-y-3">
                          {sub.items.map((item) => (
                            <div key={item.label} className="flex gap-3">
                              <span className="font-mono text-xs text-obsidian/30 mt-0.5 shrink-0 w-16">{item.label}</span>
                              <span className="text-base text-obsidian/60 leading-relaxed">{item.note}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Closing note */}
                  {method.note && (
                    <div className="bg-parchment border-l-2 border-slate/30 px-5 py-4 mt-4">
                      <p className="font-mono text-xs text-obsidian/55 leading-relaxed">{method.note}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealWrapper>
          ))} 
        </div>
        




      </div>
      
    </section>
  
  
  );
}