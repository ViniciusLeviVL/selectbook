'use client'

import { PersonIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type MenuProps = {
  className?: string
}

export function Menu({ className }: MenuProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }
  return (
    <>
      <header className={cn('border-b p-2 sm:px-6 sm:py-4 w-full', className)}>
        <nav className="h-full">
          <div className="space-between flex items-center">
            <div className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <Link href="/">
                <div
                  className={cn(
                    'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
                    isActive('/') &&
                      'dark:bg-slate-950 dark:text-slate-50 shadow text-slate-950 bg-white',
                  )}
                >
                  Início
                </div>
              </Link>
              <Link href="/livros">
                <div
                  className={cn(
                    'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
                    isActive('/livros') &&
                      'dark:bg-slate-950 dark:text-slate-50 shadow text-slate-950 bg-white',
                  )}
                >
                  Meus Livros
                </div>
              </Link>
              <Link href="/explorar">
                <div
                  className={cn(
                    'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
                    isActive('/explorar') &&
                      'dark:bg-slate-950 dark:text-slate-50 shadow text-slate-950 bg-white',
                  )}
                >
                  Explorar
                </div>
              </Link>
            </div>
            <div className="ml-auto mr-4">
              <Link href="/perfil">
                <Button>
                  <PersonIcon className="mr-2 h-4 w-4" />
                  Meu Perfil
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
