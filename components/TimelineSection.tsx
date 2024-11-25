import { VerticalTimeline } from '@/components/VerticalTimeline'
import timelineItems from 'constants/milestones'
import React from 'react'

const TimelineSection = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-3xl">
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
