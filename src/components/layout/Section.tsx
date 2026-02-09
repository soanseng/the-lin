interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  vignette?: boolean
  background?: 'void' | 'ink' | 'ash'
}

const bgMap = {
  void: 'bg-void',
  ink: 'bg-ink',
  ash: 'bg-ash',
} as const

export function Section({
  id,
  children,
  className = '',
  vignette = false,
  background = 'void',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-16 ${bgMap[background]} ${className}`}
      style={vignette ? { boxShadow: 'inset 0 0 250px 80px rgba(0,0,0,0.6)' } : undefined}
    >
      {children}
    </section>
  )
}
