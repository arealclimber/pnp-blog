'use client'
import React, { useState, useEffect } from 'react'

export interface TOCItem {
  value: string
  url: string
  depth: number
}

interface FloatingTOCProps {
  toc: TOCItem[]
}

export default function FloatingTOC({ toc }: FloatingTOCProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20% 0px', // 優化檢測，排除頁面底部20%區域
      threshold: 0.2, // 當章節20%進入視窗時觸發，提高靈敏度
    }

    console.log('observerOptions', observerOptions)

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('元素進入視窗:', entry.target.id)
          setActiveId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // 為每個章節元素建立監控
    console.log(
      '設置監控的TOC項目:',
      toc.map((item) => item.value)
    )
    toc.forEach((item) => {
      // 嘗試找出元素，首先嘗試直接使用 value，然後嘗試轉換為小寫並使用 slug
      let element = document.getElementById(item.value)

      // 如果沒找到元素，嘗試使用 URL（可能包含標題的 slug 形式）
      if (!element && item.url) {
        // 去除 URL 中的 # 前綴獲取 ID
        const urlId = item.url.replace(/^#/, '')
        console.log('嘗試通過 URL 查找元素:', urlId)
        element = document.getElementById(urlId)
      }

      if (element) {
        console.log('找到元素並設置監控:', element.id)
        observer.observe(element)
      } else {
        console.warn('找不到元素:', item.value, '嘗試過的 URL:', item.url)
      }
    })

    // 清除監控
    return () => {
      toc.forEach((item) => {
        const element = document.getElementById(item.value)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [toc])

  useEffect(() => {
    // If the screen width is less than 768px, collapse the TOC by default
    if (window.innerWidth < 768) {
      setIsCollapsed(true)
    }
  }, [])

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev)
  }

  const leftArrowIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const rightArrowIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  // 在組件渲染時檢查當前的 activeId
  useEffect(() => {
    console.log('當前活動ID:', activeId)
  }, [activeId])

  return (
    <nav className="fixed right-0 top-1/3 z-50 max-h-[80vh] max-w-[50vw] overflow-y-auto border border-gray-200 bg-white p-2 opacity-90 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:max-w-[25vw]">
      <div className="flex items-center justify-between gap-3">
        <p className={`${isCollapsed ? 'hidden' : 'block text-start font-semibold'}`}>
          Table of Contents
        </p>
        <button
          onClick={toggleCollapse}
          className="text-sm text-gray-500 hover:text-primary-600 hover:underline focus:outline-none dark:text-gray-300 dark:hover:text-primary-300"
        >
          {isCollapsed ? leftArrowIcon : rightArrowIcon}
        </button>
      </div>
      <div className={`${isCollapsed ? 'hidden' : 'mt-3 flex flex-col gap-2'}`}>
        {!isCollapsed && (
          <ul className="ml-2 list-disc pl-2 text-gray-800 dark:text-gray-300">
            {toc.map((item) => {
              // If the url ends with a number (e.g. -4), remove it
              const cleanedUrl = item.url.replace(/-\d+$/, '')
              // 獲取用於比較的 ID：如果 URL 存在就使用 URL 中的 ID，否則使用 value
              const itemId = item.url ? item.url.replace(/^#/, '') : item.value

              return (
                <li
                  key={item.value}
                  className={`${
                    itemId === activeId || item.value === activeId
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-gray-800 dark:text-gray-300'
                  }`}
                  style={{ marginLeft: `${(item.depth - 1) * 10}px` }}
                >
                  <a
                    href={cleanedUrl}
                    className="block truncate hover:underline"
                    onClick={() => console.log('點擊目錄項目:', item.value, 'URL:', cleanedUrl)}
                  >
                    {item.value}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </nav>
  )
}
