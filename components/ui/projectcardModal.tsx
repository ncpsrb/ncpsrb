'use client'

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { EyeIcon, Link, XIcon } from 'lucide-react'

type Project = {
  name: string
  description: string
  video: string
  link: string
}

const isVideo = (url: string) => {
  try {
    const extension = new URL(url).pathname.split('.').pop()
    return /(mp4|webm|mov)$/i.test(extension ?? '')
  } catch {
    return false
  }
}

export default function ProjectCardModal({ project }: { project: Project }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="group relative w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 ring-1 ring-zinc-200/50 transition-all duration-300 ring-inset hover:ring-2 hover:shadow-xl hover:ring-zinc-400/50 dark:from-zinc-900 dark:to-zinc-800 dark:ring-zinc-800/50 dark:hover:ring-zinc-300/30">
          {/* Video Preview */}
          <div className="transition-transform duration-500 ease-in-out group-hover:scale-105">
            {isVideo(project.video) ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="aspect-video w-full rounded-xl"
              />
            ) : (
              <img
                loading="lazy"
                src={project.video}
                alt={project.name}
                className="aspect-video w-full rounded-xl object-cover"
              />
            )}
          </div>

          {/* Overlay Text */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 transition-all duration-300">
            <p className="text-base font-semibold tracking-wide text-white">
              {project.name}
            </p>

            <p className="mt-1 text-sm text-zinc-200">{project.description}</p>
          </div>
        </div>
      </MorphingDialogTrigger>

      {/* Modal Content */}
      <MorphingDialogContainer>
        {/* Modal Content */}
        <MorphingDialogContent className="relative w-[90vw] max-w-6xl rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200/50 transition-all duration-300 ease-in-out ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isVideo(project.video) ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="h-[60vh] w-full rounded-xl object-contain"
            />
          ) : (
            <img
              loading="eager"
              src={project.video}
              alt={project.name}
              className="h-[60vh] w-full rounded-xl object-contain"
            />
          )}
        </MorphingDialogContent>

        {/* Top-right Buttons (Eye + Close) */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
          {project.link && (
            <a
              href={project.link}
              className="inline-flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              title="See Details"
            >
              <EyeIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-200" />
            </a>
          )}

          <button
            onClick={() =>
              document.activeElement?.dispatchEvent(
                new Event('click', { bubbles: true }),
              )
            }
            className="inline-flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            title="Close"
          >
            <XIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-200" />
          </button>
        </div>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
