import { Separator } from '@/components/ui/separator'
import { PodcastEmptyPlaceholder } from '../(main)/_components/podcast-empty-placeholder'

export default function PodcastsPage() {
  return (
    <div className="size-full flex-col border-none p-0 data-[state=active]:flex">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            New Episodes
          </h2>
          <p className="text-sm text-muted-foreground">
            Your favorite podcasts. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <PodcastEmptyPlaceholder />
    </div>
  )
}