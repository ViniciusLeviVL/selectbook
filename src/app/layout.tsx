import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'SelectBook',
  description: 'Página inicial da SelectBook',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased max-w-screen overflow-x-hidden',
          fontSans.variable,
        )}
      >
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  )
}
