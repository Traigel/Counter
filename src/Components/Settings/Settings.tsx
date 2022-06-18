import React, {ChangeEvent, useState} from 'react';
import { NumberInput } from '../NumberInput/NumberInput';
import styles from './Settings.module.css'

type SettingsPropsType = {
    min: number
    max: number
    minCallBack: (e: number) => void
    maxCallBack: (e: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => props.minCallBack(+e.currentTarget.value)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => props.maxCallBack(+e.currentTarget.value)

    return (
        <div className={styles.inputNumber}>
            <NumberInput value={props.min} onChange={onChangeMinHandler}/>
            <NumberInput value={props.max} onChange={onChangeMaxHandler}/>
        </div>
    )
}