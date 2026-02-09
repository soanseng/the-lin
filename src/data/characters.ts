/**
 * 林宅血案相關人物
 * Key figures in the Lin family massacre case
 *
 * Sources:
 * - 促轉會調查報告 (pp. 1-101)
 * - 高檢署偵查報告
 * - 監察院糾正案文
 */

export type CharacterRole =
  | 'victim'
  | 'family'
  | 'helper'
  | 'suspect-cleared'
  | 'investigator'
  | 'official'
  | 'political-figure'
  | 'witness'
  | 'intelligence'

export interface Character {
  /** Full name in Chinese */
  name: string
  /** English/romanized name if applicable */
  nameEn?: string
  /** Role in the case */
  role: CharacterRole
  /** Detailed description */
  description: string
  /** Relationship to other characters (by name key) */
  relationships?: Array<{
    target: string
    type: string
  }>
  /** Source document and page */
  source: string
  /** Whether this is a primary/highlighted character */
  isPrimary?: boolean
}

// ─── Victims ─────────────────────────────────────────────────

export const victims: Character[] = [
  {
    name: '林游阿妹',
    role: 'victim',
    description: '林義雄之母。案發當日在林宅，遭兇手殺害，陳屍地下室。',
    relationships: [
      { target: '林義雄', type: '母子' },
      { target: '林奐均', type: '祖孫' },
      { target: '林亮均', type: '祖孫' },
      { target: '林亭均', type: '祖孫' },
    ],
    source: '促轉會報告 p.7',
    isPrimary: true,
  },
  {
    name: '林亮均',
    role: 'victim',
    description: '林義雄與方素敏之雙胞胎女兒之一，7歲。案發當日遭兇手殺害，遺體藏於地下室儲藏室，下午3時30分方被發現。',
    relationships: [
      { target: '林義雄', type: '父女' },
      { target: '方素敏', type: '母女' },
      { target: '林亭均', type: '雙胞胎姊妹' },
      { target: '林奐均', type: '姊妹' },
    ],
    source: '促轉會報告 p.7',
    isPrimary: true,
  },
  {
    name: '林亭均',
    role: 'victim',
    description: '林義雄與方素敏之雙胞胎女兒之一，7歲。案發當日遭兇手殺害，遺體藏於地下室儲藏室，下午3時30分方被發現。',
    relationships: [
      { target: '林義雄', type: '父女' },
      { target: '方素敏', type: '母女' },
      { target: '林亮均', type: '雙胞胎姊妹' },
      { target: '林奐均', type: '姊妹' },
    ],
    source: '促轉會報告 p.7',
    isPrimary: true,
  },
  {
    name: '林奐均',
    role: 'victim',
    description: '林義雄與方素敏之長女，約9歲。案發當日遭兇手刺傷（背部刺傷），重傷但存活。於林義雄夫婦臥室被田秋堇發現。後送仁愛醫院救治。',
    relationships: [
      { target: '林義雄', type: '父女' },
      { target: '方素敏', type: '母女' },
      { target: '林亮均', type: '姊妹' },
      { target: '林亭均', type: '姊妹' },
      { target: '林游阿妹', type: '祖孫' },
    ],
    source: '促轉會報告 p.7',
    isPrimary: true,
  },
]

// ─── Family ──────────────────────────────────────────────────

export const family: Character[] = [
  {
    name: '林義雄',
    role: 'family',
    description: '臺灣省議會議員，美麗島事件被告。案發當日因叛亂案被羈押在警備總部軍法處看守所中。當晚9時交保後方得知噩耗。林義雄在獄中曾撰寫「備忘錄」，記錄遭刑求拷問之經歷。康寧祥曾目睹其身上之刑求傷痕。',
    relationships: [
      { target: '方素敏', type: '夫妻' },
      { target: '林游阿妹', type: '母子' },
      { target: '林奐均', type: '父女' },
      { target: '林亮均', type: '父女' },
      { target: '林亭均', type: '父女' },
      { target: '張政雄', type: '律師與當事人' },
    ],
    source: '促轉會報告 p.3, p.7, p.37',
    isPrimary: true,
  },
  {
    name: '方素敏',
    role: 'family',
    description: '林義雄之妻。案發當日上午忙於美麗島軍事審判相關事務。上午9時30分至10時間離開林宅前往軍法處，下午2時45分回到軍法處後得知家中遭襲。',
    relationships: [
      { target: '林義雄', type: '夫妻' },
      { target: '林奐均', type: '母女' },
      { target: '林亮均', type: '母女' },
      { target: '林亭均', type: '母女' },
      { target: '林游阿妹', type: '婆媳' },
      { target: '田秋堇', type: '友人/助手' },
    ],
    source: '促轉會報告 p.7, 附錄1 p.93',
    isPrimary: true,
  },
]

