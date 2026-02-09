/**
 * 林宅血案監控真相
 * Government surveillance evidence revealed by the Transitional Justice Commission
 *
 * Sources:
 * - 促轉會調查報告 第二章第二節 (pp. 63-86)
 * - 促轉會調查報告 附錄1 (pp. 91-101)
 */

// ─── Surveillance Agencies ───────────────────────────────────

export interface SurveillanceAgency {
  /** Agency name in Chinese */
  name: string
  /** English translation */
  nameEn: string
  /** Full official name */
  fullName?: string
  /** Description of role in monitoring */
  description: string
  /** Surveillance methods used by this agency */
  methods: string[]
  /** Source */
  source: string
}

export const agencies: SurveillanceAgency[] = [
  {
    name: '國安局',
    nameEn: 'National Security Bureau (NSB)',
    fullName: '國家安全局',
    description: '最高層級情治機關。主導三○七專案，介入偵辦方向。掌握林宅電話監聽錄音帶及相關監控資料，但刻意屏蔽撥雲專案人員，並銷毀案發當日之關鍵錄音帶。製作「彩虹資料」系列情報文件，記載美麗島事件相關人士之動態。',
    methods: ['電話監聽', '製作情報報告（彩虹資料）', '指揮協調各情治機關', '屏蔽偵查人員'],
    source: '促轉會報告 pp.63-80',
  },
  {
    name: '警總',
    nameEn: 'Taiwan Garrison Command',
    fullName: '臺灣警備總司令部',
    description: '戒嚴時期兼管軍事與政治安全的機關。主導美麗島軍事審判、羈押被告。對林宅進行電話監聽與竊聽。《獵明專案》由警總主導，明確記載以林義雄等人住宅為優先竊聽目標。',
    methods: ['電話監聽', '住宅竊聽（裝置竊聽器）', '軍事審判/羈押'],
    source: '促轉會報告 pp.63-80',
  },
  {
    name: '調查局',
    nameEn: 'Investigation Bureau (MJIB)',
    fullName: '法務部調查局',
    description: '成立「誠公專案」配合疑犯清查。全面動員內線蒐集情資，但以偵查為名實則監控黨外人士。宜蘭縣調查站亦參與調查。',
    methods: ['線人佈建（內線）', '情資蒐集', '全面清查'],
    source: '促轉會報告 pp.20, pp.85',
  },
  {
    name: '憲兵司令部',
    nameEn: 'Military Police Command',
    description: '憲兵司令部情報處亦參與對林義雄相關人士之監控。部分監聽紀錄註記「憲兵司令部有情報處制請參考」，故該情報處長應是憲兵司令部情報處處長。',
    methods: ['情報蒐集', '監控協力'],
    source: '促轉會報告 附錄1 p.101 (註92)',
  },
]

// ─── Surveillance Methods ────────────────────────────────────

export interface SurveillanceMethod {
  /** Method name in Chinese */
  name: string
  /** English translation */
  nameEn: string
  /** Description */
  description: string
  /** Specific evidence of this method being used */
  evidence: string[]
  /** Source */
  source: string
}

export const methods: SurveillanceMethod[] = [
  {
    name: '電話監聽',
    nameEn: 'Phone wiretapping',
    description: '對林宅及相關人士住宅之電話進行系統性監聽，錄製通話內容並製作概要表。案發當日的監聽持續進行，記錄了從案發前到深夜的所有通話。',
    evidence: [
      '68年12月13日起即有林義雄律師事務所、張俊宏宅之電話監聽紀錄',
      '68年12月20日《獵明專案》會議紀錄明確記載以林義雄等住宅為優先監聽目標',
      '案發前一日（2月27日）有多通林宅電話監聽紀錄',
      '案發當日（2月28日）全天林宅電話通話均被監聽並製作「電話通話情形概要表」',
      '案發當日下午1時10分、1時12分之金琴西餐廳相關通話被記錄',
      '案發後持續監聽，記錄田秋堇報案、警方通報、各方致電慰問等通話',
    ],
    source: '促轉會報告 pp.73-80, 附錄1 pp.93-101',
  },
  {
    name: '住宅竊聽',
    nameEn: 'Home bugging (listening devices)',
    description: '在林宅及其他美麗島被告家屬住所內裝設竊聽器。68年12月13日即在林宅內裝設竊聽裝置。',
    evidence: [
      '68年12月13日在林宅內裝設竊聽器',
      '除林宅外，對其他美麗島人士家屬亦進行住宅竊聽',
    ],
    source: '促轉會報告 pp.73-80',
  },
  {
    name: '線人佈建',
    nameEn: 'Informant networks',
    description: '在林宅周邊及黨外人士圈子中佈建線人（內線），蒐集情資並定期回報。調查局「誠公專案」全面動員內線蒐集可疑情資。',
    evidence: [
      '調查局全面動員內線蒐集情資',
      '誠公專案動員人數470人，聯繫人數1,448人',
      '以偵查林宅血案之名挪用資源進行黨外人士佈線工作',
    ],
    source: '促轉會報告 pp.85',
  },
  {
    name: '跟監/派人監視',
    nameEn: 'Physical surveillance / Tailing',
    description: '在林宅周邊派遣情治人員或其協力者進行實體監視。以「安全維護」為名，白天派一女警、夜晚加派一男警進行看護。守望相助員亦可能為情治系統之協力者。',
    evidence: [
      '三○七指導會報決定對林義雄家屬改為白天派一女警、夜晚加派一男警「安全維護」',
      '案發前凌晨2時守望相助員黃立宇在林宅對面雜貨店前',
      '國安局資料顯示對美麗島人士家屬之「保護」至少持續到69年7月下旬',
    ],
    source: '促轉會報告 pp.80-84, 附錄1 p.93',
  },
]

