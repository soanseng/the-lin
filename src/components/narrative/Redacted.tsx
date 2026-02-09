import { useState } from 'react'

interface RedactedProps {
  children: React.ReactNode
}

export function Redacted({ children }: RedactedProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={revealed ? undefined : '點擊揭示隱藏文字'}
      className={`inline cursor-pointer select-none rounded-sm px-[0.3em] py-[0.15em] transition-all duration-700 ${
        revealed
          ? 'bg-blood/15 text-blood underline decoration-wavy underline-offset-4'
          : 'bg-ink text-transparent'
      }`}
      style={{ minHeight: '44px', minWidth: '44px', touchAction: 'manipulation' }}
      onClick={() => setRevealed((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setRevealed((prev) => !prev)
        }
      }}
    >
      {children}
    </span>
  )
}
