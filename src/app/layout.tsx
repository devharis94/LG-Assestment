import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'

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
      <body className="bg-white text-body">
        <div className="flex flex-col">

          <Sidebar />

          <main className="flex-1 pl-60 border max-w-[1840px]">
            {children}
          </main>

          <Footer />
        
        </div>
      </body>
    </html>
  )
}