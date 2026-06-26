export default function FeedbackChip({ label, selected, onToggle }) {
  return (
    <button
      onClick={() => onToggle?.(label)}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 ${
        selected
          ? 'bg-peach text-white shadow-sm shadow-peach/30'
          : 'bg-white text-text border border-gray-200 hover:border-peach/40'
      }`}
    >
      {selected && <span className="mr-1">✓</span>}
      {label}
    </button>
  )
}
