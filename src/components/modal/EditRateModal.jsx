import {Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    selectRateModalOpen,
    SetRateModalOpen,
} from "../../redux/features/modal/modalSlice.js";
import {useEffect} from "react";
import {SetCurrent, SetUnit} from "../../redux/features/rate/rateSlice.js";
import {useUpdateRateMutation} from "../../redux/features/rate/rateApi.js";

const EditRateModal = () => {
    const dispatch=useDispatch();
    const modalOpen = useSelector(selectRateModalOpen);
    const {rateId, unit,current} = useSelector((state)=>state.rate);
    const [updateRate, {isSuccess,isLoading}] = useUpdateRateMutation();



    const handleOk = () => {
        dispatch(SetRateModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetRateModalOpen(false));
    };


    useEffect(()=>{
        if(isSuccess){
            dispatch(SetRateModalOpen(false));
        }
    },[isSuccess, dispatch])



    //update receive account
    const handleUpdate = () => {
        updateRate({
            id:rateId,
            data:{
                unit,
                current
            }
        })
    }





    return (
        <>
            <Modal title="Edit Rate" open={modalOpen} onOk={handleOk}>
                <div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Base Price
                        </label>
                        <input onChange={(e)=>dispatch(SetUnit(e.target.value))} value={unit} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Current Price
                        </label>
                        <input onChange={(e)=>dispatch(SetCurrent(e.target.value))} value={current} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
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

export default EditRateModal;