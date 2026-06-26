import { useApp } from '../context/AppContext'
import { ACTIVE_PAIR } from '../data/mockData'
import AppHeader from '../components/AppHeader'
import Avatar from '../components/Avatar'

export default function Home() {
  const { user, navigate, missions, toggleMission, continueActiveMission } = useApp()
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  const completedDays = [0, 1, 2, 3, 4, 5]
  const firstName = user.name.split(' ')[0]

  return (
    <div className="animate-fade-in pb-4">
      <div className="flex items-center gap-3 mb-5">
        <Avatar src={user.avatar} alt={user.name} size="sm" />
        <div className="flex-1">
          <p className="text-sm text-text-muted">Good morning,</p>
          <h1 className="text-xl font-bold text-text">{firstName}!</h1>
        </div>
        <img src="/images/hitsz.png" alt="HITSZ" className="w-9 h-9 object-contain opacity-90" />
      </div>

      <div className="bg-card rounded-3xl p-4 card-shadow mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">📅</span>
            <span className="font-bold text-text">Sat, 20 June</span>
          </div>
          <div className="flex items-center gap-1 bg-peach/10 px-2.5 py-1 rounded-full">
            <span className="text-lg">🔥</span>
            <span className="font-bold text-peach-dark text-sm">{user.streak}</span>
          </div>
        </div>
        <div className="flex justify-between">
          {days.map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-text-muted font-semibold">{day}</span>
              <span className={`text-sm ${completedDays.includes(i) ? '' : 'opacity-30'}`}>
                {completedDays.includes(i) ? '🔥' : '○'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <StatMini icon="⭐" value={user.totalXp} label="Total XP" onClick={() => navigate('rewards')} />
        <StatMini icon="🤝" value={user.swaps} label="Swaps Done" />
        <StatMini icon="🏅" value={user.title.split(' ')[0]} label="Current Rank" small />
      </div>

      <div className="bg-card rounded-3xl p-4 card-shadow">
        <h2 className="font-bold text-text mb-3">Active Pair</h2>
        <div className="flex items-center justify-center gap-3 mb-3">
          <Avatar src={user.avatar} alt="You" ring="peach" />
          <div className="flex-1">
            <div className="flex justify-between text-[10px] font-semibold text-text-muted mb-1">
              <span>Contribution Balance</span>
              <span>{ACTIVE_PAIR.balance.you}% vs {ACTIVE_PAIR.balance.partner}%</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden flex">
              <div className="bg-peach rounded-l-full" style={{ width: `${ACTIVE_PAIR.balance.you}%` }} />
              <div className="bg-cyan-300 rounded-r-full" style={{ width: `${ACTIVE_PAIR.balance.partner}%` }} />
            </div>
          </div>
          <Avatar src={ACTIVE_PAIR.avatar} alt={ACTIVE_PAIR.name} ring="cyan" />
        </div>
        <p className="text-xs text-text-muted text-center mb-3">
          Pair XP: <span className="font-bold text-peach">{ACTIVE_PAIR.pairXp} XP</span>
        </p>

        <div className="bg-peach-light rounded-2xl p-3 mb-3">
          <p className="text-xs font-bold text-peach-dark mb-2">Current Mission</p>
          {missions.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => toggleMission(m.id)}
              className="flex items-start gap-2 mb-1.5 w-full text-left"
            >
              <span className={`text-sm ${m.done ? 'text-peach' : 'text-gray-300'}`}>
                {m.done ? '✓' : '○'}
              </span>
              <span className={`text-xs ${m.done ? 'line-through text-text-muted' : 'text-text'}`}>
                {m.text}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={continueActiveMission}
          className="w-full text-center text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors py-1"
        >
          Go to Mission →
        </button>
      </div>
    </div>
  )
}

function StatMini({ icon, value, label, small, onClick }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`bg-card rounded-2xl p-3 card-shadow text-center ${onClick ? 'hover:bg-white active:scale-[0.98] transition-all' : ''}`}
    >
      <span className="text-lg">{icon}</span>
      <p className={`font-bold text-text mt-0.5 ${small ? 'text-xs' : 'text-base'}`}>{value}</p>
      <p className="text-[9px] text-text-muted font-semibold">{label}</p>
    </Tag>
  )
}
