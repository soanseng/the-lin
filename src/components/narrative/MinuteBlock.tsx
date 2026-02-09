interface MinuteBlockProps {
  time: string
  children: React.ReactNode
  highlight?: boolean
}

export function MinuteBlock({ time, children, highlight = false }: MinuteBlockProps) {
  return (
    <div data-reveal className="group mb-32 w-full max-w-[680px]">
      <div
        className={`mb-2 font-document text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-[0.1em] opacity-70 transition-colors duration-1000 group-hover:opacity-100 ${
          highlight
            ? 'text-blood group-hover:text-blood group-hover:shadow-[0_0_40px_rgba(153,27,27,0.4)]'
            : 'text-blood-dark group-hover:text-blood group-hover:[text-shadow:0_0_40px_rgba(153,27,27,0.4)]'
        }`}
      >
        {time}
      </div>
      <div className="border-l-2 border-smoke pl-6 font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-[2] text-paper-aged transition-colors duration-500 group-hover:border-l-blood-dark sm:pl-8">
        {children}
      </div>
    </div>
  )
}
