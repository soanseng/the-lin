import { Section } from '../components/layout/Section'
import { ChapterHeader } from '../components/layout/ChapterHeader'
import { ScrollReveal } from '../components/narrative/ScrollReveal'

// ─── Data ───────────────────────────────────────────────────

const sourceDocuments = [
  {
    title: '促轉會調查報告',
    titleEn: 'Transitional Justice Commission Report',
    description:
      '促進轉型正義委員會針對林宅血案之完整調查報告，首度揭露情治機關監控與系統性滅證。',
    filename: 'https://drive.google.com/file/d/1AE66o-yHOZOlPEMxf1EHuVTtZcCC4JYK/view?usp=sharing',
    icon: '\u{1F4DC}', // used as alt-text only, not rendered
  },
  {
    title: '高檢署偵查報告',
    titleEn: 'Supreme Prosecutors Office Report',
    description:
      '臺灣高等檢察署重啟調查偵查報告，涵蓋林宅血案與陳文成命案。',
    filename: '林宅血案、陳文成命案重啟調查偵查報告.pdf',
  },
  {
    title: '監察院糾正案文',
    titleEn: 'Control Yuan Corrective Action',
    description:
      '監察院針對情治機關阻撓偵查、銷毀證據之糾正案文。',
    filename: '監112內正0004.pdf',
  },
]

const transitionalJusticeLinks = [
  {
    title: '行政院人權及轉型正義處',
    url: 'https://www.ey.gov.tw/tjb/A699EA3CE66CF4CF',
    description: '促轉會於2022年解散後，轉型正義業務由行政院人權及轉型正義處接續推動',
  },
  {
    title: '國家人權博物館',
    url: 'https://www.nhrm.gov.tw/',
    description: '白色恐怖歷史常設展覽與教育資源',
  },
  {
    title: '台灣民間真相與和解促進會',
    url: 'https://www.taiwantrc.org/',
    description: '民間推動歷史真相與社會和解',
  },
]

// ─── Action Card ────────────────────────────────────────────

function ActionCard({
  number,
  title,
  titleEn,
  children,
  delay = 0,
  accent = 'incense',
}: {
  number: string
  title: string
  titleEn: string
  children: React.ReactNode
  delay?: number
  accent?: 'incense' | 'blood' | 'paper-aged'
}) {
  const borderColor =
    accent === 'incense'
      ? 'border-incense/40 hover:border-incense/70'
      : accent === 'blood'
        ? 'border-blood/40 hover:border-blood/60'
        : 'border-paper-aged/30 hover:border-paper-aged/50'

  const numberColor =
    accent === 'incense'
      ? 'text-incense'
      : accent === 'blood'
        ? 'text-blood'
        : 'text-paper-aged'

  return (
    <ScrollReveal delay={delay}>
      <div
        className={`group relative border-l-2 bg-ink/60 p-6 transition-all duration-500 sm:p-8 ${borderColor}`}
      >
        <div
          className={`mb-1 font-document text-[0.6rem] tracking-[0.25em] ${numberColor}`}
        >
          {number}
        </div>
        <h4 className="mb-1 font-heading text-[clamp(1.05rem,2.5vw,1.2rem)] font-bold leading-[1.5] text-paper-aged">
          {title}
        </h4>
        <div className="mb-5 font-document text-[0.6rem] tracking-[0.1em] text-stone">
          {titleEn}
        </div>
        {children}
      </div>
    </ScrollReveal>
  )
}

// ─── Document Link ──────────────────────────────────────────

function DocumentLink({
  doc,
  index,
}: {
  doc: (typeof sourceDocuments)[number]
  index: number
}) {
  return (
    <ScrollReveal delay={index * 100}>
      <a
        href={doc.filename}
        target="_blank"
        rel="noopener noreferrer"
        className="group block min-h-[44px] border border-smoke/40 bg-ash/40 p-5 transition-all duration-300 hover:border-incense/40 hover:bg-ash/80"
      >
        <div className="mb-1 font-heading text-[0.95rem] font-bold text-paper-aged transition-colors group-hover:text-incense">
          {doc.title}
        </div>
        <div className="mb-3 font-document text-[0.6rem] tracking-[0.1em] text-stone">
          {doc.titleEn}
        </div>
        <p className="font-narrative text-[0.8rem] leading-7 text-dust">
          {doc.description}
        </p>
        <div className="mt-3 font-document text-[0.6rem] tracking-[0.15em] text-incense/70 transition-colors group-hover:text-incense">
          PDF &rarr;
        </div>
      </a>
    </ScrollReveal>
  )
}

