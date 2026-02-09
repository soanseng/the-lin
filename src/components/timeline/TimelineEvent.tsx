interface TimelineEventProps {
  year: string
  title: string
  description: string
  highlight?: boolean
}

export function TimelineEvent({
  year,
  title,
  description,
  highlight = false,
}: TimelineEventProps) {
  return (
    <div
      data-reveal
      className="group relative mb-16 -translate-x-2.5 pl-8 opacity-0 transition-all duration-700 [&.revealed]:translate-x-0 [&.revealed]:opacity-100"
    >
      {/* Timeline dot */}
      <div className="absolute top-[0.65rem] left-0 h-[7px] w-[7px] -translate-x-[3px] rounded-full bg-stone transition-colors duration-400 group-hover:bg-blood group-hover:shadow-[0_0_10px_rgba(153,27,27,0.4)] group-[.revealed]:bg-blood group-[.revealed]:shadow-[0_0_10px_rgba(153,27,27,0.4)]" />

      <div className="mb-1 font-document text-xs tracking-[0.15em] text-blood">{year}</div>
      <div
        className={`mb-2 font-heading text-[1.1rem] font-bold ${highlight ? 'text-blood' : 'text-paper-aged'}`}
      >
        {title}
      </div>
      <div
        className={`font-literary text-[0.9rem] leading-7 ${highlight ? 'text-paper-aged' : 'text-dust'}`}
      >
        {description}
      </div>
    </div>
  )
}
