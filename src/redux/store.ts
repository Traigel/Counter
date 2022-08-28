import {ActionType, counterReducer,} from "../reducers/counterReducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionType>

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})
