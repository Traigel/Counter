import React from 'react';
import styles from './Scoreboard.module.css'

type ScoreboardPropsType = {
    number: number
    max: number
    error: boolean
}

export const Scoreboard = (props: ScoreboardPropsType) => {

    return (
        <div>
            <h1 className={`${props.number >= props.max ? styles.red : ''} ${styles.counterH1}`}>
                {props.error ? 'Error' : props.number}
            </h1>
        </div>

    )
}
