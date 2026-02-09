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
    <nav className="fixed top-1/2 right-4 z-[100] hidden -translate-y-1/2 flex-col gap-3 sm:flex">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleClick(item.id)}
          className={`group relative block h-1.5 w-1.5 cursor-pointer rounded-full border-0 bg-stone p-0 transition-all duration-300 hover:scale-150 hover:bg-blood hover:shadow-[0_0_8px_rgba(153,27,27,0.4)] ${
            activeId === item.id
              ? 'scale-150 bg-blood shadow-[0_0_8px_rgba(153,27,27,0.4)]'
              : ''
          }`}
          aria-label={item.label}
        >
          {/* Hover label */}
          <span className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 whitespace-nowrap font-heading text-[0.65rem] tracking-[0.1em] text-dust group-hover:block">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  )
}
