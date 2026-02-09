import { crimeDayTimeline } from '../data/timeline'
import { evidence } from '../data/evidence'
import { Section } from '../components/layout/Section'
import { ChapterHeader } from '../components/layout/ChapterHeader'
import { MinuteBlock } from '../components/narrative/MinuteBlock'
import { HorrorCounter } from '../components/narrative/HorrorCounter'
import { ScrollReveal } from '../components/narrative/ScrollReveal'
import { Redacted } from '../components/narrative/Redacted'

// ── Helpers ──────────────────────────────────────────────────

/** Pull a crime-day event by its time field */
function eventAt(time: string) {
  return crimeDayTimeline.find((e) => e.time === time)
}

/** Key physical evidence items used in the narrative */
const noForcedEntry = evidence.find((e) => e.id === 'no-forced-entry')!
const stabWounds = evidence.find((e) => e.id === 'stab-wounds')!
const suspectDesc = evidence.find((e) => e.id === 'suspect-description')!
const goldenHarpCall = evidence.find((e) => e.id === 'golden-harp-call')!
const funeralMoney = evidence.find((e) => e.id === 'funeral-money')!

// ── Component ────────────────────────────────────────────────

export function TheMassacre() {
  return (
    <>
      {/* ────── Opening Section: Title & Date ────── */}
      <Section id="the-massacre" vignette background="void">
        <ChapterHeader label="CHAPTER 03" title="案發經過" />

        <ScrollReveal>
          <p className="max-w-[680px] font-literary text-base leading-8 tracking-wide text-dust">
            民國六十九年二月二十八日。美麗島軍事審判首度公開調查庭之日。
            <br />
            林義雄被羈押在警備總部軍法處看守所內。
            <br />
            家中僅留老母與幼女。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mt-8 max-w-[680px] font-document text-xs tracking-[0.2em] text-stone">
            以下時間軸根據促轉會調查報告附錄1（pp. 91-101）及電話監聽紀錄重建。
          </p>
        </ScrollReveal>
      </Section>

      {/* ────── Phase 1: Morning Normalcy ────── */}
      <Section id="massacre-morning" vignette background="void" className="items-start sm:items-center">
        <ScrollReveal>
          <h3 className="mb-12 max-w-[680px] font-heading text-xs uppercase tracking-[0.4em] text-stone">
            I. 清晨 -- 日常的最後餘暉
          </h3>
        </ScrollReveal>

        <MinuteBlock time="02:00">
          <p>
            {eventAt('02:00')?.description}
          </p>
          <p className="mt-4 text-sm text-dust">
            林宅內留有：方素敏、林游阿妹、林奐均、雙胞胎林亮均與林亭均、田秋堇、蕭裕珍。
          </p>
        </MinuteBlock>

        <MinuteBlock time="07:00">
          <p>林游阿妹至對面雜貨店買鹽。</p>
          <p className="mt-4 text-sm text-dust">
            一切如常。一位母親的晨間日常。
          </p>
        </MinuteBlock>

        <MinuteBlock time="07:15">
          <p>
            方素敏在省議會賓館與省議員余陳月瑛會面，隨後至潮州街林洋港宅拜訪。
          </p>
          <p className="mt-4 text-sm text-dust">
            美麗島軍事審判在即，辯護方奔走聯繫各方。
          </p>
        </MinuteBlock>
      </Section>

      {/* ────── Phase 2: Isolation ────── */}
      <Section id="massacre-isolation" vignette background="void" className="items-start sm:items-center">
        <ScrollReveal>
          <h3 className="mb-12 max-w-[680px] font-heading text-xs uppercase tracking-[0.4em] text-stone">
            II. 上午 -- 一個個離開
          </h3>
        </ScrollReveal>

        <MinuteBlock time="08:00" highlight>
          <p>
            許榮淑致電林宅，林游阿妹接聽後喚醒田秋堇。
            田秋堇向林游阿妹詢問方素敏去向，不知。
          </p>
          <p className="mt-4 font-literary text-blood-dark">
            田秋堇離開林宅。蕭裕珍亦離開。
          </p>
          <p className="mt-4 text-sm text-dust">
            林宅僅留：<strong className="text-paper-aged">林游阿妹</strong>、
            <strong className="text-paper-aged">林亮均</strong>、
            <strong className="text-paper-aged">林亭均</strong>。
          </p>
          <p className="mt-2 text-sm text-dust">
            三人。老幼無依。門窗之外，情治機關的監聽線路持續運作。
          </p>
        </MinuteBlock>

        <MinuteBlock time="09:05">
          <p>方素敏返回林宅。短暫停留。</p>
        </MinuteBlock>

        <MinuteBlock time="09:30" highlight>
          <p>
            田秋堇致電方素敏。方素敏告訴林游阿妹要去軍法處，
            <span className="text-paper-fresh">請其照看小孩後離開林宅</span>。
          </p>
          <p className="mt-4 font-literary text-blood-dark">
            方素敏離去。這是她最後一次見到婆婆林游阿妹安然無恙。
          </p>
          <p className="mt-6 border-l-2 border-blood-dark/40 pl-6 text-sm text-dust">
            林宅僅剩：林游阿妹、雙胞胎。
            <br />
            林奐均尚在幸安國小上課。
          </p>
        </MinuteBlock>

        <MinuteBlock time="10:00">
          <p>方素敏抵達軍法處。</p>
          <p className="mt-4 text-sm text-dust">
            同一時刻，林義雄被羈押於看守所內。
            夫妻二人皆在軍法處——一個旁聽，一個受審。
            <br />
            家中只有祖母與兩個七歲的孩子。
          </p>
        </MinuteBlock>
      </Section>

      {/* ────── Phase 3: The Attack Window ────── */}
      <Section id="massacre-attack" vignette background="ink" className="items-start sm:items-center">
        <ScrollReveal>
          <h3 className="mb-12 max-w-[680px] font-heading text-xs uppercase tracking-[0.4em] text-blood-dark">
            III. 攻擊 -- 空白的八十分鐘
          </h3>
        </ScrollReveal>

        <MinuteBlock time="11:09">
          <p>
            毛清芬自日本致電林宅，由林游阿妹接聽。
          </p>
          <p className="mt-4 font-literary text-paper-fresh">
            這是林游阿妹生前最後一通有紀錄的正常通話。
          </p>
        </MinuteBlock>

        <MinuteBlock time="11:15">
          <p>
            林游阿妹至鉅豐照明有限公司煮飯、洗碗。
          </p>
          <p className="mt-4 text-sm text-dust">
            雙胞胎獨自留在家中。
          </p>
        </MinuteBlock>

        <MinuteBlock time="11:30">
          <p>
            方素敏從軍法處打電話回家。
            <strong className="text-paper-fresh">由林亭均接聽</strong>。
          </p>
          <p className="mt-4 text-sm text-dust">
            七歲的孩子接起電話。一切還算正常。
          </p>
        </MinuteBlock>

        <MinuteBlock time="11:50">
          <p>
            林奐均於幸安國小放學返家。
          </p>
        </MinuteBlock>

        <MinuteBlock time="12:00" highlight>
          <p>
            家博從國際學舍致電林宅，先後由林亭均及林亮均接聽。
          </p>
          <p className="mt-4 font-literary text-paper-fresh">
            林亭均說：媽媽及祖母不在林宅。
          </p>
          <p className="mt-4 text-sm text-dust">
            此通電話被情治機關完整監聽記錄——
            日後卻被刻意隱匿，任由調查小組將家博列為主要嫌疑人。
          </p>
        </MinuteBlock>

        {/* The Horror Counter — the perpetrator stayed 80+ minutes */}
        <HorrorCounter number="80" label="分鐘 -- 兇手滯留時間" />

        <ScrollReveal>
          <div className="mb-24 max-w-[680px] space-y-6 border-l-2 border-blood-dark/50 pl-8">
            <p className="font-literary text-lg leading-9 text-paper-aged">
              在約莫上午十一時至下午一時之間，一名男子進入了林宅。
            </p>
            <p className="text-base leading-8 text-dust">
              {noForcedEntry.description}
            </p>
            <p className="text-base leading-8 text-paper-aged">
              兇手在宅內停留超過八十分鐘。熟知房屋格局。
              熟知家中成員作息。
              知道這段時間只有老幼在家。
            </p>
            <p className="text-sm text-dust">
              <Redacted>{stabWounds.description.slice(0, stabWounds.description.indexOf('殺害順序'))}</Redacted>
            </p>
            <p className="mt-4 text-sm text-dust">
              <Redacted>
                殺害順序：先雙胞胎、再林奐均、最後林游阿妹。兇手為右撇子、單人、身高約168-175公分。
              </Redacted>
            </p>
            <p className="mt-4 text-sm text-dust">
              {funeralMoney.description}
            </p>
          </div>
        </ScrollReveal>

        <MinuteBlock time="12:10" highlight>
          <p>
            方素敏與田秋堇至餐廳用餐。方素敏三度打電話回林宅，
            <strong className="text-blood">均無人接聽</strong>。
          </p>
          <p className="mt-4 text-paper-fresh">
            方素敏將林宅鑰匙交給田秋堇，要其至林宅查看為何沒人接電話。
          </p>
        </MinuteBlock>

        <MinuteBlock time="12:20">
          <p>
            林奐均返抵林宅，按數次門鈴。
          </p>
          <p className="mt-4 text-sm text-dust">
            九歲的女孩站在門外，按著門鈴。
            不知道門內正在發生什麼。
          </p>
        </MinuteBlock>

        <MinuteBlock time="12:30">
          <p>
            林游阿妹膳畢及洗刷餐具後離開鉅豐照明有限公司，返回林宅。
          </p>
        </MinuteBlock>
      </Section>

      {/* ────── Phase 4: The Perpetrator's Phone Calls ────── */}
      <Section id="massacre-calls" vignette background="ink" className="items-start sm:items-center">
        <ScrollReveal>
          <h3 className="mb-12 max-w-[680px] font-heading text-xs uppercase tracking-[0.4em] text-blood-dark">
            IV. 兇手的電話 -- 監聽紀錄中的聲音
          </h3>
        </ScrollReveal>

        <MinuteBlock time="13:10" highlight>
          <p className="text-paper-fresh">
            林宅監聽紀錄載：某男子自林宅致電104查號台，
            詢問<Redacted>金琴西餐廳</Redacted>電話。
          </p>
          <p className="mt-4 text-sm text-dust">
            「依檔案資料，該男子可能係兇手或其他參與犯案之人。」
            <br />
            <span className="font-document text-xs text-stone">
              -- {eventAt('13:10')?.source}
            </span>
          </p>
        </MinuteBlock>

        <MinuteBlock time="13:12" highlight>
          <p className="text-paper-fresh">
            某男子自林宅致電<Redacted>金琴西餐廳</Redacted>。
          </p>
          <p className="mt-6 text-sm text-dust">
            {goldenHarpCall.description}
          </p>
          <p className="mt-4 text-sm text-dust">
            <Redacted>
              退休偵查員蘇漢霖證實，兇手聲音「聲音很細，略似女人聲音」。
              專案小組擬扣押金琴西餐廳收據以比對指紋，
              但因三零七會報審批程序延宕三日，收據已全數銷毀。
            </Redacted>
          </p>
        </MinuteBlock>

        <ScrollReveal>
          <div className="my-16 max-w-[680px] rounded-sm border border-smoke bg-ash/40 px-8 py-8">
            <p className="mb-4 font-document text-xs uppercase tracking-[0.3em] text-blood-dark">
              EVIDENCE NOTE
            </p>
            <p className="text-sm leading-7 text-dust">
              國安局製作之2月28日電話概要表列出32通電話，
              卻<strong className="text-paper-aged">刻意漏列3通最關鍵通話</strong>：
              嫌犯致電104查號台、嫌犯致電金琴西餐廳、
              以及家博中午致電林宅與雙胞胎通話之紀錄。
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ────── Phase 5: Discovery ────── */}
      <Section id="massacre-discovery" vignette background="void" className="items-start sm:items-center">
        <ScrollReveal>
          <h3 className="mb-12 max-w-[680px] font-heading text-xs uppercase tracking-[0.4em] text-stone">
            V. 發現 -- 無人接聽的電話
          </h3>
        </ScrollReveal>

        <MinuteBlock time="13:15">
          <p>
            田秋堇由餐廳離開，前往林宅。
          </p>
        </MinuteBlock>

        <MinuteBlock time="13:30" highlight>
          <p className="text-paper-fresh">
            田秋堇抵達林宅。
          </p>
          <p className="mt-4 text-blood">
            於林義雄夫婦臥室，發現受傷的林奐均。
          </p>
          <p className="mt-4 text-sm text-dust">
            九歲女孩，背部六刀。被子蓋住身體。
            差0.1公分即致命。
          </p>
        </MinuteBlock>

        <MinuteBlock time="13:49">
          <p>田秋堇自林宅致電田朝明。</p>
        </MinuteBlock>

        <MinuteBlock time="13:51">
          <p>田秋堇致電廖敏惠。</p>
        </MinuteBlock>

        <MinuteBlock time="13:56">
          <p className="text-paper-fresh">
            田秋堇自林宅向大安分局報案。
          </p>
        </MinuteBlock>

        <MinuteBlock time="13:57">
          <p>
            田秋堇致電馬偕醫院。
            <span className="text-dust">馬偕醫院表示現在沒有救護車。</span>
          </p>
        </MinuteBlock>

        <MinuteBlock time="13:58">
          <p>田秋堇致電119。</p>
          <p className="mt-4 text-sm text-dust">
            五通電話。八分鐘內。
            一個人在血泊中打出的求救電話。
            每一通都被情治機關的監聽線路完整記錄。
          </p>
        </MinuteBlock>

        <MinuteBlock time="14:16" highlight>
          <p className="font-document text-sm leading-7 text-paper-burnt">
            「你通知分局長，林義雄家中有小孩被小偷刺了一刀，
            地下室還有個女的，五十歲身份待查。」
          </p>
          <p className="mt-4 font-document text-xs text-stone">
            -- 警員自林宅致電大安分局刑事組之監聽紀錄
          </p>
          <p className="mt-4 text-sm text-dust">
            警員以「小偷」稱呼兇手。
            此時他們尚不知道地下室儲藏室內還有兩個孩子的遺體。
          </p>
        </MinuteBlock>

        <MinuteBlock time="14:45" highlight>
          <p>
            方素敏回到軍法處，得知孩子衣服被刀刺破、
            婆婆林游阿妹被殺害。
          </p>
          <p className="mt-4 text-paper-fresh">
            方素敏趕至衛理幼稚園尋找雙胞胎——
            發現雙胞胎沒上學。
          </p>
        </MinuteBlock>

        <MinuteBlock time="15:30" highlight>
          <p className="text-blood">
            北市刑警大隊技正顧鴻焜發現雙胞胎陳屍地下室儲藏室。
          </p>
          <p className="mt-4 text-sm text-dust">
            林亮均、林亭均。七歲。案發近四小時後才被找到。
          </p>
        </MinuteBlock>
      </Section>

      {/* ────── Phase 6: Aftermath ────── */}
      <Section id="massacre-aftermath" vignette background="ash" className="items-start sm:items-center">
        <ScrollReveal>
          <h3 className="mb-12 max-w-[680px] font-heading text-xs uppercase tracking-[0.4em] text-stone">
            VI. 案後 -- 機關的反應
          </h3>
        </ScrollReveal>

        <MinuteBlock time="15:36" highlight>
          <p className="font-document text-sm leading-7 text-paper-burnt">
            「驗過後馬上給我電話，這不是普通案件，上級催得很急，
            此案在政治時代較易滋事，上級很重視。」
          </p>
          <p className="mt-4 font-document text-xs text-stone">
            -- 勤務中心致電林宅之監聽紀錄
          </p>
        </MinuteBlock>

        <MinuteBlock time="15:52">
          <p className="font-document text-sm leading-7 text-paper-burnt">
            「我向于副總司令報告了，他有一個指示，要到醫院把林義雄女兒極力保護好。」
          </p>
          <p className="mt-4 font-document text-xs text-stone">
            -- 胡務熙致電林宅，由王家礎分局長接聽
          </p>
        </MinuteBlock>

        <MinuteBlock time="16:31">
          <p className="font-document text-sm leading-7 text-paper-burnt">
            「警察機關封鎖了，剛才保安處長來了一下就走了。」
          </p>
          <p className="mt-4 font-document text-xs text-stone">
            -- 陳振祥自林宅致電情報處長
          </p>
          <p className="mt-4 text-sm text-dust">
            情報處、保安處、警總——
            各情治單位於案發後數小時內迅速抵達現場。
            不是來破案，是來「了解狀況」。
          </p>
        </MinuteBlock>

        <MinuteBlock time="21:00" highlight>
          <p className="text-paper-fresh">
            林義雄交保。
          </p>
          <p className="mt-4 text-sm text-dust">
            當晚，林義雄得知長女重傷。
            直到翌日凌晨方知母親遇害。
            <br />
            直到翌日早上，才有親友告知——
            <span className="text-blood">雙胞胎亦已遇害身亡。</span>
          </p>
        </MinuteBlock>
      </Section>

      {/* ────── Closing: Suspect Profile ────── */}
      <Section id="massacre-suspect" vignette background="void">
        <ScrollReveal>
          <div className="max-w-[680px] space-y-8 text-center">
            <p className="font-document text-xs uppercase tracking-[0.3em] text-stone">
              SUSPECT PROFILE
            </p>

            <p className="font-literary text-lg leading-9 text-paper-aged">
              「穿著深色衣服、結領帶、體型高瘦約171公分、膚黑、臉略長、
              兩腮稍寬、兩眉毛粗長、蓄長髮至頸部、頭髮油亮右分、約30歲之本國人。」
            </p>
            <p className="font-document text-xs text-stone">
              -- {suspectDesc.source}
            </p>

            <p className="mt-8 text-sm text-dust">
              林奐均的描述。九歲女孩的記憶。<br />
              至今，四十餘年過去，兇手仍未被繩之以法。
            </p>

            <p className="mt-8 text-sm text-dust">
              兇器始終未被尋獲。
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
