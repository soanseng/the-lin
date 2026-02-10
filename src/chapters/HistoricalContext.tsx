import { Section } from '../components/layout/Section'
import { ChapterHeader } from '../components/layout/ChapterHeader'
import { ScrollReveal } from '../components/narrative/ScrollReveal'
import { Timeline } from '../components/timeline/Timeline'
import { TimelineEvent } from '../components/timeline/TimelineEvent'
import { preIncidentTimeline } from '../data/timeline'
import { politicalFigures, family } from '../data/characters'

/**
 * Chapter 2: 時代背景 (Historical Context)
 *
 * Establishes the political atmosphere of late-1970s Taiwan under martial law,
 * the rise of the opposition (黨外) movement, and the Kaohsiung Incident
 * (美麗島事件) that triggered mass arrests and military trials — setting the
 * stage for the Lin family massacre on February 28, 1980.
 */

// Political events leading to the massacre (美麗島事件 and its aftermath)
const politicalEvents = preIncidentTimeline.filter(
  (e) => e.category === 'political-context' || e.category === 'arrest-trial',
)

// Key political figures mentioned in context
const formosaMagDefendants = politicalFigures.filter((c) =>
  ['黃信介', '施明德', '姚嘉文', '張俊宏'].includes(c.name),
)

const linYiHsiung = family.find((c) => c.name === '林義雄')

