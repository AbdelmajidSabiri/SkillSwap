export default function Avatar({ src, alt, size = 'md', ring = 'white' }) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
  }
  const rings = {
    white: 'border-2 border-white',
    peach: 'border-2 border-peach/30',
    cyan: 'border-2 border-cyan-200',
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} ${rings[ring]} rounded-full object-cover bg-white shadow-sm`}
    />
  )
}
