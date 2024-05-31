'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { myBooks } from '@/data/books'
import { BookBanner } from '../_components/book-banner'
import { useUserContext } from '@/context/user-context'
import { useRouter } from 'next/navigation'

export default function MyBooksPage() {
  const router = useRouter()
  const user = useUserContext((s) => s.user)

  if (!user) router.push('/login')

  return (
    <div className="size-full flex-col border-none p-0 data-[state=active]:flex relative">
      <ScrollArea>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 pb-4">
          {myBooks.map((book) => (
            <BookBanner
              key={book.name}
              book={book}
              className="max-w-[200px]"
              aspectRatio="square"
              width={150}
              height={150}
            />
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}
