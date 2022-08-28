import {
    counterReducer,
    CounterType, errorAC,
    resetNumberAC, setMaxNumberAC, setMinNumberAC, settingNumberAC,
    showRemoveSettingAC,
} from "./counterReducer";

let counterState: CounterType
beforeEach(()=>{
    counterState = {
        number: 3,
        minNumber: 0,
        maxNumber: 5,
        error: false,
        showSetting: true
    }
})

// test('inc number', ()=> {
//     const state = counterReducer(counterState, incNumberAC())
//     expect(state.number).toBe(4)
// })
test('reset number', ()=> {
    const state = counterReducer(counterState, resetNumberAC())
    expect(state.number).toBe(0)
})
test('setting number', ()=> {
    const state = counterReducer(counterState, settingNumberAC(2))
    expect(state.number).toBe(2)
})
test('show setting', ()=> {
    const state = counterReducer(counterState, showRemoveSettingAC())
    expect(state.showSetting).toBe(false)
})
test('setting min number', ()=> {
    const state = counterReducer(counterState, setMinNumberAC(2))
    expect(state.minNumber).toBe(2)
})
test('setting max number', ()=> {
    const state = counterReducer(counterState, setMaxNumberAC(8))
    expect(state.maxNumber).toBe(8)
})
test('error', ()=> {
    const state = counterReducer(counterState, errorAC(true))
    expect(state.error).toBe(true)
})
