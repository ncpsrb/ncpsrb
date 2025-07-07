'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { ABOUT_ME } from './data'
import { Magnetic } from '@/components/ui/magnetic'
import { Github, Twitter, Linkedin, ArrowLeft } from 'lucide-react'

import { usePathname, useRouter } from 'next/navigation'
function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}
export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const isHome = pathname === '/'
  const isMainPage = ['/projects', '/blog'].includes(pathname)
  const showBack = !isHome && !isMainPage
  return (
    <header className="mt-6 mb-8 flex items-center justify-between md:mt-6">
      <div className="flex items-center gap-2">
        {showBack ? (
          // Back Button
          <button
            onClick={() => router.back()}
            className="group relative h-15 w-15 overflow-hidden rounded-full border border-zinc-300 dark:border-zinc-700"
          >
            <img
              src={ABOUT_ME[0].image}
              alt="Profile"
              className="h-15 w-15 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowLeft className="h-5 w-5 text-white" />
            </div>
          </button>
        ) : (
          // Normal Home/Profile
          <Link
            href="/"
            className="group relative h-15 w-15 overflow-hidden rounded-full border border-zinc-300 dark:border-zinc-700"
          >
            <img
              src={ABOUT_ME[0].image}
              alt="Profile"
              className="h-15 w-15 object-cover"
            />
            {!isHome && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowLeft className="h-5 w-5 text-white" />
              </div>
            )}
          </Link>
        )}
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            {ABOUT_ME[0].name}
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            {ABOUT_ME[0].profession}
          </TextEffect>
        </div>
      </div>

      {/* Right Side: Social Links */}
      <div className="flex items-center gap-1">
        <MagneticSocialLink link="https://github.com/ncpsrb">
          <Github className="h-4 w-4" />
        </MagneticSocialLink>

        <MagneticSocialLink link="https://x.com/ncpasaribu">
          <Twitter className="h-4 w-4" />
        </MagneticSocialLink>

        <MagneticSocialLink link="https://linkedin.com/in/natanaelps">
          <Linkedin className="h-4 w-4" />
        </MagneticSocialLink>
      </div>
    </header>
  )
}
