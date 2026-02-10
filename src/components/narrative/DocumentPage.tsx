interface DocumentPageProps {
  classification?: string
  title: string
  stampText?: string
  children: React.ReactNode
  marginNote?: string
}

export function DocumentPage({
  classification,
  title,
  stampText,
  children,
  marginNote,
}: DocumentPageProps) {
  return (
    <div className="relative w-full max-w-[640px] bg-paper-fresh p-[clamp(1.5rem,6vw,4rem)] font-document text-[clamp(0.9rem,2vw,1rem)] leading-[2] text-ink shadow-[0_1px_3px_rgba(0,0,0,0.12),0_20px_60px_rgba(0,0,0,0.3)]">
      {/* Aged paper overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, transparent 0%, rgba(180,160,120,0.08) 40%, transparent 60%, rgba(180,160,120,0.05) 100%)',
        }}
      />

      {/* Classification stamp watermark */}
      {stampText && (
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] whitespace-nowrap font-heading text-[clamp(3rem,10vw,5rem)] font-black tracking-[0.3em] text-seal-red/[0.12]">
          {stampText}
        </div>
      )}

      {/* Document header */}
      <div className="mb-8 border-b-2 border-ink pb-4 text-center">
        {classification && (
          <div className="mb-2 text-[0.8rem] font-bold tracking-[0.3em] text-blood">
            {classification}
          </div>
        )}
        <div className="font-heading text-[clamp(1rem,3vw,1.2rem)] font-black tracking-[0.1em] text-ink">
          {title}
        </div>
      </div>

      {/* Document body */}
      <div className="font-narrative text-[clamp(0.9rem,2vw,1rem)] leading-[2] tracking-wide text-smoke">
        {children}
      </div>

      {/* Margin note — hidden on small screens to avoid overlap */}
      {marginNote && (
        <div className="absolute right-[-1rem] top-[30%] hidden text-[0.75rem] tracking-[0.15em] text-blood opacity-50 [writing-mode:vertical-rl] md:block">
          {marginNote}
        </div>
      )}
    </div>
  )
}
