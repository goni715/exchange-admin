import {Table} from "antd";
import {
     useGetAllSendAccountQuery,
     useUpdateSendAccountDisabledMutation
} from "../../redux/features/account/accountApi.js";
import {useDispatch} from "react-redux";
import {SetSendAccountModalOpen} from "../../redux/features/modal/modalSlice.js";
import {
    SetMinimumValue,
    SetSendAccountId, SetSendAccountName
} from "../../redux/features/account/accountSlice.js";
import EditSendAccountModal from "../modal/EditSendAccountModal.jsx";
import ListLoading from "../Loader/ListLoading.jsx";

const columns = [
    {
        title: "S.N.",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Minimum Exchange",
        dataIndex: "minimum",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
    {
        title: "Enabled/Disabled",
        dataIndex: "active",
    }
];

const SendAccountList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetAllSendAccountQuery();
    const sendAccounts = data?.data || [];
    const [updateSendAccountDisabled] = useUpdateSendAccountDisabledMutation();



    const tableData = [];


    //handle enabled-disabled
    const handleEnabledDisabled = (hidden, id) => {
        updateSendAccountDisabled({
            id,
            data:{
                hidden
            }
        })
    }





    if (!isLoading && !isError && sendAccounts?.length > 0) {
        for (let i = 0; i < sendAccounts.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: sendAccounts[i]?.name,
                minimum: sendAccounts[i]?.minimum,
                action: (
                    <>
                        <button
                            onClick={()=>{
                                dispatch(SetSendAccountId(sendAccounts[i]?._id))
                                dispatch(SetSendAccountName(sendAccounts[i]?.name))
                                dispatch(SetMinimumValue(sendAccounts[i]?.minimum))
                                dispatch(SetSendAccountModalOpen(true))
                            }}
                            key={Date.now()}
                            className={`text-white font-bold py-2 bg-green-500 px-4 rounded-md`}>
                            Edit
                        </button>
                    </>
                ),
                active: (
                    <>
                        <select key={Date.now()} defaultValue={sendAccounts[i]?.hidden} onChange={(e)=>handleEnabledDisabled(e.target.value, sendAccounts[i]?._id)} className="border rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                            <option value={true}>Disabled</option>
                            <option value={false}>Enabled</option>
                        </select>
                    </>
                ),
            });
        }

    }




    return (
        <>
            <section id="main" className="py-6">
                <h1 className="text-center font-bold text-3xl mb-3">Send Account List</h1>
                {
                    isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <>

                            <div className="p-2 shadow-md rounded-md">
                                <Table columns={columns} dataSource={tableData} scroll={{x: true, y: 400}}/>
                            </div>
                        </>
                    )
                }
            </section>

            <EditSendAccountModal/>
        </>
    );
};

export default SendAccountList;