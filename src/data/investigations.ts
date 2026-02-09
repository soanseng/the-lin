/**
 * 林宅血案調查歷程
 * Investigation history spanning 40+ years
 *
 * Sources:
 * - 促轉會調查報告 第一章第三節、第四節 (pp. 19-36)
 * - 促轉會調查報告 第二章 (pp. 37-90)
 * - 促轉會調查報告 第三章 (pp. 87-89)
 * - 高檢署偵查報告
 * - 監察院糾正案文
 */

export interface InvestigationPhase {
  /** Phase ID for cross-referencing */
  id: string
  /** Official project/investigation name */
  name: string
  /** English translation of name */
  nameEn?: string
  /** Lead agency */
  agency: string
  /** Key personnel */
  leadPersonnel?: string[]
  /** Start date */
  startDate: string
  /** ROC calendar date */
  startDateROC: string
  /** End date if applicable */
  endDate?: string
  /** Description of the investigation phase */
  description: string
  /** Key findings or outcomes */
  findings: string[]
  /** Problems or criticisms */
  problems?: string[]
  /** Source */
  source: string
}

export const investigationPhases: InvestigationPhase[] = [
  {
    id: 'boyun',
    name: '撥雲專案',
    nameEn: 'Project Boyun (Parting Clouds)',
    agency: '刑事警察局',
    leadPersonnel: ['曹極（刑事局長）'],
    startDate: '1980-02-29',
    startDateROC: '69年2月29日',
    description: '案發翌日即成立的第一個偵辦專案。刑事警察局主導，是最初的正式調查。',
    findings: [
      '採集現場12枚可疑指紋及6枚掌紋',
      '大規模清查：第一年即篩查超過100萬人',
      '動員人數470人，聯繫人數1,448人',
      '三條主要偵查線索：（1）家博——已排除；（2）何火成——不可靠；（3）金琴西餐廳電話——無法追查',
      '共召開134次會議（69/2/28至72/1/28）',
      '編纂29冊文件、549卷以上之調查卷宗',
    ],
    problems: [
      '專案人員被刻意屏蔽於情治機關監控資訊之外，無法獲悉案發當時之竊聽、電話監聽等監控所得資訊',
      '情治機關掌握足以排除家博嫌疑之電話監聽資料，卻未提供給撥雲專案小組',
      '竟然銷毀明顯包含重要偵查線索的案發當時電話監聽錄音',
      '從一開始就將本案定位為黨外人士所為之案件，假設國家之「敵人」才可能犯下此案',
      '存在「國家不容懷疑」的隱形天花板，不考慮監控因素',
    ],
    source: '促轉會報告 pp.19-20, pp.85, pp.87-88',
  },
  {
    id: 'sanlingqi',
    name: '三○七專案',
    nameEn: 'Project 307',
    agency: '國安局/警政署',
    leadPersonnel: ['孔令晟（警政署長）'],
    startDate: '1980-03-07',
    startDateROC: '69年3月7日',
    description: '國安局介入主導之專案，由警政署長孔令晟擔任指揮官。表面上為協助偵辦，實則主導偵辦方向並屏蔽撥雲專案人員。',
    findings: [
      '國安局長王永澍發布雙軌指令：「對外以重大刑案偵辦，對內以政治涉嫌清查」',
      '原則：「集中會報、分工查證、統一研判」——所有情報及案情彙報至國安局第三處，再由局長王永澍核定',
      '共召開73次會議（69/3/7至70/9/26）',
      '69/3/8第一號案情綜合研判即完全排除軍情系統涉案，將案件歸因於「陰謀分子內部報復」或「國際幕後操縱」',
      '69/4/8呈蔣經國總統之情報研判（甲一級）卻指出嫌犯「可能係國民黨內鷹派的軍派人物」',
      '多次拒絕公布嫌犯畫像——偵查人員3月4日、7日、10日三度建議公布均遭否決，至3月12日才准發文字描述',
    ],
    problems: [
      '國安局介入後將偵查主導權從刑事局轉移，架空撥雲專案',
      '有意將撥雲專案人員排除在關鍵監控資訊之外',
      '自身情報研判指向國民黨鷹派軍方人物，卻從未循此方向偵辦',
      '以「安全維護」之名行監控之實',
      '阻擋公布嫌犯畫像，延誤偵查時效',
      '金琴餐廳偵查線置於警總共管之下，實際上被架空',
    ],
    source: '促轉會報告 pp.20, pp.84-85',
  },
  {
    id: 'chenggong',
    name: '誠公專案',
    nameEn: 'Project Chenggong',
    agency: '調查局（法務部）',
    startDate: '1980-03-10',
    startDateROC: '69年3月10日',
    description: '調查局成立之配合專案小組，進行疑犯清查。因清查對象主要為黨外人士，故調查局全面動員內線蒐集可疑情資。但在清查過程中，也同時監控黨外人士之動態。',
    findings: [
      '吳組長報告：認為此計畫對本案之偵破可能無甚大幫助，但也許能發覺陰謀分子競選之謀略',
      '建議初步由桃園縣警察局保防室、刑警隊派員跟監',
      '全面清查填報之資料清查表，雖不一定對本案有突破性之作用，但對全般治安資料之建立有莫大幫助',
    ],
    problems: [
      '以偵查為由的監控：相關監控工作雖對林宅血案的調查收效甚微，但對於黨外人士的佈線工作卻有相當助益',
      '可見情治機關以偵查林宅血案之名，挪用資源進行其他監控任務',
      '投入大量人力及翻印照片等所耗財力並無白費——但受益的是治安監控而非破案',
    ],
    source: '促轉會報告 pp.20, pp.85',
  },
  {
    id: 'reinvestigation-85-87',
    name: '85年至87年重啟調查',
    agency: '監察院/台北市警局/刑事局',
    startDate: '1996-01-01',
    startDateROC: '85年',
    endDate: '1998-12-31',
    description: '民主化後首次重啟調查。監察院要求相關單位重新調查，但受限於年代久遠與檔案散佚。',
    findings: [
      '87年刑事局仍認為林奐均曾至「美國受強烈民主意識薰陶」而稱其「探取口風」',
      '此說法對當事人造成二度傷害',
    ],
    problems: [
      '距案發已十餘年，許多線索已冷卻',
      '偵查人員對受害者家屬仍帶有偏見',
    ],
    source: '促轉會報告 pp.23-24, p.89',
  },
  {
    id: 'forensic-96',
    name: '96年法醫重新檢驗',
    agency: '法醫鑑定單位',
    startDate: '2007-01-01',
    startDateROC: '96年',
    description: '再次進行法醫鑑定重新檢驗，希望藉由DNA等現代鑑識技術取得突破。',
    findings: [
      'DNA等生物跡證已劣化無法使用',
      '未能產生突破性進展',
    ],
    problems: [
      '案發距今已27年，生物跡證嚴重劣化',
      '關鍵物證在納莉颱風中已遭毀損',
    ],
    source: '促轉會報告 p.24',
  },
  {
    id: 'reinvestigation-98',
    name: '98年高檢署重啟偵查',
    nameEn: 'Supreme Prosecutors Office Reinvestigation',
    agency: '臺灣高等檢察署',
    leadPersonnel: ['顏大和（高檢署檢察長）', '蔡碧玉（執行秘書）', '游明仁（林宅案主辦檢察官）', '李昌鈺（國際鑑識專家顧問）'],
    startDate: '2009-03-01',
    startDateROC: '98年3月',
    description: '高檢署組成跨機關專案小組正式重啟偵查，由法務部長王清峰批准、檢察總長陳聰明指導。設13條偵查線。邀請國際鑑識專家李昌鈺顧問。',
    findings: [
      '確認警總「彩虹專案」曾對林宅進行電話監聽',
      '確認金琴西餐廳電話紀錄來源為警總而非國安局',
      '以現代DNA/微量跡證技術重新鑑驗19件衣物證物——均因劣化失敗',
      '以3D技術重建犯罪現場',
      '確認兇手為單人、右撇子、身高約168-175公分、使用雙刃銳利尖刀',
      '殺害順序：先雙胞胎、再林奐均、最後林游阿妹',
      '家屬拒絕接受訪談',
    ],
    problems: [
      '各情治機關仍隱匿監控紀錄',
      '物證因年代久遠嚴重劣化',
      '549卷調查卷宗因納莉颱風僅存約170卷',
      '報告結論：無法排除意外可能性、案件仍待新線索',
    ],
    source: '促轉會報告 pp.24, pp.89; 高檢署報告 pp.1-17',
  },
  {
    id: 'tjc-investigation',
    name: '促轉會重啟調查',
    nameEn: 'Transitional Justice Commission Investigation',
    agency: '促進轉型正義委員會',
    startDate: '2018-05-31',
    startDateROC: '107年5月31日',
    description: '促轉會成立後正式重啟林宅血案調查。距案發近四十年。108年7月24日《政治檔案條例》施行後，方得以完整調用林宅血案相關檔案。首次揭露大量情治機關監控證據。',
    findings: [
      '首次揭露情治機關對林宅及林義雄家屬進行系統性監控之事實',
      '確認國安局、警總、調查局、憲兵司令部等均參與監控',
      '發現監聽紀錄、竊聽器裝設、線人佈建、跟監等多種監控手段',
      '確認情治機關銷毀案發當日之關鍵電話監聽錄音',
      '確認撥雲專案人員被刻意屏蔽於監控資訊之外',
      '結論：威權統治當局涉入本案的嫌疑的確不容排除',
    ],
    problems: [
      '調查啟動時間過晚，距案發近四十年',
      '許多檔案已銷毀、佚失',
      '納莉颱風毀損刑事局大量檔案',
      '相關證人或參與調查之人員因年邁或已過世而無法接受調查、訪談',
      '各機關檔案開放仍受阻礙',
      '因國安局解密的同時，援引《政治檔案條例》第8條第2項，致該批檔案須屆滿五十年後才開放閱覽',
    ],
    source: '促轉會報告 第三章 pp.87-89',
  },
]

