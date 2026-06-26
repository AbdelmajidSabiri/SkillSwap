# SkillSwap HITSZ

> A gamified peer skill-exchange platform for HITSZ students — teach what you know, learn what you don't.

---

## What Is SkillSwap?

SkillSwap HITSZ is a mobile-first demo app where students exchange skills with each other in structured, guided sessions. You teach one skill to a partner, then your partner teaches you one of theirs — a balanced swap. The app rewards you with XP, badges, and rank upgrades as you go.

**This is a front-end demo** built for a university competition. It uses mock data and local state only — no backend, no login, no database required.

---

## Core Concept

Each **Skill Swap** is a two-part guided session:

```
You teach your skill  →  Your partner teaches their skill  →  Reflect  →  Earn rewards
```

Both sides must complete their round for the swap to count, encouraging genuine mutual exchange rather than one-sided help.

---

## Demo Flow (End-to-End)

Follow this path to see the full experience:

| Step | Screen | What Happens |
|------|--------|--------------|
| 1 | **Home** | See your XP, streak, and active swap |
| 2 | **Discover** | Browse student matches by skill compatibility |
| 3 | **Session Setup** | Pick a session mode: Chat, Video, or In-Person |
| 4 | **Teaching Round** | You teach your skill via guided chat |
| 5 | **Learning Round** | Roles switch — your partner teaches you |
| 6 | **Reflect & Complete** | Write a short reflection and give feedback |
| 7 | **Rewards** | Watch your XP, badge, and rank update live |
| 8 | **Profile** | See your updated swap history and stats |

---

## Gamification System

### XP Rewards (per swap)

| Action | XP Earned |
|--------|-----------|
| Finish teaching round | +15 XP |
| Finish learning round | +15 XP |
| Complete full swap | +40 XP |
| Balanced exchange bonus | +20 XP |
| **Total per swap** | **+90 XP** |

### Ranking System

Students climb through 8 ranks as they earn XP. Each rank reflects a deeper level of community contribution and skill mastery.

| Rank | Level | XP Required | Title | Description |
|------|-------|-------------|-------|-------------|
| 🌱 | 1 | 0 – 99 | **Fresh Learner** | Just getting started — curious and eager |
| 📖 | 2 | 100 – 249 | **Knowledge Seeker** | Actively exploring new skills and partners |
| 🤝 | 3 | 250 – 449 | **Peer Exchange** | Building real reciprocal relationships |
| 🎓 | 4 | 450 – 699 | **Campus Connector** | Bridging students across departments and dorms |
| 🌟 | 5 | 700 – 999 | **Trusted Mentor** | Consistently rated highly by swap partners |
| 🏛️ | 6 | 1000 – 1499 | **Skill Ambassador** | Recognized for spreading knowledge across campus |
| 💎 | 7 | 1500 – 2199 | **Exchange Master** | A model of balanced, high-quality peer learning |
| 👑 | 8 | 2200+ | **SkillSwap Legend** | The top tier — an inspiration to the entire community |

> The demo user **Sabir** is at Level 4 — Campus Connector (470 XP), just 30 XP away from Trusted Mentor.

---

### Weekly Leaderboard

In addition to personal rank, students compete on a weekly leaderboard reset every Monday. Rankings are based on XP earned that week.

| Position | Reward |
|----------|--------|
| 🥇 #1 | Exclusive "Weekly Champion" badge + 50 bonus XP |
| 🥈 #2 – #3 | "Top Swapper" badge + 25 bonus XP |
| 🥉 #4 – #10 | "Rising Star" badge + 10 bonus XP |

---

### Badges

Badges are permanent achievements that display on your profile. They are split into four categories:

#### 🚀 Milestone Badges — First-time achievements
| Badge | How to Earn |
|-------|-------------|
| 🏅 **First Swap** | Complete your very first skill swap |
| 🎯 **Double Debut** | Teach and learn two different skills in one week |
| 🌍 **Global Hello** | Swap with an international student |
| 💬 **Conversationalist** | Complete 5 chat-mode sessions |