// ─── Surveillance Targets ────────────────────────────────────

export interface SurveillanceTarget {
  name: string
  description: string
  period: string
  source: string
}

export const targets: SurveillanceTarget[] = [
  {
    name: '林義雄宅',
    description: '主要監控目標。68年12月13日起被監聽、裝設竊聽器。案發當日所有進出電話均被記錄。',
    period: '68年12月13日起持續',
    source: '促轉會報告 pp.73-80',
  },
  {
    name: '林義雄家屬',
    description: '方素敏、林義雄母親及子女均在監控範圍內。方素敏之電話通話被監聽記錄。',
    period: '68年12月13日起持續',
    source: '促轉會報告 pp.73-80',
  },
  {
    name: '張俊宏宅',
    description: '獵明專案優先監聽目標之一。',
    period: '68年12月20日起',
    source: '促轉會報告 附錄1 p.92',
  },
  {
    name: '姚嘉文宅',
    description: '獵明專案優先監聽目標之一。其妻周清玉曾對友人抱怨情治機關以保護之名行監控之實。',
    period: '68年12月20日起',
    source: '促轉會報告 pp.84, 附錄1 p.92',
  },
  {
    name: '其他美麗島被告家屬',
    description: '所有美麗島案被告之家屬、友人均因串連國內外人際網絡推動援救工作而成為政治偵防目標。',
    period: '美麗島事件後持續',
    source: '促轉會報告 第三章 p.87',
  },
]

// ─── Key Surveillance Documents ──────────────────────────────

export interface SurveillanceDocument {
  /** Document title */
  title: string
  /** Document date */
  date: string
  dateROC: string
  /** Issuing agency */
  agency: string
  /** Archive reference number */
  archiveRef?: string
  /** Description of contents */
  description: string
  /** Figure reference in the report */
  figureRef?: string
  /** Source page */
  source: string
}

export const documents: SurveillanceDocument[] = [
  {
    title: '《獵明專案》第五次協調會議紀錄',
    date: '1979-12-20',
    dateROC: '68年12月20日',
    agency: '國安局',
    archiveRef: 'A803000000A/0068/C280110/2',
    description: '明確記載「竊聽工作請積極進行，並以張俊宏、姚嘉文、林義雄等三位住宅為優先」。直接證明情治機關對林宅的系統性監聽是有組織的行動。',
    source: '促轉會報告 附錄1 p.92 (註8)',
  },
  {
    title: '彩虹資料(69)彩情字第0833號',
    date: '1979-12-13',
    dateROC: '68年12月13日',
    agency: '國安局',
    archiveRef: 'A803000000A/0068/C280110/10',
    description: '《一二一○專案（美麗島高雄事件）》情報文件，記載美麗島事件當日相關人士之言行。',
    figureRef: '圖22',
    source: '促轉會報告 附錄1 p.96 (註4)',
  },
  {
    title: '彩虹資料(69)彩情字第1343號',
    date: '1980-03-27',
    dateROC: '69年3月27日',
    agency: '國安局',
    archiveRef: 'A803000000A/0068/C280110/11',
    description: '記載姚嘉文妻子周清玉對友人之電話通話內容：「大家都被疲勞審訊，他們都用那些自白書咬大家。林義雄被打受傷，其他人好像沒被打。」證實情治機關以保護之名行監控之實。',
    figureRef: '圖22',
    source: '促轉會報告 p.84, 附錄1 p.96',
  },
  {
    title: '《三○七》指導會報第五十次會議紀錄',
    date: '1980-07-19',
    dateROC: '69年7月19日',
    agency: '國安局',
    archiveRef: 'A803000000A/0069/C280215/4',
    description: '記載對林義雄家屬安全維護工作上級已決定改變執行方式，不專派勤務，改為白天派一女警，夜晚加派一男警，原則上不進其房間內。',
    source: '促轉會報告 p.84 (註185)',
  },
  {
    title: '2月28日林宅電話通話情形概要表',
    date: '1980-02-28',
    dateROC: '69年2月28日',
    agency: '國安局',
    archiveRef: 'A803000000A/0066/W1C0318CC/1',
    description: '國安局製作之案發當日林宅全天電話通話概要表。記錄了從上午至深夜所有透過林宅電話之通話，包含金琴西餐廳可疑電話。此文件為促轉會調查時首次揭露。',
    source: '促轉會報告 附錄1 pp.99-101 (註61-101)',
  },
  {
    title: '林義雄動態報告',
    date: '1980-02-27',
    dateROC: '69年2月27日',
    agency: '國安局',
    archiveRef: 'A803000000A/0066/W1C0318CC/2',
    description: '案發前一日之林義雄動態報告，記載方素敏電話監聯紀錄之多筆時間點（上午6時07分、下午12時38分、下午1時33分等）。',
    source: '促轉會報告 附錄1 p.97 (註27)',
  },
]

