# SkillSwap HITSZ

A mobile-first demo web app for gamified peer skill exchange among HITSZ students.

## Tech Stack

- React (Vite)
- Tailwind CSS v4
- Local mock state only — no backend

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal. The app renders in a centered mobile viewport (max 430px).

## Demo Flow

1. **Discover** — Browse matches and tap "Start Swap"
2. **Session Setup** — Choose chat / video / in-person mode
3. **Teaching Round** — Complete the checklist, watch guided chat
4. **Learning Round** — Switch roles, complete learning checklist
5. **Reflect & Complete** — Submit reflection and feedback
6. **Rewards** — See updated XP (+90 total), streak, and new "Balanced Exchange" badge
7. **Profile** — View updated swaps, hours, and badges

## Mock Reward Logic

| Action | XP |
|--------|-----|
| Finish teaching round | +15 |
| Finish learning round | +15 |
| Complete full swap | +40 |
| Balanced exchange bonus | +20 |
| **Total per swap** | **+90** |

Also unlocks the **Balanced Exchange** badge on first completion.

## Sample User

Sabir Abdelmajid — Level 4 Campus Connector, 470 XP, 12 swaps, 4.9 rating
