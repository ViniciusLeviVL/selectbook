import { Metadata } from 'next'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { BookBanner } from './_components/book-banner'
import { topFiveBooks, madeForYouBooks } from '@/data/books'

export const metadata: Metadata = {
  title: 'SelectBook',
  description: 'Página inicial da SelectBook',
}

export default function HomePage() {
  return (
    <>
      <div className="border-none p-0 outline-none">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Top 5 Livros da Semana
            </h2>
            <p className="text-sm text-muted-foreground">
              Escolha um e leia agora!
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {topFiveBooks.map((book) => (
                <BookBanner
                  key={book.name}
                  book={book}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Para Você</h2>
          <p className="text-sm text-muted-foreground">
            Algumas recomendações baseadas no que você gosta.
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
      </div>
    </>
  )
}
