import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useLoginMutation} from "../redux/features/auth/authApi.js";
import Error from "./validation/Error.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SetLoginError} from "../redux/features/auth/authSlice.js";
import {IsEmail} from "../helper/ValidationHelper.js";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, {isLoading, isSuccess}] = useLoginMutation();
    const error = useSelector((state)=> state.auth.LoginError);



    const handleSubmit = () => {
        if(email==="" || password === ""){
            dispatch(SetLoginError("Please enter your email address and password.!"));
        }
        else if(IsEmail(email)){
            dispatch(SetLoginError("Please enter a valid email address!"));
        }
        else{
            dispatch(SetLoginError(""));

            login({
                email, password
            })
        }
    }


    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-20">
                <div className="container md:px-12 flex flex-col items-center ">
                    <div className="bg-white px-14 py-12 w-2/5">
                        <h1 className="text-[#0090D4] text-center title mb-5 font-bold text-3xl">Admin Login</h1>
                        {error && (
                                <Error message={error}/>
                            )
                        }

                        <div className="flex flex-col gap-8 py-8">
                            <div>
                                <input onChange={(e)=>setEmail(e.target.value)} value={email} required className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="email" placeholder="Email Address"/>
                            </div>
                            <div>
                                <input onChange={(e)=>setPassword(e.target.value)} value={password} required className="w-full px-3 py-1.5 rounded outline-none border border-[#e3e3e3] focus:border-[#0955ff] text-black focus:text-[#02743a] placeholder:text-black" type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button onClick={handleSubmit} disabled={isLoading} className="bg-[#0090D4] text-white px-5 py-2 rounded">
                                {isLoading ? "Processing..." : "Login"}
                            </button>
                        </div>

                    </div>
                    <div className="w-2/5 mt-5">
                        <button onClick={()=>navigate('/register')} className="bg-[#0072bc] px-12 py-4 title text-white text-lg rounded  w-full">
                            Create new account
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;