import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast,} from "../../../helper/ValidationHelper.js";


export const rateApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createRate: builder.mutation({
            query: (data) => ({
                url: "/rate/create-rate",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["RateList"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Rate Create Success");
                    }
                }catch(err) {
                    console.log(err)
                    const status = err?.error?.status;
                    if(status === 409){
                        ErrorToast("Already rate created between these!")
                    }
                }
            }
        }),
        getAllRate: builder.query({
            query: () => `/rate/get-all-rate`,
            providesTags: ["RateList"],
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
        updateRate: builder.mutation({
            query: ({id,data}) => ({
                url: `/rate/update-rate/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["RateList"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        // SuccessToast("Update Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
    }),
})


export const {useGetAllRateQuery, useUpdateRateMutation, useCreateRateMutation} = rateApi;