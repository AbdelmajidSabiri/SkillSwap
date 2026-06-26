export default function TaskChecklistCard({ title, items, onToggle }) {
  return (
    <div className="bg-peach-light border border-peach/20 rounded-2xl p-4">
      <h3 className="text-sm font-bold text-peach-dark mb-3">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onToggle?.(item.id)}
              className="flex items-start gap-2.5 w-full text-left group"
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${
                  item.done
                    ? 'bg-peach border-peach text-white'
                    : 'border-gray-300 bg-white group-hover:border-peach/50'
                }`}
              >
                {item.done && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span
                className={`text-sm leading-snug ${
                  item.done ? 'text-text-muted line-through' : 'text-text'
                }`}
              >
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
