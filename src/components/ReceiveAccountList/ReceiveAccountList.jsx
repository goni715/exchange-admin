import {Table} from "antd";
import {useGetAllReceiveAccountQuery} from "../../redux/features/account/accountApi.js";
import {useDispatch} from "react-redux";
import {SetModalOpen} from "../../redux/features/modal/modalSlice.js";
import EditReceiveAccountModal from "../modal/EditReceiveAccountModal.jsx";
import {
    SetReceiveAccountId,
    SetReceiveAccountName, SetReservedValue
} from "../../redux/features/account/accountSlice.js";

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
        title: "Reserved",
        dataIndex: "reserve",
    },
    {
        title: "Action",
        dataIndex: "action",
    }
];

const ReceiveAccountList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetAllReceiveAccountQuery();
    const receiveAccounts = data?.data || [];



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




    if (!isLoading && !isError && receiveAccounts?.length > 0) {
        for (let i = 0; i < receiveAccounts.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: receiveAccounts[i].name,
                reserve: receiveAccounts[i].reserved,
                action: (
                    <>
                        <button
                            onClick={()=>{
                                dispatch(SetReceiveAccountId(receiveAccounts[i]._id))
                                dispatch(SetReceiveAccountName(receiveAccounts[i].name))
                                dispatch(SetReservedValue(receiveAccounts[i].reserved))
                                dispatch(SetModalOpen(true))
                            }}
                            key={Date.now()}
                            className={`text-white font-bold py-2 bg-green-500 px-4 rounded-md`}>
                            Edit
                        </button>
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