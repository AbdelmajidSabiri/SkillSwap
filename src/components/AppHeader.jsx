import { IMAGES } from '../data/assets'

export default function AppHeader({ title, subtitle, showLogo = true }) {
  return (
    <header className="flex items-center gap-3 mb-5">
      {showLogo && (
        <img
          src={IMAGES.logo}
          alt="HITSZ"
          className="w-10 h-10 object-contain rounded-full bg-white/80 p-1 card-shadow"
        />
      )}
      <div className="flex-1 min-w-0">
        {subtitle && <p className="text-xs text-text-muted font-semibold">{subtitle}</p>}
        {title && <h1 className="text-xl font-bold text-text truncate">{title}</h1>}
      </div>
    </header>
  )
}
