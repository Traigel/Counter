import {counterReducer, } from "../reducers/counterReducer";
import {combineReducers, legacy_createStore} from "redux";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)