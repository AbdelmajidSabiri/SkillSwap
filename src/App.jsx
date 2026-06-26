import { AppProvider, useApp } from './context/AppContext'
import BottomNav from './components/BottomNav'
import Toast from './components/Toast'
import Home from './screens/Home'
import Discover from './screens/Discover'
import SessionSetup from './screens/SessionSetup'
import TeachingRound from './screens/TeachingRound'
import LearningRound from './screens/LearningRound'
import ReflectComplete from './screens/ReflectComplete'
import Rewards from './screens/Rewards'
import Profile from './screens/Profile'
import { IMAGES } from './data/assets'

function AppShell() {
  const { activeTab, swapFlow, navigate, toast, dismissToast } = useApp()

  function renderSwapFlow() {
    switch (swapFlow) {
      case 'session-setup':
        return <SessionSetup />
      case 'teaching-round':
        return <TeachingRound />
      case 'learning-round':
        return <LearningRound />
      case 'reflect':
        return <ReflectComplete />
      default:
        return <SwapHub />
    }
  }

  function renderMain() {
    if (activeTab === 'swap') return renderSwapFlow()

    switch (activeTab) {
      case 'home':
        return <Home />
      case 'discover':
        return <Discover />
      case 'rewards':
        return <Rewards />
      case 'profile':
        return <Profile />
      default:
        return <Home />
    }
  }

  return (
    <div className="w-full max-w-[430px] min-h-dvh app-gradient relative flex flex-col">
      <Toast message={toast} onDismiss={dismissToast} />
      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-24">
        {renderMain()}
      </main>
      <BottomNav active={activeTab} onNavigate={navigate} />
    </div>
  )
}

function SwapHub() {
  const { navigate } = useApp()

  return (
    <div className="animate-fade-in flex flex-col items-center justify-center text-center py-12">
      <img src={IMAGES.logo} alt="HITSZ" className="w-20 h-20 object-contain mb-4 opacity-90" />
      <h1 className="text-xl font-bold text-text mb-1">Skill Swap</h1>
      <p className="text-xs text-text-muted mb-1">HITSZ Campus Edition</p>
      <p className="text-sm text-text-muted mb-6 px-4">
        Discover a match and start a guided teaching & learning session.
      </p>
      <button
        type="button"
        onClick={() => navigate('discover')}
        className="px-6 py-3 bg-peach text-white font-bold rounded-2xl hover:bg-peach-dark transition-colors active:scale-[0.98]"
      >
        Find a Match →
      </button>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
