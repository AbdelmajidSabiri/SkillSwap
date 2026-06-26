import Avatar from './Avatar'

export default function MatchCard({ match, onSelect, onPreview }) {
  return (
    <div className="bg-card rounded-3xl p-4 card-shadow animate-fade-in">
      <div className="flex items-start gap-3">
        <button type="button" onClick={() => onPreview?.(match)} className="flex-shrink-0">
          <Avatar src={match.avatar} alt={match.name} size="md" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => onPreview?.(match)} className="text-left">
              <h3 className="font-bold text-text text-base hover:text-peach transition-colors">{match.name}</h3>
            </button>
            <MatchRing percent={match.matchPercent} />
          </div>
          <p className="text-xs text-text-muted mt-0.5 line-clamp-1">{match.bio}</p>
          <span className="inline-block mt-1.5 text-[10px] font-semibold bg-peach/10 text-peach-dark px-2 py-0.5 rounded-full">
            {match.tag}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wide mb-1">
            Skill to Teach
          </p>
          <p className="text-xs text-text font-medium">
            {match.teachSkills.join(', ')}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wide mb-1">
            Skill to Learn
          </p>
          <p className="text-xs text-text font-medium">
            {match.learnSkills.join(', ')}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          type="button"
          onClick={() => onPreview?.(match)}
          className="flex-1 py-2.5 bg-white border border-gray-200 text-text font-bold text-sm rounded-2xl hover:border-peach/40 transition-colors"
        >
          View Profile
        </button>
        <button
          type="button"
          onClick={() => onSelect(match)}
          className="flex-1 py-2.5 bg-peach text-white font-bold text-sm rounded-2xl hover:bg-peach-dark transition-colors active:scale-[0.98]"
        >
          Start Swap →
        </button>
      </div>
    </div>
  )
}

function MatchRing({ percent }) {
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="relative w-12 h-12 flex-shrink-0">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="4" />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#ff8a5b"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-peach">
        {percent}%
      </span>
    </div>
  )
}
