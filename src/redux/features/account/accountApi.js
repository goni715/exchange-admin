import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {SetMinimumValue, SetReservedValue} from "../rate/rateSlice.js";


export const accountApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllSendAccount: builder.query({
            query: () => `/account/get-all-send-account`,
            providesTags: ["SendAccounts"],
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getAllReceiveAccount: builder.query({
            query: () => `/account/get-all-receive-account`,
            providesTags: ["ReceiveAccounts"],
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getReceiveAccount: builder.query({
            query: (id) => `/account/get-receive-account/${id}`,
            keepUnusedDataFor:false,
            async onQueryStarted(arg, {queryFulfilled, dispatch }){
                try{
                    const res = await queryFulfilled;
                    const data = res?.data?.result;
                    if(data){
                        dispatch(SetReservedValue(data?.reserved));
                    }
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getSendAccount: builder.query({
            query: (id) => `/account/get-send-account/${id}`,
            keepUnusedDataFor:false,
            async onQueryStarted(arg, {queryFulfilled, dispatch }){
                try{
                    const res = await queryFulfilled;
                    const data = res?.data?.result;
                    if(data){
                        dispatch(SetMinimumValue(data?.minimum));
                    }
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        updateReceiveAccount: builder.mutation({
            query: ({id,data}) => ({
                url: `/account/update-receive-account/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                "ReceiveAccounts",
            ],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    console.log(err)
                    if(err?.error?.data?.data?.keyPattern){
                        if(err?.error?.data?.data?.keyPattern['name'] === 1){
                            ErrorToast("This Account Already Exist")
                        }
                    }
                }
            }
        }),
        updateReceiveAccountDisabled: builder.mutation({
            query: ({id,data}) => ({
                url: `/account/update-receive-account/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                "ReceiveAccounts",
            ],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
        updateSendAccount: builder.mutation({
            query: ({id,data}) => ({
                url: `/account/update-send-account/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                "SendAccounts",
            ],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    console.log(err)
                    if(err?.error?.data?.data?.keyPattern){
                        if(err?.error?.data?.data?.keyPattern['name'] === 1){
                            ErrorToast("This Account Already Exist")
                        }
                    }
                }
            }
        }),
        updateSendAccountDisabled: builder.mutation({
            query: ({id,data}) => ({
                url: `/account/update-send-account/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                "SendAccounts",
            ],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
    }),
})


export const {useGetAllSendAccountQuery, useGetAllReceiveAccountQuery, useGetSendAccountQuery, useGetReceiveAccountQuery, useUpdateReceiveAccountMutation, useUpdateReceiveAccountDisabledMutation, useUpdateSendAccountMutation, useUpdateSendAccountDisabledMutation} = accountApi;