'use client'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useState } from 'react'
import QRCodeModal from '@/components/QRCodeModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-0 flex cursor-pointer items-center space-x-1 transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:text-primary-300 dark:hover:text-primary-400 `}
            >
              <path d="M 40 0 C 34.535156 0 30.078125 4.398438 30 9.84375 C 30 9.894531 30 9.949219 30 10 C 30 13.6875 31.996094 16.890625 34.96875 18.625 C 36.445313 19.488281 38.167969 20 40 20 C 45.515625 20 50 15.515625 50 10 C 50 4.484375 45.515625 0 40 0 Z M 28.0625 10.84375 L 17.84375 15.96875 C 20.222656 18.03125 21.785156 21 21.96875 24.34375 L 32.3125 19.15625 C 29.898438 17.128906 28.300781 14.175781 28.0625 10.84375 Z M 10 15 C 4.484375 15 0 19.484375 0 25 C 0 30.515625 4.484375 35 10 35 C 12.050781 35 13.941406 34.375 15.53125 33.3125 C 18.214844 31.519531 20 28.472656 20 25 C 20 21.410156 18.089844 18.265625 15.25 16.5 C 13.71875 15.546875 11.929688 15 10 15 Z M 21.96875 25.65625 C 21.785156 28.996094 20.25 31.996094 17.875 34.0625 L 28.0625 39.15625 C 28.300781 35.824219 29.871094 32.875 32.28125 30.84375 Z M 40 30 C 37.9375 30 36.03125 30.644531 34.4375 31.71875 C 31.769531 33.515625 30 36.542969 30 40 C 30 40.015625 30 40.015625 30 40.03125 C 29.957031 40.035156 29.917969 40.058594 29.875 40.0625 L 30 40.125 C 30.066406 45.582031 34.527344 50 40 50 C 45.515625 50 50 45.515625 50 40 C 50 34.484375 45.515625 30 40 30 Z"></path>
            </svg>
          </button>
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>
      <QRCodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}
