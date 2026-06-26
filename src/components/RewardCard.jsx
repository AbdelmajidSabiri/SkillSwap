export default function RewardCard({ icon, label, value, highlight }) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-3 rounded-2xl ${
        highlight ? 'bg-peach/10 border border-peach/20' : 'bg-white/60'
      }`}
    >
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-xs font-bold text-text">{value}</span>
      <span className="text-[10px] text-text-muted">{label}</span>
    </div>
  )
}
