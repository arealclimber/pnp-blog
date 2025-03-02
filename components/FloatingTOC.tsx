import React from 'react'

export interface TOCItem {
  value: string
  url: string
  depth: number
}

interface FloatingTOCProps {
  toc: TOCItem[]
}

export default function FloatingTOC({ toc }: FloatingTOCProps) {
  return (
    <nav className="fixed right-2 top-48 z-50 hidden max-h-[80vh] max-w-[20vw] overflow-y-auto border border-gray-200 bg-white p-4 opacity-80 shadow-lg dark:border-gray-700 dark:bg-gray-900 lg:block">
      <p className="mb-2 text-start">Table of Contents</p>
      <ul className="m-0 list-disc pl-2 text-gray-800 dark:text-gray-300">
        {toc.map((item) => {
          // 若 url 尾端符合 -數字（例如 -4），則移除
          const cleanedUrl = item.url.replace(/-\d+$/, '')
          return (
            <li
              key={item.value}
              className="mb-2"
              style={{ marginLeft: `${(item.depth - 1) * 10}px` }}
            >
              <a
                href={cleanedUrl}
                className="block truncate text-gray-800 hover:underline dark:text-gray-300"
              >
                {item.value}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
