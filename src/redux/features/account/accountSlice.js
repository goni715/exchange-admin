import {createSlice} from "@reduxjs/toolkit";

export const accountSlice=createSlice({
    name:'account',
    initialState:{
        sendAccountId:"658d2e2a61d015e063fd92dd",
        sendAccountName:"",
        receiveAccountId:"",
        receiveAccountName:"",
        reservedValue:"",
    },
    reducers:{
        SetSendAccountName:(state,action)=>{
            state.sendAccountName=action.payload
        },
        SetSendAccountId:(state,action)=>{
            state.sendAccountId=action.payload
        },
        SetReceiveAccountId:(state,action)=>{
            state.receiveAccountId=action.payload
        },
        SetReceiveAccountName:(state,action)=>{
            state.receiveAccountName=action.payload
        },
        SetReservedValue:(state,action)=>{
            state.reservedValue=action.payload
        },

    }
})
export  const {SetReceiveAccountId, SetReceiveAccountName, SetReservedValue}=accountSlice.actions;
export const accountSliceReducer = accountSlice.reducer;