// ─── External Link ──────────────────────────────────────────

function ExternalLink({
  link,
  index,
}: {
  link: (typeof transitionalJusticeLinks)[number]
  index: number
}) {
  return (
    <ScrollReveal delay={index * 120}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block min-h-[44px] border-l border-smoke/40 py-3 pl-5 transition-all duration-300 hover:border-incense/40"
      >
        <div className="font-heading text-[0.9rem] font-bold text-paper-aged transition-colors group-hover:text-incense">
          {link.title}
        </div>
        <p className="mt-1 font-narrative text-[0.78rem] leading-6 text-dust">
          {link.description}
        </p>
      </a>
    </ScrollReveal>
  )
}

// ─── Share Button ───────────────────────────────────────────

function ShareLink({
  platform,
  href,
  delay = 0,
}: {
  platform: string
  href: string
  delay?: number
}) {
  return (
    <ScrollReveal delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block min-h-[44px] border border-smoke/60 bg-ink/60 px-5 py-3 font-heading text-[0.75rem] tracking-[0.15em] text-dust transition-all duration-300 hover:border-incense/50 hover:text-incense active:text-incense"
      >
        {platform}
      </a>
    </ScrollReveal>
  )
}

// ─── Main Chapter Component ─────────────────────────────────

const siteUrl = 'https://soanseng.github.io/the-lin'
const siteTitle = '林宅血案——四十年未解的政治謀殺'

const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteTitle)}&url=${encodeURIComponent(siteUrl)}`
const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`

