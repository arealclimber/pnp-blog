import React, { useEffect, useState } from 'react'

const ReadingProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0)

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const totalHeight = scrollHeight - clientHeight
    const scrolled = (scrollTop / totalHeight) * 100
    setProgress(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[1000] h-2 w-full bg-transparent">
      <div
        className="h-full bg-blue-500/50 transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ReadingProgressBar
