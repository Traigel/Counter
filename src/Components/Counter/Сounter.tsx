import React, {useState} from 'react';
import styles from './Counter.module.css'
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Settings} from './Settings/Settings';
import {SuperButton} from "../SuperButton/SuperButton";

export const Counter = () => {
    const [number, setNumber] = useState<number>(0)
    const [minNumber, setMinNumber] = useState<number>(0)
    const [maxNumber, setMaxNumber] = useState<number>(5)
    const [error, setError] = useState<boolean>(false)

    const onClickResetHandler = () => setNumber(minNumber)
    const onClickIncHandler = () => setNumber(number + 1)

    const minCallBackHandler = (el: number) => {
        if (el > maxNumber) return
        else {
            setMinNumber(el)
            setNumber(el)
        }
        if (el >= maxNumber) setError(true)
        else setError(false)
    }

    const maxCallBackHandler = (el: number) => {
        if (el < minNumber) return
        else setMaxNumber(el)
        if (el <= minNumber) setError(true)
        else setError(false)
    }

    console.log(number, minNumber, maxNumber)

    return (
        <div className={styles.item}>
            <div className={styles.counterItem}>
                <Scoreboard number={number} maxNumber={maxNumber} error={error}/>
                <SuperButton
                    className={styles.button}
                    name={'inc'}
                    callBack={onClickIncHandler}
                    disabled={number >= maxNumber}
                />
                <SuperButton
                    className={styles.button}
                    name={'reset'}
                    callBack={onClickResetHandler}
                    disabled={number === minNumber}
                />
            </div>
            <div>
                <Settings
                    minNumber={minNumber}
                    maxNumber={maxNumber}
                    minCallBack={minCallBackHandler}
                    maxCallBack={maxCallBackHandler}
                />
            </div>
            <div className={styles.error}>{error ? 'Error, min cannot be greater than or equal to max!' : ''}</div>
        </div>
    )
}