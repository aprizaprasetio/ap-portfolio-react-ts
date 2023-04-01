interface Divider {
    direction: 'horizontal' | 'vertical'
}

function Divider(props: Divider): JSX.Element {
    if (props.direction === 'vertical') return (
        <div className='w-[.66px] h-full bg-slate-300'></div>
    )

    return (
        <div className='w-full h-[.66px] bg-slate-300'></div>
    )
}

export default Divider