import { playlists } from "@/data/playlists";
import { Sidebar } from "./components/sidebar";
import { Menu } from "./components/menu";

export default function NavBar() {
    return (
        <>
            <Sidebar playlists={playlists} className="hidden lg:block max-w-56 border-r" />
            <Menu className="lg:hidden"/>
        </>
    ) 
}