import React, {ChangeEvent} from 'react';

type NumberInputPropsType = {
    value: number
    onChange: (el: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const SuperNumberInput = (props: NumberInputPropsType) => {
    return (
        <input type='number' className={props.className} value={props.value} onChange={props.onChange}/>
    )
}