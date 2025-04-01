'use client'
import React, { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import Image from 'next/image'

interface TimelineItem {
  date: string
  action: string
  img?: string
  link?: string
}

interface VerticalTimelineProps {
  items: TimelineItem[]
}

export function VerticalTimeline({ items }: VerticalTimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative mx-0 lg:mx-2">
      <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gray-200"></div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-8 flex w-full items-center justify-between ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          } transition-opacity duration-150 ${
            hoveredIndex !== null && hoveredIndex !== index ? 'opacity-20' : ''
          }`}
          role="button" // 添加角色
          tabIndex={0} // 使其可聚焦
          onKeyDown={(e) => {
            // 添加鍵盤事件處理
            if (e.key === 'Enter' || e.key === ' ') {
              if (item.link) {
                window.open(item.link, '_blank')
              }
            }
          }}
          onClick={() => {
            if (item.link) {
              window.open(item.link, '_blank')
            }
          }}
        >
          <div className="order-1 w-5/12"></div>
          <div
            className={`z-0 order-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full shadow-xl transition-colors duration-150 ${
              hoveredIndex === index ? 'bg-sky-300' : 'bg-gray-800 dark:bg-gray-200'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h1 className="mx-auto my-auto text-center text-lg font-semibold text-white dark:text-black">
              <CalendarIcon size={18} />
            </h1>
          </div>
          <div
            className={`order-1 w-5/12 cursor-pointer rounded-lg px-6 py-4 shadow-xl transition-colors duration-150 ${
              index % 2 === 0 ? 'text-right' : 'text-left'
            } ${hoveredIndex === index ? 'bg-sky-100 dark:bg-sky-200' : 'bg-gray-100'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="mb-3 text-xl font-bold text-stone-800">{item.date}</h3>
            <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
              {item.action}
            </p>
            {item.img && <Image src={item.img} alt="timeline" width={100} height={100} />}
          </div>
        </div>
      ))}
    </div>
  )
}
