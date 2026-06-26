export default function ChatBubble({ message, isOwn, avatar }) {
  return (
    <div className={`flex items-end gap-2 ${isOwn ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      {!isOwn && avatar && (
        <img src={avatar} alt="" className="w-7 h-7 rounded-full object-cover flex-shrink-0 border border-white shadow-sm" />
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
          isOwn
            ? 'bg-peach text-white rounded-br-md'
            : 'bg-white text-text rounded-bl-md card-shadow'
        }`}
      >
        {message.image === 'guitar' && (
          <div className="mb-2 bg-white/20 rounded-xl p-3 flex items-center justify-center">
            <GuitarDiagram />
          </div>
        )}
        {message.image === 'chess' && (
          <div className="mb-2 bg-white/20 rounded-xl p-2">
            <ChessBoard />
          </div>
        )}
        <p className="text-sm leading-relaxed">{message.text}</p>
      </div>
    </div>
  )
}

function ChessBoard() {
  const light = '#f0d9b5'
  const dark = '#b58863'
  return (
    <div className="grid grid-cols-8 gap-0 w-full max-w-[200px] mx-auto rounded overflow-hidden">
      {Array.from({ length: 64 }, (_, i) => {
        const row = Math.floor(i / 8)
        const col = i % 8
        const isLight = (row + col) % 2 === 0
        const isRookHighlight = (row === 3 && col >= 0 && col <= 7) || (col === 0 && row >= 0 && row <= 7)
        return (
          <div
            key={i}
            className="aspect-square flex items-center justify-center text-[8px]"
            style={{ backgroundColor: isLight ? light : dark }}
          >
            {isRookHighlight && row === 3 && col === 0 && (
              <span className="text-lg">♜</span>
            )}
            {isRookHighlight && !(row === 3 && col === 0) && (
              <span className="w-2 h-2 rounded-full bg-peach/60" />
            )}
          </div>
        )
      })}
    </div>
  )
}

function GuitarDiagram() {
  return (
    <svg viewBox="0 0 120 80" className="w-full max-w-[160px]">
      <rect x="10" y="10" width="100" height="60" rx="4" fill="#8B6914" />
      {[0, 1, 2, 3, 4, 5].map((s) => (
        <line key={s} x1="10" y1={18 + s * 9} x2="110" y2={18 + s * 9} stroke="#ccc" strokeWidth="0.5" />
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((f) => (
        <line key={f} x1={10 + f * 8} y1="10" x2={10 + f * 8} y2="70" stroke="#666" strokeWidth="0.5" />
      ))}
      <circle cx="82" cy="36" r="5" fill="#ff8a5b" opacity="0.8" />
      <circle cx="82" cy="45" r="5" fill="#ff8a5b" opacity="0.8" />
      <text x="60" y="78" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">G → C</text>
    </svg>
  )
}
