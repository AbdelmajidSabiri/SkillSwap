import { useState } from 'react'

export default function MessageInput({ onSend, placeholder = 'Type message...' }) {
  const [text, setText] = useState('')

  function handleSend() {
    if (text.trim()) {
      onSend?.(text.trim())
      setText('')
    }
  }

  return (
    <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 card-shadow">
      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-peach transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-text outline-none placeholder:text-gray-400"
      />
      <button
        onClick={handleSend}
        className="w-9 h-9 flex items-center justify-center bg-text rounded-full text-white hover:bg-gray-700 transition-colors active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </button>
    </div>
  )
}
