'use client'

import { WORK_EXPERIENCE } from '../data'
import Link from 'next/link'
import { ArrowRight, Briefcase } from 'lucide-react'

export default function ExperiencePage() {
  // clone + sort so original array is not mutated
  const sortedExperience = [...WORK_EXPERIENCE].sort(
    (a, b) => Number(b.start) - Number(a.start),
  )

  return (
    <main className="space-y-6 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">All Experience</h1>

      <div className="flex flex-col space-y-4">
        {sortedExperience.map((job) => {
          const isCurrent = String(job.end).toLowerCase() === 'present'
          const isAvailable = Boolean(job.link)
          const href = job.link ?? '#'

          return isAvailable ? (
            <Link
              key={job.id}
              href={href}
              data-id={job.id}
              className={[
                // container + stacking context
                'group relative isolate block rounded-xl px-4 py-4 transition-all duration-200 ease-in-out',
                // Professional hover effects
                'hover:bg-zinc-50 dark:hover:bg-zinc-800/50',
                'hover:shadow-sm hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/20',
                // Subtle border accent
                'border-l-2 border-l-zinc-200 dark:border-l-zinc-700',
                'hover:border-l-lime-400 dark:hover:border-l-lime-500',
                // Focus states for accessibility
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500',
                // Prevent overflow
                'overflow-hidden',
              ].join(' ')}
            >
              <Row job={job} isCurrent={isCurrent} withArrow />
            </Link>
          ) : (
            <div
              key={job.id}
              className={[
                'relative cursor-not-allowed rounded-xl px-4 py-4 opacity-60 overflow-hidden',
                'bg-zinc-50/30 dark:bg-zinc-800/20',
                'border-l-2 border-l-zinc-200 dark:border-l-zinc-700',
              ].join(' ')}
            >
              <Row job={job} isCurrent={isCurrent} />
            </div>
          )
        })}
      </div>
    </main>
  )
}

function Row({
  job,
  isCurrent,
  withArrow = false,
}: {
  job: {
    id: string
    title: string
    company: string
    status?: string
    description?: string
    start: string
    end: string
  }
  isCurrent: boolean
  withArrow?: boolean
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Title and company row */}
      <div className="min-w-0">
        <h4 className="font-normal text-zinc-900 dark:text-zinc-100">
          <span className="inline-flex items-center gap-2 flex-wrap">
            <Briefcase className="h-4 w-4 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
            <span className="truncate min-w-0">{job.title}</span>
            <span className="text-zinc-400 flex-shrink-0">·</span>
            <span className="truncate min-w-0 text-zinc-700 dark:text-zinc-300">
              {job.company}
            </span>
            {job.status && (
              <>
                <span className="text-zinc-400 flex-shrink-0">·</span>
                <span className="truncate text-zinc-600 italic dark:text-zinc-400">
                  {job.status}
                </span>
              </>
            )}
          </span>
        </h4>
      </div>

      {/* Description with better truncation */}
      {job.description && (
        <div className="w-full">
          <p className="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed break-words">
            {job.description}
          </p>
        </div>
      )}

      {/* Current status badge */}
      {isCurrent && (
        <div className="w-fit">
          <span className="inline-flex items-center rounded-full bg-lime-500/15 px-2 py-0.5 text-[10px] font-medium text-lime-600 ring-1 ring-lime-500/30 ring-inset dark:text-lime-400">
            Currently Working Here
          </span>
        </div>
      )}

      {/* Dates and arrow row */}
      <div className="flex items-center justify-between w-full">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {job.start} - {job.end}
        </span>
        {withArrow && (
          <span className="inline-flex translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 text-zinc-400 dark:text-zinc-600">
            →
          </span>
        )}
      </div>
    </div>
  )
}
