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
      className={`relative mb-8 w-full max-w-[640px] cursor-pointer overflow-hidden border border-smoke p-8 transition-all duration-500 hover:border-stone hover:bg-white/[0.02] sm:p-16`}
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

      <div className="mb-2 font-document text-[0.7rem] tracking-[0.2em] text-blood">
        {number}
      </div>
      <div className="mb-4 font-heading text-[clamp(1.1rem,3vw,1.4rem)] font-bold leading-relaxed text-paper-aged">
        {question}
      </div>
      <div
        className={`overflow-hidden font-literary text-[0.9rem] leading-8 text-dust transition-[max-height] duration-600 ${
          expanded ? 'max-h-[300px]' : 'max-h-0'
        }`}
      >
        {detail}
      </div>
    </div>
  )
}
