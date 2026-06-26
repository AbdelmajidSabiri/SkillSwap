import { IMAGES } from './assets'

export const INITIAL_USER = {
  name: 'Sabir Abdelmajid',
  school: 'HITSZ',
  level: 4,
  title: 'Campus Connector',
  xp: 470,
  totalXp: 470,
  xpToNextLevel: 500,
  nextTitle: 'Trusted Mentor',
  swaps: 12,
  teachingHours: 35,
  learningHours: 42,
  rating: 4.9,
  streak: 31,
  rank: 8,
  teachSkills: ['Chess', 'Coding', 'Writing'],
  learnSkills: ['Cooking', 'Guitar', 'How to use WeChat'],
  badges: ['handshake', 'fire'],
  feedbackTags: ['Clear explanation', 'Patient', 'Good examples'],
  bio: 'International student passionate about coding and chess. Always happy to help!',
  avatar: IMAGES.avatars.sabir,
}

export const MATCHES = [
  {
    id: 'lena',
    name: 'Lena',
    avatar: IMAGES.avatars.lena,
    bio: 'Art major who loves hiking on weekends.',
    tag: 'International student',
    teachSkills: ['Hiking stuff', 'Painting'],
    learnSkills: ['Coding', 'Piano'],
    matchPercent: 89,
    teachTopic: 'Painting',
    learnTopic: 'Coding',
  },
  {
    id: 'peter',
    name: 'Peter',
    avatar: IMAGES.avatars.peter,
    bio: 'CS sophomore, guitar enthusiast.',
    tag: 'Local student',
    teachSkills: ['Guitar', 'Music theory'],
    learnSkills: ['Chess', 'Writing'],
    matchPercent: 82,
    teachTopic: 'Chess',
    learnTopic: 'Guitar',
  },
  {
    id: 'carlos',
    name: 'Carlos',
    avatar: IMAGES.avatars.carlos,
    bio: 'Exchange student from Spain.',
    tag: 'Exchange student',
    teachSkills: ['Cooking', 'Spanish'],
    learnSkills: ['Coding', 'WeChat'],
    matchPercent: 76,
    teachTopic: 'Cooking',
    learnTopic: 'How to use WeChat',
  },
  {
    id: 'juwenjun',
    name: 'Ju Wenjun',
    avatar: IMAGES.avatars.juWenjun,
    bio: 'Photography club president.',
    tag: 'Same major',
    teachSkills: ['Photography', 'Editing'],
    learnSkills: ['Chess', 'Public speaking'],
    matchPercent: 71,
    teachTopic: 'Photography',
    learnTopic: 'Chess',
  },
]

export const ACTIVE_PAIR = {
  id: 'sora',
  name: 'Sora',
  avatar: IMAGES.avatars.sora,
  pairXp: 150,
  balance: { you: 51, partner: 49 },
  teachTopic: 'Photography basics',
  learnTopic: 'Light sensor usage',
}

export const INITIAL_MISSIONS = [
  { id: 1, text: 'Teach Sora how to use the device\'s light sensor', done: true },
  { id: 2, text: 'Teach how the light affects photos', done: false },
]

export const TEACHING_MESSAGES = [
  {
    id: 1,
    sender: 'you',
    text: 'The rook moves in straight lines — horizontally or vertically. It can move any number of squares along a rank or file.',
    image: 'chess',
  },
  {
    id: 2,
    sender: 'partner',
    text: 'Okay, so the rook cannot move diagonally, only straight lines.',
  },
  {
    id: 3,
    sender: 'you',
    text: 'Exactly! Now the bishop moves diagonally. Each bishop stays on one color for the entire game.',
  },
]

export const LEARNING_MESSAGES = [
  {
    id: 1,
    sender: 'partner',
    text: 'Start with the G chord — place your ring finger on the 3rd fret of the high E string.',
    image: 'guitar',
  },
  {
    id: 2,
    sender: 'you',
    text: 'Got it! And then I switch to C by moving my finger down one string?',
  },
  {
    id: 3,
    sender: 'partner',
    text: 'Yes! Practice switching between G and C slowly. Speed comes with repetition.',
  },
]

export const TEACHING_CHECKLIST = [
  { id: 1, text: 'Teach basic piece movement and capture.', done: true },
  { id: 2, text: 'Teach check, checkmate, and stalemate.', done: false },
  { id: 3, text: 'Teach a basic opening principle.', done: false },
]

export const LEARNING_CHECKLIST = [
  { id: 1, text: 'Learn to switch between two chords', done: true },
  { id: 2, text: 'Learn one easy riff or melody', done: true },
  { id: 3, text: 'Learn how to hold the guitar and pick correctly', done: false },
]

export const FEEDBACK_OPTIONS = [
  'Clear explanation',
  'Patient',
  'Good examples',
  'Fast learner',
]

export const BADGE_INFO = {
  handshake: { icon: '🤝', label: '+10 Swaps', name: 'Swap Master' },
  fire: { icon: '🔥', label: '3-Week Streak', name: 'Streak Keeper' },
  balanced: { icon: '⚖️', label: 'Balanced Exchange', name: 'Balanced Exchange' },
}

export const XP_REWARDS = {
  teachingRound: 15,
  learningRound: 15,
  fullSwap: 40,
  balancedBonus: 20,
}

export const WEEKLY_CHALLENGE = {
  title: 'Complete 3 swaps in different skill categories',
  progress: 1,
  total: 3,
}

export const NEXT_UNLOCKS = [
  'Level 5 — Trusted Mentor title',
  '20 swaps — Skill Explorer Badge',
  '50-Day Streak — Legend Badge',
]

export function getSessionTopics(match) {
  if (!match) return { teach: 'Playing Chess', learn: 'Playing Guitar' }
  return {
    teach: match.teachTopic || match.teachSkills[0],
    learn: match.learnTopic || match.learnSkills[0],
  }
}
