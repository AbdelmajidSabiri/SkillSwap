import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { BADGE_INFO } from '../data/mockData'
import { IMAGES } from '../data/assets'
import FeedbackChip from '../components/FeedbackChip'
import Avatar from '../components/Avatar'
import { EditProfileModal, EditSkillsModal } from '../components/EditModals'

export default function Profile() {
  const { user, updateProfile, updateSkills } = useApp()
  const [editProfile, setEditProfile] = useState(false)
  const [editTeach, setEditTeach] = useState(false)
  const [editLearn, setEditLearn] = useState(false)

  return (
    <div className="animate-fade-in pb-4">
      <div className="text-center mb-5">
        <div className="relative inline-block mb-3">
          <Avatar src={user.avatar} alt={user.name} size="lg" />
          <img
            src={IMAGES.logo}
            alt="HITSZ"
            className="absolute -bottom-1 -right-1 w-7 h-7 object-contain bg-white rounded-full p-0.5 shadow"
          />
        </div>
        <h1 className="text-xl font-bold text-text">{user.name}</h1>
        <p className="text-xs text-peach-dark font-semibold">{user.school} · Level {user.level}</p>
        <p className="text-xs text-text-muted mt-1 px-4">{user.bio}</p>
        <button
          type="button"
          onClick={() => setEditProfile(true)}
          className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-text card-shadow hover:bg-gray-50 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        <StatBox value={user.swaps} label="Swaps" />
        <StatBox value={user.teachingHours} label="Teaching Hours" />
        <StatBox value={user.learningHours} label="Learning Hours" />
      </div>

      <div className="bg-card rounded-3xl p-4 card-shadow mb-4">
        <h2 className="font-bold text-text mb-3">Badges</h2>
        <div className="flex gap-3">
          {user.badges.map((key) => {
            const badge = BADGE_INFO[key]
            return (
              <div
                key={key}
                className="w-14 h-14 rounded-full bg-peach/10 flex items-center justify-center text-2xl card-shadow"
                title={badge.name}
              >
                {badge.icon}
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-card rounded-3xl p-4 card-shadow mb-4">
        <SkillSection
          title="Skills I can teach"
          skills={user.teachSkills}
          onEdit={() => setEditTeach(true)}
        />
        <div className="my-3 border-t border-gray-100" />
        <SkillSection
          title="Skills I want to learn"
          skills={user.learnSkills}
          onEdit={() => setEditLearn(true)}
        />
      </div>

      <div className="bg-gray-100 rounded-3xl p-4 card-shadow">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-bold text-text">{user.rating}</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className={`text-sm ${s <= Math.floor(user.rating) ? 'text-peach' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-text-muted leading-relaxed mb-3">
          Highly rated partner — known for clear explanations and patience during skill swaps.
        </p>
        <p className="text-[10px] font-bold text-text-muted mb-2">Recent Feedbacks</p>
        <div className="flex flex-wrap gap-1.5">
          {user.feedbackTags.map((tag) => (
            <FeedbackChip key={tag} label={tag} selected />
          ))}
        </div>
      </div>

      <EditProfileModal
        open={editProfile}
        onClose={() => setEditProfile(false)}
        user={user}
        onSave={updateProfile}
      />
      <EditSkillsModal
        open={editTeach}
        onClose={() => setEditTeach(false)}
        title="Edit skills I can teach"
        skills={user.teachSkills}
        onSave={(skills) => updateSkills({ teachSkills: skills })}
      />
      <EditSkillsModal
        open={editLearn}
        onClose={() => setEditLearn(false)}
        title="Edit skills I want to learn"
        skills={user.learnSkills}
        onSave={(skills) => updateSkills({ learnSkills: skills })}
      />
    </div>
  )
}

function StatBox({ value, label }) {
  return (
    <div className="bg-card rounded-2xl p-3 card-shadow text-center">
      <p className="text-lg font-bold text-text">{value}</p>
      <p className="text-[9px] text-text-muted font-semibold leading-tight">{label}</p>
    </div>
  )
}

function SkillSection({ title, skills, onEdit }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-text">{title}</h3>
        <button type="button" onClick={onEdit} className="text-[10px] font-semibold text-peach hover:text-peach-dark">
          Edit
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-peach/15 text-peach-dark text-xs font-semibold rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
