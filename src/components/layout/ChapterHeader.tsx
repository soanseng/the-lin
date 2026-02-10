interface ChapterHeaderProps {
  label: string
  title: string
  labelColor?: string
}

export function ChapterHeader({
  label,
  title,
  labelColor = 'text-stone',
}: ChapterHeaderProps) {
  return (
    <header>
      <div
        className={`mb-2 font-heading text-[0.75rem] uppercase tracking-[0.4em] ${labelColor}`}
      >
        {label}
      </div>
      <h2 className="mb-16 font-narrative text-[clamp(1.8rem,5vw,3rem)] font-black leading-[1.4] tracking-[0.04em] text-paper-aged">
        {title}
      </h2>
    </header>
  )
}
