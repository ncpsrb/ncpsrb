'use client'
// import { motion } from 'motion/react'
import { motion } from 'framer-motion'
import { Mail, XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { useState } from 'react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { PROJECTS, WORK_EXPERIENCE, BLOG_POSTS, ABOUT_ME } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function Personal() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6)
  const visibleBlog = showAll ? BLOG_POSTS : BLOG_POSTS.slice(0, 3)
  return (
    <motion.main
      className="space-y-10"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="text-gray flex flex-col gap-y-6">
          <div className="text-2xl text-zinc-600 dark:text-zinc-400">
            <p>{ABOUT_ME[0].description}</p>
          </div>

          {/* Availability Badge */}
          <div className="flex items-center gap-2 text-sm font-light text-gray-400">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-500"></span>
            </span>
            Currently available for work
          </div>

          {/* Contact Section */}
          <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-500">
              <Mail />
              Contact Me
            </button>

            <p>
              Or reach out to me via{' '}
              <Link
                href="https://twitter.com/yourhandle"
                className="font-semibold underline hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>{' '}
              or{' '}
              <Link
                href="https://instagram.com/yourhandle"
                className="font-semibold underline hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-medium">Products</h3>
          {PROJECTS.length > 4 && (
            <Link href="/projects" className="text-sm font-medium">
              Show All →
            </Link>
          )}
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.name}
              className="min-w-[300px] transform transition-transform duration-300 hover:scale-[0.98] sm:min-w-0"
            >
              <div className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 ring-1 ring-zinc-200/50 transition-all duration-300 ring-inset hover:ring-2 hover:shadow-xl hover:ring-zinc-400/50 dark:from-zinc-900 dark:to-zinc-800 dark:ring-zinc-800/50 dark:hover:ring-zinc-300/30">
                {/* Video */}
                <div className="transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <ProjectVideo src={project.video} />
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 transition-all duration-300">
                  <a
                    className="text-base font-semibold tracking-wide text-white group-hover:underline"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                  </a>
                  <p className="mt-1 text-sm text-zinc-200">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-medium">Notes</h3>
          {BLOG_POSTS.length > 3 && (
            <Link href="/blog" className="text-sm font-medium">
              Show All →
            </Link>
          )}
        </div>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-300/10"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {visibleBlog.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>
    </motion.main>
  )
}
