export default function XPProgressBar({ current, max, label }) {
  const percent = Math.min((current / max) * 100, 100)
  const remaining = max - current

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-bold text-text">{current}/{max} XP</span>
        {label && <span className="text-[10px] text-text-muted">{label}</span>}
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-peach to-peach-dark rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      {remaining > 0 && (
        <p className="text-[10px] text-text-muted mt-1.5">
          {remaining} XP to reach next level
        </p>
      )}
    </div>
  )
}
