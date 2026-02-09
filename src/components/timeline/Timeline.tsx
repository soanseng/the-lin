interface TimelineProps {
  children: React.ReactNode
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative border-l border-smoke pl-8">
      {children}
    </div>
  )
}
