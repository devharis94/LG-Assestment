import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Storyblok Article Website',
  description: 'A website displaying articles from Storyblok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <div className="mx-auto px-4 max-w-[1840px]">
          {children}
        </div>
      </body>
    </html>
  )
}