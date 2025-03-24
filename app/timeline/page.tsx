import TimelineSection from '@/components/TimelineSection'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Timeline
          </h1>
        </div>
        <div>
          <div className="flex flex-col space-y-2 pt-8 text-start">
            <p>Record my experiences to look back and see how far I've come.</p>
            <p>Whether stressful or joyful, they shape who I am.</p>
            <div className="flex space-x-2">
              <p>And I'm glad to share them with you.</p>
            </div>
            <div>
              {' '}
              <Link href="/projects" className="inline-block">
                <p className="text-red-700 underline underline-offset-4 hover:opacity-80 dark:text-red-400">
                  Professional Projects
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <TimelineSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
