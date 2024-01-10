import {useDispatch} from "react-redux";
import {useGetAllReceiveAccountQuery, useGetAllSendAccountQuery} from "../../redux/features/account/accountApi.js";
import {useState} from "react";
import {useCreateRateMutation} from "../../redux/features/rate/rateApi.js";

const CreateRate = () => {
    const dispatch = useDispatch();
    const {data:sendData} = useGetAllSendAccountQuery();
    const {data:sendAccounts} = sendData || {};

    const {data:receiveData} = useGetAllReceiveAccountQuery();
    const {data:receiveAccounts} = receiveData || {};
    const [sendAccountId, setSendAccountId] = useState("659d8664510cf0bdd944d27c");
    const [receiveAccountId, setReceiveAccountId] = useState("659d8a30510cf0bdd944d2ca");
    const [unit, setUnit] = useState("");
    const [current, setCurrent] = useState("");
    const [createRate, {isLoading, isSuccess}] = useCreateRateMutation();



    //create-rate
    const handleCreate = (e) => {
        e.preventDefault();
        createRate({
            sendAccountId,
            receiveAccountId,
            unit,
            current
        })
    }


    return (
        <>
            <section id="main" className="py-10">
                <h1 className="text-center font-bold text-3xl mb-3">Create Rate</h1>
                <form onSubmit={handleCreate} className="px-12 bg-white w-auto overflow-x-auto grid grid-cols-4 gap-6">
                    <div>
                        <label className="block pb-2" htmlFor="send">
                            Select Send-Account
                        </label>
                        <select onChange={(e)=>setSendAccountId(e.target.value)} value={sendAccountId} required id="send" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                            {sendAccounts?.length>0 &&(
                                <>
                                    {
                                        sendAccounts.map((item,i)=>{
                                            return(
                                                <>
                                                    <option key={i.toString()} value={item._id}>{item.name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            )
                            }
                        </select>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="receive">
                            Select Receive-Account
                        </label>
                        <select onChange={(e)=>setReceiveAccountId(e.target.value)} value={receiveAccountId} className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" id="receive">
                            {receiveAccounts?.length>0 &&(
                                <>
                                    {
                                        receiveAccounts.map((item,i)=>{
                                            return(
                                                <>
                                                    <option key={i.toString()} value={item._id}>{item.name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            )
                            }
                        </select>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="unit">
                            Base Price
                        </label>
                        <input onChange={(e)=>setUnit(e.target.value)} value={unit} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="unit"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="current">
                            Current Price
                        </label>
                        <input onChange={(e)=>setCurrent(e.target.value)} value={current} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="current"/>
                    </div>
                    <div>
                        <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {isLoading ? "Processing..." : "Create Rate"}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default CreateRate;