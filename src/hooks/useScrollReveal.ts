import { useEffect } from 'react'

/**
 * Adds 'revealed' class to elements with [data-reveal] when they enter viewport.
 * Uses IntersectionObserver for performant scroll-triggered animations.
 *
 * Performance notes:
 * - Only observes elements that haven't been revealed yet
 * - Unobserves elements after reveal (one-shot)
 * - Uses a MutationObserver to pick up dynamically added [data-reveal] elements
 *   (important for lazy-loaded chapters via React.lazy/Suspense)
 */
export function useScrollReveal() {
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      // Immediately reveal all elements
      const elements = document.querySelectorAll('[data-reveal]:not(.revealed)')
      for (const el of elements) {
        el.classList.add('revealed')
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      },
    )

    // Observe existing elements
    const elements = document.querySelectorAll('[data-reveal]:not(.revealed)')
    for (const el of elements) {
      observer.observe(el)
    }

    // Watch for dynamically added [data-reveal] elements (from lazy-loaded chunks)
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            // Check if the added node itself has data-reveal
            if (node.hasAttribute('data-reveal') && !node.classList.contains('revealed')) {
              if (prefersReduced) {
                node.classList.add('revealed')
              } else {
                observer.observe(node)
              }
            }
            // Check descendants
            const descendants = node.querySelectorAll('[data-reveal]:not(.revealed)')
            for (const desc of descendants) {
              if (prefersReduced) {
                desc.classList.add('revealed')
              } else {
                observer.observe(desc)
              }
            }
          }
        }
      }
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
