import { useEffect, useState, useCallback } from 'react'

interface NavItem {
  id: string
  label: string
  labelEn?: string
  num?: string
}

interface NavigationProps {
  items: NavItem[]
}

export function Navigation({ items }: NavigationProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Track which section occupies the top strip of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        threshold: 0,
        // Only the top ~20% of viewport triggers activation
        rootMargin: '-5% 0px -80% 0px',
      },
    )

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [items])

  // Track overall reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrolled = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setProgress(Math.min(scrolled, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNavigate = useCallback((id: string) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }, [])

  const activeIndex = items.findIndex((item) => item.id === activeId)

  return (
    <>
      {/* ── Reading Progress Bar ── */}
      <div
        className="fixed top-0 left-0 z-[110] h-[2px] w-full"
        aria-hidden="true"
      >
        <div
          className="h-full bg-blood/50"
          style={{
            width: `${progress * 100}%`,
            transition: 'width 120ms linear',
          }}
        />
      </div>

      {/* ── Hamburger Button (always visible) ── */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed top-3 left-3 z-[120] flex h-11 w-11 cursor-pointer items-center justify-center border border-smoke/20 bg-void/70 backdrop-blur-sm transition-all duration-300 hover:border-stone/40 hover:bg-void/90 sm:top-4 sm:left-4"
        aria-label={isMenuOpen ? '關閉目錄' : '開啟目錄'}
        aria-expanded={isMenuOpen}
      >
        <div className="flex w-[18px] flex-col items-center gap-[5px]">
          <span
            className={`block h-px w-full origin-center bg-paper-aged transition-all duration-300 ${
              isMenuOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-full bg-paper-aged transition-all duration-300 ${
              isMenuOpen ? 'scale-x-0 opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-full origin-center bg-paper-aged transition-all duration-300 ${
              isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </div>
      </button>

      {/* ── Menu label (desktop, visible when menu closed) ── */}
      <div
        className={`fixed top-[1.1rem] left-[3.75rem] z-[120] hidden font-document text-[0.65rem] tracking-[0.25em] text-stone/50 transition-opacity duration-300 sm:block ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        目錄
      </div>

      {/* ── Slide-out Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[115] transition-all duration-500 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="目錄"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-void/80 backdrop-blur-[2px]"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel */}
        <aside
          className={`absolute top-0 left-0 flex h-full w-full max-w-[400px] flex-col border-r border-smoke/15 bg-void transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Panel Header */}
          <div className="shrink-0 border-b border-smoke/15 px-8 pt-20 pb-5">
            <div className="font-document text-[0.65rem] tracking-[0.4em] text-stone/60">
              TABLE OF CONTENTS
            </div>
            <h2 className="mt-1 font-heading text-base font-bold tracking-[0.12em] text-paper-aged">
              目錄
            </h2>

            {/* Progress indicator */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-smoke/30">
                <div
                  className="h-full bg-blood/50"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <span className="shrink-0 font-document text-[0.65rem] tracking-wider text-stone/50">
                {activeIndex >= 0 ? activeIndex + 1 : '—'} / {items.length}
              </span>
            </div>
          </div>

          {/* Chapter List */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            {items.map((item, index) => {
              const isActive = activeId === item.id
              const num =
                item.num ?? String(index + 1).padStart(2, '0')

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`group flex w-full items-start gap-4 border-l-2 px-5 py-3.5 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-blood bg-blood-dark/10'
                      : 'border-transparent hover:border-stone/20 hover:bg-ash/30'
                  }`}
                >
                  {/* Chapter number */}
                  <span
                    className={`mt-px shrink-0 font-document text-[0.75rem] tracking-wider transition-colors duration-300 ${
                      isActive
                        ? 'text-blood'
                        : 'text-stone/40 group-hover:text-stone/70'
                    }`}
                  >
                    {num}
                  </span>

                  {/* Chapter label */}
                  <div className="min-w-0 flex-1">
                    <div
                      className={`font-heading text-[0.9rem] font-bold tracking-wide transition-colors duration-300 ${
                        isActive
                          ? 'text-paper-aged'
                          : 'text-dust group-hover:text-paper-aged'
                      }`}
                    >
                      {item.label}
                    </div>
                    {item.labelEn && (
                      <div
                        className={`mt-0.5 font-document text-[0.65rem] tracking-[0.08em] transition-colors duration-300 ${
                          isActive
                            ? 'text-stone/70'
                            : 'text-stone/35 group-hover:text-stone/55'
                        }`}
                      >
                        {item.labelEn}
                      </div>
                    )}
                  </div>

                  {/* Active dot */}
                  {isActive && (
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blood shadow-[0_0_6px_rgba(153,27,27,0.5)]" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Panel Footer */}
          <div className="shrink-0 border-t border-smoke/15 px-8 py-5">
            <div className="font-document text-[0.6rem] tracking-[0.2em] text-stone/30">
              林宅血案 — 1980.02.28
            </div>
          </div>
        </aside>
      </div>

      {/* ── Desktop Dot Nav (right side, sm+ only) ── */}
      <nav
        className="fixed top-1/2 right-2 z-[100] hidden -translate-y-1/2 flex-col gap-1 sm:flex md:right-4"
        aria-label="章節導覽"
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavigate(item.id)}
            className="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0"
            aria-label={item.label}
            aria-current={activeId === item.id ? 'true' : undefined}
          >
            <span
              className={`block h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blood group-hover:shadow-[0_0_8px_rgba(153,27,27,0.4)] ${
                activeId === item.id
                  ? 'scale-150 bg-blood shadow-[0_0_8px_rgba(153,27,27,0.4)]'
                  : 'bg-stone'
              }`}
            />
            <span className="pointer-events-none absolute top-1/2 right-full mr-2 hidden -translate-y-1/2 whitespace-nowrap font-heading text-[0.75rem] tracking-[0.1em] text-dust group-hover:block">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  )
}
