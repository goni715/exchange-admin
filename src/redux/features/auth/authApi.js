import {apiSlice} from "../api/apiSlice.js";
import { SuccessToast} from "../../../helper/ValidationHelper.js";
import {setToken} from "../../../helper/SessionHelper.js";
import {SetLoginError} from "./authSlice.js";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/admin-login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res?.meta?.response?.status);
                    if(res?.data?.message === "success"){
                        let MyToken = res.data['token'];
                        setToken(MyToken);
                        SuccessToast("Login Success");
                        window.location.href="/";
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        dispatch(SetLoginError("Could not Find this Email!"));
                    }else if(status === 400){
                        dispatch(SetLoginError(err?.error?.data?.data));
                    }else{
                        //dispatch(SetLoginError("Something Went Wrong!"));
                    }
                }
            }
        }),
    }),
})


export const {useLoginMutation} = authApi;