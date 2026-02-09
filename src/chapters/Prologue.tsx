import { Section } from '../components/layout/Section'
import { ScrollReveal } from '../components/narrative/ScrollReveal'

export function Prologue() {
  return (
    <article id="prologue">
      {/* ═══ Section 1: The Date ═══ */}
      <Section id="prologue-date" background="void" vignette>
        <div className="text-center">
          <div
            className="font-heading text-sm font-light tracking-[0.5em] text-stone opacity-0"
            style={{ animation: 'fadeUp 2s ease 0.5s forwards' }}
          >
            民國六十九年
          </div>
          <h1
            className="font-narrative text-[clamp(2.5rem,8vw,5rem)] font-black leading-tight tracking-[0.15em] text-paper-aged opacity-0"
            style={{
              animation: 'fadeUp 2.5s ease 1.5s forwards',
              textShadow: '0 0 80px rgba(232, 220, 196, 0.1)',
            }}
          >
            二月二十八日
          </h1>
          <p
            className="mt-8 font-literary text-[clamp(0.85rem,2vw,1.1rem)] tracking-[0.1em] text-stone opacity-0"
            style={{ animation: 'fadeUp 2s ease 3s forwards' }}
          >
            美麗島事件軍法審判首度公開審訊之日
          </p>
          <p
            className="mt-4 font-document text-xs tracking-[0.2em] text-stone opacity-0"
            style={{ animation: 'fadeUp 2s ease 3.5s forwards' }}
          >
            FEBRUARY 28, 1980
          </p>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
          style={{ animation: 'fadeUp 1s ease 5s forwards' }}
        >
          <span className="mx-auto block h-10 w-px bg-gradient-to-b from-transparent to-dust" />
          <small className="mt-2 block font-heading text-[0.6rem] tracking-[0.3em] text-stone">
            SCROLL
          </small>
        </div>
      </Section>

      {/* ═══ Section 2: The Date's Weight — 228 Context ═══ */}
      <Section id="prologue-context" background="void" vignette>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="font-literary text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed text-dust">
              這一天，承載著雙重的重量。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="my-12 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-stone" />
              <span className="font-document text-[0.65rem] tracking-[0.4em] text-stone">
                二二八
              </span>
              <span className="h-px w-12 bg-stone" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              三十三年前的這一天，一場屠殺改變了臺灣的命運。
              二二八事件的傷痕尚未癒合，戒嚴令下的白色恐怖仍籠罩著島嶼。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="mt-8 font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              而此刻——一九八〇年的二月二十八日——另一場審判正要開始。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="mt-12 border-l-2 border-blood-dark pl-6 text-left">
              <p className="font-narrative text-[clamp(0.9rem,1.8vw,1.05rem)] leading-[2] text-paper-aged">
                前一年十二月，《美麗島》雜誌社在高雄舉辦國際人權日集會遊行，
                遭到軍警鎮壓。隨後，林義雄、黃信介、施明德等八人
                以「涉嫌叛亂」之名被逮捕起訴。
              </p>
              <p className="mt-2 font-document text-[0.7rem] tracking-widest text-stone">
                ——促轉會調查報告 附錄1
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <p className="mt-12 font-literary text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed text-dust">
              今天，是軍法大審首度公開審訊的日子。
              <br />
              全世界的目光，都注視著新店軍法處。
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ═══ Section 3: Morning — 方素敏 Leaves ═══ */}
      <Section id="prologue-morning" background="ink" vignette>
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="font-document text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-[0.2em] text-smoke">
                07:00
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              清晨的臺北市信義路三段。
              林宅裡，一天照常開始。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-6 font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              林義雄的母親——<span className="text-paper-aged">林游阿妹</span>——
              走到對面的雜貨店買鹽，和老闆娘許黃卵打了聲招呼。
              前一晚留宿的田秋堇與蕭裕珍也陸續起身。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="my-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-stone/30" />
              <span className="font-document text-[0.65rem] tracking-[0.4em] text-stone">
                07:15
              </span>
              <span className="h-px flex-1 bg-stone/30" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <p className="font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              <span className="text-paper-aged">方素敏</span>——林義雄的妻子——
              已經出門了。她先在廣州街省議會賓館與省議員余陳月瑛會面，
              隨後趕往潮州街拜訪。丈夫被關押在軍法處，
              審判在即，她必須為他奔走。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <div className="my-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-stone/30" />
              <span className="font-document text-[0.65rem] tracking-[0.4em] text-stone">
                08:00
              </span>
              <span className="h-px flex-1 bg-stone/30" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <p className="font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              田秋堇離開林宅，前往張俊宏宅，再趕往新店軍法處旁聽。
              蕭裕珍也出門了。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1200}>
            <p className="mt-8 font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-aged">
              上午九時三十分，方素敏接到田秋堇的電話，
              決定親赴軍法處。她告訴婆婆林游阿妹——
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1400}>
            <blockquote className="my-8 border-l-2 border-incense/40 py-2 pl-6">
              <p className="font-literary text-[clamp(1.05rem,2.5vw,1.3rem)] leading-relaxed text-incense">
                「我要去軍法處，請你照看小孩。」
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={1500}>
            <p className="mt-4 font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              說完，方素敏離開了家。
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ═══ Section 4: The House Left Behind ═══ */}
      <Section id="prologue-emptied" background="void" vignette>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="font-literary text-[clamp(1.1rem,3vw,1.5rem)] leading-relaxed text-dust">
              此刻，信義路三段的林宅裡，
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-4 font-literary text-[clamp(1.1rem,3vw,1.5rem)] leading-relaxed text-dust">
              只剩下——
            </p>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className="mt-12 space-y-6">
              <p className="font-narrative text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed text-paper-aged">
                六十歲的老母親，<span className="text-paper-burnt">林游阿妹</span>。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="mt-4">
              <p className="font-narrative text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed text-paper-aged">
                七歲的雙胞胎女兒，
                <span className="text-paper-burnt">林亮均</span>
                、
                <span className="text-paper-burnt">林亭均</span>。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1400}>
            <div className="mt-16 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-blood-dark/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-blood-dark/60" />
              <span className="h-px w-16 bg-blood-dark/40" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1700}>
            <p className="mt-16 font-narrative text-[clamp(0.9rem,1.8vw,1.05rem)] leading-[2] text-stone">
              林義雄被關在軍法處看守所。
              <br />
              方素敏正趕往新店。
              <br />
              田秋堇在法庭旁聽席。
              <br />
              蕭裕珍已經出門。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2000}>
            <p className="mt-12 font-literary text-[clamp(1.1rem,3vw,1.4rem)] leading-relaxed text-paper-aged">
              所有人都離開了。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2300}>
            <p className="mt-2 font-literary text-[clamp(0.9rem,2vw,1.1rem)] leading-relaxed text-dust">
              而他們不知道的是——
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2500}>
            <p className="mt-8 font-document text-[0.7rem] tracking-[0.3em] text-stone">
              情治機關對林宅的電話監聽仍在持續記錄中。
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ═══ Section 5: The Hook ═══ */}
      <Section id="prologue-hook" background="void" vignette>
        <div className="mx-auto max-w-xl text-center">
          <ScrollReveal>
            <p className="font-document text-[clamp(1.5rem,5vw,2.5rem)] font-bold tracking-[0.15em] text-smoke">
              11:09
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-8 font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              毛清芬從日本打來電話，林游阿妹接聽。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <p className="mt-4 font-narrative text-[clamp(0.95rem,2vw,1.1rem)] leading-[2] text-paper-burnt">
              這是她生前最後一通有紀錄的通話。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1100}>
            <div className="mt-16 flex items-center justify-center gap-4">
              <span className="h-px w-20 bg-blood-dark" />
              <span className="h-2 w-2 rounded-full bg-blood" />
              <span className="h-px w-20 bg-blood-dark" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1500}>
            <p className="mt-16 font-literary text-[clamp(1.15rem,3vw,1.5rem)] leading-relaxed text-paper-aged">
              然後，沉默降臨了這棟房子。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1900}>
            <p className="mt-12 font-narrative text-[clamp(0.85rem,1.8vw,1rem)] leading-[2] text-dust">
              中午十二時，家博從國際學舍致電林宅。
              <br />
              七歲的林亭均接起電話，告訴他：
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2200}>
            <blockquote className="my-8 py-2">
              <p className="font-literary text-[clamp(1.1rem,3vw,1.4rem)] leading-relaxed text-incense">
                「媽媽跟阿嬤都不在家。」
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={2600}>
            <p className="mt-8 font-narrative text-[clamp(0.85rem,1.8vw,0.95rem)] leading-[2] text-stone">
              十二時十分，方素敏從餐廳三度撥打家中電話。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2900}>
            <p className="mt-2 font-narrative text-[clamp(1rem,2.5vw,1.25rem)] leading-[2] text-paper-aged">
              無人接聽。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3300}>
            <p className="mt-20 font-literary text-[clamp(1.2rem,3.5vw,1.7rem)] font-bold leading-relaxed text-paper-aged"
              style={{ textShadow: '0 0 60px rgba(153, 27, 27, 0.15)' }}
            >
              那棟房子裡，究竟發生了什麼事？
            </p>
          </ScrollReveal>

          {/* Scroll hint to next chapter */}
          <ScrollReveal delay={3600}>
            <div className="mt-20">
              <span className="mx-auto block h-12 w-px bg-gradient-to-b from-transparent to-blood-dark" />
              <p className="mt-4 font-heading text-[0.6rem] tracking-[0.3em] text-stone">
                繼續閱讀
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </article>
  )
}
