interface IconButton {
    icon: JSX.Element,
    href?: string,
    onClick?: void,
}

function IconButton({ icon, href, onClick }: IconButton): JSX.Element {
    if (href !== undefined) return (
        <a className='grid gap-0.5 justify-items-center hover:-translate-y-1 bg-transparent hover:bg-white/5 p-3 rounded-full transition-all duration-300' href={href} target='_blank'>
            {icon}
        </a>
    )

    return (
        <button className='grid gap-0.5 justify-items-center hover:-translate-y-1 bg-transparent hover:bg-white/5 p-3 rounded-full transition-all duration-300' onClick={onClick ?? undefined} type='button'>
            {icon}
        </button>
    )
}

export default IconButton