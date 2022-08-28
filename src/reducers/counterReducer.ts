type IncNumberACType = ReturnType<typeof incNumberAC>
type ResetNumberACType = ReturnType<typeof resetNumberAC>
type SettingNumberACType = ReturnType<typeof settingNumberAC>
type ShowRemoveSettingACType = ReturnType<typeof showRemoveSettingAC>
type SetMinNumberACType = ReturnType<typeof setMinNumberAC>
type SetMaxNumberACType = ReturnType<typeof setMaxNumberAC>
type ErrorACType = ReturnType<typeof errorAC>
export type ActionType = IncNumberACType | ResetNumberACType | ShowRemoveSettingACType | SetMinNumberACType
    | SetMaxNumberACType | ErrorACType | SettingNumberACType

export type CounterType = {
    number: number
    minNumber: number
    maxNumber: number
    error: boolean
    showSetting: boolean
}
const initialState: CounterType = {
    number: 0,
    minNumber: 0,
    maxNumber: 5,
    error: false,
    showSetting: true
}

export function counterReducer(state: CounterType = initialState, acton: ActionType): CounterType {
    switch (acton.type) {
        case 'INC-NUMBER' : {
            return {
                ...state,
                number: state.number + 1
            }
        }
        case 'RESET-NUMBER' : {
            return {
                ...state,
                number: state.minNumber
            }
        }
        case 'SETTING-NUMBER' : {
            return {
                ...state,
                number: acton.el
            }
        }
        case 'SHOW-REMOVE-SETTING' : {
            return {
                ...state,
                showSetting: !state.showSetting
            }
        }
        case 'SET-MIN-NUMBER' : {
            return {
                ...state,
                minNumber: acton.el
            }
        }
        case 'SET-MAX-NUMBER' : {
            return {
                ...state,
                maxNumber: acton.el
            }
        }
        case 'ERROR' : {
            return {
                ...state,
                error: acton.value
            }
        }
        default:
            return state
    }
}

export const incNumberAC = () => ({type: 'INC-NUMBER'} as const)
export const resetNumberAC = () => ({type: 'RESET-NUMBER'} as const)
export const settingNumberAC = (el: number) => ({type: 'SETTING-NUMBER', el} as const)
export const showRemoveSettingAC = () => ({type: 'SHOW-REMOVE-SETTING'} as const)
export const setMinNumberAC = (el: number) => ({type: 'SET-MIN-NUMBER', el} as const)
export const setMaxNumberAC = (el: number) => ({type: 'SET-MAX-NUMBER', el} as const)
export const errorAC = (value: boolean) => ({type: 'ERROR', value} as const)

