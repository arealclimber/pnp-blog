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

  // 在 client side 判斷偵測螢幕寬度
  useEffect(() => {
    // 使用 768px 為行動裝置斷點
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
              // 若 url 尾端符合 -數字（例如 -4），則移除
              const cleanedUrl = item.url.replace(/-\d+$/, '')
              return (
                <li
                  key={item.value}
                  className="mb-2"
                  style={{ marginLeft: `${(item.depth - 1) * 10}px` }}
                >
                  <a href={cleanedUrl} className="block truncate hover:underline">
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
