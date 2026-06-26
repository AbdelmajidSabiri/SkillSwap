import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { MATCHES } from '../data/mockData'
import AppHeader from '../components/AppHeader'
import MatchCard from '../components/MatchCard'

const FILTERS = ['Languages', 'Same Major', 'New Friend']

export default function Discover() {
  const { startSwapWithMatch } = useApp()
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState(null)
  const [previewMatch, setPreviewMatch] = useState(null)

  const filtered = MATCHES.filter((m) => {
    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.teachSkills.some((s) => s.toLowerCase().includes(q)) ||
      m.learnSkills.some((s) => s.toLowerCase().includes(q))
    const matchesFilter =
      !activeFilter ||
      (activeFilter === 'Same Major' && m.tag === 'Same major') ||
      (activeFilter === 'Languages' && m.teachSkills.some((s) => ['Spanish', 'Chinese'].includes(s))) ||
      (activeFilter === 'New Friend' && m.tag !== 'Same major')
    return matchesSearch && matchesFilter
  })

  return (
    <div className="animate-fade-in pb-4">
      <AppHeader title="Discover Matches" subtitle="SkillSwap HITSZ" />

      <div className="relative mb-4">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M16 16l4 4" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by skill, name or goal..."
          className="w-full bg-white rounded-2xl pl-11 pr-4 py-3.5 text-sm text-text outline-none card-shadow placeholder:text-gray-400"
        />
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(activeFilter === f ? null : f)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
              activeFilter === f
                ? 'bg-peach text-white shadow-sm'
                : 'bg-peach/15 text-peach-dark hover:bg-peach/25'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onSelect={startSwapWithMatch}
            onPreview={setPreviewMatch}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-text-muted text-sm py-8">No matches found</p>
        )}
      </div>

      {previewMatch && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setPreviewMatch(null)}
            aria-label="Close preview"
          />
          <div className="relative w-full max-w-[430px] bg-card rounded-t-3xl p-5 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <img src={previewMatch.avatar} alt={previewMatch.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow" />
              <div>
                <h3 className="font-bold text-lg text-text">{previewMatch.name}</h3>
                <span className="text-[10px] font-semibold bg-peach/10 text-peach-dark px-2 py-0.5 rounded-full">
                  {previewMatch.tag}
                </span>
              </div>
            </div>
            <p className="text-sm text-text-muted mb-4">{previewMatch.bio}</p>
            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div className="bg-peach/5 rounded-xl p-3">
                <p className="text-[10px] font-bold text-text-muted uppercase mb-1">Teaches</p>
                <p className="font-medium text-text">{previewMatch.teachSkills.join(', ')}</p>
              </div>
              <div className="bg-cyan-50 rounded-xl p-3">
                <p className="text-[10px] font-bold text-text-muted uppercase mb-1">Wants to learn</p>
                <p className="font-medium text-text">{previewMatch.learnSkills.join(', ')}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                startSwapWithMatch(previewMatch)
                setPreviewMatch(null)
              }}
              className="w-full py-3 bg-peach text-white font-bold rounded-2xl"
            >
              Start Swap with {previewMatch.name} →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
