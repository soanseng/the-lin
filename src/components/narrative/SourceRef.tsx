interface SourceRefProps {
  text: string
}

export function SourceRef({ text }: SourceRefProps) {
  return (
    <div className="mt-4 border-t border-smoke pt-2 font-document text-[0.75rem] tracking-[0.05em] text-stone">
      {text}
    </div>
  )
}
