interface HorrorCounterProps {
  number: string | number
  label: string
}

export function HorrorCounter({ number, label }: HorrorCounterProps) {
  return (
    <div data-reveal className="relative py-32 text-center">
      <div className="font-document text-[clamp(5rem,20vw,12rem)] font-black leading-none text-blood-dark opacity-60 [text-shadow:0_0_100px_rgba(153,27,27,0.4)]">
        {number}
      </div>
      <div className="mt-4 font-literary text-base tracking-[0.2em] text-dust">
        {label}
      </div>
    </div>
  )
}
