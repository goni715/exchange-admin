import {useEffect, useState} from "react";
import {useUpdateInformationMutation} from "../../redux/features/information/InformationApi.js";
import {useNavigate} from "react-router-dom";

const EditForm = ({information}) => {
    const navigate = useNavigate();
    const {
        _id,
        email:initialEmail,
        skype:initialSkype,
        whatsapp:initialWhatsapp,
        bkashAgent:initialBkashAgent,
        nagadAgent:initialNagadAgent,
        rocketAgent:initialRocketAgent,
        cityBankAccountName:initialCityBankAccountName,
        cityBankAccountNumber:initialCityBankAccountNumber,
        bracBankAccountName:initailBracBankAccountName,
        bracBankAccountNumber: initialBracBankAccountNumber,
        dbblAccountName:initialDbblAccountName,
        dbblAccountNumber: initialDbblAccountNumber,
        wmzPurseId: initialWmzPurseId,
        perfectUID: initialPerfectUID,
        payeerId: initialPayeerId,
        advCashUID: initialAdvCashUID,
        tetherUSDT: initialTetherUSDT
    } = information || {};

    const [updateInformation, {isSuccess,isLoading}] = useUpdateInformationMutation();


    const [email, setEmail]= useState(initialEmail);
    const [skype, setSkype]= useState(initialSkype);
    const [whatsapp, setWhatsapp]= useState(initialWhatsapp);
    const [bkashAgent, setBkashAgent]= useState(initialBkashAgent);
    const [nagadAgent, setNagadAgent]= useState(initialNagadAgent);
    const [rocketAgent, setRocketAgent]= useState(initialRocketAgent);
    const [cityBankAccountName, setCityBankAccountName]= useState(initialCityBankAccountName);
    const [cityBankAccountNumber, setCityBankAccountNumber]= useState(initialCityBankAccountNumber);
    const [bracBankAccountName, setBracBankAccountName]= useState(initailBracBankAccountName);
    const [bracBankAccountNumber, setBracBankAccountNumber]= useState(initialBracBankAccountNumber);
    const [dbblAccountName, setDbblAccountName]= useState(initialDbblAccountName);
    const [dbblAccountNumber, setDbblAccountNumber]= useState(initialDbblAccountNumber);
    const [wmzPurseId, setWmzPurseId]= useState(initialWmzPurseId);
    const [perfectUID, setPerfectUID]= useState(initialPerfectUID);
    const [payeerId, setPayeerId]= useState(initialPayeerId);
    const [advCashUID, setAdvCashUID]= useState(initialAdvCashUID);
    const [tetherUSDT, setTetherUSDT]= useState(initialTetherUSDT);


    useEffect(()=>{
        if(isSuccess){
            navigate('/information');
        }
    },[isSuccess, navigate])

    const handleUpdate = (e) => {
        e.preventDefault()
        updateInformation({
            id:_id,
            data:{
                email, skype, whatsapp, bkashAgent, nagadAgent, rocketAgent, cityBankAccountName, cityBankAccountNumber, bracBankAccountName, bracBankAccountNumber, dbblAccountName, dbblAccountNumber, wmzPurseId, perfectUID, payeerId, advCashUID, tetherUSDT
            }
        })
    }




    return (
        <>
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Email Address
                        </label>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="email" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Skype
                        </label>
                        <input onChange={(e)=>setSkype(e.target.value)} value={skype} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Whatsapp Number
                        </label>
                        <input onChange={(e)=>setWhatsapp(e.target.value)} value={whatsapp} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            বিকাশ Agent Number
                        </label>
                        <input onChange={(e)=>setBkashAgent(e.target.value)} value={bkashAgent} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Nagad Agent Number
                        </label>
                        <input onChange={(e)=>setNagadAgent(e.target.value)} value={nagadAgent} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Rocket Agent Number
                        </label>
                        <input onChange={(e)=>setRocketAgent(e.target.value)} value={rocketAgent} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            City Bank Account Name
                        </label>
                        <input onChange={(e)=>setCityBankAccountName(e.target.value)} value={cityBankAccountName} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            City Bank Account Number
                        </label>
                        <input onChange={(e)=>setCityBankAccountNumber(e.target.value)} value={cityBankAccountNumber} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Brac Bank Account Name
                        </label>
                        <input onChange={(e)=>setBracBankAccountName(e.target.value)} value={bracBankAccountName} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Brac Bank Account Number
                        </label>
                        <input onChange={(e)=>setBracBankAccountNumber(e.target.value)} value={bracBankAccountNumber} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            DBBL Bank Account Name
                        </label>
                        <input onChange={(e)=>setDbblAccountName(e.target.value)} value={dbblAccountName} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            DBBL Bank Account Number
                        </label>
                        <input onChange={(e)=>setDbblAccountNumber(e.target.value)} value={dbblAccountNumber} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            WMZ Purse ID
                        </label>
                        <input onChange={(e)=>setWmzPurseId(e.target.value)} value={wmzPurseId} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Perfecr Money UID
                        </label>
                        <input onChange={(e)=>setPerfectUID(e.target.value)} value={perfectUID} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Payeer ID
                        </label>
                        <input onChange={(e)=>setPayeerId(e.target.value)} value={payeerId} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Tether USDT
                        </label>
                        <input onChange={(e)=>setTetherUSDT(e.target.value)} value={tetherUSDT} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                    <div>
                        <label className="block pb-2" htmlFor="transaction">
                            Advance Cash UID
                        </label>
                        <input onChange={(e)=>setAdvCashUID(e.target.value)} value={advCashUID} required className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                               type="text" id="transaction"/>
                    </div>
                </div>
                <div className="flex justify-end mt-8">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        {isLoading ? "Processing..." : "Save Changes"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditForm;