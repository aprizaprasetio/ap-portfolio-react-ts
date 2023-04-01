interface Button {
    label: string,
    href?: string,
    onClick?: void,
}

function Button({ label, href, onClick }: Button): JSX.Element {
    if (href !== undefined) return (
        <a className='group' href={href} target='_blank'>
            <span className='font-medium text-stone-100'>{label}</span>
            <div className='w-0.5 invisible group-hover:visible group-hover:w-full transition-all duration-300 h-0.5 rounded-sm bg-stone-100'></div>
        </a>
    )

    return (
        <button className='group' onClick={onClick ?? undefined} type='button'>
            <span className='font-medium text-stone-100'>{label}</span>
            <div className='w-0.5 invisible group-hover:visible group-hover:w-full transition-all duration-300 h-0.5 rounded-sm bg-stone-100'></div>
        </button>
    )
}

export default Button