export function CallToAction() {
  return (
    <>
      {/* ============================================
          SECTION 1: Chapter Title
          ============================================ */}
      <Section id="call-to-action" background="ash">
        <ChapterHeader label="CHAPTER 07" title="行動呼籲" labelColor="text-incense" />

        <ScrollReveal>
          <p className="max-w-[560px] text-center font-literary text-[clamp(0.85rem,2vw,1.05rem)] leading-8 tracking-wide text-dust">
            真相不會自己浮現。
            <br />
            它需要被閱讀、被記住、被傳遞。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-incense/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-incense/60" />
            <span className="h-px w-12 bg-incense/30" />
          </div>
        </ScrollReveal>
      </Section>

      {/* ============================================
          SECTION 2: Why This Site Exists
          ============================================ */}
      <Section id="cta-why" background="ink">
        <div className="w-full max-w-[640px]">
          <ScrollReveal>
            <h3 className="mb-2 font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              WHY THIS SITE EXISTS
            </h3>
            <h4 className="mb-4 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              為什麼做這個網站
            </h4>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mb-6 font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-dust">
              二〇二四年，一部未經家屬授權的電影聲稱改編自林宅血案。
              影片扭曲歷史，以聳動手法消費受害者家屬的傷痛，引發社會爭議。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mb-6 font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-dust">
              然而，真正的調查報告——由促轉會、高檢署、監察院三個機關歷經數十年調查的成果——
              卻鮮少有人完整閱讀。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="border-l-2 border-incense/40 bg-ash/40 px-6 py-5">
              <p className="font-literary text-[clamp(0.9rem,2vw,0.95rem)] leading-[2] text-paper-aged">
                我們相信：對抗歷史扭曲最好的方式，不是憤怒，而是讓更多人讀到原始資料。
              </p>
              <p className="mt-4 font-literary text-[clamp(0.9rem,2vw,0.95rem)] leading-[2] text-paper-aged">
                這個網站的每一句話，都來自公開的政府調查文件。
                沒有虛構，沒有推測，只有檔案裡的事實。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <p className="mt-8 font-narrative text-[clamp(0.85rem,2vw,0.9rem)] leading-[2] text-dust">
              我們希望這些資料不再只是塵封的 PDF，
              而能成為每一個關心台灣歷史的人都能閱讀、理解、傳遞的故事。
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          SECTION 3: Action Grid
          ============================================ */}
      <Section id="cta-actions" background="ash">
        <div className="w-full max-w-[780px]">
          <ScrollReveal>
            <h3 className="mb-2 font-heading text-[0.65rem] uppercase tracking-[0.4em] text-incense">
              TAKE ACTION
            </h3>
            <h4 className="mb-12 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              你可以做的事
            </h4>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* ── Card 1: Read ── */}
            <ActionCard
              number="01"
              title="閱讀原始報告"
              titleEn="READ THE SOURCE DOCUMENTS"
              accent="incense"
              delay={0}
            >
              <p className="mb-5 font-narrative text-[0.82rem] leading-7 text-dust">
                直接閱讀政府公開的調查報告，了解四十年調查的全貌。
              </p>
              <div className="space-y-3">
                {sourceDocuments.map((doc, i) => (
                  <DocumentLink key={doc.title} doc={doc} index={i} />
                ))}
              </div>
            </ActionCard>

            {/* ── Card 2: Understand ── */}
            <ActionCard
              number="02"
              title="瞭解轉型正義"
              titleEn="UNDERSTAND TRANSITIONAL JUSTICE"
              accent="paper-aged"
              delay={150}
            >
              <p className="mb-5 font-narrative text-[0.82rem] leading-7 text-dust">
                林宅血案不是孤立事件。了解台灣轉型正義的推動，
                認識白色恐怖時期的系統性國家暴力。
              </p>
              <div className="space-y-2">
                {transitionalJusticeLinks.map((link, i) => (
                  <ExternalLink key={link.title} link={link} index={i} />
                ))}
              </div>
            </ActionCard>

            {/* ── Card 3: Community ── */}
            <ActionCard
              number="03"
              title="參與社群"
              titleEn="JOIN THE COMMUNITY"
              accent="incense"
              delay={300}
            >
              <p className="mb-5 font-narrative text-[0.82rem] leading-7 text-dust">
                這是一個開源專案。歡迎提交 Pull Request，貢獻你的研究筆記、
                讀後感想、文學創作、小說改編構想。
              </p>

              <a
                href="https://github.com/soanseng/the-lin"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-3 border border-smoke/60 bg-void/40 px-5 py-3 transition-all duration-300 hover:border-incense/50 hover:bg-void/60"
              >
                <span className="font-document text-[0.7rem] tracking-[0.1em] text-dust transition-colors group-hover:text-incense">
                  GitHub
                </span>
                <span className="font-heading text-[0.75rem] text-paper-aged transition-colors group-hover:text-incense">
                  soanseng/the-lin
                </span>
                <span className="text-stone transition-colors group-hover:text-incense">
                  &rarr;
                </span>
              </a>

              <div className="mt-5 space-y-2">
                <div className="flex items-start gap-2 font-narrative text-[0.78rem] leading-6 text-stone">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-incense/60" />
                  PRs welcome: 讀後感想、研究筆記
                </div>
                <div className="flex items-start gap-2 font-narrative text-[0.78rem] leading-6 text-stone">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-incense/60" />
                  Creative writing &amp; novel adaptation ideas
                </div>
                <div className="flex items-start gap-2 font-narrative text-[0.78rem] leading-6 text-stone">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-incense/60" />
                  Issue 回報與功能建議
                </div>
              </div>
            </ActionCard>

            {/* ── Card 4: Share ── */}
            <ActionCard
              number="04"
              title="分享"
              titleEn="SHARE THIS STORY"
              accent="blood"
              delay={450}
            >
              <p className="mb-5 font-narrative text-[0.82rem] leading-7 text-dust">
                讓更多人知道這段歷史。分享這個網站，讓真相繼續傳遞。
              </p>
              <div className="flex flex-wrap gap-3">
                <ShareLink
                  platform="Twitter / X"
                  href={twitterShareUrl}
                  delay={0}
                />
                <ShareLink
                  platform="Facebook"
                  href={facebookShareUrl}
                  delay={100}
                />
              </div>
              <ScrollReveal delay={200}>
                <p className="mt-4 font-document text-[0.6rem] tracking-[0.1em] text-stone">
                  {siteUrl}
                </p>
              </ScrollReveal>
            </ActionCard>
          </div>
        </div>
      </Section>

      {/* ============================================
          SECTION 4: Credits & Source Attribution
          ============================================ */}
      <Section id="cta-credits" background="ink">
        <div className="w-full max-w-[640px]">
          <ScrollReveal>
            <h3 className="mb-2 font-heading text-[0.65rem] uppercase tracking-[0.4em] text-stone">
              SOURCES &amp; CREDITS
            </h3>
            <h4 className="mb-8 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
              資料來源與致謝
            </h4>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {/* Source documents */}
              <div className="border-l border-stone/30 pl-6">
                <h5 className="mb-3 font-heading text-[0.75rem] uppercase tracking-[0.2em] text-incense">
                  調查報告
                </h5>
                <ul className="space-y-3">
                  <li className="font-narrative text-[0.82rem] leading-7 text-dust">
                    <span className="text-paper-aged">促進轉型正義委員會</span>
                    <span className="text-stone">（已於2022年解散）</span>
                    ——〈林義雄宅血案調查報告〉
                  </li>
                  <li className="font-narrative text-[0.82rem] leading-7 text-dust">
                    <span className="text-paper-aged">臺灣高等檢察署</span>
                    ——〈林宅血案、陳文成命案重啟調查偵查報告〉
                  </li>
                  <li className="font-narrative text-[0.82rem] leading-7 text-dust">
                    <span className="text-paper-aged">監察院</span>
                    ——糾正案文（監112內正0004）
                  </li>
                </ul>
              </div>

              {/* Project */}
              <div className="border-l border-stone/30 pl-6">
                <h5 className="mb-3 font-heading text-[0.75rem] uppercase tracking-[0.2em] text-incense">
                  專案資訊
                </h5>
                <p className="font-narrative text-[0.82rem] leading-7 text-dust">
                  本網站所有敘事內容皆來自上述三份公開政府文件。
                  未添加虛構情節，未進行未經佐證之推論。
                </p>
                <p className="mt-3 font-narrative text-[0.82rem] leading-7 text-dust">
                  本專案為開放原始碼，以{' '}
                  <a
                    href="https://github.com/soanseng/the-lin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-incense/80 underline decoration-incense/30 underline-offset-4 transition-colors hover:text-incense"
                  >
                    GitHub
                  </a>{' '}
                  託管，歡迎社群參與。
                </p>
              </div>

              {/* Design note */}
              <div className="border-l border-stone/30 pl-6">
                <h5 className="mb-3 font-heading text-[0.75rem] uppercase tracking-[0.2em] text-incense">
                  設計說明
                </h5>
                <p className="font-narrative text-[0.82rem] leading-7 text-dust">
                  本站設計語言為「檔案恐怖」（Bureaucratic Horror）——
                  恐怖不來自暴力畫面，而來自體制的冷漠與掩蓋。
                  視覺靈感取自公文檔案、解密文件與白色恐怖時期的影像紀錄。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          SECTION 5: Closing — Emerging from darkness
          ============================================ */}
      <Section id="cta-closing" background="ash">
        <div className="w-full max-w-[560px] text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-incense/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-incense/50" />
              <span className="h-px w-16 bg-incense/30" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-12 font-literary text-[clamp(1rem,2.5vw,1.3rem)] leading-10 tracking-wide text-paper-aged">
              四十多年了。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="mt-4 font-literary text-[clamp(1rem,2.5vw,1.3rem)] leading-10 tracking-wide text-paper-aged">
              林游阿妹沒有等到答案。
              <br />
              林亮均、林亭均不會再長大。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <p className="mt-8 font-literary text-[clamp(1rem,2.5vw,1.3rem)] leading-10 tracking-wide text-dust">
              但她們的故事不應該只存在於塵封的檔案裡。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1200}>
            <p className="mt-12 font-narrative text-[clamp(0.9rem,2vw,1.05rem)] leading-9 text-incense">
              閱讀，就是記憶。
              <br />
              記憶，就是正義的開始。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1500}>
            <div className="mt-16">
              <span className="mx-auto block h-12 w-px bg-gradient-to-b from-incense/40 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1800}>
            <footer className="mt-8">
              <p className="font-document text-[0.6rem] tracking-[0.3em] text-stone">
                FEBRUARY 28, 1980 &mdash; NEVER FORGET
              </p>
              <p className="mt-4 font-heading text-[0.6rem] tracking-[0.2em] text-stone/60">
                soanseng/the-lin &middot; open source
              </p>
            </footer>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
