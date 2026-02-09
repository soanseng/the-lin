interface ChapterTransitionProps {
  /** Visual style of the transition */
  variant?: 'fade' | 'ink' | 'blood'
}

/**
 * Atmospheric divider between chapters.
 * Creates a visual breathing space with gradient fades and decorative elements.
 */
export function ChapterTransition({ variant = 'fade' }: ChapterTransitionProps) {
  return (
    <div
      className="relative flex h-[40vh] min-h-[200px] items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Top gradient: from previous chapter into black */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent to-void" />

      {/* Core darkness */}
      <div className="absolute inset-0 bg-void" />

      {/* Decorative center element */}
      {variant === 'fade' && (
        <div className="relative z-[1] h-px w-16 bg-gradient-to-r from-transparent via-stone to-transparent" />
      )}

      {variant === 'ink' && (
        <div className="relative z-[1] flex flex-col items-center gap-2">
          <div className="h-px w-4 bg-smoke" />
          <div className="h-px w-8 bg-stone" />
          <div className="h-px w-4 bg-smoke" />
        </div>
      )}

      {variant === 'blood' && (
        <div className="relative z-[1] flex items-center gap-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-blood-dark" />
          <div className="h-1.5 w-1.5 rounded-full bg-blood-dark shadow-[0_0_8px_rgba(153,27,27,0.3)]" />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-blood-dark" />
        </div>
      )}

      {/* Bottom gradient: from black into next chapter */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-transparent to-void" />
    </div>
  )
}
