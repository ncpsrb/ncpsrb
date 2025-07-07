'use client'

import { BLOG_POSTS } from '../data'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { ArrowRight } from 'lucide-react'

export default function BlogPage() {
  return (
    <main className="space-y-0">
      <h1 className="mb-5 text-2xl font-bold">All Blogs</h1>

      <div className="flex flex-col space-y-0">
        {BLOG_POSTS.map((blog) => (
          <Link
            key={blog.uid}
            href={blog.link}
            rel="noopener noreferrer"
            className="group block rounded-xl px-4 py-4 no-underline transition-all duration-300 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/40"
          >
            <div className="relative overflow-hidden rounded-xl">
              <AnimatedBackground
                enableHover
                className="absolute inset-0 z-0 rounded-xl bg-gradient-to-tr from-pink-500/10 to-blue-500/10"
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                }}
                children={[]}
              />
              <div className="relative z-10 flex items-center justify-between transition-transform duration-300 group-hover:scale-[0.97]">
                <div className="space-y-1">
                  <h4 className="flex items-center gap-2 font-normal text-zinc-700 dark:text-zinc-100">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {blog.description}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-4 shrink-0 transform text-zinc-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 dark:text-zinc-700"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
