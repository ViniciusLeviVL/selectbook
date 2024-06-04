'use client'

import { useUserContext } from '@/context/user-context'
import useRecommendedBooks from '../hooks/useRecommendedBooks'
import { staticEightBooks } from '@/data/books'
import { BookBanner } from './book-banner'
import { ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { ScrollArea } from '@radix-ui/react-scroll-area'

export default function MadeForYouScrollArea() {
  const user = useUserContext((s) => s.user)
  const books = useRecommendedBooks(8, user?.id)

  const hasRecommendations = books.length > 0 && user
  const madeForYouBooks = hasRecommendations ? books : staticEightBooks

  return (
    <>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          {hasRecommendations ? 'Para Você' : `Top 8 do Ano`}
        </h2>
        <p className="text-sm text-muted-foreground">
          {hasRecommendations
            ? 'Algumas recomendações baseadas no que você gosta.'
            : `Uma lista com os livros mais lidos de ${new Date().getFullYear()}`}
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {madeForYouBooks.map((book) => (
              <BookBanner
                key={book.name}
                book={book}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  )
}
