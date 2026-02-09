/**
 * 林宅血案關鍵證據
 * Key evidence items in the Lin family massacre case
 *
 * Sources:
 * - 促轉會調查報告 (pp. 37-90)
 * - 高檢署偵查報告
 * - 監察院糾正案文
 */

export type EvidenceCategory =
  | 'physical'
  | 'forensic'
  | 'document'
  | 'surveillance-record'
  | 'testimony'
  | 'destroyed'

export type EvidenceSignificance = 'critical' | 'major' | 'supporting'

export interface Evidence {
  /** Evidence item ID for cross-referencing */
  id: string
  /** Title/name of the evidence */
  title: string
  /** Category */
  category: EvidenceCategory
  /** Detailed description */
  description: string
  /** Significance level */
  significance: EvidenceSignificance
  /** Date associated with the evidence */
  date?: string
  /** Source document and page */
  source: string
  /** Whether this evidence was destroyed or is missing */
  isDestroyed?: boolean
  /** Figure reference in the report (圖X) */
  figureRef?: string
  /** Whether this is a key/highlighted evidence item */
  isKey?: boolean
}

export const evidence: Evidence[] = [
  // ─── Physical Evidence ───────────────────────────────────
  {
    id: 'crime-scene',
    title: '犯罪現場',
    category: 'physical',
    description: '台北市信義路三段31巷16號（林宅）。兇手在宅內逗留達80分鐘以上，熟知房屋格局，屬預謀犯案。林奐均在林義雄夫婦臥室被發現重傷，林游阿妹陳屍地下室，雙胞胎遺體藏於地下室儲藏室。',
    significance: 'critical',
    date: '1980-02-28',
    source: '促轉會報告 p.7, p.88',
  },
  {
    id: 'fingerprints',
    title: '現場指紋',
    category: 'forensic',
    description: '現場採集到12枚可疑指紋及6枚掌紋。指紋中10枚比對為被害人及家屬友人，2枚無法辨識。96年（2007年）以現代技術重新比對，其中1枚竟吻合刑事局鑑識人員（現場汙染），1枚至今仍無法比對身份。掌紋6枚皆比對為被害人及家屬友人。98年（2009年）重新輸入指紋資料庫，仍無比對結果。',
    significance: 'major',
    source: '促轉會報告 p.24; 高檢署報告 pp.8, 10, 15',
  },
  {
    id: 'dna-evidence',
    title: 'DNA生物跡證',
    category: 'forensic',
    description: '96年（2007年）重新進行法醫鑑定檢驗，但DNA等生物跡證因年代久遠已劣化，無法使用。',
    significance: 'major',
    date: '2007-01-01',
    source: '促轉會報告 p.24',
    isDestroyed: true,
  },
  {
    id: 'stab-wounds',
    title: '刺傷傷痕與法醫鑑定',
    category: 'forensic',
    description: '凶器為「雙刃銳利尖刀」，刀尖筆直無明顯彎曲。林游阿妹身中9刀（胸左4、下頷前1、胸右1、背左2、背右1），另有4處割傷。林奐均背後遭刺6刀（胸左1、背左2、背右3，其中3刀深入肺部），差0.1公分即致命，兇手用被子將其蓋住。雙胞胎各背部遭刺1刀（右肩胛穿刺約2.2-2.5公分），肺部受損。殺害順序：先雙胞胎、再林奐均、最後林游阿妹。口鼻血泡顯示受害者被刺後仍存活一段時間。三名孩童均從背部遭刺，非經驗殺手之手法。兇手為右撇子、單人、身高約168-175公分。',
    significance: 'critical',
    source: '高檢署報告 pp.5, 15-16; 監察院糾正案文 pp.4-5',
  },
  {
    id: 'murder-weapon',
    title: '兇器',
    category: 'physical',
    description: '兇器始終未被尋獲。依傷口分析為「雙刃銳利尖刀」，刀尖筆直具穿刺力，刀尖無明顯彎曲。',
    significance: 'critical',
    source: '高檢署報告 p.16',
  },
  {
    id: 'blood-samples',
    title: '現場血液樣本',
    category: 'forensic',
    description: '現場採集9份血液樣本，皆為O型（與被害人一致），未發現兇手血液。血液樣本未予保存，無法重新檢驗。',
    significance: 'major',
    source: '高檢署報告 pp.8, 14',
  },
  {
    id: 'no-forced-entry',
    title: '無破門入侵痕跡',
    category: 'physical',
    description: '門窗均無被強行打開的痕跡，無財物遭翻動或失竊跡象。兇手極為熟悉房屋格局及家中成員作息，於光天化日下趁家中僅有老幼時侵入。搶劫動機已被排除。',
    significance: 'critical',
    source: '高檢署報告 p.16; 監察院糾正案文 p.5',
  },
  {
    id: 'suspect-description',
    title: '嫌犯外貌描述',
    category: 'testimony',
    description: '林奐均描述：「穿著深色衣服、結領帶、體型高瘦約171公分、膚黑、臉略長、兩腮稍寬、兩眉毛粗長、蓄長髮至頸部、頭髮油亮右分、約30歲之本國人」。目擊證人陳永忠描述：約30歲、約170公分、膚黑、蓄長髮、深色西裝、額平、臉略圓。',
    significance: 'critical',
    source: '監察院糾正案文 pp.17-18',
  },
  {
    id: 'funeral-money',
    title: '「腳尾錢」',
    category: 'physical',
    description: '林游阿妹腳邊被放置現金（「腳尾錢」），為職業殺手之習慣手法，意為防止亡者鬼魂追索。台北市刑大隊長以此認定兇手具專業背景。',
    significance: 'major',
    source: '監察院糾正案文 p.5',
  },

  // ─── Key Surveillance Records ────────────────────────────
  {
    id: 'golden-harp-call',
    title: '金琴西餐廳電話',
    category: 'surveillance-record',
    description: '案發當日下午1時10分，林宅監聽紀錄顯示某男子自林宅致電104查號台詢問金琴西餐廳電話號碼，1時12分再自林宅致電金琴西餐廳。依檔案資料，該男子可能係兇手或其他參與犯案之人。此為指向兇手身份的最直接監聽證據。',
    significance: 'critical',
    date: '1980-02-28',
    source: '促轉會報告 附錄1 p.94 (註54, 55)',
    isKey: true,
  },
  {
    id: 'jacobs-noon-call',
    title: '家博中午電話紀錄',
    category: 'surveillance-record',
    description: '案發當日中午12時，家博從國際學舍致電林宅。此通電話被情治機關監聽記錄，可證明家博當時不在林宅現場（不在場證明），但情治機關卻未將此資料提供給撥雲專案小組，反而任由專案將家博列為主要嫌疑人。',
    significance: 'critical',
    date: '1980-02-28',
    source: '促轉會報告 p.42-50, 附錄1 p.93',
    isKey: true,
  },
  {
    id: 'feb27-wiretap',
    title: '2月27日林宅電話監聽紀錄',
    category: 'surveillance-record',
    description: '案發前一日2月27日有多通林宅電話監聽紀錄，包含方素敏之電話監聽紀錄。紀錄詳載時間：上午6時07分、下午12時38分、下午1時33分、下午12時50分、下午4時21分、下午5時04分等多筆。',
    significance: 'major',
    date: '1980-02-27',
    source: '促轉會報告 附錄1 p.97 (註27)',
    figureRef: '圖6',
  },
  {
    id: 'feb28-wiretap-summary',
    title: '2月28日林宅電話通話情形概要表',
    category: 'surveillance-record',
    description: '國安局製作之2月28日林宅電話通話情形概要表，記錄了案發當日所有透過林宅電話之通話。此文件於促轉會調查時首次揭露，證實情治機關在案發當日持續監聽林宅電話。',
    significance: 'critical',
    date: '1980-02-28',
    source: '促轉會報告 附錄1 p.99-101 (註61-101)',
    isKey: true,
  },

  // ─── Destroyed Evidence ──────────────────────────────────
  {
    id: 'destroyed-tapes',
    title: '遭銷毀之電話監聽錄音帶',
    category: 'destroyed',
    description: '案發當日的電話監聽錄音帶。國安局於69年3月10日內部宣稱錄音「已沖掉」（已銷毀），聲稱「監錄人員不知林宅發生命案，故沖掉錄音」。然而警總支援小組同日（3月8-10日）紀錄卻明確記載「錄音帶均已保留」。兩相矛盾，顯示錄音帶並非意外銷毀。田秋堇案發後之5通緊急求救電話均被清楚記錄，證明監聽持續至案發後，國安局之解釋不實。72年1月18日國安局第三處副處長更直接阻止將錄音資料分發給專案小組，稱「錄音資料不宜以文件分發」。',
    significance: 'critical',
    source: '促轉會報告 p.79-80, p.88; 監察院糾正案文 pp.20, 22-23',
    isDestroyed: true,
    isKey: true,
  },
  {
    id: 'nari-destroyed-files',
    title: '納莉颱風毀損之調查檔案',
    category: 'destroyed',
    description: '90年（2001年）9月納莉颱風導致刑事局保管之大量林宅血案相關調查檔案遭水淹浸、多數毀壞。原549卷以上之調查卷宗僅存約170卷，其餘已翻拍存入光碟。',
    significance: 'major',
    date: '2001-09-01',
    source: '促轉會報告 p.88; 高檢署報告 p.10',
    isDestroyed: true,
  },
  {
    id: 'destroyed-restaurant-receipts',
    title: '金琴西餐廳收據遭銷毀',
    category: 'destroyed',
    description: '專案小組擬扣押金琴西餐廳之點餐單、收據及支票存根以比對指紋，但因三○七會報審批程序延宕三日，待核准後餐廳收據已全數銷毀。此為追查兇手身份之另一關鍵線索。退休偵查員蘇漢霖證實，兇手聲音「聲音很細，略似女人聲音」。',
    significance: 'critical',
    source: '監察院糾正案文 pp.22-24',
    isDestroyed: true,
    isKey: true,
  },
  {
    id: 'feb28-omitted-calls',
    title: '電話概要表刻意漏列3通關鍵電話',
    category: 'surveillance-record',
    description: '國安局製作之2月28日電話概要表列出32通電話，但刻意漏列3通最關鍵的通話：（1）嫌犯致電104查號台、（2）嫌犯致電金琴西餐廳、（3）家博中午致電林宅與雙胞胎通話。其後經專案小組獨立發現金琴線索後，警總才補提供4通紀錄，但仍隱瞞家博中午通話紀錄。',
    significance: 'critical',
    date: '1980-02-28',
    source: '監察院糾正案文 p.21',
    isKey: true,
  },
  {
    id: 'intelligence-report-to-president',
    title: '69年4月8日呈總統之情報研判',
    category: 'document',
    description: '69年4月8日呈報蔣經國總統之每日情報彙報，可靠度評級甲（一）（最高等級），結論指向嫌犯「可能係國民黨內鷹派的軍派人物」。此為情治系統自身之研判，然三○七會報從未依此方向偵辦，反而一貫導向黨外人士或國際陰謀。',
    significance: 'critical',
    date: '1980-04-08',
    source: '監察院糾正案文 p.9',
    isKey: true,
  },

  // ─── Key Documents ───────────────────────────────────────
  {
    id: 'lin-memoir',
    title: '林義雄「備忘錄」',
    category: 'testimony',
    description: '林義雄在警總軍法處看守所內撰寫之備忘錄，記錄遭受刑求拷問之經歷。康寧祥親眼目睹林義雄身上的刑求傷痕。',
    significance: 'major',
    date: '1980-02-25',
    source: '促轉會報告 p.37-39, 附錄1 p.92',
  },
  {
    id: 'nsa-denial-letter',
    title: '國安局否認監控之函文',
    category: 'document',
    description: '國安局回函否認對林義雄宅進行監控。但促轉會調查揭露之大量監控文件證實此函不實。',
    significance: 'major',
    source: '促轉會報告 第二章',
    figureRef: '圖3',
  },
  {
    id: 'hunting-project-minutes',
    title: '《獵明專案》第五次協調會議紀錄',
    category: 'document',
    description: '68年12月20日之會議紀錄記載「竊聽工作請積極進行，並以張俊宏、姚嘉文、林義雄等三位住宅為優先。」直接證明情治機關對林宅進行有組織的監聽。',
    significance: 'critical',
    date: '1979-12-20',
    source: '促轉會報告 附錄1 p.92 (註8)',
    isKey: true,
  },
  {
    id: 'rainbow-intel-doc',
    title: '彩虹資料',
    category: 'document',
    description: '國安局「彩虹資料」系列文件，包含對美麗島事件相關人士及其家屬之監控情報。如彩虹資料(69)彩情字第0833號、0843號等。記載當日相關人士之言行、動態。',
    significance: 'major',
    source: '促轉會報告 附錄1 p.96 (註4, 5)',
    figureRef: '圖22',
  },
  {
    id: 'crime-scene-report',
    title: '撥雲專案現場勘查紀錄',
    category: 'document',
    description: '69年3月之台北市信義路三段卅一巷十六號林宅兇殺案現場勘查紀錄。',
    significance: 'major',
    date: '1980-03-01',
    source: '促轉會報告 附錄1 p.100 (註83)',
  },
  {
    id: 'fang-sumei-testimony',
    title: '方素敏偵訊筆錄',
    category: 'testimony',
    description: '方素敏之警方詢問紀錄。依警方之記載，方素敏說：「約在二點四十五分左右，庭內找林義雄的律師，我看到張律師趕快去，在他旁邊還站著一個男人與張律師在講話。與張律師應該認識。我看到張俊宏律師跑進來，旁邊一位太太說林義雄沒有事情，是家裡出了事情。」',
    significance: 'major',
    date: '1980-03-07',
    source: '促轉會報告 附錄1 p.100 (註76)',
  },
  {
    id: 'surveillance-record-feb28',
    title: '林宅血案案發當日情治機關監聽筆記',
    category: 'surveillance-record',
    description: '情治機關之監聽筆記記載，某女致電林義雄太太，林太太說為什麼不來芬聽叫他○ [按：無法辨讀該文字為何] 快去 時間大約0930左右。此紀錄暗示情治機關在案發當日上午9時30分即有對林宅電話之監聽。',
    significance: 'major',
    date: '1980-02-28',
    source: '促轉會報告 附錄1 p.99 (註40)',
  },
]

/** Critical evidence that points to state involvement */
export const stateInvolvementEvidence = evidence.filter(
  (e) => e.significance === 'critical'
)

/** Evidence that was destroyed */
export const destroyedEvidence = evidence.filter((e) => e.isDestroyed)
