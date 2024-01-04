import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {SetContactSuccess} from "./contactSlice.js";


export const contactApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        contactCreate: builder.mutation({
            query: (data) => ({
                url: "/contact/create-contact",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        dispatch(SetContactSuccess(true));
                    }
                }catch(err) {
                    ErrorToast("Something went wrong!")
                }
            }
        }),
        getAllContact: builder.query({
            query: () => `/contact/get-all-contact`,
            keepUnusedDataFor: 600,
            providesTags: ["ContactList"],
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
        updateContactStatus: builder.mutation({
            query: ({id,data}) => ({
                url: `/contact/update-contact-status/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["ContactList"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Contact Status Update Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
    }),
})


export const {useUpdateContactStatusMutation, useGetAllContactQuery} = contactApi;