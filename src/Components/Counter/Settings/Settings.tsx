import React, {ChangeEvent} from 'react';
import {NumberInput} from '../../NumberInput/NumberInput';
import styles from './Settings.module.css'

type SettingsPropsType = {
    minNumber: number
    maxNumber: number
    minCallBack: (e: number) => void
    maxCallBack: (e: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) =>
        props.minCallBack(Math.round(+e.currentTarget.value))

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) =>
        props.maxCallBack(Math.round(+e.currentTarget.value))

    return (
        <div className={styles.inputNumber}>
            <NumberInput className={styles.input} value={props.minNumber} onChange={onChangeMinHandler}/>
            <NumberInput className={styles.input} value={props.maxNumber} onChange={onChangeMaxHandler}/>
        </div>
    )
}