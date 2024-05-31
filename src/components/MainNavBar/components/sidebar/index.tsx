'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
  ExclamationTriangleIcon,
  HomeIcon,
  LayersIcon,
  MagicWandIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className={cn('pb-12 space-y-4 py-4', className)}>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          SelectBook
        </h2>
        <div className="space-y-1">
          <Link href="/">
            <Button
              variant={isActive('/') ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <HomeIcon className="mr-2 size-4" />
              Início
            </Button>
          </Link>
          <Link href="/livros">
            <Button
              variant={isActive('/livros') ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <LayersIcon className="mr-2 size-4" />
              Meus Livros
            </Button>
          </Link>
          <Link href="/explorar">
            <Button
              variant={isActive('/perfil') ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <MagicWandIcon className="mr-2 size-4" />
              Explorar
            </Button>
          </Link>
          <Link href="/perfil">
            <Button
              variant={isActive('/perfil') ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <PersonIcon className="mr-2 size-4" />
              Meu Perfil
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
            <ExclamationTriangleIcon className="mr-2 size-4" />
            Playlists
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ExclamationTriangleIcon className="mr-2 size-4" />
            Songs
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ExclamationTriangleIcon className="mr-2 size-4" />
            Made for You
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ExclamationTriangleIcon className="mr-2 size-4" />
            Artists
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ExclamationTriangleIcon className="mr-2 size-4" />
            Albums
          </Button>
        </div>
      </div>
    </div>
  )
}
