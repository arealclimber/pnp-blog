'use client'
import { formatDate } from 'pliny/utils/formatDate'
import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import FloatingTOC, { TOCItem } from '@/components/FloatingTOC'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
  toc?: TOCItem[]
}

export default function PostLayout({
  content,
  authorDetails,
  next,
  prev,
  children,
  toc,
}: LayoutProps) {
  const { filePath, path, slug, date, title, tags, readingTime, lastmod } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-3 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">發布於</dt>
                  <dd
                    className={`${lastmod ? 'text-xs' : 'text-base'} font-medium leading-6 text-gray-500 dark:text-gray-400`}
                  >
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                  {lastmod && (
                    <>
                      <dt className="sr-only">Last Modified</dt>
                      <dd className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        Last Modified:{' '}
                        <time dateTime={lastmod}>{formatDate(lastmod, siteMetadata.locale)}</time>
                      </dd>
                    </>
                  )}
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {content.readingTime.text}
              </div>
              {tags && (
                <div className="flex justify-center gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}
            </div>
          </header>
          <div className="">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="pb-0 pt-6 text-sm text-gray-700 dark:text-gray-300">
                {/* TODO: discussUrl and view-on-github */}
              </div>
            </div>
            {(next || prev) && (
              <div className="grid grid-cols-2 gap-8 pt-6">
                {prev && prev.path ? (
                  <div className="text-left">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Previous Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-400">
                      <Link href={`/${prev.path}`}>{prev.title}</Link>
                    </div>
                  </div>
                ) : (
                  <div />
                )}
                {next && next.path ? (
                  <div className="text-right">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Next Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-400">
                      <Link href={`/${next.path}`}>{next.title}</Link>
                    </div>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            )}
          </div>
        </div>
      </article>
      {toc && toc.length > 0 && <FloatingTOC toc={toc} />}
    </SectionContainer>
  )
}
