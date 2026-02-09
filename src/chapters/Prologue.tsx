export function Prologue() {
  return (
    <section
      id="prologue"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-void"
      style={{ boxShadow: 'inset 0 0 250px 80px rgba(0,0,0,0.6)' }}
    >
      <div className="text-center">
        <div
          className="font-heading text-sm font-light tracking-[0.5em] text-stone opacity-0"
          style={{ animation: 'fadeUp 2s ease 0.5s forwards' }}
        >
          民國六十九年
        </div>
        <h1
          className="font-narrative text-[clamp(2.5rem,8vw,5rem)] font-black leading-tight tracking-[0.15em] text-paper-aged opacity-0"
          style={{
            animation: 'fadeUp 2.5s ease 1.5s forwards',
            textShadow: '0 0 80px rgba(232, 220, 196, 0.1)',
          }}
        >
          二月二十八日
        </h1>
        <p
          className="mt-8 font-literary text-[clamp(0.85rem,2vw,1.1rem)] tracking-[0.1em] text-stone opacity-0"
          style={{ animation: 'fadeUp 2s ease 3s forwards' }}
        >
          美麗島事件軍法審判首度公開審訊之日
        </p>
        <p
          className="mt-4 font-document text-xs tracking-[0.2em] text-stone opacity-0"
          style={{ animation: 'fadeUp 2s ease 3.5s forwards' }}
        >
          FEBRUARY 28, 1980
        </p>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: 'fadeUp 1s ease 5s forwards' }}
      >
        <span className="mx-auto block h-10 w-px bg-gradient-to-b from-transparent to-dust" />
        <small className="mt-2 block font-heading text-[0.6rem] tracking-[0.3em] text-stone">
          SCROLL
        </small>
      </div>
    </section>
  )
}
