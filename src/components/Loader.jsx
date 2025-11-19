import { useEffect, useState } from 'react'

export default function Loader({ watchSelectors = ['img[data-hero]'], timeout = 4000 }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let done = false
    const timer = setTimeout(() => { if (!done) { done = true; setReady(true) } }, timeout)

    const images = watchSelectors.flatMap((sel) => Array.from(document.querySelectorAll(sel)))
    if (images.length === 0) {
      done = true; setReady(true)
      return () => clearTimeout(timer)
    }

    Promise.all(images.map(async (img) => {
      if (img.complete) {
        try { await img.decode?.() } catch {}
        return
      }
      await new Promise((res) => { img.addEventListener('load', res, { once: true }); img.addEventListener('error', res, { once: true }) })
      try { await img.decode?.() } catch {}
    })).then(() => { if (!done) { done = true; setReady(true) } })

    return () => clearTimeout(timer)
  }, [watchSelectors, timeout])

  return (
    <div aria-hidden className={`fixed inset-0 z-50 grid place-items-center bg-white transition-opacity duration-500 ${ready ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="animate-pulse text-slate-700">Chargement…</div>
    </div>
  )
}
