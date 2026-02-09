import { mysteries } from '../data/investigations'
import { destroyedEvidence } from '../data/evidence'
import { Section } from '../components/layout/Section'
import { ChapterHeader } from '../components/layout/ChapterHeader'
import { MysteryCard } from '../components/narrative/MysteryCard'
import { ScrollReveal } from '../components/narrative/ScrollReveal'

/**
 * Chapter 06: 未解之謎 (Unsolved Mysteries)
 *
 * Presents the unresolved questions that remain after 40+ years of investigation.
 * Each mystery is an open wound — evidence destroyed, witnesses silenced, files lost.
 * The design evokes the feeling of bureaucratic horror: the cover-up IS the horror.
 */
export function UnsolvedMysteries() {
  return (
    <Section id="unsolved-mysteries" background="ink" vignette>
      <div className="w-full max-w-[720px]">
        {/* Chapter Header */}
        <ScrollReveal>
          <ChapterHeader
            label="CHAPTER 06"
            title="未解之謎"
            labelColor="text-blood"
          />
        </ScrollReveal>

        {/* Epigraph */}
        <ScrollReveal delay={200}>
          <p className="mb-20 max-w-[540px] font-literary text-[clamp(0.9rem,2.5vw,1.1rem)] leading-10 text-dust">
            四十餘年過去，真相仍被層層封存。每一道未解的問題，都是一道不曾癒合的傷口。
          </p>
        </ScrollReveal>

        {/* Mystery Cards */}
        <div className="mb-24 flex flex-col items-center">
          {mysteries.map((mystery, index) => {
            const formattedNumber = `MYSTERY_${String(index + 1).padStart(2, '0')}`
            return (
              <ScrollReveal key={mystery.id} delay={index * 120}>
                <MysteryCard
                  number={formattedNumber}
                  question={mystery.title}
                  detail={mystery.description}
                />
              </ScrollReveal>
            )
          })}
        </div>

        {/* Destroyed Evidence Section */}
        <ScrollReveal>
          <div className="mb-8 border-t border-smoke pt-16">
            <div className="mb-2 font-document text-[0.65rem] uppercase tracking-[0.4em] text-blood">
              EVIDENCE DESTROYED
            </div>
            <h3 className="mb-4 font-narrative text-[clamp(1.4rem,4vw,2rem)] font-black leading-snug text-paper-aged">
              被消滅的證據
            </h3>
            <p className="mb-12 font-literary text-[clamp(0.85rem,2vw,1rem)] leading-8 text-dust">
              證據不是自然消失的。它們被銷毀、被延宕、被水淹、被封鎖。
              每一件消失的證據，都讓真相更加遙不可及。
            </p>
          </div>
        </ScrollReveal>

        {/* Destroyed Evidence Items */}
        <div className="mb-16 space-y-10">
          {destroyedEvidence.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <div className="relative border-l-2 border-blood-dark py-4 pl-6 transition-colors duration-500 hover:border-blood">
                <div className="mb-1 font-document text-[0.65rem] tracking-[0.15em] text-blood-dark">
                  {item.date
                    ? new Date(item.date).getFullYear()
                    : '1980'}
                </div>
                <h4 className="mb-3 font-heading text-[clamp(0.95rem,2.5vw,1.15rem)] font-bold text-paper-aged">
                  {item.title}
                </h4>
                <p className="font-narrative text-[0.88rem] leading-8 text-dust">
                  {item.description}
                </p>
                <div className="mt-3 font-document text-[0.6rem] tracking-[0.1em] text-stone">
                  {item.source}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Statistics / Evidence Loss Summary */}
        <ScrollReveal delay={200}>
          <div className="mb-24 border border-smoke bg-void/50 p-8 sm:p-12">
            <div className="mb-6 text-center font-document text-[0.6rem] uppercase tracking-[0.3em] text-stone">
              INVESTIGATION FILES STATUS
            </div>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
              <div className="text-center">
                <div className="font-document text-[clamp(2rem,6vw,3.5rem)] font-bold leading-none text-blood">
                  549
                </div>
                <div className="mt-2 font-heading text-[0.75rem] text-dust">
                  卷宗原始數量
                </div>
              </div>
              <div className="hidden h-16 w-px bg-smoke sm:block" />
              <div className="text-center">
                <div className="font-document text-[clamp(2rem,6vw,3.5rem)] font-bold leading-none text-paper-aged">
                  170
                </div>
                <div className="mt-2 font-heading text-[0.75rem] text-dust">
                  納莉颱風後倖存
                </div>
              </div>
              <div className="hidden h-16 w-px bg-smoke sm:block" />
              <div className="text-center">
                <div className="font-document text-[clamp(2rem,6vw,3.5rem)] font-bold leading-none text-stone">
                  69%
                </div>
                <div className="mt-2 font-heading text-[0.75rem] text-dust">
                  永久佚失
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Closing */}
        <ScrollReveal delay={300}>
          <div className="mb-8 text-center">
            <p className="mx-auto max-w-[480px] font-literary text-[clamp(1rem,3vw,1.3rem)] leading-10 text-paper-burnt">
              唯有徹底揭露相關檔案，方能完整還原歷史真相。
            </p>
            <p className="mt-6 font-document text-[0.6rem] tracking-[0.2em] text-stone">
              ── 促轉會調查報告結論
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
