import React from 'react';
import styles from './CounterRedux.module.css'
import {Settings} from './settings/Settings';
import {SuperButton} from "../superButton/SuperButton";
import {Scoreboard} from './scoreboard/Scoreboard';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../redux/store";
import {
    errorAC,
    incNumberAC,
    resetNumberAC,
    setMaxNumberAC,
    setMinNumberAC,
    settingNumberAC,
    showRemoveSettingAC
} from "../../reducers/counterReducer";

export const CounterRedux = () => {

    const number = useSelector<AppRootStateType, number>(state => state.counter.number)
    const minNumber = useSelector<AppRootStateType, number>(state => state.counter.minNumber)
    const maxNumber = useSelector<AppRootStateType, number>(state => state.counter.maxNumber)
    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)
    const showSet = useSelector<AppRootStateType, boolean>(state => state.counter.showSetting)

    const dispatch = useDispatch<AppDispatch>()

    const onClickResetHandler = () => dispatch(resetNumberAC())
    const onClickIncHandler = () => dispatch(incNumberAC())

    const minCallBackHandler = (el: number) => {
        if (el > maxNumber || el < 0) return
        else {
            dispatch(setMinNumberAC(el))
            dispatch(settingNumberAC(el))
        }
        if (el >= maxNumber || el < 0) dispatch(errorAC(true))
        else dispatch(errorAC(false))
    }

    const maxCallBackHandler = (el: number) => {
        if (el < minNumber) return
        else {
            dispatch(setMaxNumberAC(el))
        }
        if (el <= minNumber) dispatch(errorAC(true))
        else dispatch(errorAC(false))
    }

    const setHandler = () => {
        dispatch(showRemoveSettingAC())
    }

    return (
        <div className={styles.item}>
            CounterRedux
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