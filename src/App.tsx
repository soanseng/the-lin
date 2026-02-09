import { lazy, Suspense, useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { Navigation } from './components/layout/Navigation'
import { ChapterTransition } from './components/layout/ChapterTransition'

// Lazy-load each chapter for code splitting (critical for mobile performance)
const ContentWarning = lazy(() =>
  import('./chapters/ContentWarning').then((m) => ({ default: m.ContentWarning })),
)
const Prologue = lazy(() =>
  import('./chapters/Prologue').then((m) => ({ default: m.Prologue })),
)
const HistoricalContext = lazy(() =>
  import('./chapters/HistoricalContext').then((m) => ({ default: m.HistoricalContext })),
)
const TheMassacre = lazy(() =>
  import('./chapters/TheMassacre').then((m) => ({ default: m.TheMassacre })),
)
const InvestigationHistory = lazy(() =>
  import('./chapters/InvestigationHistory').then((m) => ({
    default: m.InvestigationHistory,
  })),
)
const SurveillanceTruth = lazy(() =>
  import('./chapters/SurveillanceTruth').then((m) => ({
    default: m.SurveillanceTruth,
  })),
)
const UnsolvedMysteries = lazy(() =>
  import('./chapters/UnsolvedMysteries').then((m) => ({
    default: m.UnsolvedMysteries,
  })),
)
const CallToAction = lazy(() =>
  import('./chapters/CallToAction').then((m) => ({ default: m.CallToAction })),
)

const navItems = [
  { id: 'content-warning', label: '內容警告', labelEn: 'Content Warning', num: '—' },
  { id: 'prologue', label: '序章', labelEn: 'Prologue', num: '01' },
  { id: 'historical-context', label: '時代背景', labelEn: 'Historical Context', num: '02' },
  { id: 'the-massacre', label: '案發經過', labelEn: 'The Massacre', num: '03' },
  { id: 'investigation-history', label: '調查歷程', labelEn: 'Investigation History', num: '04' },
  { id: 'surveillance-truth', label: '監控真相', labelEn: 'Surveillance Truth', num: '05' },
  { id: 'unsolved-mysteries', label: '未解之謎', labelEn: 'Unsolved Mysteries', num: '06' },
  { id: 'call-to-action', label: '行動呼籲', labelEn: 'Call to Action', num: '07' },
]

/** Minimal loading fallback — dark bg with subtle pulse */
function ChapterFallback() {
  return (
    <div className="chapter-loading">
      <div className="chapter-loading-indicator" />
    </div>
  )
}

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
        <Suspense fallback={<ChapterFallback />}>
          <ContentWarning onEnter={handleEnter} />
        </Suspense>
        <ChapterTransition variant="fade" />
        <div ref={prologueRef}>
          <Suspense fallback={<ChapterFallback />}>
            <Prologue />
          </Suspense>
        </div>
        <ChapterTransition variant="ink" />
        <Suspense fallback={<ChapterFallback />}>
          <HistoricalContext />
        </Suspense>
        <ChapterTransition variant="blood" />
        <Suspense fallback={<ChapterFallback />}>
          <TheMassacre />
        </Suspense>
        <ChapterTransition variant="ink" />
        <Suspense fallback={<ChapterFallback />}>
          <InvestigationHistory />
        </Suspense>
        <ChapterTransition variant="blood" />
        <Suspense fallback={<ChapterFallback />}>
          <SurveillanceTruth />
        </Suspense>
        <ChapterTransition variant="ink" />
        <Suspense fallback={<ChapterFallback />}>
          <UnsolvedMysteries />
        </Suspense>
        <ChapterTransition variant="fade" />
        <Suspense fallback={<ChapterFallback />}>
          <CallToAction />
        </Suspense>
      </main>
    </>
  )
}

export default App
