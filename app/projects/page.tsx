// app/projects/page.tsx
import { PROJECTS } from '../data'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { ArrowRight } from 'lucide-react'
export default function ProjectsPage() {
  return (
    <main className="space-y-0">
      <h1 className="mb-5 text-2xl font-bold">All Projects</h1>

      <div className="flex flex-col space-y-0">
        {PROJECTS.map((project) => {
          const isAvailable = Boolean(project.link)

          const cardContent = (
            <div
              className={`relative overflow-hidden rounded-xl ${
                isAvailable
                  ? 'transition-transform duration-300 group-hover:scale-[0.97]'
                  : 'opacity-60'
              }`}
            >
              {isAvailable && (
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
              )}

              <div className="relative z-10 flex items-center justify-between">
                <div className="space-y-1">
                  <h4
                    className={`flex items-center gap-2 font-normal ${
                      isAvailable
                        ? 'text-zinc-800 dark:text-zinc-100'
                        : 'text-zinc-500 italic dark:text-zinc-500'
                    }`}
                  >
                    {project.name}
                    {!isAvailable && (
                      <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
                        Coming Soon
                      </span>
                    )}
                  </h4>
                  <p
                    className={`text-sm ${
                      isAvailable
                        ? 'text-zinc-500 dark:text-zinc-400'
                        : 'text-zinc-400 dark:text-zinc-600'
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {isAvailable && (
                  <ArrowRight
                    size={18}
                    className="ml-4 shrink-0 transform text-zinc-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 dark:text-zinc-700"
                  />
                )}
              </div>
            </div>
          )

          return isAvailable ? (
            <Link
              key={project.name}
              href={project.link}
              rel="noopener noreferrer"
              className="group block rounded-xl px-4 py-4 transition-all duration-300 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/40"
            >
              {cardContent}
            </Link>
          ) : (
            <div
              key={project.name}
              className="cursor-not-allowed rounded-xl bg-zinc-100/10 px-4 py-4 dark:bg-zinc-800/20"
            >
              {cardContent}
            </div>
          )
        })}
      </div>
    </main>
  )
}
