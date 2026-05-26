import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const freqData = [
  { freq: '63', before: 72, after: 38 },
  { freq: '125', before: 68, after: 31 },
  { freq: '250', before: 65, after: 26 },
  { freq: '500', before: 61, after: 22 },
  { freq: '1k', before: 58, after: 18 },
  { freq: '2k', before: 54, after: 15 },
  { freq: '4k', before: 49, after: 12 },
  { freq: '8k', before: 44, after: 10 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-obsidian/10 px-4 py-3 shadow-sm">
      <p className="font-mono text-xs text-obsidian/40 mb-1">{label} Hz</p>
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="font-mono text-xs" style={{ color: p.color }}>{p.value} dB</span>
          <span className="font-mono text-xs text-obsidian/40">{p.name === 'before' ? 'untreated' : 'treated'}</span>
        </div>
      ))}
      {payload.length === 2 && (
        <p className="font-mono text-xs text-slate mt-1 pt-1 border-t border-obsidian/10">
          −{payload[0].value - payload[1].value} dB reduction
        </p>
      )}
    </div>
  );
};

export default function FrequencyChart() {
  return (
    <div>
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-px" style={{ background: '#9B6B18', display: 'inline-block' }} />
          <span className="font-mono text-xs text-obsidian/50">Before treatment</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-px" style={{ background: '#3A5F8A', display: 'inline-block' }} />
          <span className="font-mono text-xs text-obsidian/50">After treatment</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={freqData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="beforeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9B6B18" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#9B6B18" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="afterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3A5F8A" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#3A5F8A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,26,0.06)" />
          <XAxis
            dataKey="freq"
            tick={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#1A1A1A88' }}
            axisLine={{ stroke: 'rgba(26,26,26,0.15)' }}
            tickLine={false}
            label={{ value: 'Frequency (Hz)', position: 'insideBottom', offset: -4, fontFamily: 'JetBrains Mono', fontSize: 9, fill: '#1A1A1A44' }}
          />
          <YAxis
            tick={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#1A1A1A88' }}
            axisLine={false}
            tickLine={false}
            label={{ value: 'dB SPL', angle: -90, position: 'insideLeft', fontFamily: 'JetBrains Mono', fontSize: 9, fill: '#1A1A1A44' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="before" stroke="#9B6B18" strokeWidth={1.5} fill="url(#beforeGrad)" dot={{ fill: '#9B6B18', r: 3, strokeWidth: 0 }} />
          <Area type="monotone" dataKey="after" stroke="#3A5F8A" strokeWidth={1.5} fill="url(#afterGrad)" dot={{ fill: '#3A5F8A', r: 3, strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="font-mono text-xs text-obsidian/30 mt-3 text-center">
        SPL measured at 1m from source — octave band analysis
      </p>
    </div>
  );
}