import { allBooks } from '@/data/allBooks'
import { Book } from '@/data/books'
import { useEffect, useState } from 'react'

type RecommendResponseBody = {
  recomendacoes: string[]
}

export default function useRecommendedBooks(num: number, id?: string) {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    async function main() {
      try {
        if (!id) return
        console.log(process.env.NEXT_PUBLIC_RECOMMENDER_API_BASE_URL)
        const url = new URL(
          '/recommend',
          process.env.NEXT_PUBLIC_RECOMMENDER_API_BASE_URL,
        )

        const res = await fetch(`${url}?usuario_id=${id}&num=${num}`)
        const data: RecommendResponseBody = await res.json()
        console.log(res)
        console.log(data)
        const bookIds = data.recomendacoes.map((id) =>
          Number(id.replace(/\D/g, '')),
        )
        const filteredBooks = allBooks.filter((_: unknown, i: number) =>
          bookIds.includes(i + 1),
        )

        setBooks(filteredBooks)
      } catch (e) {
        console.error(e)
      }
    }
    main()
  }, [id, num])

  return books
}
