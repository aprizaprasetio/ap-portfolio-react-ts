import { } from 'react-icons/md'
import Button from '../atoms/Button'
import SocialMediaBox from '../molecules/SocialMediaBox'

function NavbarTop(): JSX.Element {
    return (
        <nav className='flex justify-between py-4 shadow-sm text-stone-300 px-9 bg-slate-900'>
            <div className='relative grid justify-center cursor-pointer group'>
                <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text'>
                    Apriza Prasetio
                </h1>
                <SocialMediaBox />
            </div>
            <div className='flex gap-5'>
                <Button label='Profile' href='#' />
                <Button label='Skills' href='#' />
                <Button label='Projects' href='#' />
                <Button label='Education' href='#' />
            </div>
        </nav>
    )
}

export default NavbarTop