import React, {useState} from 'react';
import styles from './Counter.module.css'
import {CounterScoreboard} from "./Scoreboard/CounterScoreboard";
import { SettingsCounter } from './Settings/SettingsCounter';
import {SuperButton} from "./SuperButton/SuperButton";

export const Counter = () => {
    const [number, setNumber] = useState<number>(0)
    const onClickResetHandler = () => setNumber(min)
    const onClickIncHandler = () => setNumber(number + 1)

    const [min, setMin] = useState<number>(0)
    const minCallBackHandler = (el: number) => {
        setMin(el)
        setNumber(el)
    }

    const [max, setMax] = useState<number>(5)
    const maxCallBackHandler = (el: number) => setMax(el)

    return (
        <div className={styles.item}>
            <div className={styles.counterItem}>
                <CounterScoreboard number={number} max={max} min={min}/>
                <SuperButton
                    name={'inc'}
                    callBack={onClickIncHandler}
                    disabled={number > max - 1}
                />
                <SuperButton
                    className={styles.button}
                    name={'reset'}
                    callBack={onClickResetHandler}
                    disabled={number === min}
                />
            </div>
            <div>
                <SettingsCounter
                    min={min}
                    max={max}
                    minCallBack={minCallBackHandler}
                    maxCallBack={maxCallBackHandler}
                />
            </div>
            <div className={styles.error}>{min >= max ? 'Error, min cannot be greater than or equal to max!' : ''}</div>
        </div>
    )
}