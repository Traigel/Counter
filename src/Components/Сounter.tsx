import React, {useState} from 'react';
import styles from './Counter.module.css'
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Settings} from './Settings/Settings';
import {SuperButton} from "./SuperButton/SuperButton";

export const Counter = () => {
    const [number, setNumber] = useState<number>(0)
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [error, setError] = useState<boolean>(false)

    const onClickResetHandler = () => setNumber(min)
    const onClickIncHandler = () => setNumber(number + 1)

    const minCallBackHandler = (el: number) => {
        if (el > max) return
        else {
            setMin(el)
            setNumber(el)
        }
        if (el >= max) setError(true)
        else setError(false)
    }

    const maxCallBackHandler = (el: number) => {
        if (el < min) return
        else setMax(el)
        if (el <= min) setError(true)
        else setError(false)
    }

    console.log(number, min, max, error)

    return (
        <div className={styles.item}>
            <div className={styles.counterItem}>
                <Scoreboard number={number} max={max} error={error}/>
                <SuperButton
                    className={styles.button}
                    name={'inc'}
                    callBack={onClickIncHandler}
                    disabled={number >= max}
                />
                <SuperButton
                    className={styles.button}
                    name={'reset'}
                    callBack={onClickResetHandler}
                    disabled={number === min}
                />
            </div>
            <div>
                <Settings
                    min={min}
                    max={max}
                    minCallBack={minCallBackHandler}
                    maxCallBack={maxCallBackHandler}
                />
            </div>
            <div className={styles.error}>{ error ? 'Error, min cannot be greater than or equal to max!' : ''}</div>
        </div>
    )
}