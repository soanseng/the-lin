import { Section } from '../components/layout/Section'
import { ChapterHeader } from '../components/layout/ChapterHeader'
import { DocumentPage } from '../components/narrative/DocumentPage'
import { Redacted } from '../components/narrative/Redacted'
import { ScrollReveal } from '../components/narrative/ScrollReveal'
import { SourceRef } from '../components/narrative/SourceRef'
import { SurveillanceDecryption } from '../components/interactive/SurveillanceDecryption'
import {
  agencies,
  methods,
  documents,
  coverUpActions,
  surveillanceStats,
  surveillanceConclusion,
} from '../data/surveillance'

// ─── Helpers ─────────────────────────────────────────────────

function SignificanceBadge({ level }: { level: 'critical' | 'major' }) {
  const styles =
    level === 'critical'
      ? 'border-seal-red/60 bg-seal-red/10 text-seal-red'
      : 'border-blood/40 bg-blood/10 text-blood'
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 font-document text-[0.6rem] uppercase tracking-[0.15em] ${styles}`}
    >
      {level}
    </span>
  )
}

// ─── Agency Card ─────────────────────────────────────────────

function AgencyCard({
  agency,
  index,
}: {
  agency: (typeof agencies)[number]
  index: number
}) {
  return (
    <ScrollReveal delay={index * 120}>
      <div className="group relative border border-smoke/60 bg-ash/60 p-6 transition-colors duration-500 hover:border-blood/40 hover:bg-ash">
        {/* Agency name */}
        <div className="mb-1 font-heading text-[1.3rem] font-black tracking-wide text-paper-aged">
          {agency.name}
        </div>
        <div className="mb-4 font-document text-[0.65rem] tracking-[0.1em] text-stone">
          {agency.nameEn}
        </div>

        {/* Description */}
        <p className="mb-4 font-narrative text-[0.85rem] leading-7 text-dust">
          {agency.description}
        </p>

        {/* Methods */}
        <div className="flex flex-wrap gap-2">
          {agency.methods.map((method) => (
            <span
              key={method}
              className="rounded-sm border border-blood-dark/30 bg-blood-dark/10 px-2 py-0.5 font-document text-[0.6rem] tracking-wide text-blood"
            >
              {method}
            </span>
          ))}
        </div>

        <SourceRef text={agency.source} />
      </div>
    </ScrollReveal>
  )
}

// ─── Method Card ─────────────────────────────────────────────

function MethodCard({
  method,
  index,
}: {
  method: (typeof methods)[number]
  index: number
}) {
  return (
    <ScrollReveal delay={index * 150}>
      <div className="border-l-2 border-blood-dark/60 bg-ink/80 px-6 py-5">
        <div className="mb-1 font-heading text-[1rem] font-bold text-paper-aged">
          {method.name}
        </div>
        <div className="mb-3 font-document text-[0.6rem] tracking-[0.1em] text-stone">
          {method.nameEn}
        </div>
        <p className="mb-4 font-narrative text-[0.82rem] leading-7 text-dust">
          {method.description}
        </p>

        {/* Evidence list */}
        <ul className="space-y-2">
          {method.evidence.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 font-document text-[0.75rem] leading-6 text-stone"
            >
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blood/60" />
              {item}
            </li>
          ))}
        </ul>

        <SourceRef text={method.source} />
      </div>
    </ScrollReveal>
  )
}

// ─── Cover-Up Timeline Entry ────────────────────────────────

function CoverUpEntry({
  action,
  index,
}: {
  action: (typeof coverUpActions)[number]
  index: number
}) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="relative border-l-2 border-blood/40 py-4 pl-6">
        {/* Timeline dot */}
        <div className="absolute left-[-5px] top-6 h-2 w-2 rounded-full bg-blood shadow-[0_0_8px_rgba(153,27,27,0.5)]" />

        <div className="mb-1 flex flex-wrap items-center gap-3">
          <span className="font-document text-[0.7rem] tracking-[0.1em] text-incense">
            {action.dateROC}
          </span>
          <SignificanceBadge level={action.significance} />
        </div>

        <p className="font-narrative text-[0.85rem] leading-7 text-paper-aged/90">
          {action.description}
        </p>

        <SourceRef text={action.source} />
      </div>
    </ScrollReveal>
  )
}

// ─── Stat Block ─────────────────────────────────────────────

function StatBlock({
  number,
  suffix,
  label,
  delay,
}: {
  number: number | string
  suffix?: string
  label: string
  delay: number
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="border border-smoke/40 bg-ink/60 p-6 text-center">
        <div className="font-document text-[clamp(2rem,6vw,3rem)] font-black text-seal-red">
          {number}
          {suffix && (
            <span className="text-[0.5em] text-blood">{suffix}</span>
          )}
        </div>
        <div className="mt-2 font-heading text-[0.7rem] leading-5 tracking-wide text-dust">
          {label}
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── Main Chapter Component ─────────────────────────────────

export function SurveillanceTruth() {
  return (
    <>
      {/* ============================================
          SECTION 1: Chapter Title
          ============================================ */}
      <Section id="surveillance-truth" background="void" vignette>
        <ChapterHeader label="CHAPTER 05" title="監控真相" />

        <ScrollReveal>
          <p className="max-w-[560px] text-center font-literary text-[clamp(0.85rem,2vw,1.05rem)] leading-8 tracking-wide text-dust">
            促轉會調查首度揭露：<Redacted>案發前，至少四個情治機關同時監控林宅</Redacted>。
            他們知道一切。他們聽見一切。然後他們銷毀一切。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-12 font-document text-[0.65rem] tracking-[0.2em] text-stone">
            DECLASSIFIED — TRANSITIONAL JUSTICE COMMISSION, 2020
          </p>
        </ScrollReveal>
      </Section>

      {/* ============================================
          SECTION 2: The Four Agencies
          ============================================ */}
      <Section id="surveillance-agencies" background="ink">
        <div className="w-full max-w-[780px]">
          <ScrollReveal>
            <h3 className="mb-2 font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              SURVEILLANCE APPARATUS
            </h3>
            <h4 className="mb-4 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              四個情治機關，同步監控一個家庭
            </h4>
            <p className="mb-12 max-w-[560px] font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-dust">
              美麗島事件後，<Redacted>國安局、警總、調查局、憲兵司令部</Redacted>四大情治機關聯合對林義雄及其家屬進行全方位監控。
              每一通電話、每一次訪客、每一句私語，都在國家機器的耳目之下。
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {agencies.map((agency, i) => (
              <AgencyCard key={agency.name} agency={agency} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          SECTION 3: Surveillance Methods
          ============================================ */}
      <Section id="surveillance-methods" background="void" vignette>
        <div className="w-full max-w-[640px]">
          <ScrollReveal>
            <h3 className="mb-2 font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              METHODS OF CONTROL
            </h3>
            <h4 className="mb-4 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              監控手段
            </h4>
            <p className="mb-12 font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-dust">
              情治機關對林宅之監控，已達<Redacted>鉅細靡遺</Redacted>之程度。
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {methods.map((method, i) => (
              <MethodCard key={method.name} method={method} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          SECTION 4: Key Declassified Documents
          ============================================ */}
      <Section id="surveillance-documents" background="ash">
        <div className="w-full max-w-[780px]">
          <ScrollReveal>
            <h3 className="mb-2 font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              DECLASSIFIED EVIDENCE
            </h3>
            <h4 className="mb-12 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              解密檔案
            </h4>
          </ScrollReveal>

          <div className="space-y-10">
            {documents.map((doc, i) => (
              <ScrollReveal key={doc.title} delay={i * 120}>
                <div className="mx-auto">
                  <DocumentPage
                    stampText="解密"
                    classification={doc.agency}
                    title={doc.title}
                    marginNote={doc.archiveRef}
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="font-document text-[0.7rem] tracking-[0.1em] text-smoke">
                        {doc.dateROC}
                      </span>
                      {doc.figureRef && (
                        <span className="font-document text-[0.6rem] tracking-wide text-stone">
                          ({doc.figureRef})
                        </span>
                      )}
                    </div>

                    <p className="font-narrative text-[0.85rem] leading-8 text-smoke">
                      {doc.description}
                    </p>

                    <SourceRef text={doc.source} />
                  </DocumentPage>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          SECTION 4.5: Interactive Decryption
          ============================================ */}
      <Section id="surveillance-decryption" background="void" vignette>
        <div className="w-full max-w-[780px]">
          <ScrollReveal>
            <h3 className="mb-2 text-center font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              INTERACTIVE — 互動體驗
            </h3>
            <h4 className="mb-4 text-center font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              監聽解密
            </h4>
            <p className="mb-12 text-center font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-dust">
              以下為促轉會首次揭露之六份關鍵監聽紀錄。<br />
              點擊黑色遮蔽區域，逐一解密被掩蓋四十年的真相。
            </p>
          </ScrollReveal>

          <SurveillanceDecryption />
        </div>
      </Section>

      {/* ============================================
          SECTION 5: The Day the Guards Vanished
          — The most horrifying document page
          ============================================ */}
      <Section id="surveillance-day-of" background="void" vignette>
        <div className="w-full max-w-[640px]">
          <ScrollReveal>
            <DocumentPage
              stampText="機密"
              classification="極機密"
              title="案發當日：監控人員去向"
              marginNote="69年2月28日"
            >
              <p className="mb-6 font-narrative text-[0.85rem] leading-8 text-smoke">
                警總保安處組長許覺民證實——
              </p>

              <blockquote className="mb-6 border-l-2 border-blood/60 bg-blood-dark/5 px-5 py-4">
                <p className="font-literary text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-smoke">
                  案發前在林宅附近設有「戒護」人員看護，但案發當日該等人員恰被
                  <Redacted>「調至軍法處」</Redacted>。
                </p>
              </blockquote>

              <p className="mb-6 font-narrative text-[0.85rem] leading-8 text-smoke">
                同時，案發當日之電話概要表列出32通電話，卻<Redacted>刻意漏列3通最關鍵通話</Redacted>——嫌犯致電104查號台、嫌犯致電金琴西餐廳、家博中午致電林宅。
              </p>

              <p className="font-narrative text-[0.85rem] leading-8 text-smoke">
                後經專案獨立發現金琴線索，警總才補提供4通，但<Redacted>仍隱瞞家博通話紀錄</Redacted>。
              </p>

              <SourceRef text="監察院糾正案文 pp.16, 21" />
            </DocumentPage>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          SECTION 6: Cover-Up Timeline
          ============================================ */}
      <Section id="surveillance-coverup" background="ink">
        <div className="w-full max-w-[640px]">
          <ScrollReveal>
            <h3 className="mb-2 font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              INSTITUTIONAL DESTRUCTION
            </h3>
            <h4 className="mb-4 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              系統性滅證
            </h4>
            <p className="mb-12 font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-dust">
              以下為情治機關<Redacted>系統性阻撓偵查、銷毀證據</Redacted>之時序紀錄。
              每一筆操作都指向同一個結論：有人不希望真相被發現。
            </p>
          </ScrollReveal>

          <div className="space-y-0">
            {coverUpActions.map((action, i) => (
              <CoverUpEntry key={i} action={action} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          SECTION 7: The Tapes — Document highlight
          ============================================ */}
      <Section id="surveillance-tapes" background="void" vignette>
        <div className="w-full max-w-[640px]">
          <ScrollReveal>
            <DocumentPage
              stampText="銷毀"
              classification="極機密"
              title="監聽錄音帶之矛盾"
            >
              <p className="mb-4 font-narrative text-[0.85rem] leading-8 text-smoke">
                69年3月10日——
              </p>

              <div className="mb-6 space-y-4">
                <div className="border border-smoke/40 bg-void/30 p-4">
                  <div className="mb-1 font-document text-[0.6rem] tracking-[0.15em] text-blood">
                    國安局聲稱
                  </div>
                  <p className="font-literary text-[0.85rem] leading-7 text-smoke">
                    監聽錄音帶<Redacted>「已沖掉」</Redacted>（已銷毀），
                    監錄人員「不知林宅發生命案」。
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <span className="font-document text-[0.7rem] tracking-[0.2em] text-blood">
                    VS.
                  </span>
                </div>

                <div className="border border-smoke/40 bg-void/30 p-4">
                  <div className="mb-1 font-document text-[0.6rem] tracking-[0.15em] text-incense">
                    警總支援小組紀錄
                  </div>
                  <p className="font-literary text-[0.85rem] leading-7 text-smoke">
                    同日記載<Redacted>「錄音帶均已保留」</Redacted>。
                  </p>
                </div>
              </div>

              <p className="font-narrative text-[0.85rem] leading-8 text-smoke">
                兩份同日文件，完全矛盾。
                國安局同時限制僅刑事局長曹極或台北市警局副局長林永鴻得查詢錄音——
                <Redacted>他們在保護什麼？</Redacted>
              </p>

              <SourceRef text="監察院糾正案文 p.20" />
            </DocumentPage>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          SECTION 8: Suppression of Evidence
          — Composite sketch blocked
          ============================================ */}
      <Section id="surveillance-sketch" background="ink">
        <div className="w-full max-w-[640px]">
          <ScrollReveal>
            <DocumentPage
              stampText="解密"
              classification="三○七會報"
              title="嫌犯畫像之封鎖"
              marginNote="69年3月12日"
            >
              <p className="mb-6 font-narrative text-[0.85rem] leading-8 text-smoke">
                偵查人員自3月4日起，<Redacted>三度</Redacted>建議公布嫌犯模擬畫像。
              </p>

              <p className="mb-6 font-narrative text-[0.85rem] leading-8 text-smoke">
                三○七會報一再拒絕，最終僅准發布文字描述之「凶嫌年貌描述表」——
                在沒有影像的時代，這等同於<Redacted>取消通緝</Redacted>。
              </p>

              <p className="font-narrative text-[0.85rem] leading-8 text-smoke">
                嚴重延誤偵查時效。嫌犯畫像被壓了八天——在命案偵查的黃金72小時早已過去之後。
              </p>

              <SourceRef text="監察院糾正案文 pp.17-18" />
            </DocumentPage>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          SECTION 9: Statistics
          ============================================ */}
      <Section id="surveillance-stats" background="void" vignette>
        <div className="w-full max-w-[780px]">
          <ScrollReveal>
            <h3 className="mb-2 text-center font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              BY THE NUMBERS
            </h3>
            <h4 className="mb-12 text-center font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              數字裡的恐怖
            </h4>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <StatBlock
              number={surveillanceStats.preIncidentFiles}
              label="案發前監控檔案"
              delay={0}
            />
            <StatBlock
              number={surveillanceStats.postIncidentFiles}
              label="案發後監控檔案"
              delay={100}
            />
            <StatBlock
              number={surveillanceStats.funeralMonitoringFiles}
              label="喪禮監控檔案"
              delay={200}
            />
            <StatBlock
              number={surveillanceStats.kaohsiungIncidentFiles}
              label="美麗島人士監控檔案"
              delay={300}
            />
            <StatBlock
              number={surveillanceStats.presbyterianChurchFiles}
              label="長老教會調查檔案"
              delay={400}
            />
            <StatBlock
              number={`${surveillanceStats.nsbClassifiedFiles}+`}
              label="國安局至今仍列永久機密之檔案"
              delay={500}
            />
          </div>

          <ScrollReveal delay={700}>
            <div className="mt-8 text-center">
              <SourceRef text={surveillanceStats.source} />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          SECTION 10: Conclusion
          ============================================ */}
      <Section id="surveillance-conclusion" background="ink">
        <div className="w-full max-w-[600px]">
          <ScrollReveal>
            <DocumentPage
              stampText="結論"
              classification="促轉會調查報告"
              title="第二章結論"
            >
              <p className="font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-smoke">
                {surveillanceConclusion.summary}
              </p>

              <SourceRef text={surveillanceConclusion.source} />
            </DocumentPage>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-16 text-center font-literary text-[clamp(0.9rem,2.5vw,1.15rem)] leading-9 tracking-wide text-dust">
              他們監聽了每一通電話。<br />
              他們在屋內裝了竊聽器。<br />
              他們在門外派了人。<br />
              <span className="text-blood">然後，在血案發生的那一天，所有人都不在了。</span>
            </p>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
