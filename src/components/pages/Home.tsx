import NavbarTop from '../organisms/NavbarTop'
import ShortProfile from '../organisms/ShortProfile'
import WideImage from '../organisms/WideImage'
import { SiCsharp, SiDotnet, SiHtml5, SiJavascript, SiReact } from 'react-icons/si'

function Home(): JSX.Element {
    return (
        <>
            <header>
                <NavbarTop />
            </header>
            <main className="flex flex-wrap h-full gap-4 p-10 text-stone-300">
                <WideImage />
                <ShortProfile />
            </main>
        </>
    )
}

export default Home