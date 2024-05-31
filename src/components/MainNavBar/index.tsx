import { Sidebar } from './components/sidebar'
import { Menu } from './components/menu'

export default function NavBar() {
  return (
    <>
      <Sidebar className="hidden lg:block max-w-56 border-r h-dvh" />
      <Menu className="lg:hidden" />
    </>
  )
}