// ─── Key Helpers & Witnesses ─────────────────────────────────

export const helpers: Character[] = [
  {
    name: '田秋堇',
    role: 'helper',
    description: '案發現場發現者。案發前夜宿林宅，早上8時離開至張俊宏宅、後至軍法處旁聽。中午方素敏託其持鑰匙至林宅查看。下午1時30分抵達林宅，於林義雄夫婦臥室發現受傷之林奐均。隨即展開連串緊急電話：致電田朝明、廖敏惠、大安分局報案、馬偕醫院、119。',
    relationships: [
      { target: '方素敏', type: '友人/助手' },
      { target: '田朝明', type: '親屬' },
      { target: '蕭裕珍', type: '同事/友人' },
    ],
    source: '促轉會報告 附錄1 p.93-94',
    isPrimary: true,
  },
  {
    name: '蕭裕珍',
    role: 'helper',
    description: '案發前夜宿林宅。早上8時與田秋堇先後離開林宅出門。下午3時抵林宅。',
    relationships: [
      { target: '方素敏', type: '友人/助手' },
      { target: '田秋堇', type: '同事/友人' },
    ],
    source: '促轉會報告 附錄1 p.93-94',
  },
  {
    name: '田朝明',
    role: 'witness',
    description: '田秋堇之父。案發後接到田秋堇電話，隨即通知江春男等人趕赴林宅。',
    relationships: [
      { target: '田秋堇', type: '父女' },
      { target: '江春男', type: '友人' },
    ],
    source: '促轉會報告 附錄1 p.94',
  },
  {
    name: '江春男',
    role: 'witness',
    description: '案發當日接到田朝明電話時與林濁水、康文雄在《亞洲人》月刊社。隨即趕赴林宅。',
    relationships: [
      { target: '田朝明', type: '友人' },
      { target: '林濁水', type: '同事' },
    ],
    source: '促轉會報告 附錄1 p.94',
  },
  {
    name: '林世煜',
    role: 'witness',
    description: '案發後趕赴林宅，從林宅致電《八十年代》雜誌李筱峰，請其通知康委員並提醒所有被捕者家屬提高警覺。',
    source: '促轉會報告 附錄1 p.94',
  },
  {
    name: '林濁水',
    nameEn: '林宗耀',
    role: 'witness',
    description: '案發當日與江春男在《亞洲人》月刊社。得知噩耗後與康文雄及警方抵達林宅。之後至衛理幼稚園尋找雙胞胎。',
    source: '促轉會報告 附錄1 p.94',
  },
  {
    name: '張政雄',
    role: 'witness',
    description: '林義雄之辯護律師。案發前一日（2月27日）與方素敏、林游阿妹至軍法處會見林義雄。案發後在林宅接聽多通電話。',
    relationships: [
      { target: '林義雄', type: '律師與當事人' },
    ],
    source: '促轉會報告 附錄1 p.92, p.95',
  },
  {
    name: '毛清芬',
    role: 'witness',
    description: '案發當日上午11時09分從日本致電林宅，由林游阿妹接聽。此為林游阿妹生前最後有紀錄的正常通話之一。',
    source: '促轉會報告 附錄1 p.93',
  },
]

// ─── Cleared Suspects ────────────────────────────────────────

