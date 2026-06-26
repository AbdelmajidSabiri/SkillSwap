import { IMAGES } from '../data/assets'

export default function SessionTimer({ seconds, variant = 'teach' }) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  const isLow = seconds <= 10 && seconds > 0

  return (
    <div className="relative w-14 h-14 flex-shrink-0">
      <img
        src={isLow ? IMAGES.clockActive : IMAGES.clock}
        alt=""
        className={`w-full h-full object-contain ${isLow ? 'animate-pulse' : ''}`}
      />
      <span
        className={`absolute inset-0 flex items-center justify-center text-[10px] font-bold ${
          variant === 'teach' ? 'text-peach-dark' : 'text-cyan-700'
        }`}
      >
        {formatted}
      </span>
    </div>
  )
}
