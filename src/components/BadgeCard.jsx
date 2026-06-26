export default function BadgeCard({ icon, label, name, isNew }) {
  return (
    <div
      className={`flex flex-col items-center p-3 rounded-2xl bg-white card-shadow min-w-[90px] relative ${
        isNew ? 'ring-2 ring-peach animate-fade-in' : ''
      }`}
    >
      {isNew && (
        <span className="absolute -top-2 -right-1 bg-peach text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
          NEW
        </span>
      )}
      <span className="text-3xl mb-1">{icon}</span>
      <span className="text-[10px] font-bold text-text text-center leading-tight">
        {name || label}
      </span>
      {name && (
        <span className="text-[9px] text-text-muted text-center mt-0.5">{label}</span>
      )}
    </div>
  )
}
