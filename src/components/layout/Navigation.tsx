import { useEffect, useState } from 'react'

interface NavItem {
  id: string
  label: string
}

interface NavigationProps {
  items: NavItem[]
}

export function Navigation({ items }: NavigationProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { threshold: 0.5 }
    )

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [items])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-1/2 right-2 z-[100] hidden -translate-y-1/2 flex-col gap-1 sm:flex md:right-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleClick(item.id)}
          className="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0"
          aria-label={item.label}
          aria-current={activeId === item.id ? 'true' : undefined}
        >
          {/* Visual dot — separate from touch target */}
          <span
            className={`block h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blood group-hover:shadow-[0_0_8px_rgba(153,27,27,0.4)] ${
              activeId === item.id
                ? 'scale-150 bg-blood shadow-[0_0_8px_rgba(153,27,27,0.4)]'
                : 'bg-stone'
            }`}
          />

          {/* Hover label */}
          <span className="pointer-events-none absolute top-1/2 right-full mr-2 hidden -translate-y-1/2 whitespace-nowrap font-heading text-[0.65rem] tracking-[0.1em] text-dust group-hover:block">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  )
}
