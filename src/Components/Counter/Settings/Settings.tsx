import React, {ChangeEvent, useEffect} from 'react';
import {SuperNumberInput} from '../../SuperNumberInput/SuperNumberInput';
import styles from './Settings.module.css'

type SettingsPropsType = {
    minNumber: number
    maxNumber: number
    error: boolean
    minCallBack: (e: number) => void
    maxCallBack: (e: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => props.minCallBack(~~(+e.currentTarget.value))


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => props.maxCallBack(~~(+e.currentTarget.value))


    const stylesInput = `${styles.input} ${props.error ? styles.error : ''}`

    return (
        <div className={styles.inputNumber}>
            <p>Max-Number</p>
            <SuperNumberInput className={stylesInput} value={props.maxNumber} onChange={onChangeMaxHandler}/>
            <p>Min-Number</p>
            <SuperNumberInput className={stylesInput} value={props.minNumber} onChange={onChangeMinHandler}/>
        </div>
    )
}