export const clearedSuspects: Character[] = [
  {
    name: '家博',
    nameEn: 'J. Bruce Jacobs',
    role: 'suspect-cleared',
    description: '澳洲籍學者。案發前數日多次拜訪林宅。案發當日中午12時從國際學舍致電林宅，先後由林亭均及林亮均接聽。撥雲專案因其為外國人且與林家有來往而列為主要嫌疑對象，但情治機關掌握的監聽資料（可證其不在場）卻未提供給撥雲專案，反而故意銷毀含重要偵查線索的電話監聽錄音。調查後已排除嫌疑。',
    relationships: [
      { target: '林義雄', type: '友人/學術研究者' },
    ],
    source: '促轉會報告 p.42-54, 附錄1 p.92-93',
    isPrimary: true,
  },
  {
    name: '何火成',
    role: 'suspect-cleared',
    description: '精神疾病患者。曾自行向警方「自首」犯案。經調查後排除，其自白係因精神狀態所致。偵查人員因撥雲專案未能突破，遂轉向假設本案為精神障礙者所為之突發事件。',
    source: '促轉會報告 p.55-58',
  },
  {
    name: '艾琳達',
    nameEn: 'Linda Gail Arrigo',
    role: 'suspect-cleared',
    description: '美國籍，施明德之妻。美麗島事件後遭驅逐出境。曾被列入偵查對象，但已排除嫌疑。',
    relationships: [
      { target: '施明德', type: '夫妻' },
    ],
    source: '促轉會報告 p.58-62',
  },
]

// ─── Investigators & Officials ───────────────────────────────

export const investigators: Character[] = [
  {
    name: '曹極',
    role: 'investigator',
    description: '刑事警察局局長。領導撥雲專案偵辦。案發當日警署長在刑事局聽其簡報。',
    source: '促轉會報告 第一章 p.19, 附錄1 p.95',
  },
  {
    name: '孔令晟',
    role: 'investigator',
    description: '警政署長。三○七專案指揮官。國安局介入後主導偵辦方向。',
    source: '促轉會報告 第一章 p.20',
  },
  {
    name: '顧鴻焜',
    role: 'investigator',
    description: '北市刑警大隊技正。下午3時30分發現雙胞胎陳屍地下室儲藏室。',
    source: '促轉會報告 附錄1 p.95',
  },
  {
    name: '王家礎',
    role: 'investigator',
    description: '大安分局分局長（推測）。案發當日在林宅接聽勤務中心及胡務熙等人電話。',
    source: '促轉會報告 附錄1 p.95',
  },
  {
    name: '孫長勛',
    role: 'investigator',
    description: '檢察官。案發當日下午3時58分在林宅致電吳檢察官報告現場情況。',
    source: '促轉會報告 附錄1 p.95',
  },
  {
    name: '胡務熙',
    role: 'official',
    description: '案發當日下午3時52分致電林宅，轉達于副總司令指示：要保護好林義雄的女兒，並交代案件一定要辦好。',
    source: '促轉會報告 附錄1 p.95',
  },
]

// ─── Intelligence Officials ─────────────────────────────────

export const intelligenceOfficials: Character[] = [
  {
    name: '王永澍',
    role: 'intelligence',
    description: '國家安全局局長。案發後第8天發布雙軌指令：「對外以重大刑案偵辦，對內以政治涉嫌清查」。建立三○七指導會報架空撥雲專案。所有情報及案情彙報均須經其核定。主導將偵查方向導離國家機器涉案之可能。',
    source: '監察院糾正案文 pp.3, 6-7',
    isPrimary: true,
  },
  {
    name: '汪敬煦',
    role: 'intelligence',
    description: '警備總司令部總司令（第五任，1978/6-1981/11）。主導整體偵辦方向。其回憶錄記載曾接見家博。家博記錄曾於3月12日拜訪汪敬煦，國民黨方面提出一千萬元新台幣但被家博拒絕。',
    source: '監察院糾正案文 pp.3, 11-12',
  },
  {
    name: '吳鴻昌',
    role: 'intelligence',
    description: '國安局第三處處長。關鍵聯絡人，審閱及批註監聽資料，簽核情報報告。',
    source: '監察院糾正案文 pp.3, 32',
  },
  {
    name: '許覺民',
    role: 'intelligence',
    description: '警總保安處組長。108年（2019年）向促轉會證實：案發前在林宅附近設有戒護人員看護，但案發當日恰被「調至軍法處」——此一巧合極為可疑。',
    source: '監察院糾正案文 p.16',
  },
  {
    name: '李昌鈺',
    nameEn: 'Henry Lee',
    role: 'investigator',
    description: '國際知名鑑識科學家。98年（2009年）高檢署重啟偵查時受邀擔任顧問，協助兩案（林宅血案、陳文成命案）之鑑識分析。',
    source: '高檢署報告 pp.3, 16, 26',
  },
]

