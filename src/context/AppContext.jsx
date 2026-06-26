import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import {
  INITIAL_USER,
  XP_REWARDS,
  BADGE_INFO,
  WEEKLY_CHALLENGE,
  INITIAL_MISSIONS,
  ACTIVE_PAIR,
} from '../data/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [user, setUser] = useState({ ...INITIAL_USER })
  const [activeTab, setActiveTab] = useState('home')
  const [swapFlow, setSwapFlow] = useState(null)
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [sessionMode, setSessionMode] = useState('chat')
  const [teachingDone, setTeachingDone] = useState(false)
  const [learningDone, setLearningDone] = useState(false)
  const [sessionXpEarned, setSessionXpEarned] = useState(0)
  const [newBadgeUnlocked, setNewBadgeUnlocked] = useState(false)
  const [recentReward, setRecentReward] = useState(null)
  const [missions, setMissions] = useState([...INITIAL_MISSIONS])
  const [weeklyChallenge, setWeeklyChallenge] = useState({ ...WEEKLY_CHALLENGE })
  const [toast, setToast] = useState(null)
  const [extraFeedbackOptions, setExtraFeedbackOptions] = useState([])

  const showToast = useCallback((message) => {
    setToast(message || null)
  }, [])

  const dismissToast = useCallback(() => setToast(null), [])

  useEffect(() => {
    if (!toast) return undefined
    const t = setTimeout(() => setToast(null), 3200)
    return () => clearTimeout(t)
  }, [toast])

  const navigate = useCallback((tab) => {
    setActiveTab(tab)
    if (tab !== 'swap') setSwapFlow(null)
  }, [])

  const startSwapWithMatch = useCallback((match) => {
    setSelectedMatch(match)
    setSwapFlow('session-setup')
    setTeachingDone(false)
    setLearningDone(false)
    setSessionXpEarned(0)
    setNewBadgeUnlocked(false)
    setActiveTab('swap')
    showToast(`Matched with ${match.name}!`)
  }, [showToast])

  const continueActiveMission = useCallback(() => {
    setSelectedMatch({
      id: ACTIVE_PAIR.id,
      name: ACTIVE_PAIR.name,
      avatar: ACTIVE_PAIR.avatar,
      teachTopic: ACTIVE_PAIR.learnTopic,
      learnTopic: 'Photography basics',
      teachSkills: ['Photography'],
      learnSkills: ['Light sensor'],
      matchPercent: 95,
    })
    setSwapFlow('session-setup')
    setActiveTab('swap')
    showToast('Continuing mission with Sora')
  }, [showToast])

  const completeTeachingRound = useCallback(() => {
    setTeachingDone(true)
    setSessionXpEarned((prev) => prev + XP_REWARDS.teachingRound)
    setSwapFlow('learning-round')
    showToast(`+${XP_REWARDS.teachingRound} XP — Teaching round complete!`)
  }, [showToast])

  const completeLearningRound = useCallback(() => {
    setLearningDone(true)
    setSessionXpEarned((prev) => prev + XP_REWARDS.learningRound)
    setSwapFlow('reflect')
    showToast(`+${XP_REWARDS.learningRound} XP — Learning round complete!`)
  }, [showToast])

  const toggleMission = useCallback((id) => {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, done: !m.done } : m))
    )
  }, [])

  const updateProfile = useCallback(({ name, bio }) => {
    setUser((prev) => ({
      ...prev,
      ...(name !== undefined && { name }),
      ...(bio !== undefined && { bio }),
    }))
    showToast('Profile updated!')
  }, [showToast])

  const updateSkills = useCallback(({ teachSkills, learnSkills }) => {
    setUser((prev) => ({
      ...prev,
      ...(teachSkills && { teachSkills }),
      ...(learnSkills && { learnSkills }),
    }))
    showToast('Skills updated!')
  }, [showToast])

  const addFeedbackOption = useCallback((tag) => {
    const trimmed = tag.trim()
    if (!trimmed) return
    setExtraFeedbackOptions((prev) =>
      prev.includes(trimmed) ? prev : [...prev, trimmed]
    )
  }, [])

  const completeSwap = useCallback((feedbackTags, reflections) => {
    const totalXp =
      XP_REWARDS.teachingRound +
      XP_REWARDS.learningRound +
      XP_REWARDS.fullSwap +
      XP_REWARDS.balancedBonus

    const unlockBalanced = !user.badges.includes('balanced')

    setUser((prev) => {
      let newXp = prev.xp + totalXp
      let newLevel = prev.level
      let newTitle = prev.title
      let newNextTitle = prev.nextTitle

      if (newXp >= prev.xpToNextLevel) {
        newLevel += 1
        newXp -= prev.xpToNextLevel
        newTitle = prev.nextTitle
        newNextTitle = 'Skill Explorer'
      }

      const newBadges = unlockBalanced
        ? [...prev.badges, 'balanced']
        : prev.badges
      const mergedFeedback = [
        ...new Set([...prev.feedbackTags, ...feedbackTags]),
      ].slice(0, 8)

      return {
        ...prev,
        xp: newXp,
        totalXp: prev.totalXp + totalXp,
        level: newLevel,
        title: newTitle,
        nextTitle: newNextTitle,
        swaps: prev.swaps + 1,
        teachingHours: prev.teachingHours + 1,
        learningHours: prev.learningHours + 1,
        streak: prev.streak + 1,
        badges: newBadges,
        feedbackTags: mergedFeedback,
      }
    })

    setWeeklyChallenge((prev) => ({
      ...prev,
      progress: Math.min(prev.progress + 1, prev.total),
    }))

    setMissions((prev) =>
      prev.map((m) => (m.id === 2 ? { ...m, done: true } : m))
    )

    setNewBadgeUnlocked(unlockBalanced)
    setRecentReward({
      xp: totalXp,
      streak: user.streak + 1,
      badge: unlockBalanced ? BADGE_INFO.balanced : null,
      taught: reflections?.taught,
      learned: reflections?.learned,
    })
    setSwapFlow(null)
    setActiveTab('rewards')
    showToast(`Swap complete! +${totalXp} XP earned`)
  }, [user.badges, user.streak, showToast])

  const dismissRecentReward = useCallback(() => {
    setRecentReward(null)
    setNewBadgeUnlocked(false)
  }, [])

  const value = {
    user,
    activeTab,
    swapFlow,
    selectedMatch,
    sessionMode,
    teachingDone,
    learningDone,
    sessionXpEarned,
    newBadgeUnlocked,
    recentReward,
    missions,
    weeklyChallenge,
    toast,
    extraFeedbackOptions,
    navigate,
    startSwapWithMatch,
    continueActiveMission,
    setSessionMode,
    setSwapFlow,
    completeTeachingRound,
    completeLearningRound,
    completeSwap,
    toggleMission,
    updateProfile,
    updateSkills,
    addFeedbackOption,
    showToast,
    dismissToast,
    dismissRecentReward,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
