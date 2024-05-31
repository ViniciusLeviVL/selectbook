'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { HomeIcon, LayersIcon, MagicWandIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logoSrc from '@/../public/img/logo/android-chrome-192x192.png'
import { UserDropdown } from '../user-dropdown'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className={cn('pb-12 space-y-4 py-4', className)}>
      <div className="px-3 pb-2">
        <div className="w-full flex justify-center">
          <Image src={logoSrc} alt="logo" className="object-cover w-3/5" />
        </div>
        <div>
          <Link href="/app">
            <Button
              variant={isActive('/app') ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <HomeIcon className="mr-2 size-4" />
              Início
            </Button>
          </Link>
          <Link href="/app/livros">
            <Button
              variant={isActive('/app/livros') ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <LayersIcon className="mr-2 size-4" />
              Meus Livros
            </Button>
          </Link>
          <Link href="/app/explorar">
            <Button
              variant={isActive('/app/explorar') ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <MagicWandIcon className="mr-2 size-4" />
              Explorar
            </Button>
          </Link>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Biblioteca
        </h2>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            Romance
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Mistério
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Fantasia e Ficção
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Suspense e Terror
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Jovem Adulto
          </Button>
        </div>
      </div>
      <div className="px-4 py-2 mt-20">
        <UserDropdown />
      </div>
    </div>
  )
}
