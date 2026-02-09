import { useCallback, useEffect, useRef, useState } from 'react'

interface AudioAtmosphereOptions {
  /** Audio source URL */
  src: string
  /** Starting volume (0–1). Default: 0.15 */
  volume?: number
  /** Fade duration in ms. Default: 2000 */
  fadeDuration?: number
  /** Loop audio. Default: true */
  loop?: boolean
  /** Auto-play once user interacts (respects browser autoplay policy). Default: false */
  autoPlay?: boolean
}

interface AudioAtmosphereReturn {
  /** Whether audio is currently playing */
  isPlaying: boolean
  /** Whether audio is muted */
  isMuted: boolean
  /** Current volume (0–1) */
  volume: number
  /** Start playing with fade-in */
  play: () => void
  /** Stop with fade-out */
  stop: () => void
  /** Toggle mute */
  toggleMute: () => void
  /** Set volume (0–1) */
  setVolume: (v: number) => void
}

/**
 * Manages ambient audio playback with fade-in/out and volume control.
 * Respects prefers-reduced-motion by disabling auto-play.
 * Handles browser autoplay restrictions gracefully.
 */
export function useAudioAtmosphere({
  src,
  volume: initialVolume = 0.15,
  fadeDuration = 2000,
  loop = true,
  autoPlay = false,
}: AudioAtmosphereOptions): AudioAtmosphereReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolumeState] = useState(initialVolume)

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = loop
    audio.volume = 0
    audio.preload = 'none'
    audioRef.current = audio

    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current)
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [src, loop])

  // Animate volume from current to target over duration
  const fadeVolume = useCallback(
    (targetVolume: number, onComplete?: () => void) => {
      const audio = audioRef.current
      if (!audio) return

      if (fadeRef.current) cancelAnimationFrame(fadeRef.current)

      const startVolume = audio.volume
      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / fadeDuration, 1)
        // Ease-out curve for natural feel
        const eased = 1 - (1 - progress) ** 2
        audio.volume = startVolume + (targetVolume - startVolume) * eased

        if (progress < 1) {
          fadeRef.current = requestAnimationFrame(tick)
        } else {
          fadeRef.current = null
          onComplete?.()
        }
      }

      fadeRef.current = requestAnimationFrame(tick)
    },
    [fadeDuration],
  )

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    audio.volume = 0
    const promise = audio.play()
    if (promise) {
      promise
        .then(() => {
          setIsPlaying(true)
          fadeVolume(volume)
        })
        .catch(() => {
          // Autoplay blocked — user hasn't interacted yet. Silently ignore.
        })
    }
  }, [fadeVolume, volume])

  const stop = useCallback(() => {
    const audio = audioRef.current
    if (!audio || audio.paused) return

    fadeVolume(0, () => {
      audio.pause()
      setIsPlaying(false)
    })
  }, [fadeVolume])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.muted = false
      setIsMuted(false)
    } else {
      audio.muted = true
      setIsMuted(true)
    }
  }, [isMuted])

  const setVolume = useCallback(
    (v: number) => {
      const clamped = Math.max(0, Math.min(1, v))
      setVolumeState(clamped)
      const audio = audioRef.current
      if (audio && isPlaying) {
        audio.volume = clamped
      }
    },
    [isPlaying],
  )

  // Auto-play on first user interaction
  useEffect(() => {
    if (!autoPlay) return

    const handler = () => {
      play()
      document.removeEventListener('click', handler)
      document.removeEventListener('keydown', handler)
      document.removeEventListener('touchstart', handler)
    }

    document.addEventListener('click', handler, { once: true })
    document.addEventListener('keydown', handler, { once: true })
    document.addEventListener('touchstart', handler, { once: true })

    return () => {
      document.removeEventListener('click', handler)
      document.removeEventListener('keydown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [autoPlay, play])

  return { isPlaying, isMuted, volume, play, stop, toggleMute, setVolume }
}
