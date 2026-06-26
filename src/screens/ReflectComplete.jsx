import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { FEEDBACK_OPTIONS, XP_REWARDS } from '../data/mockData'
import { CircleStepper } from '../components/ProgressStepper'
import FeedbackChip from '../components/FeedbackChip'
import RewardCard from '../components/RewardCard'
import Modal from '../components/Modal'

export default function ReflectComplete() {
  const { completeSwap, user, extraFeedbackOptions, addFeedbackOption } = useApp()
  const [taught, setTaught] = useState('')
  const [learned, setLearned] = useState('')
  const [feedback, setFeedback] = useState(['Clear explanation', 'Patient'])
  const [showAddFeedback, setShowAddFeedback] = useState(false)
  const [newTag, setNewTag] = useState('')

  const allFeedbackOptions = [...FEEDBACK_OPTIONS, ...extraFeedbackOptions]

  function toggleFeedback(tag) {
    setFeedback((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  function handleAddTag() {
    if (newTag.trim()) {
      addFeedbackOption(newTag.trim())
      setFeedback((prev) => [...prev, newTag.trim()])
      setNewTag('')
      setShowAddFeedback(false)
    }
  }

  const totalXp =
    XP_REWARDS.teachingRound +
    XP_REWARDS.learningRound +
    XP_REWARDS.fullSwap +
    XP_REWARDS.balancedBonus

  function handleSubmit() {
    completeSwap(feedback, { taught, learned })
  }

  return (
    <div className="animate-slide-in pb-4">
      <CircleStepper currentStep={4} totalSteps={4} />
      <h1 className="text-xl font-bold text-text mt-5 mb-4">Reflect & Complete</h1>

      <div className="space-y-4 mb-5">
        <div>
          <label className="text-xs font-bold text-text-muted mb-1.5 block">
            What did you teach today?
          </label>
          <textarea
            value={taught}
            onChange={(e) => setTaught(e.target.value)}
            placeholder="I taught basic chess piece movement..."
            rows={3}
            className="w-full bg-gray-100 rounded-2xl p-3.5 text-sm text-text outline-none resize-none placeholder:text-gray-400 focus:ring-2 focus:ring-peach/30"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-text-muted mb-1.5 block">
            What did you learn today?
          </label>
          <textarea
            value={learned}
            onChange={(e) => setLearned(e.target.value)}
            placeholder="I learned G and C chord transitions..."
            rows={3}
            className="w-full bg-gray-100 rounded-2xl p-3.5 text-sm text-text outline-none resize-none placeholder:text-gray-400 focus:ring-2 focus:ring-peach/30"
          />
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs font-bold text-text-muted mb-2">Quick feedback chips partner:</p>
        <div className="flex flex-wrap gap-2">
          {allFeedbackOptions.map((tag) => (
            <FeedbackChip
              key={tag}
              label={tag}
              selected={feedback.includes(tag)}
              onToggle={toggleFeedback}
            />
          ))}
          <button
            type="button"
            onClick={() => setShowAddFeedback(true)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-dashed border-gray-300 text-text-muted hover:border-peach/50"
          >
            + Add
          </button>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-4 card-shadow mb-5">
        <p className="text-xs font-bold text-text-muted mb-3 text-center">Reward Preview</p>
        <div className="grid grid-cols-3 gap-2">
          <RewardCard icon="🔥" value={`${user.streak + 1}`} label="Streak" highlight />
          <RewardCard icon="⭐" value={`+${totalXp} XP`} label="Experience" highlight />
          <RewardCard icon="🏅" value="New Badge" label="Balanced Exchange" highlight />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-3.5 bg-peach text-white font-bold rounded-2xl hover:bg-peach-dark transition-colors active:scale-[0.98]"
      >
        Submit & Claim Rewards →
      </button>

      <Modal open={showAddFeedback} onClose={() => setShowAddFeedback(false)} title="Add feedback tag">
        <input
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="e.g. Great listener"
          className="w-full bg-gray-100 rounded-xl px-3 py-2.5 text-sm mb-3 outline-none focus:ring-2 focus:ring-peach/30"
          onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="w-full py-3 bg-peach text-white font-bold rounded-2xl"
        >
          Add Tag
        </button>
      </Modal>
    </div>
  )
}
