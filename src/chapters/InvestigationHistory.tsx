import { Section } from '../components/layout/Section'
import { ChapterHeader } from '../components/layout/ChapterHeader'
import { ScrollReveal } from '../components/narrative/ScrollReveal'
import { DocumentPage } from '../components/narrative/DocumentPage'
import { Timeline } from '../components/timeline/Timeline'
import { TimelineEvent } from '../components/timeline/TimelineEvent'
import { investigationPhases, conclusions } from '../data/investigations'
import { investigationTimeline } from '../data/timeline'

/** Visual indicator of how many years have passed without resolution */
function YearCounter({ year, label }: { year: string; label: string }) {
  return (
    <div className="flex flex-col items-center py-8">
      <span className="font-document text-[clamp(3rem,10vw,6rem)] font-black leading-none tracking-wider text-blood-dark">
        {year}
      </span>
      <span className="mt-2 font-heading text-xs tracking-[0.3em] text-stone">
        {label}
      </span>
    </div>
  )
}

/** A single investigation phase card showing findings and obstructions */
function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof investigationPhases)[number]
  index: number
}) {
  const hasProblems = phase.problems && phase.problems.length > 0

  return (
    <ScrollReveal delay={index * 100}>
      <div className="relative mb-12 border-l-2 border-blood-dark bg-ash/60 p-6 sm:p-8">
        {/* Phase header */}
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <h3 className="font-heading text-[clamp(1.1rem,3vw,1.4rem)] font-black text-paper-aged">
            {phase.name}
          </h3>
          {phase.nameEn && (
            <span className="font-document text-xs tracking-wider text-stone">
              {phase.nameEn}
            </span>
          )}
        </div>

        {/* Agency and date */}
        <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1 font-document text-xs tracking-wider text-dust">
          <span>
            <span className="text-stone">主管機關</span> {phase.agency}
          </span>
          <span>
            <span className="text-stone">起始日期</span> {phase.startDateROC}
          </span>
          {phase.endDate && (
            <span>
              <span className="text-stone">結束</span>{' '}
              {phase.startDateROC.replace(/\d+年.*/, '') + '—' + (phase.endDate ? phase.startDateROC : '')}
            </span>
          )}
        </div>

        {/* Lead personnel */}
        {phase.leadPersonnel && phase.leadPersonnel.length > 0 && (
          <div className="mb-4 font-document text-xs text-dust">
            <span className="tracking-wider text-stone">主導人員</span>{' '}
            {phase.leadPersonnel.join('、')}
          </div>
        )}

        {/* Description */}
        <p className="mb-6 font-narrative text-[0.9rem] leading-8 text-paper-burnt">
          {phase.description}
        </p>

        {/* Findings */}
        <div className="mb-6">
          <h4 className="mb-3 font-heading text-xs font-bold tracking-[0.2em] text-stone">
            調查所得
          </h4>
          <ul className="space-y-2">
            {phase.findings.map((finding, i) => (
              <li
                key={i}
                className="flex gap-3 font-literary text-[0.85rem] leading-7 text-dust"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-stone" />
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Problems / Obstructions */}
        {hasProblems && (
          <div className="border-t border-smoke pt-6">
            <h4 className="mb-3 font-heading text-xs font-bold tracking-[0.2em] text-blood">
              阻礙與問題
            </h4>
            <ul className="space-y-2">
              {phase.problems!.map((problem, i) => (
                <li
                  key={i}
                  className="flex gap-3 font-literary text-[0.85rem] leading-7 text-blood/80"
                >
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blood-dark" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Source */}
        <div className="mt-6 font-document text-[0.65rem] tracking-wider text-stone/60">
          出處：{phase.source}
        </div>
      </div>
    </ScrollReveal>
  )
}

/** The pattern summary: visual depiction of repeated obstruction */
function ObstructionPattern() {
  const pattern = [
    { year: '1980', action: '撥雲專案成立', result: '被情治機關屏蔽監控資訊' },
    { year: '1980', action: '三○七專案介入', result: '國安局架空刑事局偵辦' },
    { year: '1980', action: '誠公專案清查', result: '以偵查為由擴大監控黨外人士' },
    { year: '1996', action: '民主化後重啟調查', result: '偵查人員對受害者仍帶偏見' },
    { year: '2007', action: '法醫重新鑑定', result: 'DNA跡證已劣化無法使用' },
    { year: '2009', action: '高檢署重啟偵查', result: '情治機關仍隱匿監控紀錄' },
    { year: '2018', action: '促轉會調查', result: '距案發近四十年、檔案大量佚失' },
  ]

  return (
    <ScrollReveal>
      <div className="mx-auto max-w-[640px] py-12">
        <h3 className="mb-8 text-center font-heading text-xs font-bold tracking-[0.3em] text-blood">
          四十年——同一個模式
        </h3>
        <div className="space-y-0">
          {pattern.map((item, i) => (
            <div key={i} className="group relative flex items-stretch">
              {/* Connecting line */}
              <div className="absolute left-[3.25rem] top-0 h-full w-px bg-smoke sm:left-[4.25rem]" />

              <div className="relative z-10 flex w-full items-start gap-4 py-4 sm:gap-6">
                {/* Year marker */}
                <div className="flex w-14 shrink-0 items-center justify-center font-document text-xs tracking-wider text-stone sm:w-18">
                  {item.year}
                </div>

                {/* Dot */}
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blood-dark shadow-[0_0_8px_rgba(127,29,29,0.5)]" />

                {/* Content */}
                <div className="flex-1">
                  <div className="font-heading text-[0.85rem] font-bold text-paper-aged">
                    {item.action}
                  </div>
                  <div className="mt-1 font-literary text-[0.8rem] leading-6 text-blood/70">
                    {item.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frustration statement */}
        <div className="mt-8 border-t border-smoke pt-8 text-center">
          <p className="font-literary text-[0.95rem] leading-8 text-dust">
            七次調查。四十餘年。同一個結果。
          </p>
          <p className="mt-2 font-narrative text-[1.1rem] font-bold leading-8 text-blood">
            真相依然被掩埋。
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function InvestigationHistory() {
  // Split phases into early (martial law era) and later (post-democratization)
  const earlyPhases = investigationPhases.filter((p) =>
    ['boyun', 'sanlingqi', 'chenggong'].includes(p.id),
  )
  const laterPhases = investigationPhases.filter(
    (p) => !['boyun', 'sanlingqi', 'chenggong'].includes(p.id),
  )

  // Key timeline events for the investigation timeline
  const keyInvestigationEvents = investigationTimeline.filter((e) => e.isKey)

  return (
    <Section id="investigation-history" background="ink" vignette>
      <div className="w-full max-w-[780px]">
        {/* ─── Chapter Header ─────────────────────────── */}
        <ChapterHeader label="CHAPTER 04" title="調查歷程" />

        {/* ─── Opening Statement ──────────────────────── */}
        <ScrollReveal>
          <p className="mb-8 font-narrative text-[clamp(1rem,2.5vw,1.15rem)] leading-9 text-paper-burnt">
            四十餘年間，林宅血案歷經七次正式調查。每一次，真相似乎觸手可及——
            每一次，都在體制的牆壁前停下腳步。
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mb-16 font-literary text-[0.95rem] leading-8 text-dust">
            從戒嚴時代的情治機關介入操控，到民主化後的檔案毀損與消極配合，
            林宅血案的調查歷程本身，就是一部國家如何系統性阻礙真相的紀錄。
          </p>
        </ScrollReveal>

        {/* ─── Year counter: 40+ ─────────────────────── */}
        <ScrollReveal delay={300}>
          <YearCounter year="40+" label="YEARS OF OBSTRUCTION" />
        </ScrollReveal>

        {/* ─── Section: Martial Law Era (1980) ────────── */}
        <ScrollReveal>
          <div className="mb-8 mt-16 border-b border-smoke pb-4">
            <h3 className="font-heading text-xs font-bold tracking-[0.3em] text-stone">
              壹、戒嚴時期之調查（1980）
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mb-12 font-narrative text-[0.9rem] leading-8 text-dust">
            案發翌日起，三個專案同時展開——表面上是傾全力偵辦，實則由國安局主導，
            將調查方向鎖定在「國家敵人」身上，有系統地將刑事偵查人員隔絕於關鍵情報之外。
          </p>
        </ScrollReveal>

        {earlyPhases.map((phase, i) => (
          <PhaseCard key={phase.id} phase={phase} index={i} />
        ))}

        {/* ─── Intelligence Agency Structure Diagram ──── */}
        <ScrollReveal>
          <div className="my-16 border border-smoke bg-void/60 p-6 sm:p-8">
            <h4 className="mb-6 text-center font-heading text-xs font-bold tracking-[0.3em] text-stone">
              情治機關指揮架構
            </h4>
            <div className="flex flex-col items-center gap-4 font-document text-xs leading-6">
              {/* Top level */}
              <div className="border border-blood-dark bg-blood-dark/20 px-6 py-2 text-center text-blood">
                國安局長 王永澍
                <div className="mt-1 text-[0.65rem] text-stone">
                  「集中會報、分工查證、統一研判」
                </div>
              </div>

              <div className="h-6 w-px bg-smoke" />

              {/* Dual track */}
              <div className="flex w-full max-w-md flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
                <div className="flex-1 border border-smoke bg-ash/40 px-4 py-2 text-center text-dust">
                  <span className="text-paper-burnt">對外</span>
                  <br />
                  「重大刑案偵辦」
                </div>
                <div className="flex-1 border border-blood-dark/50 bg-blood-dark/10 px-4 py-2 text-center text-blood/80">
                  <span className="text-blood">對內</span>
                  <br />
                  「政治涉嫌清查」
                </div>
              </div>

              <div className="h-6 w-px bg-smoke" />

              {/* Bottom level: three projects */}
              <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
                <div className="w-full border border-smoke/50 bg-ash/30 px-3 py-2 text-center text-dust sm:w-auto">
                  撥雲專案
                  <div className="text-[0.6rem] text-stone">刑事局｜134次會議</div>
                </div>
                <div className="w-full border border-blood-dark/40 bg-blood-dark/10 px-3 py-2 text-center text-blood/70 sm:w-auto">
                  三○七專案
                  <div className="text-[0.6rem] text-stone">國安局/警政署｜73次會議</div>
                </div>
                <div className="w-full border border-smoke/50 bg-ash/30 px-3 py-2 text-center text-dust sm:w-auto">
                  誠公專案
                  <div className="text-[0.6rem] text-stone">調查局｜清查黨外人士</div>
                </div>
              </div>

              {/* Blocked arrow */}
              <div className="mt-4 text-center">
                <div className="font-literary text-[0.8rem] text-blood/60">
                  ↑ 監控資訊被屏蔽 ↑
                </div>
                <div className="mt-1 text-[0.65rem] text-stone">
                  撥雲專案人員無法獲悉竊聽、監聽等監控所得資訊
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Key Document: 307 Intel ────────────────── */}
        <ScrollReveal>
          <div className="my-16 flex justify-center">
            <DocumentPage
              classification="甲一級"
              title="呈蔣經國總統之情報研判"
              stampText="機密"
              marginNote="69/4/8 三○七專案"
            >
              <p className="mb-4">
                嫌犯「可能係國民黨內鷹派的軍派人物」。
              </p>
              <p className="text-[0.8rem] text-smoke/80">
                ——三○七專案呈蔣經國總統之情報研判，民國69年4月8日。
                然而此偵查方向從未被執行。
              </p>
            </DocumentPage>
          </div>
        </ScrollReveal>

        {/* ─── Section: Post-Democratization ──────────── */}
        <ScrollReveal>
          <div className="mb-8 mt-24 border-b border-smoke pb-4">
            <h3 className="font-heading text-xs font-bold tracking-[0.3em] text-stone">
              貳、民主化後之重啟調查（1996—2018）
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mb-12 font-narrative text-[0.9rem] leading-8 text-dust">
            解嚴之後，歷屆政府多次重啟調查——然而年代久遠、檔案散佚、
            物證劣化、天災毀損，加上情治機關持續隱匿監控紀錄，
            每一次都無法取得突破。直到促轉會成立，方首度揭露系統性監控之事實。
          </p>
        </ScrollReveal>

        {laterPhases.map((phase, i) => (
          <PhaseCard key={phase.id} phase={phase} index={i} />
        ))}

        {/* ─── Investigation Timeline ─────────────────── */}
        <ScrollReveal>
          <div className="my-16">
            <h3 className="mb-8 font-heading text-xs font-bold tracking-[0.3em] text-stone">
              調查歷程年表
            </h3>
            <Timeline>
              {keyInvestigationEvents.map((event, i) => (
                <TimelineEvent
                  key={i}
                  year={event.dateROC}
                  title={event.description.slice(0, 30) + '⋯'}
                  description={event.description}
                  highlight={event.isKey}
                />
              ))}
            </Timeline>
          </div>
        </ScrollReveal>

        {/* ─── Obstruction Pattern Summary ─────────────── */}
        <ObstructionPattern />

        {/* ─── Key Document: 549 Volumes ──────────────── */}
        <ScrollReveal>
          <div className="my-16 flex justify-center">
            <DocumentPage
              title="檔案毀損紀錄"
              stampText="損毀"
              marginNote="90年9月 納莉颱風"
            >
              <p className="mb-4">
                撥雲專案歷年編纂之29冊文件、549卷以上之調查卷宗，
                因民國90年9月「納莉颱風」遭水淹浸毀壞——僅存約170卷。
              </p>
              <p className="text-[0.8rem] text-smoke/80">
                三分之二以上的調查紀錄，在一場颱風中永久消失。
                <br />
                而關鍵的電話監聽錄音帶，更早在案發後即遭國安局銷毀。
              </p>
            </DocumentPage>
          </div>
        </ScrollReveal>

        {/* ─── Conclusions from 促轉會 ────────────────── */}
        <ScrollReveal>
          <div className="mb-8 mt-24 border-b border-smoke pb-4">
            <h3 className="font-heading text-xs font-bold tracking-[0.3em] text-blood">
              參、促轉會之結論
            </h3>
          </div>
        </ScrollReveal>

        {conclusions.map((conclusion, i) => (
          <ScrollReveal key={conclusion.id} delay={i * 150}>
            <div className="mb-8 border-l-2 border-blood bg-ash/40 p-6 sm:p-8">
              <h4 className="mb-4 font-heading text-[clamp(0.95rem,2.5vw,1.1rem)] font-bold leading-7 text-paper-aged">
                {conclusion.title}
              </h4>
              <p className="font-literary text-[0.85rem] leading-8 text-dust">
                {conclusion.description}
              </p>
              <div className="mt-4 font-document text-[0.65rem] tracking-wider text-stone/60">
                出處：{conclusion.source}
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* ─── Final Key Document ─────────────────────── */}
        <ScrollReveal>
          <div className="my-16 flex justify-center">
            <DocumentPage
              classification="促轉會調查報告"
              title="結論"
              stampText="解密"
              marginNote="第三章 p.88"
            >
              <p className="mb-4 font-bold text-ink">
                威權統治當局涉入本案的嫌疑的確不容排除。
              </p>
              <p className="mb-4">
                在林宅被嚴密監控的情況下，兇手竟能趁林宅僅有稚齡雙胞胎在家之空檔，
                於光天化日的中午時分侵入林宅行兇，並逗留達80分鐘，然後全身而退。
              </p>
              <p>
                由如是犯罪情節而懷疑監控者與兇手有默契甚至合意，實屬合理。
              </p>
            </DocumentPage>
          </div>
        </ScrollReveal>

        {/* ─── Closing ────────────────────────────────── */}
        <ScrollReveal>
          <div className="mt-16 mb-8 text-center">
            <p className="font-literary text-[clamp(1rem,2.5vw,1.2rem)] leading-9 text-dust">
              唯有徹底揭露相關檔案，
              <br />
              方能完整還原歷史真相。
            </p>
            <p className="mt-8 font-document text-xs tracking-[0.2em] text-stone">
              ——促轉會報告 第三章 p.89
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
