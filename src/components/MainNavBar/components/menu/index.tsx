import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type MenuProps = {
  className?: string
}

export function Menu({className}: MenuProps) {
  return (
    <>
      <header className={cn("border-b p-2 sm:px-6 sm:py-4 w-full", className)}>
        <Tabs className="h-full space-y-6">
          <div className="space-between flex items-center">
            <TabsList>
              <TabsTrigger value="music" className="relative">
                Início
              </TabsTrigger>
              <TabsTrigger value="podcasts">Livros</TabsTrigger>
              <TabsTrigger value="live" disabled>
                Navegar
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto mr-4">
              <Button>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                Add music
              </Button>
            </div>
          </div>
        </Tabs>
      </header>
    </>
  )
}
