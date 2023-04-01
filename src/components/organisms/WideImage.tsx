import { SiCsharp, SiDotnet, SiHtml5, SiJavascript, SiReact } from 'react-icons/si'

function WideImage(): JSX.Element {
    return (
        <div className='p-4 shadow-md flex-2 bg-slate-900/30 backdrop-blur-lg rounded-3xl'>
            <div className='relative mb-5'>
                <img className='object-cover h-60 rounded-3xl  shadow-sm w-[40rem] object-center' src="/apriza-prasetio.webp" alt="Apriza Prasetio" />
                <p className='absolute bottom-0 left-0 w-full py-2 overflow-auto font-medium text-center rounded-b-3xl bg-slate-900/20 backdrop-blur-sm'>
                    Passionate about  Web Programming and Technology
                </p>
            </div>
            <div className='flex justify-around'>
                <SiCsharp className='transition-all duration-300 hover:scale-150' size={20} />
                <SiDotnet className='transition-all duration-300 hover:scale-150' size={20} />
                <SiHtml5 className='transition-all duration-300 hover:scale-150' size={20} />
                <SiJavascript className='transition-all duration-300 hover:scale-150' size={20} />
                <SiReact className='transition-all duration-300 hover:scale-150 animate-spin-slow' size={20} />
            </div>
        </div>
    )
}

export default WideImage