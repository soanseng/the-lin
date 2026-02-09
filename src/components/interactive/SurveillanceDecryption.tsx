import { useState, useCallback } from 'react'
import { SourceRef } from '../narrative/SourceRef'

/**
 * 監聽解密 — Surveillance Decryption Interactive
 *
 * A declassified document simulation where redacted text is progressively
 * revealed. Users click/tap on black bars to uncover key surveillance facts.
 */

interface DecryptionItem {
  id: string
  /** The label shown before the redacted content */
  label: string
  /** The hidden text revealed on click */
  secret: string
  /** Source reference */
  source: string
}

const decryptionItems: DecryptionItem[] = [
  {
    id: 'hunting-project',
    label: '68年12月20日 獵明專案會議紀錄',
    secret:
      '「竊聽工作請積極進行，並以張俊宏、姚嘉文、林義雄等三位住宅為優先。」——直接證明情治機關對林宅的系統性監聽是有組織的行動。',
    source: '促轉會報告 附錄1 p.92',
  },
  {
    id: 'golden-harp',
    label: '69年2月28日 13:10-13:12 林宅電話監聽',
    secret:
      '某男子自林宅致電104查號台詢問金琴西餐廳電話，隨後致電金琴西餐廳。依檔案資料，該男子可能係兇手或其他參與犯案之人——此為指向兇手身份的最直接監聽證據。',
    source: '促轉會報告 附錄1 p.94',
  },
  {
    id: 'jacobs-call',
    label: '69年2月28日 12:00 家博通話紀錄',
    secret:
      '家博從國際學舍致電林宅，此通話被情治機關監聽記錄，可證明家博不在場。但情治機關未將此資料提供給撥雲專案，反而任由專案將家博列為主要嫌疑人。',
    source: '促轉會報告 p.42-50',
  },
  {
    id: 'omitted-calls',
    label: '69年2月28日 電話概要表',
    secret:
      '國安局製作之電話概要表列出32通電話，卻刻意漏列3通最關鍵通話：嫌犯致電104查號台、嫌犯致電金琴西餐廳、家博中午致電林宅。事後補提4通紀錄，仍隱瞞家博通話。',
    source: '監察院糾正案文 p.21',
  },
  {
    id: 'tape-destroyed',
    label: '69年3月10日 國安局內部紀錄',
    secret:
      '國安局宣稱監聽錄音帶「已沖掉」，稱監錄人員不知林宅發生命案。但同日警總支援小組紀錄卻載明「錄音帶均已保留」。兩份同日文件，完全矛盾。',
    source: '監察院糾正案文 p.20',
  },
  {
    id: 'block-distribution',
    label: '72年1月18日 國安局第三處',
    secret:
      '副處長批示阻止將監聽資料分發給專案小組，稱「錄音資料不宜以文件分發」，建議改以口頭簡報——確保不留書面證據。',
    source: '監察院糾正案文 p.23',
  },
]

function RedactedBlock({
  item,
  isRevealed,
  onReveal,
}: {
  item: DecryptionItem
  isRevealed: boolean
  onReveal: () => void
}) {
  return (
    <div className="border-b border-smoke/40 py-5">
      {/* Document-style label */}
      <div className="mb-2 font-document text-[0.65rem] tracking-[0.1em] text-incense">
        {item.label}
      </div>

      {/* Redacted / Revealed content */}
      <div
        role="button"
        tabIndex={0}
        aria-label={isRevealed ? item.secret : '點擊解密此段機密文字'}
        className={`relative min-h-[44px] cursor-pointer select-none rounded-sm px-4 py-3 transition-all duration-700 ${
          isRevealed
            ? 'bg-blood-dark/10 text-paper-aged'
            : 'bg-ink hover:bg-ink/80'
        }`}
        style={{ touchAction: 'manipulation' }}
        onClick={onReveal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onReveal()
          }
        }}
      >
        {isRevealed ? (
          <p className="font-literary text-[0.85rem] leading-8 text-paper-aged/90">
            {item.secret}
          </p>
        ) : (
          <div className="flex items-center gap-3">
            <div className="h-3 flex-1 rounded-sm bg-void" />
            <span className="shrink-0 font-document text-[0.6rem] tracking-[0.15em] text-stone">
              [ 點擊解密 ]
            </span>
          </div>
        )}
      </div>

      {/* Source — only visible once revealed */}
      {isRevealed && <SourceRef text={item.source} />}
    </div>
  )
}

