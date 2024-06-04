import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { BookBanner } from '../_components/book-banner'
import { allBooks } from '@/data/allBooks'

export default function ExplorePage() {
  return (
    <div className="size-full flex-col border-none p-0 data-[state=active]:flex relative">
      <ScrollArea>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 pb-4">
          {allBooks.map((book) => (
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
