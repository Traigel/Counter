import React from 'react';

type SuperButtonPropsType = {
    name: string,
    callBack: () => void
    disabled?: boolean
    className?: string
}

export const SuperButton = (props: SuperButtonPropsType) => {

    const onClickHandler = () => props.callBack()

    return (
        <button
            className={props.className}
            onClick={onClickHandler}
            disabled={props.disabled}
        >{props.name}</button>
    )
}

