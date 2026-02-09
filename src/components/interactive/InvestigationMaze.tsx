import { useState, useCallback } from 'react'

/**
 * 調查迷宮 — Investigation Maze Interactive
 *
 * User follows investigation leads but keeps hitting dead ends.
 * Every choice leads to a fact about why the investigation failed,
 * reinforcing the horror of systematic obstruction.
 */

interface MazeChoice {
  label: string
  /** What happens when you pick this choice */
  result: string
  /** Source reference */
  source: string
}

interface MazeRound {
  /** The investigative question posed to the user */
  prompt: string
  /** Context text shown above choices */
  context: string
  choices: MazeChoice[]
}

const mazeRounds: MazeRound[] = [
  {
    prompt: '你是撥雲專案偵查員。案發翌日，你接到第一條線索。你選擇追查：',
    context:
      '民國69年2月29日。林宅血案發生翌日。刑事局成立撥雲專案，由局長曹極主導。你被指派偵辦此案。',
    choices: [
      {
        label: '追查金琴西餐廳電話線索',
        result:
          '你發現案發當日13:10有人從林宅致電104查號台詢問金琴西餐廳電話。你申請扣押餐廳收據以比對指紋——但三○七會報審批程序延宕三日，待核准後，收據已全數銷毀。同時，警總支援小組會議指示此線索「不必多費工夫」。',
        source: '監察院糾正案文 pp.20, 22-24',
      },
      {
        label: '調查外籍人士家博之行蹤',
        result:
          '你將家博列為主要嫌疑人。但事實上，情治機關的電話監聽紀錄清楚記錄：家博於案發當日中午12時從國際學舍致電林宅——他根本不在現場。然而，情治機關握有此不在場證據，卻從未提供給你。你在錯誤的方向上浪費了大量時間。',
        source: '促轉會報告 p.42-50',
      },
      {
        label: '向情治機關調取林宅監聽資料',
        result:
          '你被告知：監聽錄音帶「已沖掉」（已銷毀），監錄人員聲稱「不知林宅發生命案」。但你不知道的是——同日警總支援小組紀錄明確記載「錄音帶均已保留」。你被完全屏蔽於真相之外。',
        source: '監察院糾正案文 p.20',
      },
    ],
  },
  {
    prompt: '第一條線索已斷。你決定改變策略：',
    context:
      '三○七專案由國安局介入主導。你發現自己的偵辦權限正在被架空。所有情報彙報至國安局第三處，再由局長核定。',
    choices: [
      {
        label: '公布嫌犯模擬畫像以徵求線索',
        result:
          '你自3月4日起三度建議公布嫌犯畫像。三○七會報一再拒絕。直到3月12日才准發文字描述之「凶嫌年貌描述表」——在沒有影像的時代，這等同於取消通緝。黃金72小時早已過去。嫌犯畫像被壓了八天。',
        source: '監察院糾正案文 pp.17-18',
      },
      {
        label: '循「國民黨鷹派軍方人物」方向偵辦',
        result:
          '你得知69年4月8日呈蔣經國總統之情報研判——可靠度甲一級（最高等級）——指出嫌犯「可能係國民黨內鷹派的軍派人物」。然而三○七會報從未依此方向偵辦，反而一貫導向黨外人士或國際陰謀。你的建議石沉大海。',
        source: '監察院糾正案文 p.9',
      },
      {
        label: '清查現場指紋與DNA證據',
        result:
          '現場採集了12枚可疑指紋——其中10枚比對為被害人及友人，1枚竟吻合鑑識人員（現場汙染），1枚至今無法比對。血液樣本9份皆為O型（與被害人一致），未保存供日後檢驗。96年重新鑑驗時，DNA等生物跡證已全部劣化。',
        source: '促轉會報告 p.24; 高檢署報告 pp.8, 10, 15',
      },
    ],
  },
  {
    prompt: '又一條路被封死。你開始懷疑體制本身。你嘗試：',
    context:
      '民國72年。專案已召開134次會議，篩查超過100萬人。549卷以上之調查卷宗。然而真相依然遙不可及。你開始意識到：阻礙你的不是案件的複雜性，而是體制本身。',
    choices: [
      {
        label: '要求國安局提供完整監控檔案',
        result:
          '72年1月18日，國安局第三處擬將監聯資料提供予專案小組，副處長批示阻止，稱「錄音資料不宜以文件分發」，建議改以口頭簡報。你永遠無法取得書面證據。所有關鍵資料都在「不宜」與「機密」之間消失。',
        source: '監察院糾正案文 p.23',
      },
      {
        label: '質疑案發當日監控人員為何不在場',
        result:
          '警總保安處組長許覺民證實：案發前在林宅附近設有「戒護」人員看護，但案發當日該等人員恰被「調至軍法處」。在林宅被嚴密監控的情況下，兇手竟能在光天化日下逗留80分鐘後全身而退。這一「巧合」你永遠無法解釋。',
        source: '監察院糾正案文 p.16',
      },
      {
        label: '等待民主化後重新調查',
        result:
          '你等了。1996年重啟調查——偵查人員對受害者家屬仍帶偏見。2001年納莉颱風毀損大量檔案——549卷僅存約170卷。2007年法醫重新鑑定——DNA已全部劣化。2009年高檢署再度重啟——情治機關仍隱匿紀錄。2018年促轉會成立時，距案發已近四十年。',
        source: '促轉會報告 第三章 pp.87-89',
      },
    ],
  },
]