// ─── Key Conclusions from 促轉會 ─────────────────────────────

export interface InvestigationConclusion {
  id: string
  title: string
  description: string
  source: string
}

export const conclusions: InvestigationConclusion[] = [
  {
    id: 'state-suspicion',
    title: '威權統治當局涉入本案的嫌疑的確不容排除',
    description: '林宅血案案發前，情治機關對林宅及林義雄家屬、友人確有以線人、電話監聽、裝置竊聽器、跟監以及派人在林宅周邊監視等方式進行監控，並持續至案發當日。在林宅被嚴密監控的情況下，兇手竟能趁林宅僅有稚齡雙胞胎在家之空檔，於光天化日的中午時分侵入林宅行兇，並逗留達80分鐘，然後全身而退。由如是犯罪情節而懷疑監控者與兇手有默契甚至合意，實屬合理。',
    source: '促轉會報告 第三章 p.88',
  },
  {
    id: 'three-strengthening-facts',
    title: '三項強化當局涉案嫌疑之事實',
    description: '（1）撥雲專案人員被刻意屏蔽，無法獲悉案發當時之竊聽、電話監聽等監控所得資訊。（2）實施監控之情治機關掌握足以排除家博嫌疑之電話監聽資料，卻未見其提供撥雲專案小組，任由該專案往錯誤方向進行。更甚者，竟然銷毀明顯包含重要偵查線索的案發當時電話監聽錄音。（3）以上（1）及（2）之行為，嚴重妨礙撥雲專案之偵查。',
    source: '促轉會報告 第三章 p.88',
  },
  {
    id: 'invisible-ceiling',
    title: '「國家不容懷疑」的隱形天花板',
    description: '雖然撥雲專案一開始就將本案定位為政治謀殺之案件，但自始即毫無根據地假定如是慘絕人寰之案件，唯有國家之「敵人」才可能犯下。專案人員不在建立案件假說時考量監控因素，只能假設國家敵人或精障者犯下本件政治謀殺，可見專案人員頭上其實有一道隱形的天花板，即「國家不容懷疑」。',
    source: '促轉會報告 第二章 p.62, 第三章 p.88',
  },
  {
    id: 'investigation-limitations',
    title: '重啟調查之限制',
    description: '（一）調查啟動時間過晚：促轉會於107年成立，距69年發生的林宅血案已近四十年，許多檔案已銷毀、佚失，刑事局的調查檔案因90年9月「納莉颱風」而遭水淹浸毀壞。（二）檔案之調用與開放：各機關對於已解密檔案的應用限制應縮到最小範圍；政府應再清查各單位所產製之林義雄相關監控檔案。',
    source: '促轉會報告 第三章 pp.88-89',
  },
  {
    id: 'future-recommendations',
    title: '未來建議',
    description: '建議國安局等機關對已解密檔案之應用限制應縮到最小範圍，以便利社會使用；政府應再清查國安局、調查局、警政署、原警總、原憲兵司令部等單位所產製之林義雄相關監控檔案。有必要再度進行檔案清查，以期能透過新的資料釐清目前無法解釋之事件，如國安局是在什麼情況、基於何種目的，將林宅血案案發當日的電話監聽錄音帶銷毀。唯有徹底揭露相關檔案，方能完整還原歷史真相。',
    source: '促轉會報告 第三章 p.89',
  },
]

