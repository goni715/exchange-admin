import {Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    selectSendAccountModalOpen,
    SetSendAccountModalOpen
} from "../../redux/features/modal/modalSlice.js";
import {
    SetMinimumValue,
    SetSendAccountName
} from "../../redux/features/account/accountSlice.js";
import {
    useUpdateSendAccountMutation
} from "../../redux/features/account/accountApi.js";
import {useEffect} from "react";

const EditSendAccountModal = () => {
    const dispatch=useDispatch();
    const modalOpen = useSelector(selectSendAccountModalOpen);
    const {sendAccountId, sendAccountName,minimumValue} = useSelector((state)=>state.account);
    const [updateSendAccount, {isSuccess,isLoading}] = useUpdateSendAccountMutation();



    const handleOk = () => {
        dispatch(SetSendAccountModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetSendAccountModalOpen(false));
    };


    useEffect(()=>{
        if(isSuccess){
            dispatch(SetSendAccountModalOpen(false));
        }
    },[isSuccess, dispatch])



    //update receive account
    const handleUpdate = () => {
        updateSendAccount({
            id:sendAccountId,
            data:{
                name:sendAccountName,
                minimum:minimumValue
            }
        })
    }





    return (
        <>
            <Modal title="Edit Send Account" open={modalOpen} onOk={handleOk}>
                <div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Send Account Name
                        </label>
                        <input onChange={(e)=>dispatch(SetSendAccountName(e.target.value))} value={sendAccountName} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Minimum Exchange Amount
                        </label>
                        <input onChange={(e)=>dispatch(SetMinimumValue(e.target.value))} value={minimumValue} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button onClick={handleCancel} className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <button onClick={handleUpdate} disabled={isLoading} className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {isLoading ? "Processing..." : "Save"}
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EditSendAccountModal;