import { useEffect, useState } from 'react'

export default function ScrollHint() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight > 24
      const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 24
      setVisible(scrollable && !atBottom)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-10 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex justify-center pb-1">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-5 w-5 animate-bounce text-emerald-600"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className="h-16 w-full bg-gradient-to-t from-emerald-200/80 via-emerald-100/50 to-transparent backdrop-blur-[4px]" />
    </div>
  )
}