#### 🔥 Streak Badges — Consistency over time
| Badge | How to Earn |
|-------|-------------|
| 🔥 **3-Week Streak** | Swap at least once for 3 weeks in a row |
| ⚡ **30-Day Flame** | Maintain a 30-day active streak |
| 📅 **Semester Strong** | Stay active for an entire semester |
| 🏆 **Iron Swapper** | Never miss a week for 2 months |

#### ⚖️ Exchange Badges — Quality of the swap itself
| Badge | How to Earn |
|-------|-------------|
| ⚖️ **Balanced Exchange** | Complete a full two-way swap (teach + learn) |
| 🌐 **Cross-Major Bridge** | Swap with someone from a different faculty |
| 🎓 **Skill Trio** | Teach 3 different skills to 3 different people |
| 💡 **Deep Dive** | Complete an in-person session of 60+ minutes |

#### ⭐ Reputation Badges — Awarded by peers
| Badge | How to Earn |
|-------|-------------|
| 👏 **Crowd Favorite** | Receive 10 "Clear Explanation" reactions |
| 😌 **The Patient One** | Receive 10 "Patient" reactions from learners |
| 💎 **Top Rated** | Maintain a 4.8+ rating across 10+ swaps |
| 🧠 **Knowledge Drop** | Have a swap partner come back for a second session |

---

## Screens at a Glance

| Screen | Key Features |
|--------|-------------|
| **Home** | Greeting, weekly streak, XP summary, active swap card |
| **Discover** | Search bar, filter chips, match cards with compatibility % |
| **Session Setup** | Mode selector (Chat / Video / In-Person), progress stepper |
| **Teaching Round** | Guided chat, task checklist, timer, role label |
| **Learning Round** | Same layout, roles reversed, different checklist |
| **Reflect & Complete** | Text fields, feedback chips, reward preview |
| **Rewards** | XP bar, streak counter, badges, weekly challenge, next unlocks |
| **Profile** | Stats, skills taught/learned, reputation score, testimonials |

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React (Vite) |
| Styling | Tailwind CSS v4 |
| State | Local React state only |
| Icons | Lucide React |
| Routing | React state-based screen switching |
| Data | Hardcoded mock JSON — no backend |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open the URL shown in the terminal
#    The app renders in a centered 390px mobile viewport
```

The app is optimized for mobile. On desktop, it renders as an iPhone-style centered layout.

---

## Sample User (Mock Data)

The demo runs as this pre-loaded user:

| Field | Value |
|-------|-------|
| Name | Sabir Abdelmajid |
| University | HITSZ |
| Level | 4 — Campus Connector |
| XP | 470 |
| Swaps completed | 12 |
| Rating | 4.9 ⭐ |
| Skills taught | Chess, Coding, Writing |
| Skills learning | Cooking, Guitar, WeChat |

---

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── BottomNav      # Persistent tab bar
│   ├── ChatBubble     # Message bubbles for guided chat
│   ├── MatchCard      # Discover screen partner cards
│   ├── RewardModal    # Animated XP/badge popup
│   ├── StatCard       # Mini stat display cards
│   └── ...
├── screens/           # One file per screen
│   ├── Home.jsx
│   ├── Discover.jsx
│   ├── SessionSetup.jsx
│   ├── TeachingRound.jsx
│   ├── LearningRound.jsx
│   ├── Reflect.jsx
│   ├── Rewards.jsx
│   └── Profile.jsx
├── data/              # Mock JSON (users, skills, sessions)
└── App.jsx            # Root with state management & routing
```

---

## Design Language

- **Background:** Soft cyan / mint gradient
- **Cards:** Off-white with warm shadows, 20–28px border radius
- **Accent:** Pale peach / salmon for checklists and highlights
- **Buttons:** Rounded, pastel fills, soft shadows
- **Typography:** Clean sans-serif, friendly and readable
- **Layout:** Airy spacing, no harsh borders, mobile-first

---

## What This Demo Does NOT Include

To keep scope focused for the competition, the following are intentionally omitted:

- User authentication or login
- Real backend or database
- Live chat or video calls
- Push notifications
- Real matchmaking algorithm
- Persistent storage between sessions

---

## Competition Notes

This app was built for a university competition demo. The priority is:

1. A smooth, clickable end-to-end journey
2. Clear role switching (teach → learn) visible in the UI
3. Visible reward updates after completing a swap
4. Polished visual design that feels production-ready
