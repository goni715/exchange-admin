import {createSlice} from "@reduxjs/toolkit";

export const accountSlice=createSlice({
    name:'account',
    initialState:{
        informationShow:false,
        sendAccountId:"658d2e2a61d015e063fd92dd",
        receiveAccountId:"658d2f2161d015e063fd92f4",
        sendAccountName:"",
        receiveAccountName:"",
        reservedValue:"",
        email: "",
    },
    reducers:{
        SetInformationShow:(state,action)=>{
            state.informationShow=action.payload
        },
        SetSendAccountName:(state,action)=>{
            state.sendAccountName=action.payload
        },
        SetReceiveAccountName:(state,action)=>{
            state.receiveAccountName=action.payload
        },
        SetSendAccountId:(state,action)=>{
            state.sendAccountId=action.payload
        },
        SetReceiveAccountId:(state,action)=>{
            state.receiveAccountId=action.payload
        },
        SetReservedValue:(state,action)=>{
            state.reservedValue=action.payload
        },

    }
})
export  const {SetReceiveAccountId, SetReceiveAccountName, SetReservedValue}=accountSlice.actions;
export const selectInformationShow= (state) => state.account.informationShow;
export const accountSliceReducer = accountSlice.reducer;
