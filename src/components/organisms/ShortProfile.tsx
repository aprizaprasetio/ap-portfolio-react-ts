import Divider from '../atoms/Divider'
import SmallCard from '../molecules/SmallCard'

function ShortProfile(): JSX.Element {
    return (
        <article className='flex-1 shadow-md flex-2 bg-slate-900/30 backdrop-blur-lg rounded-3xl'>
            <header className='flex items-center justify-between px-5 py-1 rounded-t-3xl bg-slate-900'>
                <h2 className='text-sm font-light'>About Me</h2>
                <div className='flex gap-2'>
                    <div className='w-3 h-3 rounded-full shadow-sm bg-rose-500'></div>
                    <div className='w-3 h-3 rounded-full shadow-sm bg-lime-600'></div>
                    <div className='w-3 h-3 rounded-full shadow-sm bg-amber-300'></div>
                </div>
            </header>
            <div className='grid gap-2 p-5 cursor-default'>
                <SmallCard title='Ambitious' label='Consistent learning in Web Programming' />
                <SmallCard title='Hometown' label={<>Tanjung Enim Selatan, <br />Sumatera Selatan, Indonesia</>} />
                <SmallCard title='Language' label={<>Indonesia and English, <br />My TOEIC score is 635 in Listening and Reading.</>} />
            </div>
        </article>
    )
}

export default ShortProfile