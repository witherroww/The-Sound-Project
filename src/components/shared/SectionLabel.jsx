export default function SectionLabel({ code, label }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-mono text-xs text-slate tracking-widest uppercase">{code}</span>
      <span className="w-8 h-px bg-slate/30" />
      <span className="font-mono text-xs text-slate/60 tracking-widest uppercase">{label}</span>
    </div>
  );
}