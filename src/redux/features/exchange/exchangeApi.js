import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";

export const exchangeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendExchangeConfirmEmail: builder.mutation({
            query: (data) => ({
                url: `/exchange/send-exchange-confirm-email`,
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Confirm Email Send Success");
                    }
                }catch(err) {
                    console.log(err)
                    ErrorToast("Something Went Wrong");
                }
            }
        }),
        getAllExchange: builder.query({
            query: () => `/exchange/get-all-exchange`,
            keepUnusedDataFor:600,
            providesTags: ["ExchangeList"],
            async onQueryStarted(arg, {queryFulfilled }){
                try{
                    const res = await queryFulfilled;
                    // const data = res?.data?.data;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getCompletedExchanges: builder.query({
            query: () => `/exchange/get-completed-exchanges`,
            keepUnusedDataFor:600,
            providesTags: ["CompletedExchangeList"],
            async onQueryStarted(arg, {queryFulfilled }){
                try{
                    const res = await queryFulfilled;
                    // const data = res?.data?.data;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getExchange: builder.query({
            query: (id) => `/exchange/get-exchange/${id}`,
            providesTags: (result, error, arg) => [
                {type: "Exchange", id:arg}, //Dynamic Tag
            ],
            keepUnusedDataFor:600,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                    // const data = res?.data?.data;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        updateExchange: builder.mutation({
            query: ({id,data}) => ({
                url: `/exchange/update-exchange-status/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                "ExchangeList",
                "CompletedExchangeList",
                {type: "Exchange", id:arg.id}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Exchange Status Update Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
    }),
})


export const {useSendExchangeConfirmEmailMutation, useUpdateExchangeMutation, useGetAllExchangeQuery, useGetCompletedExchangesQuery, useGetExchangeQuery} = exchangeApi;