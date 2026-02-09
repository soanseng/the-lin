# Contributing / 貢獻指南

感謝你對「林宅血案互動體驗網站」的關注與貢獻意願。本專案旨在以政府公開調查報告為基礎，呈現這段台灣白色恐怖時期的重要歷史。

## Table of Contents / 目錄

- [Getting Started / 開始開發](#getting-started--開始開發)
- [Content Guidelines / 內容準則](#content-guidelines--內容準則)
- [Code Style / 程式碼風格](#code-style--程式碼風格)
- [Pull Request Guidelines / PR 準則](#pull-request-guidelines--pr-準則)
- [Issue Reporting / 問題回報](#issue-reporting--問題回報)

---

## Getting Started / 開始開發

### Prerequisites / 前置需求

- Node.js 22+
- npm 10+

### Local Development / 本地開發

```bash
# 複製專案
git clone https://github.com/soanseng/the-lin.git
cd the-lin

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 型別檢查
npm run type-check

# ESLint 檢查
npm run lint

# 建構正式版本
npm run build

# 預覽正式版本
npm run preview
```

開發伺服器啟動後，瀏覽器打開 `http://localhost:5173/the-lin/` 即可預覽。

---

## Content Guidelines / 內容準則

### Source Documents / 引用來源

本專案所有歷史敘述內容**必須**可追溯至以下三份政府公開文件之一：

| 簡稱 | 全名 | 機關 |
|------|------|------|
| 促轉會報告 | 促-林-short-version.pdf | 促進轉型正義委員會 |
| 高檢署報告 | 林宅血案、陳文成命案重啟調查偵查報告.pdf | 臺灣高等檢察署 |
| 監察院糾正案文 | 監112內正0004.pdf | 監察院 |

### Content Correction Rules / 內容修正規則

- 提出內容修正時，**必須**附上引用的來源文件名稱及對應段落
- 使用民國紀年與西元並列（如來源文件有使用民國紀年）
- 敏感內容（暴力描述）應著重於營造氛圍張力，而非渲染血腥細節
- 語調應喚起不安與對不公義的感受，而非利用悲劇

---

## Code Style / 程式碼風格

### Tech Stack / 技術棧

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (as needed)

### TypeScript

- 使用嚴格模式 (`strict: true`)
- 優先使用 `interface` 定義元件 props
- 避免使用 `any`，善用泛型與 union types
- 所有元件使用函式元件 (functional components)

### Tailwind CSS

- 遵循 mobile-first 設計原則
- 使用專案定義的設計系統色彩變數（見 `CLAUDE.md` 中的 Design System 章節）
- 避免行內樣式 (inline styles)，除非有動態計算需求

### Component Conventions / 元件慣例

```
src/
├── components/       # 可重用的 UI 元件
│   ├── ui/           # shadcn/ui 基礎元件
│   ├── narrative/    # 敘事元件（捲動驅動、揭露效果）
│   ├── timeline/     # 時間軸元件
│   ├── interactive/  # 互動元素
│   └── layout/       # 頁面佈局、導覽
├── chapters/         # 各章節頁面元件
├── data/             # 結構化資料（從 PDF 提取）
├── hooks/            # 自定義 React hooks
├── lib/              # 工具函式、常數、型別
└── styles/           # 全域樣式
```

- 每個元件一個檔案
- 元件檔名使用 PascalCase（如 `ScrollReveal.tsx`）
- Hooks 檔名使用 camelCase 並以 `use` 開頭（如 `useScrollReveal.ts`）
- 資料檔案使用 camelCase（如 `timeline.ts`）

### Formatting / 格式化

- ESLint 設定已包含在專案中，提交前請執行 `npm run lint`
- 使用 2 空格縮排
- 使用單引號

---

## Pull Request Guidelines / PR 準則

### Before Submitting / 提交前

1. 確認所有檢查通過：
   ```bash
   npm run type-check && npm run lint && npm run build
   ```
2. 測試行動裝置版面（本專案為 mobile-first 設計）
3. 確認無敏感資訊（API 金鑰、個人資料等）被提交

### PR Description / PR 描述

- 清楚說明變更的目的與範圍
- 如涉及歷史內容變更，必須註明引用的來源文件
- 附上相關的 Issue 編號（如有）
- 提供螢幕截圖（如涉及 UI 變更）

### Review Process / 審查流程

- 所有 PR 需經至少一人審查
- 內容相關的 PR 會特別確認引用來源的正確性
- CI 必須全部通過才能合併

---

## Issue Reporting / 問題回報

我們提供以下 Issue 模板：

- **Bug Report / 問題回報** — 回報程式錯誤或顯示問題
- **Content Correction / 內容修正** — 指出歷史內容的錯誤（必須附上來源文件引用）
- **Feature Request / 功能建議** — 建議新功能或改善

---

## Code of Conduct / 行為準則

- 尊重歷史事件中的受害者與家屬
- 保持討論的理性與建設性
- 不容忍任何形式的騷擾或歧視

感謝你的貢獻，讓更多人能了解這段不應被遺忘的歷史。
