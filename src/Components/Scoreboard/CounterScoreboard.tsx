import React from 'react';
import styles from '../Counter.module.css'

type CounterScoreboardPropsType = {
    number: number
    max: number
    min: number
}

export const CounterScoreboard = (props: CounterScoreboardPropsType) => {

    return (
        <div>
            <h1 className={`${props.number > props.max - 1 ? styles.red : ''} ${styles.counterH1}`}>
                {props.min >= props.max ? 'Error': props.number}
            </h1>
        </div>

    )
}
