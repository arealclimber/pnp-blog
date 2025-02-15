import { VerticalTimeline } from '@/components/VerticalTimeline'
import timelineItems from 'constants/milestones'
import React from 'react'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Timeline' })

const TimelineSection = () => {
  return (
    <div className="">
      <div className="mx-0 mt-0">
        <div className="mb-8 flex flex-col space-y-2">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Receipts
          </h1>
        </div>
        <VerticalTimeline items={timelineItems} />
      </div>
    </div>
  )
}

export default TimelineSection
