import { useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { ContentWarning } from './chapters/ContentWarning'
import { Prologue } from './chapters/Prologue'

function App() {
  useScrollReveal()
  const prologueRef = useRef<HTMLDivElement>(null)

  const handleEnter = () => {
    prologueRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <ContentWarning onEnter={handleEnter} />
      <div ref={prologueRef}>
        <Prologue />
      </div>

      {/* Placeholder: more chapters will be added here */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-8">
        <p className="font-heading text-sm tracking-[0.3em] text-stone">
          更多章節即將到來
        </p>
      </section>
    </main>
  )
}

export default App