export function SurveillanceDecryption() {
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set())

  const handleReveal = useCallback((id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const revealedCount = revealedIds.size
  const totalCount = decryptionItems.length
  const allRevealed = revealedCount === totalCount

  return (
    <div
      data-reveal
      className="mx-auto w-full max-w-[640px]"
    >
      {/* Document wrapper — aged paper aesthetic */}
      <div className="relative bg-paper-fresh p-[clamp(1.5rem,5vw,3rem)] font-document text-[0.85rem] leading-8 text-ink shadow-[0_1px_3px_rgba(0,0,0,0.12),0_20px_60px_rgba(0,0,0,0.3)]">
        {/* Aged paper overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, transparent 0%, rgba(180,160,120,0.08) 40%, transparent 60%, rgba(180,160,120,0.05) 100%)',
          }}
        />

        {/* Classification stamp watermark */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] whitespace-nowrap font-heading text-[clamp(3rem,10vw,5rem)] font-black tracking-[0.3em] text-seal-red/[0.12]">
          機密
        </div>

        {/* Document header */}
        <div className="relative z-[2] mb-6 border-b-2 border-ink pb-4 text-center">
          <div className="mb-2 text-[0.7rem] font-bold tracking-[0.3em] text-blood">
            CLASSIFIED — 極機密
          </div>
          <div className="font-heading text-[1.1rem] font-black tracking-[0.1em] text-ink">
            林宅監聽紀錄解密檔案
          </div>
          <div className="mt-2 text-[0.6rem] tracking-[0.15em] text-smoke">
            TRANSITIONAL JUSTICE COMMISSION — DECLASSIFIED
          </div>
        </div>

        {/* Instructions */}
        <div className="relative z-[2] mb-6 border border-smoke/30 bg-void/5 px-4 py-3 text-center">
          <p className="font-heading text-[0.75rem] tracking-wide text-smoke">
            點擊黑色遮蔽區域以解密機密文件內容
          </p>
        </div>

        {/* Progress counter */}
        <div className="relative z-[2] mb-6 text-right">
          <span
            className={`font-document text-[0.7rem] tracking-[0.15em] transition-colors duration-500 ${
              allRevealed ? 'text-seal-red' : 'text-stone'
            }`}
          >
            {revealedCount}/{totalCount} 解密
          </span>
        </div>

        {/* Decryption items */}
        <div className="relative z-[2] space-y-0">
          {decryptionItems.map((item) => (
            <RedactedBlock
              key={item.id}
              item={item}
              isRevealed={revealedIds.has(item.id)}
              onReveal={() => handleReveal(item.id)}
            />
          ))}
        </div>

        {/* Completion message */}
        {allRevealed && (
          <div className="relative z-[2] mt-8 border-t-2 border-blood pt-6 text-center">
            <p className="font-heading text-[0.9rem] font-bold tracking-wide text-blood">
              全部解密完成
            </p>
            <p className="mt-3 font-literary text-[0.85rem] leading-8 text-smoke">
              以上六份文件證實：情治機關在案發前即對林宅進行系統性監聽，
              案發當日持續監控，案發後銷毀關鍵錄音並阻撓偵查——
              他們知道一切，卻選擇了沉默與掩蓋。
            </p>
            <div className="mt-4 font-document text-[0.6rem] tracking-[0.15em] text-stone">
              資料來源：促轉會調查報告、監察院糾正案文
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
