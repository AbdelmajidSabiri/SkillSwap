import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { BADGE_INFO, NEXT_UNLOCKS } from '../data/mockData'
import AppHeader from '../components/AppHeader'
import XPProgressBar from '../components/XPProgressBar'
import BadgeCard from '../components/BadgeCard'

export default function Rewards() {
  const { user, recentReward, newBadgeUnlocked, weeklyChallenge, dismissRecentReward, navigate } = useApp()
  const levelProgress = user.xpToNextLevel

  return (
    <div className="animate-fade-in pb-4">
      <AppHeader title="Rewards" subtitle="SkillSwap HITSZ" />

      {recentReward && (
        <div className="bg-peach-light border border-peach/30 rounded-2xl p-4 mb-4 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-bold text-peach-dark">🎉 Swap Complete!</p>
            <button type="button" onClick={dismissRecentReward} className="text-xs text-peach-dark/70">Dismiss</button>
          </div>
          <div className="flex justify-center gap-6 text-center">
            <div>
              <p className="text-lg font-bold text-text">+{recentReward.xp} XP</p>
              <p className="text-[10px] text-text-muted">Earned</p>
            </div>
            <div>
              <p className="text-lg font-bold text-text">🔥 {recentReward.streak}</p>
              <p className="text-[10px] text-text-muted">Day Streak</p>
            </div>
            {recentReward.badge && (
              <div>
                <p className="text-lg">{recentReward.badge.icon}</p>
                <p className="text-[10px] text-text-muted">New Badge!</p>
              </div>
            )}
          </div>
          {(recentReward.taught || recentReward.learned) && (
            <div className="mt-3 pt-3 border-t border-peach/20 text-xs text-text-muted space-y-1">
              {recentReward.taught && <p><span className="font-bold">Taught:</span> {recentReward.taught}</p>}
              {recentReward.learned && <p><span className="font-bold">Learned:</span> {recentReward.learned}</p>}
            </div>
          )}
        </div>
      )}

      <div className="bg-card rounded-3xl p-5 card-shadow mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-lg font-bold text-text">
              Level {user.level} {user.title}
            </p>
            <p className="text-xs text-text-muted">
              {user.xpToNextLevel - user.xp} XP to reach Level {user.level + 1} — {user.nextTitle}
            </p>
          </div>
          <div className="w-12 h-12 bg-peach/10 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-peach">#{user.rank}</span>
          </div>
        </div>
        <XPProgressBar current={user.xp} max={levelProgress} />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-card rounded-2xl p-4 card-shadow text-center">
          <span className="text-2xl">🔥</span>
          <p className="font-bold text-text mt-1">{user.streak}-Day Streak</p>
        </div>
        <button
          type="button"
          onClick={() => navigate('discover')}
          className="bg-card rounded-2xl p-4 card-shadow text-center hover:bg-white transition-colors"
        >
          <span className="text-2xl">📈</span>
          <p className="font-bold text-text mt-1">Rank #{user.rank}</p>
          <p className="text-[10px] text-green-500 font-semibold">Find matches ↑</p>
        </button>
      </div>

      <div className="bg-card rounded-3xl p-4 card-shadow mb-4">
        <h2 className="font-bold text-text mb-3">Badges</h2>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {user.badges.map((key) => {
            const badge = BADGE_INFO[key]
            return (
              <BadgeCard
                key={key}
                icon={badge.icon}
                label={badge.label}
                name={badge.name}
                isNew={key === 'balanced' && newBadgeUnlocked}
              />
            )
          })}
        </div>
      </div>

      <div className="bg-card rounded-3xl p-4 card-shadow mb-4">
        <h2 className="font-bold text-text mb-1">This week&apos;s challenge</h2>
        <p className="text-xs text-text-muted mb-3">{weeklyChallenge.title}</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-peach rounded-full transition-all duration-700"
              style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.total) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-peach">
            {weeklyChallenge.progress}/{weeklyChallenge.total}
          </span>
        </div>
      </div>

      <div className="bg-card rounded-3xl p-4 card-shadow">
        <h2 className="font-bold text-text mb-3">Next Unlocks</h2>
        <ul className="space-y-2">
          {NEXT_UNLOCKS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-peach flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
