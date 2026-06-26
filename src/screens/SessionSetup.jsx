import { useApp } from '../context/AppContext'
import { getSessionTopics } from '../data/mockData'
import { CircleStepper } from '../components/ProgressStepper'
import Avatar from '../components/Avatar'

const MODES = [
  { id: 'chat', label: 'Chat', icon: '💬', desc: 'Text-based guided session' },
  { id: 'video', label: 'Video call', icon: '📹', desc: 'Face-to-face learning' },
  { id: 'inperson', label: 'In person', icon: '👥', desc: 'Meet on campus' },
]

export default function SessionSetup() {
  const { selectedMatch, sessionMode, setSessionMode, setSwapFlow } = useApp()

  if (!selectedMatch) return null

  const topics = getSessionTopics(selectedMatch)

  return (
    <div className="animate-slide-in pb-4">
      <CircleStepper currentStep={1} totalSteps={4} />
      <h1 className="text-xl font-bold text-text mt-5 mb-1">Session Setup</h1>
      <p className="text-sm text-text-muted mb-4">Choose session mode</p>

      <div className="flex items-center gap-3 bg-card rounded-2xl p-3 card-shadow mb-4">
        <Avatar src={selectedMatch.avatar} alt={selectedMatch.name} ring="peach" />
        <div>
          <p className="font-bold text-text">{selectedMatch.name}</p>
          <p className="text-xs text-text-muted">{selectedMatch.matchPercent}% match</p>
        </div>
      </div>

      <div className="space-y-3 mb-5">
        {MODES.map((mode) => {
          const selected = sessionMode === mode.id
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setSessionMode(mode.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 text-left ${
                selected
                  ? 'bg-peach-light border-2 border-peach card-shadow'
                  : 'bg-card border-2 border-transparent card-shadow hover:border-gray-200'
              } ${mode.id === 'inperson' && !selected ? 'border-cyan-200' : ''}`}
            >
              <span className="text-2xl">{mode.icon}</span>
              <div className="flex-1">
                <p className="font-bold text-text">{mode.label}</p>
                <p className="text-xs text-text-muted">{mode.desc}</p>
              </div>
              {selected && (
                <span className="w-6 h-6 bg-peach rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className="bg-card rounded-2xl p-4 card-shadow mb-5">
        <p className="text-xs text-text-muted leading-relaxed">
          <span className="font-bold text-text">Note:</span> This skill swap is guided step by step for optimal learning.
        </p>
        <p className="text-xs text-text-muted mt-2">
          You teach: <span className="font-semibold text-peach">{topics.teach}</span>
          {' · '}
          You learn: <span className="font-semibold text-cyan-600">{topics.learn}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => setSwapFlow('teaching-round')}
        className="w-full py-3.5 bg-peach text-white font-bold rounded-2xl hover:bg-peach-dark transition-colors active:scale-[0.98]"
      >
        Start Teaching Round →
      </button>
    </div>
  )
}
