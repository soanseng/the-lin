interface ContentWarningProps {
  onEnter: () => void
}

export function ContentWarning({ onEnter }: ContentWarningProps) {
  return (
    <section
      id="content-warning"
      className="flex min-h-screen flex-col items-center justify-center bg-void vignette-overlay px-4"
    >
      <div className="max-w-[540px] border border-stone p-8 sm:p-16">
        <div className="mb-8 font-heading text-xs tracking-[0.3em] uppercase text-dust">
          Content Warning
        </div>
        <h1 className="mb-8 font-heading text-[clamp(1.2rem,4vw,1.8rem)] font-black leading-relaxed text-paper-aged">
          本網站包含政治暴力
          <br />
          及兇殺案件之相關內容
        </h1>
        <p className="mb-16 font-literary text-[clamp(0.9rem,2vw,0.95rem)] leading-8 text-dust">
          以下內容取材自促進轉型正義委員會、最高檢察署
          <br className="hidden sm:block" />
          及監察院之公開調查報告，涉及1980年林宅血案
          <br className="hidden sm:block" />
          之暴力事件描述。請斟酌自身狀況後再行閱讀。
        </p>
        <button
          onClick={onEnter}
          className="min-h-[44px] cursor-pointer border border-blood-dark bg-transparent px-10 py-3 font-heading text-sm tracking-[0.15em] text-blood transition-all duration-400 hover:border-blood hover:bg-blood-dark hover:text-paper-aged active:bg-blood-dark active:text-paper-aged"
        >
          我了解，繼續閱讀
        </button>
      </div>
    </section>
  )
}
