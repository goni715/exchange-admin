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
        updateExchange: builder.mutation({
            query: ({id,data}) => ({
                url: `/exchange/update-exchange-status/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["ExchangeList"],
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
        getExchange: builder.query({
            query: (id) => `/exchange/get-exchange/${id}`,
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
        })
    }),
})


export const {useSendExchangeConfirmEmailMutation, useUpdateExchangeMutation, useGetAllExchangeQuery, useGetExchangeQuery} = exchangeApi;