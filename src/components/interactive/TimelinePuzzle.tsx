import { useState, useCallback } from 'react'

/**
 * 時間線拼圖 — Timeline Puzzle Interactive
 *
 * Users arrange key events from February 28, 1980 in chronological order.
 * Tap-to-swap on mobile, tap-to-swap on desktop (no drag-and-drop dependency).
 * Events sourced from crimeDayTimeline data.
 */

interface PuzzleEvent {
  /** Correct time (hidden until placed correctly) */
  time: string
  /** Short description for the card */
  description: string
  /** Whether this is a key/highlighted event */
  isKey?: boolean
}

/** 8 key events from the crime day, in correct chronological order */
const correctOrder: PuzzleEvent[] = [
  {
    time: '08:00',
    description: '田秋堇、蕭裕珍離開林宅。林宅僅留林游阿妹與雙胞胎。',
    isKey: true,
  },
  {
    time: '09:30',
    description: '方素敏離開林宅前往軍法處。請林游阿妹照看小孩。',
    isKey: true,
  },
  {
    time: '11:09',
    description: '毛清芬自日本致電林宅，由林游阿妹接聽——最後一通正常通話。',
  },
  {
    time: '12:00',
    description: '家博從國際學舍致電林宅，由雙胞胎接聽。此通話被情治機關監聽。',
    isKey: true,
  },
  {
    time: '12:10',
    description: '方素敏三度打電話回林宅，均無人接聽。',
    isKey: true,
  },
  {
    time: '13:10',
    description: '某男子自林宅致電104查號台，詢問金琴西餐廳電話——可能係兇手。',
    isKey: true,
  },
  {
    time: '13:30',
    description: '田秋堇抵達林宅，於臥室發現受傷的林奐均。',
    isKey: true,
  },
  {
    time: '15:30',
    description: '刑警大隊技正顧鴻焜發現雙胞胎陳屍地下室儲藏室。',
    isKey: true,
  },
]

/** Shuffle an array using Fisher-Yates, ensuring it differs from the sorted order */
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  // If shuffle accidentally produced the correct order, swap first two
  const isSame = shuffled.every((item, idx) => item === arr[idx])
  if (isSame && shuffled.length > 1) {
    ;[shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]]
  }
  return shuffled
}

type FeedbackState = {
  index: number
  correct: boolean
  timestamp: number
}