type MazeState =
  | { phase: 'intro' }
  | { phase: 'choosing'; roundIndex: number }
  | { phase: 'blocked'; roundIndex: number; choiceIndex: number }
  | { phase: 'complete' }

export function InvestigationMaze() {
  const [state, setState] = useState<MazeState>({ phase: 'intro' })
  const [history, setHistory] = useState<
    { roundIndex: number; choiceIndex: number }[]
  >([])

  const handleStart = useCallback(() => {
    setState({ phase: 'choosing', roundIndex: 0 })
  }, [])

  const handleChoice = useCallback(
    (roundIndex: number, choiceIndex: number) => {
      setHistory((prev) => [...prev, { roundIndex, choiceIndex }])
      setState({ phase: 'blocked', roundIndex, choiceIndex })
    },
    [],
  )

  const handleNext = useCallback(() => {
    if (state.phase !== 'blocked') return
    const nextRound = state.roundIndex + 1
    if (nextRound < mazeRounds.length) {
      setState({ phase: 'choosing', roundIndex: nextRound })
    } else {
      setState({ phase: 'complete' })
    }
  }, [state])

  return (
    <div data-reveal className="mx-auto w-full max-w-[640px]">
      <div className="border border-smoke/60 bg-ash/60 p-[clamp(1.5rem,5vw,2.5rem)]">
        {/* Header */}
        <div className="mb-6 border-b border-smoke pb-4">
          <div className="font-document text-[0.6rem] tracking-[0.2em] text-stone">
            INTERACTIVE — 互動體驗
          </div>
          <h3 className="mt-1 font-heading text-[clamp(1.1rem,3vw,1.4rem)] font-black text-paper-aged">
            調查迷宮
          </h3>
          <p className="mt-2 font-narrative text-[0.8rem] leading-7 text-dust">
            扮演撥雲專案偵查員，追查林宅血案真相。每一條路，都通往同一個結局。
          </p>
        </div>

        {/* ─── Intro ─── */}
        {state.phase === 'intro' && (
          <div className="space-y-6 text-center">
            <p className="font-literary text-[0.9rem] leading-8 text-dust">
              民國69年2月28日。林義雄之母遇害身亡、雙胞胎女兒遇害身亡、長女身中六刀重傷。
              你是負責偵辦此案的刑事局偵查員。
            </p>
            <p className="font-literary text-[0.85rem] leading-8 text-stone">
              你相信只要循線追查，就能找到真相。
            </p>
            <button
              type="button"
              className="mt-4 min-h-[44px] border border-blood-dark/60 bg-blood-dark/10 px-8 py-3 font-heading text-[0.85rem] tracking-wide text-blood transition-colors duration-300 hover:border-blood hover:bg-blood-dark/20 active:bg-blood-dark/20"
              onClick={handleStart}
            >
              開始偵查
            </button>
          </div>
        )}

        {/* ─── Choosing ─── */}
        {state.phase === 'choosing' && (
          <div className="space-y-6">
            {/* Round indicator */}
            <div className="font-document text-[0.6rem] tracking-[0.15em] text-stone">
              偵查階段 {state.roundIndex + 1} / {mazeRounds.length}
            </div>

            {/* Context */}
            <p className="font-narrative text-[0.8rem] leading-7 text-dust">
              {mazeRounds[state.roundIndex].context}
            </p>

            {/* Prompt */}
            <p className="font-heading text-[0.95rem] font-bold leading-7 text-paper-aged">
              {mazeRounds[state.roundIndex].prompt}
            </p>

            {/* Choices */}
            <div className="space-y-3">
              {mazeRounds[state.roundIndex].choices.map((choice, i) => (
                <button
                  key={i}
                  type="button"
                  className="group block min-h-[44px] w-full border border-smoke/60 bg-ink/60 px-5 py-4 text-left transition-all duration-300 hover:border-blood-dark/60 hover:bg-ink active:bg-ink"
                  onClick={() => handleChoice(state.roundIndex, i)}
                >
                  <span className="font-document text-[0.6rem] tracking-[0.1em] text-stone">
                    選項 {String.fromCharCode(65 + i)}
                  </span>
                  <p className="mt-1 font-narrative text-[0.85rem] leading-7 text-paper-aged transition-colors duration-300 group-hover:text-paper-fresh">
                    {choice.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─── Blocked ─── */}
        {state.phase === 'blocked' && (
          <div className="space-y-6">
            {/* BLOCKED stamp */}
            <div className="relative border-2 border-blood-dark/60 bg-blood-dark/5 p-6">
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 font-heading text-[clamp(2rem,8vw,3.5rem)] font-black tracking-[0.2em] text-blood/20">
                受阻
              </div>
              <div className="relative z-[1]">
                <p className="font-literary text-[0.85rem] leading-8 text-paper-aged/90">
                  {
                    mazeRounds[state.roundIndex].choices[state.choiceIndex]
                      .result
                  }
                </p>
                <div className="mt-4 border-t border-smoke/40 pt-2 font-document text-[0.6rem] tracking-[0.05em] text-stone">
                  {
                    mazeRounds[state.roundIndex].choices[state.choiceIndex]
                      .source
                  }
                </div>
              </div>
            </div>

            {/* Continue button */}
            <div className="text-center">
              <button
                type="button"
                className="min-h-[44px] border border-smoke/60 bg-ink/60 px-8 py-3 font-heading text-[0.8rem] tracking-wide text-dust transition-colors duration-300 hover:border-stone hover:text-paper-aged active:text-paper-aged"
                onClick={handleNext}
              >
                {state.roundIndex < mazeRounds.length - 1
                  ? '嘗試其他方向'
                  : '查看結論'}
              </button>
            </div>
          </div>
        )}

        {/* ─── Complete ─── */}
        {state.phase === 'complete' && (
          <div className="space-y-6">
            {/* Summary of all blocked paths */}
            <div className="mb-6 border-b border-smoke pb-4">
              <p className="font-document text-[0.6rem] tracking-[0.15em] text-blood">
                偵查終結 — 所有路徑均已受阻
              </p>
            </div>

            <div className="space-y-3">
              {history.map((entry, i) => {
                const round = mazeRounds[entry.roundIndex]
                const choice = round.choices[entry.choiceIndex]
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 border-l-2 border-blood-dark/40 py-2 pl-4"
                  >
                    <span className="mt-0.5 shrink-0 font-document text-[0.6rem] text-blood-dark">
                      {i + 1}.
                    </span>
                    <div>
                      <p className="font-heading text-[0.75rem] font-bold text-paper-aged/80">
                        {choice.label}
                      </p>
                      <p className="font-document text-[0.6rem] text-blood/60">
                        受阻
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Final message */}
            <div className="border-t-2 border-blood pt-6 text-center">
              <p className="font-literary text-[clamp(0.9rem,2.5vw,1.05rem)] leading-8 text-paper-aged">
                無論你選擇哪條路，結局都是一樣的。
              </p>
              <p className="mt-4 font-narrative text-[0.85rem] leading-8 text-dust">
                這不是你的失敗——這是體制的設計。
                四十餘年間，每一次調查都在同樣的牆壁前停下腳步。
                證據被銷毀、線索被封鎖、偵查被架空。
              </p>
              <p className="mt-4 font-heading text-[0.95rem] font-bold text-blood">
                「國家不容懷疑」的隱形天花板
              </p>
              <p className="mt-2 font-document text-[0.65rem] tracking-wider text-stone">
                ——促轉會報告 第二章 p.62
              </p>
            </div>

            {/* Restart button */}
            <div className="text-center">
              <button
                type="button"
                className="min-h-[44px] border border-smoke/40 px-6 py-2 font-document text-[0.7rem] tracking-wide text-stone transition-colors duration-300 hover:border-stone hover:text-dust active:text-dust"
                onClick={() => {
                  setState({ phase: 'intro' })
                  setHistory([])
                }}
              >
                重新開始
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
