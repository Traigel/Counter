import React, {ChangeEvent, useState} from 'react';
import styles from '../Counter.module.css'

type SettingsCounterPropsType = {
    min: number
    max: number
    minCallBack: (e: number) => void
    maxCallBack: (e: number) => void
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let el = e.currentTarget.value
        props.minCallBack(+el)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let el = e.currentTarget.value
        props.maxCallBack(+el)
    }


    return (
        <div className={styles.inputNumber}>
            <input type='number' value={props.min} onChange={onChangeMinHandler}/>
            <input type='number' value={props.max} onChange={onChangeMaxHandler}/>
        </div>
    )
}