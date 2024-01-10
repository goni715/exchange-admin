import {Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {SetReceiveAccountName, SetReservedValue} from "../../redux/features/account/accountSlice.js";
import {useUpdateReceiveAccountMutation} from "../../redux/features/account/accountApi.js";
import {useEffect} from "react";
import {selectReceiveAccountModalOpen, SetReceiveAccountModalOpen} from "../../redux/features/modal/modalSlice.js";

const EditReceiveAccountModal = () => {
    const dispatch=useDispatch();
    const modalOpen = useSelector(selectReceiveAccountModalOpen);
    const {receiveAccountId, receiveAccountName,reservedValue} = useSelector((state)=>state.account);
    const [updateReceiveAccount, {isSuccess,isLoading}] = useUpdateReceiveAccountMutation();



    const handleOk = () => {
        dispatch(SetReceiveAccountModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetReceiveAccountModalOpen(false));
    };


    useEffect(()=>{
       if(isSuccess){
           dispatch(SetReceiveAccountModalOpen(false));
       }
    },[isSuccess, dispatch])



    //update receive account
    const handleUpdate = () => {
        updateReceiveAccount({
            id:receiveAccountId,
            data:{
                name:receiveAccountName,
                reserved:reservedValue
            }
        })
    }





    return (
        <>
            <Modal title="Edit Receive Account" open={modalOpen} onOk={handleOk}>
                <div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Receive Account Name
                        </label>
                        <input onChange={(e)=>dispatch(SetReceiveAccountName(e.target.value))} value={receiveAccountName} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Reserved Amount
                        </label>
                        <input onChange={(e)=>dispatch(SetReservedValue(e.target.value))} value={reservedValue} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
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

export default EditReceiveAccountModal;