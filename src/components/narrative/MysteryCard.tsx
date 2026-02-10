import { useState } from 'react'

interface MysteryCardProps {
  number: string
  question: string
  detail: string
}

export function MysteryCard({ number, question, detail }: MysteryCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      role="button"
      tabIndex={0}
      className={`relative mb-8 w-full max-w-[640px] cursor-pointer overflow-hidden border border-smoke p-6 transition-all duration-500 hover:border-stone hover:bg-white/[0.02] sm:p-8 md:p-16`}
      style={{ touchAction: 'manipulation' }}
      onClick={() => setExpanded((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded((prev) => !prev)
        }
      }}
    >
      {/* Blood-red left border */}
      <div
        className={`absolute top-0 left-0 h-full transition-all duration-500 ${
          expanded ? 'w-[5px] bg-blood' : 'w-[3px] bg-blood-dark'
        }`}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-2 font-document text-[0.8rem] tracking-[0.2em] text-blood">
            {number}
          </div>
          <div className="mb-4 font-heading text-[clamp(1.1rem,3vw,1.4rem)] font-bold leading-relaxed text-paper-aged">
            {question}
          </div>
        </div>
        <span
          className={`mt-1 shrink-0 text-[0.8rem] text-dust transition-transform duration-500 ${
            expanded ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden font-literary text-[clamp(0.95rem,2vw,1.05rem)] leading-[2] text-dust transition-[max-height] duration-600 ${
          expanded ? 'max-h-[300px]' : 'max-h-0'
        }`}
      >
        {detail}
      </div>
    </div>
  )
}
