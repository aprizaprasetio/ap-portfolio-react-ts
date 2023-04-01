import IconButton from '../atoms/IconButton'
import { BsLinkedin, BsGithub, BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs'

function SocialMediaBox(): JSX.Element {
    return (
        <article className='absolute z-10 invisible gap-3 p-4 transition-all duration-300 delay-300 shadow-sm opacity-0 group-hover:opacity-100 -bottom-16 bg-slate-200/10 group-hover:visible group-hover:-bottom-32 rounded-3xl backdrop-blur-3xl'>
            <h2 className='pb-2 text-sm font-semibold'>My Social Media</h2>
            <div className='flex'>
                <IconButton href='https://linkedin.com/in/aprizaprasetio' icon={<BsLinkedin size={30} />} />
                <IconButton href='https://github.com/aprizaprasetio' icon={<BsGithub size={30} />} />
                <IconButton href='https://facebook.com/aprizap' icon={<BsFacebook size={30} />} />
                <IconButton href='https://youtube.com/aprizaprasetio' icon={<BsYoutube size={30} />} />
                <IconButton href='https://instagram.com/aprizaprasetio' icon={<BsInstagram size={30} />} />
            </div>
        </article>
    )
}

export default SocialMediaBox