import Giscus from '@giscus/react'

/**
 * 留言板 — Guestbook
 *
 * Embeds GitHub Discussions as a comment wall via giscus.
 * Non-technical visitors can leave messages by signing in with GitHub.
 * All comments appear in the repo's Discussions tab.
 */
export function Guestbook() {
  return (
    <div className="mx-auto w-full max-w-[720px]">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 font-document text-[0.75rem] uppercase tracking-[0.4em] text-incense">
          GUESTBOOK
        </div>
        <h3 className="mb-3 font-narrative text-[clamp(1.3rem,4vw,2rem)] font-bold text-paper-aged">
          留言板
        </h3>
        <p className="font-narrative text-[clamp(0.9rem,2vw,1rem)] leading-[2] text-dust">
          讀完之後有什麼想法？無論是感想、疑問、補充資料，或只是想說一句話——
          都歡迎留言。你的每一則留言都會保存在本專案的{' '}
          <a
            href="https://github.com/soanseng/the-lin/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-incense/80 underline decoration-incense/30 underline-offset-4 transition-colors hover:text-incense"
          >
            GitHub Discussions
          </a>{' '}
          中。
        </p>
        <p className="mt-2 font-document text-[0.75rem] leading-6 text-stone/60">
          需要 GitHub 帳號登入。沒有帳號？也可以直接到{' '}
          <a
            href="https://github.com/soanseng/the-lin/discussions/new?category=general"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone underline decoration-stone/30 underline-offset-4 transition-colors hover:text-incense"
          >
            Discussions 頁面
          </a>{' '}
          發表。
        </p>
      </div>

      {/* Giscus widget */}
      <div className="giscus-wrapper overflow-hidden rounded-sm border border-smoke/20">
        <Giscus
          id="guestbook"
          repo="soanseng/the-lin"
          repoId="R_kgDORL211Q"
          category="General"
          categoryId="DIC_kwDORL211c4C2HSJ"
          mapping="specific"
          term="留言板 Guestbook"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="noborder_dark"
          lang="zh-TW"
          loading="lazy"
        />
      </div>
    </div>
  )
}
