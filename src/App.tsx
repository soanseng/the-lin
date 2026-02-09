import { useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { ContentWarning } from './chapters/ContentWarning'
import { Prologue } from './chapters/Prologue'
import { Navigation } from './components/layout/Navigation'
import { ChapterTransition } from './components/layout/ChapterTransition'

const navItems = [
  { id: 'content-warning', label: '內容警告' },
  { id: 'prologue', label: '序章' },
]

function App() {
  useScrollReveal()
  const prologueRef = useRef<HTMLDivElement>(null)

  const handleEnter = () => {
    prologueRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navigation items={navItems} />
      <main className="scroll-snap-container">
        <ContentWarning onEnter={handleEnter} />
        <ChapterTransition variant="fade" />
        <div ref={prologueRef}>
          <Prologue />
        </div>

        <ChapterTransition variant="blood" />

        {/* Placeholder: more chapters will be added here */}
        <section
          id="coming-soon"
          className="flex min-h-screen flex-col items-center justify-center bg-ink px-8"
        >
          <p className="font-heading text-sm tracking-[0.3em] text-stone">
            更多章節即將到來
          </p>
        </section>
      </main>
    </>
  )
}

export default App
