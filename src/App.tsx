import React from 'react';
import './App.css';
import {CounterJust} from "./Components/counterJust/CounterJust";
import {CounterRedux} from "./Components/counterRedux/CounterRedux";

function App() {

    return (
        <div className={'app'}>
            <CounterJust/>
            <CounterRedux/>
        </div>

    )
}

export default App;