// ─── Unresolved Mysteries ────────────────────────────────────

export interface Mystery {
  id: string
  title: string
  description: string
  source: string
}

export const mysteries: Mystery[] = [
  {
    id: 'golden-harp-caller',
    title: '金琴西餐廳致電者之身份',
    description: '案發當日下午1時10-12分，從林宅致電查詢並撥打金琴西餐廳的男子是誰？該男子可能是兇手或參與犯案之人，但其身份至今未能確認。電話監聽錄音帶已遭銷毀。',
    source: '促轉會報告 附錄1 p.94',
  },
  {
    id: 'killer-entry',
    title: '兇手如何在嚴密監控下進出林宅',
    description: '在林宅被情治機關嚴密監控的情況下，兇手竟能趁家中僅有稚齡雙胞胎之空檔侵入，逗留80分鐘以上後全身而退。監控者是否與兇手有默契甚至合意？',
    source: '促轉會報告 第三章 p.88',
  },
  {
    id: 'tape-destruction',
    title: '監聽錄音帶為何被銷毀',
    description: '國安局是在什麼情況、基於何種目的，將案發當日包含重要偵查線索的電話監聽錄音帶銷毀？此舉是否為滅證？',
    source: '促轉會報告 第三章 p.89',
  },
  {
    id: 'boyun-blocked',
    title: '撥雲專案為何被屏蔽',
    description: '情治機關為何刻意不讓撥雲專案人員接觸電話監聽錄音及資料等事實？是否為掩蓋國家涉案之證據？',
    source: '促轉會報告 第三章 p.86',
  },
  {
    id: 'neighborhood-watch',
    title: '守望相助員是否為情治系統協力者',
    description: '案發前夜凌晨2時在林宅對面雜貨店前坐著的守望相助員黃立宇，其角色是否僅為一般守望相助？是否為情治機關在林宅周邊派遣之監視人員或其協力者？',
    source: '促轉會報告 附錄1 p.93',
  },
  {
    id: 'killer-identity',
    title: '兇手之真正身份',
    description: '兇手熟知林宅格局、掌握家中成員動態、能在嚴密監控下從容作案——此人究竟是誰？至今仍是臺灣最重大的未解懸案之一。',
    source: '促轉會報告 第三章',
  },
]
