import {Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {selectModalOpen, SetModalOpen} from "../../redux/features/modal/modalSlice.js";
import {SetReservedValue} from "../../redux/features/account/accountSlice.js";

const EditReceiveAccountModal = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate()
    const modalOpen = useSelector(selectModalOpen);
    const {receiveAccountName,reservedValue} = useSelector((state)=>state.account);


    const handleOk = () => {
        dispatch(SetModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetModalOpen(false));
    };

    return (
        <>
            <Modal title="Edit Receive Account" open={modalOpen} onOk={handleOk}>
                <div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Receive Account Name
                        </label>
                        <input value={receiveAccountName} readOnly className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
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
                        <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                           Update
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EditReceiveAccountModal;