// ─── Additional Witnesses (from 監察院) ──────────────────────

export const additionalWitnesses: Character[] = [
  {
    name: '陳永忠',
    role: 'witness',
    description: '目擊證人。案發當日下午1時07-08分目擊一名男子從林宅後方離開。描述：約30歲、約170公分、膚黑、蓄長髮、深色西裝、額平、臉略圓。',
    source: '監察院糾正案文 pp.17-18',
  },
  {
    name: '蘇漢霖',
    role: 'investigator',
    description: '刑事局偵查員，負責金琴專線調查。退休後致函檢察官游明仁，證實兇手聲音「聲音很細，略似女人聲音」，並確認因審批延宕三日，餐廳收據已全數銷毀。',
    source: '監察院糾正案文 pp.22, 24',
  },
  {
    name: '游錫堃',
    role: 'witness',
    description: '黨外政治人物（後任立法院長）。因外貌描述與嫌犯相似而遭媒體誣陷為兇手，被訊問約20次。實有不在場證明（全日在工作）。',
    source: '監察院糾正案文 p.28',
  },
  {
    name: '黃立宇',
    role: 'witness',
    description: '守望相助員。案發前夜凌晨2時坐在林宅對面雜貨店前。自稱27日晚11時至28日上午5時值班，聲稱未見任何可疑情況。',
    source: '促轉會報告 附錄1 p.93; 監察院糾正案文 p.26',
  },
  {
    name: '許榮淑',
    role: 'political-figure',
    description: '黨外政治人物。證實案發後情治機關在其住家樓下設崗哨，並有人致電恐嚇「要我們準備棺材收屍」。揭露案後情治機關以保護之名行恐嚇監控之實。',
    source: '監察院糾正案文 p.14',
  },
]

// ─── Political Figures ───────────────────────────────────────

export const politicalFigures: Character[] = [
  {
    name: '康寧祥',
    role: 'political-figure',
    description: '黨外政治人物。案發前曾目睹林義雄身上之刑求傷痕。案發前一晚方素敏曾至其宅拜訪。案發後在林宅協助處理相關事務。',
    relationships: [
      { target: '林義雄', type: '政治同志' },
      { target: '方素敏', type: '友人' },
    ],
    source: '促轉會報告 p.39, 附錄1 p.95',
  },
  {
    name: '黃信介',
    role: 'political-figure',
    description: '美麗島事件主要被告。立法委員。美麗島大審的首席被告。',
    source: '促轉會報告 附錄1 p.92',
  },
  {
    name: '施明德',
    role: 'political-figure',
    description: '美麗島事件被告。《美麗島》雜誌總經理。69年1月8日被拘捕。',
    relationships: [
      { target: '艾琳達', type: '夫妻' },
    ],
    source: '促轉會報告 附錄1 p.92',
  },
  {
    name: '姚嘉文',
    role: 'political-figure',
    description: '美麗島事件被告。律師。68年12月13日被拘捕。其妻子周清玉曾對友人抱怨情治機關以保護之名行監控之實。',
    source: '促轉會報告 附錄1 p.92; p.84',
  },
  {
    name: '張俊宏',
    role: 'political-figure',
    description: '美麗島事件被告。68年12月13日被拘捕。其宅為情治機關優先監聽目標之一。',
    source: '促轉會報告 附錄1 p.92',
  },
  {
    name: '余陳月瑛',
    role: 'political-figure',
    description: '省議員。案發當日清晨7時15分與方素敏在省議會賓館會面，後同至林洋港宅拜訪。',
    source: '促轉會報告 附錄1 p.93',
  },
  {
    name: '高俊明',
    role: 'political-figure',
    description: '案發後田孟淑自林宅致電高俊明告知情況。',
    source: '促轉會報告 附錄1 p.94',
  },
]

/** All characters combined */
export const allCharacters: Character[] = [
  ...victims,
  ...family,
  ...helpers,
  ...clearedSuspects,
  ...investigators,
  ...intelligenceOfficials,
  ...additionalWitnesses,
  ...politicalFigures,
]
