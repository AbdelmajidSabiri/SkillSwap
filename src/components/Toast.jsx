export default function Toast({ message, onDismiss }) {
  if (!message) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[110] w-[calc(100%-2rem)] max-w-[400px] animate-fade-in">
      <div className="bg-text text-white px-4 py-3 rounded-2xl card-shadow flex items-center justify-between gap-3">
        <p className="text-sm font-semibold">{message}</p>
        <button
          type="button"
          onClick={onDismiss}
          className="text-white/70 hover:text-white text-xs font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
