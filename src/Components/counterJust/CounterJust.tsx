import React, {useEffect, useState} from 'react';
import styles from './CounterJust.module.css'
import {Scoreboard} from "./scoreboard/Scoreboard";
import {Settings} from './settings/Settings';
import {SuperButton} from "../superButton/SuperButton";

export const CounterJust = () => {
    const [number, setNumber] = useState<number>(0)
    const [minNumber, setMinNumber] = useState<number>(0)
    const [maxNumber, setMaxNumber] = useState<number>(5)
    const [error, setError] = useState<boolean>(false)
    const [showSet, setShowSet] = useState<boolean>(true)

    useEffect(() => {
        const min = localStorage.getItem('minValue')
        const max = localStorage.getItem('maxValue')
        if (min) setMinNumber(+min)
        if (min) setNumber(+min)
        if (max) setMaxNumber(+max)
        if (min && max && min === max) setError(true)
    }, [])

    const onClickResetHandler = () => {
        setNumber(minNumber)
    }
    const onClickIncHandler = () => {
        setNumber(number + 1)
    }

    const minCallBackHandler = (el: number) => {
        if (el > maxNumber || el < 0) return
        else {
            setMinNumber(el)
            setNumber(el)
            localStorage.setItem('minValue', '' + el)
        }
        if (el >= maxNumber || el < 0) setError(true)
        else setError(false)
    }

    const maxCallBackHandler = (el: number) => {
        if (el < minNumber) return
        else {
            setMaxNumber(el)
            localStorage.setItem('maxValue', '' + el)
        }
        if (el <= minNumber) setError(true)
        else setError(false)
    }

    const setHandler = () => {
        setShowSet(!showSet)
    }

    return (
        <div className={styles.item}>
            CounterJust
            {showSet ?
                <div className={styles.itemEl}>
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
                    <SuperButton className={styles.button} name={'set'} callBack={setHandler}/>
                </div>
                :
                <div className={styles.itemEl}>
                    <Settings
                        minNumber={minNumber}
                        maxNumber={maxNumber}
                        error={error}
                        minCallBack={minCallBackHandler}
                        maxCallBack={maxCallBackHandler}
                    />
                    <SuperButton className={`${styles.button} ${styles.buttonCount}`}
                                 name={'counter'}
                                 callBack={setHandler}
                                 disabled={maxNumber <= minNumber}
                    />

                </div>}
            <div className={styles.error}>
                {error ? 'Error, min number cannot be greater or equal than max number!' : ''}
            </div>
        </div>
    )
}