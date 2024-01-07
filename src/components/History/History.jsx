import {Table} from "antd";
import {
     useGetCompletedExchangesQuery,
} from "../../redux/features/exchange/exchangeApi.js";

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
];

const History = () => {
    const {data, isLoading, isError} = useGetCompletedExchangesQuery();
    const exchanges = data?.data || [];




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
                )
            });
        }

    }




    return (
        <>
            {content}
            <section id="main" className="py-10">
                <h1 className="text-center text-3xl font-bold mb-3">Completed Exchanges</h1>
                <div className="px-12 bg-white w-auto overflow-x-auto">
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </section>
        </>
    );
};

export default History;