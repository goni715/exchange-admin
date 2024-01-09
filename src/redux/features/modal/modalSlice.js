import {createSlice} from "@reduxjs/toolkit";

export const modalSlice=createSlice({
    name:'modal',
    initialState:{
        modalOpen: false,
        sendAccountModalOpen:false
    },
    reducers:{
        SetModalOpen:(state,action)=>{
            state.modalOpen=action.payload
        },
        SetSendAccountModalOpen:(state,action)=>{
            state.sendAccountModalOpen=action.payload
        }
    }
})
export  const { SetModalOpen, SetSendAccountModalOpen}=modalSlice.actions;
export const selectModalOpen = (state) => state.modal.modalOpen;
export const selectSendAccountModalOpen = (state) => state.modal.sendAccountModalOpen;

export const modalSliceReducer = modalSlice.reducer;
