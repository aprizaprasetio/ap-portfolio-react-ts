import { useState } from 'react'

function useTrigger(initialValue: boolean = false): any[] {
    const [value, setValue] = useState<boolean>(initialValue)

    function valueTrigger(): void {
        setValue(current => !current)
    }

    return [value, valueTrigger]
}

export {
    useTrigger,
}