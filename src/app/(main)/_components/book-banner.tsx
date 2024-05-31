import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Book } from '@/data/books'

interface BookBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Book
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export function BookBanner({
  book,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: BookBannerProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={book.imageSrc ?? '/img/book_1.jpg'}
          alt={book.name}
          width={width}
          height={height}
          className={cn(
            'h-auto w-auto object-cover transition-all hover:scale-105',
            aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{book.name}</h3>
        <p className="text-xs text-muted-foreground">{book.author}</p>
      </div>
    </div>
  )
}
