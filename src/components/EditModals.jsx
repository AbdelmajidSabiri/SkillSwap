import { useState, useEffect } from 'react'
import { ALL_SKILLS } from '../data/assets'
import Modal from './Modal'
import FeedbackChip from './FeedbackChip'

export function EditProfileModal({ open, onClose, user, onSave }) {
  const [name, setName] = useState(user.name)
  const [bio, setBio] = useState(user.bio)

  useEffect(() => {
    if (open) {
      setName(user.name)
      setBio(user.bio)
    }
  }, [open, user.name, user.bio])

  function handleSave() {
    onSave({ name: name.trim() || user.name, bio: bio.trim() || user.bio })
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Edit Profile">
      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-text-muted mb-1.5 block">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-peach/30"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-text-muted mb-1.5 block">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full bg-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none resize-none focus:ring-2 focus:ring-peach/30"
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="w-full py-3 bg-peach text-white font-bold rounded-2xl hover:bg-peach-dark active:scale-[0.98]"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  )
}

export function EditSkillsModal({ open, onClose, title, skills, onSave }) {
  const [selected, setSelected] = useState([...skills])

  useEffect(() => {
    if (open) setSelected([...skills])
  }, [open, skills])

  function toggle(skill) {
    setSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  function handleSave() {
    onSave(selected.length ? selected : skills)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="text-xs text-text-muted mb-3">Tap skills to add or remove</p>
      <div className="flex flex-wrap gap-2 mb-4 max-h-48 overflow-y-auto">
        {ALL_SKILLS.map((skill) => (
          <FeedbackChip
            key={skill}
            label={skill}
            selected={selected.includes(skill)}
            onToggle={toggle}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleSave}
        className="w-full py-3 bg-peach text-white font-bold rounded-2xl hover:bg-peach-dark active:scale-[0.98]"
      >
        Save Skills
      </button>
    </Modal>
  )
}