// ─── Chapter 2 Conclusion (Surveillance) ─────────────────────

export const surveillanceConclusion = {
  summary: '在美麗島事件發生前，林義雄等該案被告及其親友即已遭到情治機關嚴密監控。在大逮捕後，監控工作仍持續進行。經由線人、裝設竊聽器、跟監、在林宅周邊派遣情治人員或其協力者進行監視乃至電話監聽，情治機關對林宅及林義雄家屬之監控，已達鉅細靡遺之程度。監控事實之存在，不但顯示民間長期以來對威權統治當局涉入本案的懷疑確屬相當合理，而且從撥雲專案人員被刻意屏蔽，未能知曉林宅及林義雄家屬在案發前遭到嚴密監控，也無法獲悉監控所得之資訊，以及國安局不讓撥雲專案人員接觸電話監聽錄音及資料等事實，更可見得威權統治當局涉案之可能性不容輕易排除。',
  source: '促轉會報告 p.86',
} as const

// ─── Key Cover-Up Actions (from 監察院糾正案文) ──────────────

export interface CoverUpAction {
  date: string
  dateROC: string
  description: string
  significance: 'critical' | 'major'
  source: string
}

export const coverUpActions: CoverUpAction[] = [
  {
    date: '1980-03-08',
    dateROC: '69年3月8日',
    description: '三○七會報第一號案情綜合研判完全排除軍情系統涉案，將案件歸因於「陰謀分子內部報復」或「國際幕後操縱」。',
    significance: 'critical',
    source: '監察院糾正案文 p.10',
  },
  {
    date: '1980-03-10',
    dateROC: '69年3月10日',
    description: '國安局內部宣稱監聽錄音帶「已沖掉」（已銷毀），聲稱監錄人員不知林宅發生命案。然而同日警總支援小組紀錄卻載明「錄音帶均已保留」。兩相矛盾。國安局同時限制僅刑事局長曹極或台北市警局副局長林永鴻得查詢錄音。',
    significance: 'critical',
    source: '監察院糾正案文 p.20',
  },
  {
    date: '1980-03-12',
    dateROC: '69年3月12日',
    description: '三○七會報拒絕偵查人員自3月4日起三度建議公布嫌犯畫像之請求，僅准發布文字描述之「凶嫌年貌描述表」，嚴重延誤偵查時效。',
    significance: 'critical',
    source: '監察院糾正案文 pp.17-18',
  },
  {
    date: '1980-03-24',
    dateROC: '69年3月24日',
    description: '警總支援小組內部會議指示金琴餐廳調查「不必多費工夫」，實質放棄追查此一最直接指向兇手之線索。',
    significance: 'critical',
    source: '監察院糾正案文 p.20',
  },
  {
    date: '1983-01-18',
    dateROC: '72年1月18日',
    description: '國安局第三處擬將監聽資料提供予專案小組，副處長批示阻止，稱「錄音資料不宜以文件分發」，建議改以口頭簡報。',
    significance: 'critical',
    source: '監察院糾正案文 p.23',
  },
  {
    date: '1980-02-28',
    dateROC: '69年2月28日',
    description: '警總保安處組長許覺民證實：案發前在林宅附近設有「戒護」人員看護，但案發當日該等人員恰被「調至軍法處」——此一巧合極為可疑。',
    significance: 'critical',
    source: '監察院糾正案文 p.16',
  },
  {
    date: '1980-02-28',
    dateROC: '69年2月28日',
    description: '2月28日電話概要表列出32通電話，刻意漏列3通最關鍵通話（嫌犯致電104查號台、嫌犯致電金琴西餐廳、家博中午致電林宅）。後經專案獨立發現金琴線索，警總才補提供4通，但仍隱瞞家博通話紀錄。',
    significance: 'critical',
    source: '監察院糾正案文 p.21',
  },
]

// ─── Statistics ──────────────────────────────────────────────

export const surveillanceStats = {
  /** Number of pre-incident surveillance files on Lin Yi-hsiung */
  preIncidentFiles: 39,
  /** Files on funeral monitoring */
  funeralMonitoringFiles: 19,
  /** Post-incident files on Lin Yi-hsiung and Fang Su-min */
  postIncidentFiles: 54,
  /** Files on Kaohsiung Incident figures */
  kaohsiungIncidentFiles: 46,
  /** Files on Presbyterian Church investigation */
  presbyterianChurchFiles: 9,
  /** NSB permanently classified files still held */
  nsbClassifiedFiles: 4000,
  /** Source */
  source: '監察院糾正案文 pp.13, 36, 38',
} as const
