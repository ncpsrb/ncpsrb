'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export default function LayoutProjectPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500"
        springOptions={{
          bounce: 0,
          duration: 0.2,
        }}
      />
      <main className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium mx-auto mt-10 max-w-4xl pb-20">
       

        <div className="space-y-6">
          {children}
        </div>
      </main>
    </>
  )
}
