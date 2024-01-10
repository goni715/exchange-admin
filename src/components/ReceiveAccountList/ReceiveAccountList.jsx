import {Table} from "antd";
import {
    useGetAllReceiveAccountQuery,
    useUpdateReceiveAccountDisabledMutation
} from "../../redux/features/account/accountApi.js";
import {useDispatch} from "react-redux";
import EditReceiveAccountModal from "../modal/EditReceiveAccountModal.jsx";
import {
    SetReceiveAccountId,
    SetReceiveAccountName, SetReservedValue
} from "../../redux/features/account/accountSlice.js";
import {SetReceiveAccountModalOpen} from "../../redux/features/modal/modalSlice.js";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Reserved Amount",
        dataIndex: "reserve",
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

const ReceiveAccountList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetAllReceiveAccountQuery();
    const receiveAccounts = data?.data || [];
    const [updateReceiveAccountDisabled] = useUpdateReceiveAccountDisabledMutation();




    //decision how to render
    let content = null;

    if (isLoading) {
        content = <li className="m-2 text-center">Loading...</li>;
    }

    if (!isLoading && isError) {
        content = (
            <h1>some error occured</h1>
        );

    }


    const tableData = [];


    //handle enabled-disabled
    const handleEnabledDisabled = (hidden, id) => {
        updateReceiveAccountDisabled({
            id,
            data:{
                hidden
            }
        })
    }





    if (!isLoading && !isError && receiveAccounts?.length > 0) {
        for (let i = 0; i < receiveAccounts.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: receiveAccounts[i]?.name,
                reserve: receiveAccounts[i]?.reserved,
                action: (
                    <>
                        <button
                            onClick={()=>{
                                dispatch(SetReceiveAccountId(receiveAccounts[i]?._id))
                                dispatch(SetReceiveAccountName(receiveAccounts[i]?.name))
                                dispatch(SetReservedValue(receiveAccounts[i]?.reserved))
                                dispatch(SetReceiveAccountModalOpen(true))
                            }}
                            key={Date.now()}
                            className={`text-white font-bold py-2 bg-green-500 px-4 rounded-md`}>
                            Edit
                        </button>
                    </>
                ),
                active: (
                    <>
                        <select key={Date.now()} defaultValue={receiveAccounts[i]?.hidden} onChange={(e)=>handleEnabledDisabled(e.target.value, receiveAccounts[i]?._id)} className="border rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
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
            {content}
            <section id="main" className="py-10">
                <h1 className="text-center font-bold text-3xl mb-3">Receive Account List</h1>
                <div className="px-12 bg-white w-auto overflow-x-auto">
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </section>

            <EditReceiveAccountModal/>
        </>
    );
};

export default ReceiveAccountList;