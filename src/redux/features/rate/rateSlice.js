import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rateId:"",
    unit:"",
    current:""
}

const rateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        SetUnit: (state, action) => {
            state.unit = action.payload;
        },
        SetCurrent: (state, action) => {
            state.current = action.payload;
        },
        SetRateId: (state, action) => {
            state.rateId = action.payload;
        }
    }
})



export const {SetUnit, SetRateId, SetCurrent} = rateSlice.actions;


const rateSliceReducer = rateSlice.reducer;
export default rateSliceReducer;