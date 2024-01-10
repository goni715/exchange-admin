import {Table} from "antd";
import {useDispatch} from "react-redux";
import { useGetAllRateQuery} from "../../redux/features/rate/rateApi.js";
import {SetCurrent, SetRateId, SetUnit} from "../../redux/features/rate/rateSlice.js";
import {SetRateModalOpen} from "../../redux/features/modal/modalSlice.js";
import EditRateModal from "../modal/EditRateModal.jsx";
import CreateRate from "./CreateRate.jsx";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Send-Account",
        dataIndex: "sendAccount",
    },
    {
        title: "Receive-Account",
        dataIndex: "receiveAccount",
    },
    {
        title: "Base Price",
        dataIndex: "unit",
    },
    {
        title: "Current Price",
        dataIndex: "current",
    },
    {
        title: "Action",
        dataIndex: "action",
    }
];

const RateList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetAllRateQuery();
    const rates = data?.data || [];




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




    if (!isLoading && !isError && rates?.length > 0) {
        for (let i = 0; i < rates.length; i++) {
            tableData.push({
                key: Number(i + 1),
                sendAccount: rates[i]?.sendAccount[0]?.name,
                receiveAccount: rates[i]?.receiveAccount[0]?.name,
                unit: rates[i]?.unit,
                current: rates[i]?.current,
                action: (
                    <>
                        <button
                            onClick={()=>{
                                dispatch(SetRateId(rates[i]?._id))
                                dispatch(SetUnit(rates[i]?.unit))
                                dispatch(SetCurrent(rates[i]?.current))
                                dispatch(SetRateModalOpen(true))
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
            <CreateRate/>
            <br/><br/>
            {content}
            <section id="main" className="py-10">
                <h1 className="text-center font-bold text-3xl mb-3">Rate List</h1>
                <div className="px-12 bg-white w-auto overflow-x-auto">
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </section>

            <EditRateModal/>
        </>
    );
};

export default RateList;