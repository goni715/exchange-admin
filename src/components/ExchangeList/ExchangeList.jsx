import {Table} from "antd";
import {
    useGetAllExchangeQuery,
    useSendExchangeConfirmEmailMutation,
    useUpdateExchangeMutation
} from "../../redux/features/exchange/exchangeApi.js";
import {useNavigate} from "react-router-dom";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Exchange ID",
        dataIndex: "id",
    },
    {
        title: "Send Amount",
        dataIndex: "sendAmount"
    },
    {
        title: "Receive Amount",
        dataIndex: "receiveAmount"
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Change Status",
        dataIndex: "changeStatus",
    },
    {
        title: "Reply",
        dataIndex: "reply",
    },
    {
        title: "Details",
        dataIndex: "details",
    },
];

const ExchangeList = () => {
    const navigate = useNavigate();
    const {data, isLoading, isError} = useGetAllExchangeQuery();
    const exchanges = data?.data || [];
    const [updateExchange] = useUpdateExchangeMutation();
    const [sendExchangeConfirmEmail, {isLoading:emailLoading}] = useSendExchangeConfirmEmailMutation();




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




    //update status
    const handleUpdateStatus = (status, id) => {
       updateExchange({
           id,
           data:{
               status
           }
       })
    }



    //Send Email
    const handleSendEmail = (email) => {
        sendExchangeConfirmEmail({
           email
        })
    }




    const tableData = [];



    if (!isLoading && !isError && exchanges?.length > 0) {
        for (let i = 0; i < exchanges.length; i++) {
            tableData.push({
                key: Number(i + 1),
                id: exchanges[i]?._id,
                sendAmount: exchanges[i].sendAmount,
                receiveAmount: exchanges[i].receiveAmount,
                status: (
                    <>
                        <button className={`text-white cursor-not-allowed font-bold py-2 px-4 rounded ${(exchanges[i].status==="Pending" && "bg-red-500") || (exchanges[i].status==="Cancelled" && "bg-green-500") || (exchanges[i].status==="Timeout" && "bg-blue-500") || (exchanges[i].status==="Completed" && "bg-yellow-500") || (exchanges[i].status==="Processing" && "bg-gray-500") || (exchanges[i].status==="Awaiting Payment" && "bg-cyan-500") || (exchanges[i].status==="Awaiting Confirmation" && "bg-fuchsia-500") || (exchanges[i].status==="Denied" && "bg-lime-500")}`}>
                            {exchanges[i].status}
                        </button>
                    </>
                ),
                changeStatus: (
                    <>
                        <select key={Date.now()} defaultValue={exchanges[i].status} onChange={(e)=>handleUpdateStatus(e.target.value, exchanges[i]?._id)} className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Timeout">Timeout</option>
                            <option value="Denied">Denied</option>
                            <option value="Completed">Completed</option>
                            <option value="Awaiting Payment">Awaiting Payment</option>
                            <option value="Awaiting Confirmation">Awaiting Confirmation</option>
                        </select>
                    </>
                ),
                reply: (
                    <>
                        <button disabled={emailLoading} onClick={()=>handleSendEmail(exchanges[i].email)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                           Confirm
                        </button>
                    </>
                ),
                details: (
                    <>
                        <button onClick={()=>navigate(`/exchange-details/${exchanges[i]?._id}`)} className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded">
                            View Details
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
                <h1 className="text-center text-3xl font-bold mb-3">Exchange List</h1>
                <div className="px-12 bg-white w-auto overflow-x-auto">
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </section>
        </>
    );
};

export default ExchangeList;