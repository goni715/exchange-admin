import {useGetInformationQuery} from "../../redux/features/information/InformationApi.js";
import {useNavigate} from "react-router-dom";

const Information = () => {
    const navigate = useNavigate();
    const {data} = useGetInformationQuery();
    const information = data?.data || {};
    const {email, skype, whatsapp, bkashAgent, nagadAgent, rocketAgent, cityBankAccountName, cityBankAccountNumber, bracBankAccountName, bracBankAccountNumber, dbblAccountName, dbblAccountNumber, wmzPurseId, perfectUID, payeerId, advCashUID, tetherUSDT} = information || {};


    return (
        <>
            <section className="pt-6 pb-20">
                <div className="flex items-center justify-center">
                    <div className="w-[40%]">
                        <div className="flex bg-[#f9f9f9] border-l border-r border-t border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Email</p>
                            <p>{email || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Skype</p>
                            <p>{skype || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Whatsapp Number</p>
                            <p>{whatsapp || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>বিকাশ Agent Number</p>
                            <p>{bkashAgent || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Nagad Agent Number</p>
                            <p>{nagadAgent || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Rocket Agent Number</p>
                            <p>{rocketAgent || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>City Bank Account Name</p>
                            <p>{cityBankAccountName || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>City Bank Account Number</p>
                            <p>{cityBankAccountNumber || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Brac Bank Account Name</p>
                            <p>{bracBankAccountName || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Brac Bank Account Number</p>
                            <p>{bracBankAccountNumber || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>DBBL Bank Account Name</p>
                            <p>{dbblAccountName || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>DBBL Bank Account Number</p>
                            <p>{dbblAccountNumber || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>WMZ Purse ID</p>
                            <p>{wmzPurseId || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Perfecr Money UID</p>
                            <p>{perfectUID || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Payeer ID</p>
                            <p>{payeerId || "..."}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Tether USDT</p>
                            <p>{tetherUSDT || "..."}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Advance Cash UID</p>
                            <p>{advCashUID || "..."}</p>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button onClick={()=>navigate('/edit-information')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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