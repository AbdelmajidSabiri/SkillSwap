export default function BottomNav({ active, onNavigate }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'discover', label: 'Discover', icon: DiscoverIcon },
    { id: 'swap', label: 'Swap', icon: SwapIcon },
    { id: 'rewards', label: 'Rewards', icon: RewardsIcon },
    { id: 'profile', label: 'Profile', icon: ProfileIcon },
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/90 backdrop-blur-md border-t border-white/60 px-2 pb-[env(safe-area-inset-bottom)] z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all duration-200"
            >
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-cyan-100 text-cyan-600' : 'text-gray-400'
                }`}
              >
                <Icon active={isActive} />
              </span>
              <span
                className={`text-[10px] font-semibold ${
                  isActive ? 'text-cyan-600' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

function HomeIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}

function DiscoverIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16l4 4" strokeLinecap="round" />
    </svg>
  )
}

function SwapIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 16V4M7 4L3 8M7 4l4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8v12M17 20l4-4M17 20l-4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RewardsIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 14.8 7.2 16.8l.9-5.3L4.2 7.7l5.4-.8L12 2z" />
    </svg>
  )
}

function ProfileIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>
  )
}
