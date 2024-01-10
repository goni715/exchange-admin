import {createSlice} from "@reduxjs/toolkit";

export const modalSlice=createSlice({
    name:'modal',
    initialState:{
        receiveAccountModalOpen: false,
        sendAccountModalOpen:false,
        rateModalOpen:false
    },
    reducers:{
        SetReceiveAccountModalOpen:(state,action)=>{
            state.receiveAccountModalOpen=action.payload
        },
        SetSendAccountModalOpen:(state,action)=>{
            state.sendAccountModalOpen=action.payload
        },
        SetRateModalOpen:(state,action)=>{
            state.rateModalOpen=action.payload
        }
    }
})
export  const { SetReceiveAccountModalOpen, SetSendAccountModalOpen, SetRateModalOpen}=modalSlice.actions;
export const selectReceiveAccountModalOpen = (state) => state.modal.receiveAccountModalOpen;
export const selectSendAccountModalOpen = (state) => state.modal.sendAccountModalOpen;
export const selectRateModalOpen = (state) => state.modal.rateModalOpen;

export const modalSliceReducer = modalSlice.reducer;
