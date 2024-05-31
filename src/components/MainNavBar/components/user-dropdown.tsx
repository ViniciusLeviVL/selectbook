'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUserContext } from '@/context/user-context'
import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { toast } from 'sonner'

export function UserDropdown() {
  const [user, signOut] = useUserContext((s) => [s.user, s.signOut])
  if (!user)
    return (
      <Button
        variant="link"
        className="w-full items-center justify-start !px-0"
      >
        <Link
          href="/login"
          className="min-w-fit gap-2 flex items-center justify-between"
        >
          <Avatar className="size-8">
            <AvatarFallback>
              <PersonIcon />
            </AvatarFallback>
          </Avatar>
          <p className="text-xs font-medium leading-none w-fit">Fazer Login</p>
        </Link>
      </Button>
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative h-8 flex items-center justify-start w-full gap-2 !px-0 focus-visible:ring-0"
        >
          <Avatar className="size-8 no-underline">
            <AvatarImage src={user.image as string} alt={user.name as string} />
            <AvatarFallback>{user.name[0].toLocaleUpperCase()}</AvatarFallback>
          </Avatar>
          <p className="text-xs font-medium leading-none">{user.name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut()
            toast(`Até mais ${user.name.split(' ')[0]}! 👋`)
          }}
        >
          <LockClosedIcon className="w-3 h-3 mr-3" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