export function TimelinePuzzle() {
  const [events, setEvents] = useState<PuzzleEvent[]>(() =>
    shuffleArray(correctOrder),
  )
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<FeedbackState | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  /** Check if the current arrangement matches correct order */
  const checkCompletion = useCallback((currentEvents: PuzzleEvent[]) => {
    return currentEvents.every(
      (event, idx) => event.time === correctOrder[idx].time,
    )
  }, [])

  /** Check if a single item is in its correct position */
  const isCorrectPosition = useCallback(
    (event: PuzzleEvent, index: number) => {
      return event.time === correctOrder[index].time
    },
    [],
  )

  const handleTap = useCallback(
    (index: number) => {
      if (isComplete) return

      if (!hasStarted) setHasStarted(true)

      if (selectedIndex === null) {
        // First selection
        setSelectedIndex(index)
      } else if (selectedIndex === index) {
        // Deselect
        setSelectedIndex(null)
      } else {
        // Swap
        const newEvents = [...events]
        ;[newEvents[selectedIndex], newEvents[index]] = [
          newEvents[index],
          newEvents[selectedIndex],
        ]
        setEvents(newEvents)
        setSelectedIndex(null)

        // Check both swapped positions for feedback
        const aCorrect = isCorrectPosition(newEvents[selectedIndex], selectedIndex)
        const bCorrect = isCorrectPosition(newEvents[index], index)

        if (aCorrect || bCorrect) {
          setFeedback({
            index: aCorrect ? selectedIndex : index,
            correct: true,
            timestamp: Date.now(),
          })
        } else {
          setFeedback({
            index,
            correct: false,
            timestamp: Date.now(),
          })
        }

        // Clear feedback after animation
        setTimeout(() => setFeedback(null), 800)

        // Check completion
        if (checkCompletion(newEvents)) {
          setTimeout(() => setIsComplete(true), 400)
        }
      }
    },
    [selectedIndex, events, isComplete, hasStarted, checkCompletion, isCorrectPosition],
  )

  const correctCount = events.filter(
    (event, idx) => event.time === correctOrder[idx].time,
  ).length

  return (
    <div data-reveal className="mx-auto w-full max-w-[640px]">
      <div className="border border-smoke/60 bg-ash/60 p-[clamp(1.5rem,5vw,2.5rem)]">
        {/* Header */}
        <div className="mb-6 border-b border-smoke pb-4">
          <div className="font-document text-[0.95rem] tracking-[0.2em] text-stone">
            INTERACTIVE — 互動體驗
          </div>
          <h3 className="mt-1 font-heading text-[clamp(1.1rem,3vw,1.4rem)] font-black text-paper-aged">
            時間線拼圖
          </h3>
          <p className="mt-2 font-narrative text-[0.9rem] leading-7 text-dust">
            將民國69年2月28日的事件按時間順序排列。點選兩張卡片以交換位置。
          </p>
        </div>

        {/* Progress */}
        {hasStarted && !isComplete && (
          <div className="mb-4 text-right">
            <span className="font-document text-[0.9rem] tracking-[0.1em] text-stone">
              {correctCount}/{correctOrder.length} 正確位置
            </span>
          </div>
        )}

        {/* Event cards */}
        <div className="space-y-2">
          {events.map((event, index) => {
            const isSelected = selectedIndex === index
            const isCorrect = isComplete || isCorrectPosition(event, index)
            const hasFeedback = feedback?.index === index
            const feedbackCorrect = hasFeedback && feedback.correct
            const feedbackWrong = hasFeedback && !feedback.correct

            return (
              <button
                key={`${event.time}-${index}`}
                type="button"
                className={`group relative block min-h-[44px] w-full text-left transition-all duration-300 ${
                  isComplete
                    ? 'cursor-default'
                    : 'cursor-pointer'
                }`}
                style={{ touchAction: 'manipulation' }}
                onClick={() => handleTap(index)}
                disabled={isComplete}
              >
                <div
                  className={`flex items-start gap-4 border px-4 py-3 transition-all duration-300 sm:px-5 sm:py-4 ${
                    isComplete && isCorrect
                      ? 'border-blood-dark/40 bg-blood-dark/5'
                      : isSelected
                        ? 'border-incense/60 bg-incense/10'
                        : feedbackCorrect
                          ? 'border-green-800/60 bg-green-900/10'
                          : feedbackWrong
                            ? 'border-blood/60 bg-blood/10'
                            : 'border-smoke/40 bg-ink/60 hover:border-stone/60 hover:bg-ink'
                  }`}
                >
                  {/* Position number */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-smoke/60 font-document text-[0.9rem] text-stone">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Time — hidden until correct or puzzle complete */}
                    {(isCorrect || isComplete) ? (
                      <div className="mb-1 font-document text-[0.95rem] font-bold tracking-[0.1em] text-blood">
                        {event.time}
                      </div>
                    ) : (
                      <div className="mb-1 font-document text-[0.95rem] tracking-[0.15em] text-stone">
                        ??:??
                      </div>
                    )}

                    {/* Description */}
                    <p
                      className={`font-narrative text-[0.9rem] leading-7 ${
                        isComplete
                          ? 'text-paper-aged/90'
                          : isSelected
                            ? 'text-paper-fresh'
                            : 'text-dust'
                      }`}
                    >
                      {event.description}
                    </p>
                  </div>

                  {/* Selection indicator */}
                  {isSelected && !isComplete && (
                    <div className="mt-1 shrink-0 font-document text-[0.95rem] text-incense">
                      已選
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Completion message */}
        {isComplete && (
          <div className="mt-8 border-t-2 border-blood pt-6 text-center">
            <p className="font-heading text-[0.9rem] font-bold tracking-wide text-blood">
              時間線完成
            </p>
            <p className="mt-4 font-literary text-[0.95rem] leading-8 text-dust">
              從清晨的日常到下午的發現——短短數小時之間，
              一個家庭被永遠改變。兇手在嚴密監控下從容行兇逾80分鐘，全身而退。
              四十餘年後，這條時間線上的每一刻都留有情治機關的監聽紀錄——
              唯獨真相，至今仍被掩埋。
            </p>
            <p className="mt-4 font-document text-[0.95rem] tracking-[0.15em] text-stone">
              資料來源：促轉會調查報告 附錄1 pp.93-95
            </p>

            {/* Reset button */}
            <button
              type="button"
              className="mt-6 min-h-[44px] border border-smoke/40 px-6 py-2 font-document text-[0.9rem] tracking-wide text-stone transition-colors duration-300 hover:border-stone hover:text-dust active:text-dust"
              onClick={() => {
                setEvents(shuffleArray(correctOrder))
                setSelectedIndex(null)
                setFeedback(null)
                setIsComplete(false)
                setHasStarted(false)
              }}
            >
              重新挑戰
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