export function HistoricalContext() {
  return (
    <Section id="historical-context" background="ink" vignette>
      <div className="w-full max-w-3xl">
        {/* Chapter header */}
        <ScrollReveal>
          <ChapterHeader
            label="CHAPTER 02"
            title="時代背景"
            labelColor="text-blood"
          />
        </ScrollReveal>

        {/* ── Martial Law Context ── */}
        <ScrollReveal className="mb-20">
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            1949年，國民政府撤退來台，宣布全島戒嚴。此後三十餘年，台灣在「動員戡亂時期」的名義下，言論自由受到嚴密管控，政治異議遭到壓制。黨禁、報禁、出境管制——威權體制以國家安全為名，建構了綿密的監控與鎮壓網絡。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-20" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            然而，1970年代的台灣正經歷深刻的社會變遷。1971年退出聯合國、1978年美國宣布與中華民國斷交——接連的外交挫敗，反而催生了本土意識的覺醒。民間開始出現要求民主改革的聲音，「黨外」運動逐漸成形。
          </p>
        </ScrollReveal>

        {/* ── Opposition Movement Rising ── */}
        <ScrollReveal className="mb-6">
          <h3 className="mb-4 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            黨外運動的興起
          </h3>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            1977年地方選舉中，無黨籍候選人大量當選，顯示民意對一黨獨大的不滿已無法忽視。1978年底的增額立委選舉中，黨外人士更進一步串連組織。余登發案與橋頭事件，成為台灣史上第一次政治示威遊行，震動了威權當局。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-20" delay={200}>
          <blockquote className="border-l-2 border-blood-dark py-2 pl-6">
            <p className="font-literary text-[clamp(0.9rem,2vw,1.05rem)] leading-loose text-paper-burnt">
              在高壓統治下，每一次公開的異議行動都可能招致牢獄之災。但人民對自由的渴望，已如地下伏流，終將衝破地表。
            </p>
          </blockquote>
        </ScrollReveal>

        {/* ── Formosa Magazine ── */}
        <ScrollReveal className="mb-6">
          <h3 className="mb-4 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            《美麗島》雜誌的誕生
          </h3>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            1979年8月，黃信介、施明德等人創辦《美麗島》雜誌（Formosa Magazine），以「推動新生事物」為宗旨，各地廣設服務處，實質上形成了準政黨的組織架構。雜誌發行量迅速攀升，黨外力量前所未有地凝聚。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-20" delay={200}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            這讓執政當局深感威脅。情治機關加強監控，滲透線民，蒐集情資，伺機打擊。一場大規模的鎮壓，只差一個「合適的」觸發點。
          </p>
        </ScrollReveal>

        {/* ── The Kaohsiung Incident ── */}
        <ScrollReveal className="mb-6">
          <h3 className="mb-4 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            <span className="text-blood">美麗島事件</span>
            <span className="ml-3 font-document text-sm text-stone">
              1979.12.10
            </span>
          </h3>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-paper-aged">
            1979年12月10日，國際人權日。《美麗島》雜誌在高雄舉辦大規模集會遊行，訴求民主與人權。數萬民眾到場響應。當局出動鎮暴部隊，以催淚瓦斯和警棍鎮壓。衝突中，有軍警假扮成民眾混入人群，挑動事端。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-20" delay={200}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            這場衝突，被官方定性為「叛亂」——這正是當局等待已久的藉口。一場針對黨外運動的全面清洗，就此展開。
          </p>
        </ScrollReveal>

        {/* ── Mass Arrests Section ── */}
        <ScrollReveal className="mb-6">
          <h3 className="mb-4 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            大逮捕
          </h3>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            美麗島事件後三天，警備總部以「涉嫌叛亂」為由，展開大規模拘捕行動。黃信介、施明德、張俊宏、姚嘉文、林義雄、陳菊、呂秀蓮、林弘宣——黨外菁英幾乎被一網打盡。
          </p>
        </ScrollReveal>

        {/* Key defendants cards */}
        <ScrollReveal className="mb-16" delay={200}>
          <div className="grid gap-4 sm:grid-cols-2">
            {formosaMagDefendants.map((figure) => (
              <div
                key={figure.name}
                data-reveal
                className="rounded border border-smoke bg-ash/50 p-4 transition-colors duration-300 hover:border-blood-dark"
              >
                <div className="mb-1 font-heading text-sm font-bold text-paper-aged">
                  {figure.name}
                </div>
                <p className="font-narrative text-sm leading-relaxed text-dust">
                  {figure.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Lin Yi-Hsiung highlight */}
        {linYiHsiung && (
          <ScrollReveal className="mb-20" delay={300}>
            <div className="rounded border-l-2 border-blood bg-ash/30 p-6">
              <div className="mb-2 font-heading text-[clamp(0.9rem,2vw,1rem)] font-bold text-blood">
                林義雄
              </div>
              <p className="font-narrative text-[clamp(0.9rem,2vw,1rem)] leading-relaxed text-paper-aged">
                {linYiHsiung.description}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* ── Surveillance ── */}
        <ScrollReveal className="mb-6">
          <h3 className="mb-4 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            監控的陰影
          </h3>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            被捕者身陷囹圄，但迫害並未止於當事人。情治機關的觸角伸向他們的家庭。《獵明專案》第五次協調會議明確指示：「竊聽工作請積極進行，並以張俊宏、姚嘉文、
            <span className="text-blood">林義雄</span>
            等三位住宅為優先。」
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-20" delay={200}>
          <div className="rounded border border-smoke bg-void/60 p-5">
            <div className="mb-2 font-document text-sm tracking-widest text-stone">
              獵明專案第五次協調會議紀錄 68年12月20日
            </div>
            <p className="font-document text-sm leading-loose text-paper-burnt">
              「竊聽工作請積極進行，並以張俊宏、姚嘉文、林義雄等三位住宅為優先。」
            </p>
            <div className="mt-3 font-document text-[0.75rem] text-stone">
              來源：促轉會報告 附錄1 p.92
            </div>
          </div>
        </ScrollReveal>

        {/* ── Military Trials ── */}
        <ScrollReveal className="mb-6">
          <h3 className="mb-4 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            軍法大審
          </h3>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            1980年2月20日，警備總部軍事檢察官正式起訴黃信介等八人。翌日起，調查庭逐一開庭。國際特赦組織派遣代表抵台關注，國際輿論施壓。當局選擇史無前例地公開審判——不是為了公正，而是為了向世界「展示」其司法程序。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-20" delay={200}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-paper-aged">
            然而，公開審判卻產生了反效果。被告們在法庭上的陳述，讓更多人認識到黨外運動的理念。林義雄在獄中遭受刑求，康寧祥親眼目睹其身上的傷痕。社會的同情與憤慨，正在醞釀。
          </p>
        </ScrollReveal>

        {/* ── Event Timeline ── */}
        <ScrollReveal className="mb-8">
          <h3 className="mb-8 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            關鍵事件時序
          </h3>
        </ScrollReveal>

        <div className="mb-20">
          <Timeline>
            {politicalEvents.map((event) => (
              <TimelineEvent
                key={`${event.date}-${event.description.slice(0, 20)}`}
                year={event.dateROC}
                title={event.description.slice(0, event.description.indexOf('。') + 1) || event.description}
                description={
                  event.description.includes('。')
                    ? event.description.slice(event.description.indexOf('。') + 1)
                    : ''
                }
                highlight={event.isKey}
              />
            ))}
          </Timeline>
        </div>

        {/* ── Closing: The Atmosphere Before the Massacre ── */}
        <ScrollReveal className="mb-6">
          <h3 className="mb-4 font-heading text-[clamp(1.2rem,3vw,1.6rem)] font-bold text-paper-aged">
            風暴前夕
          </h3>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={100}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-dust">
            1980年2月27日——案發前一天。林義雄的辯護律師張政雄、妻子方素敏和母親林游阿妹前往軍法處探視林義雄。那是一家人最後一次團聚。當晚，林宅的電話被完整監聽。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-12" delay={200}>
          <p className="font-narrative text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-paper-aged">
            隔天就是2月28日——二二八事件三十三週年紀念日。同時也是美麗島軍事審判首次公開審訊之日。全世界的目光都在注視著台灣。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mb-4 text-center font-narrative text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed text-dust">
            就在這一天，在情治機關的嚴密監控之下，
          </p>
          <p className="text-center font-narrative text-[clamp(1.1rem,3vw,1.4rem)] font-bold leading-relaxed text-blood">
            林義雄的母親和一對七歲雙胞胎女兒遭到殺害。
          </p>
          <p className="mt-4 text-center font-narrative text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed text-dust">
            長女林奐均身中數刀，重傷存活。
          </p>
          <p className="mt-8 text-center font-document text-sm tracking-[0.3em] text-stone">
            至今，兇手不明。
          </p>
        </ScrollReveal>
      </div>
    </Section>
  )
}
