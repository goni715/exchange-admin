import {useGetInformationQuery} from "../../redux/features/information/InformationApi.js";
import {useNavigate} from "react-router-dom";

const Information = () => {
    const navigate = useNavigate();
    const {data} = useGetInformationQuery();
    const information = data?.data || {};
    const {email, skype, whatsapp, bkashAgent, nagadAgent, rocketAgent, cityBankAccountName, cityBankAccountNumber, bracBankAccountName, bracBankAccountNumber, dbblAccountName, dbblAccountNumber, wmzPurseId, perfectUID, payeerId, advCashUID, tetherUSDT} = information || {};


    return (
        <>
            <section className="min-h-[80vh]">
                <h1 className="text-center text-3xl font-bold mb-3">Admin Information</h1>
                <div className="flex items-center justify-center">
                <div className="w-full md:w-[80%]">
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-t border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Email</p>
                            <p>{email || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Skype</p>
                            <p>{skype || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Whatsapp Number</p>
                            <p>{whatsapp || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">বিকাশ Agent Number</p>
                            <p>{bkashAgent || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Nagad Agent Number</p>
                            <p>{nagadAgent || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Rocket Agent Number</p>
                            <p>{rocketAgent || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">City Bank Account Name</p>
                            <p>{cityBankAccountName || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">City Bank Account Number</p>
                            <p>{cityBankAccountNumber || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Brac Bank Account Name</p>
                            <p>{bracBankAccountName || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Brac Bank Account Number</p>
                            <p>{bracBankAccountNumber || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">DBBL Bank Account Name</p>
                            <p>{dbblAccountName || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">DBBL Bank Account Number</p>
                            <p>{dbblAccountNumber || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">WMZ Purse ID</p>
                            <p>{wmzPurseId || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Perfecr Money UID</p>
                            <p>{perfectUID || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Payeer ID</p>
                            <p>{payeerId || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Tether USDT</p>
                            <p>{tetherUSDT || "..."}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded space-y-2">
                            <p className="font-bold">Advance Cash UID</p>
                            <p>{advCashUID || "..."}</p>
                        </div>
                        <div className="flex md:justify-end mt-8">
                            <button onClick={()=>navigate('/edit-information')} className="w-full md:w-1/2 bg-green-500 hover:bg-green-700 duration-300 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Information;