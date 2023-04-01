import { ReactNode } from 'react'

interface SmallCard {
    title: string,
    label: ReactNode,
}

function SmallCard(props: SmallCard): JSX.Element {
    return (
        <div className='px-5 py-2 transition-all duration-300 bg-white/10 hover:bg-white/30 rounded-3xl'>
            <h3 className='font-medium'>{props.title}</h3>
            <p className='text-sm'>{props.label}</p>
        </div>
    )
}

export default SmallCard