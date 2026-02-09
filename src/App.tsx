import { useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { ContentWarning } from './chapters/ContentWarning'
import { Prologue } from './chapters/Prologue'
import { HistoricalContext } from './chapters/HistoricalContext'
import { TheMassacre } from './chapters/TheMassacre'
import { InvestigationHistory } from './chapters/InvestigationHistory'
import { SurveillanceTruth } from './chapters/SurveillanceTruth'
import { UnsolvedMysteries } from './chapters/UnsolvedMysteries'
import { CallToAction } from './chapters/CallToAction'
import { Navigation } from './components/layout/Navigation'
import { ChapterTransition } from './components/layout/ChapterTransition'

const navItems = [
  { id: 'content-warning', label: '內容警告' },
  { id: 'prologue', label: '序章' },
  { id: 'historical-context', label: '時代背景' },
  { id: 'the-massacre', label: '案發經過' },
  { id: 'investigation-history', label: '調查歷程' },
  { id: 'surveillance-truth', label: '監控真相' },
  { id: 'unsolved-mysteries', label: '未解之謎' },
  { id: 'call-to-action', label: '行動呼籲' },
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
        <ChapterTransition variant="ink" />
        <HistoricalContext />
        <ChapterTransition variant="blood" />
        <TheMassacre />
        <ChapterTransition variant="ink" />
        <InvestigationHistory />
        <ChapterTransition variant="blood" />
        <SurveillanceTruth />
        <ChapterTransition variant="ink" />
        <UnsolvedMysteries />
        <ChapterTransition variant="fade" />
        <CallToAction />
      </main>
    </>
  )
}

export default App
