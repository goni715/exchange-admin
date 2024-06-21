import {Table} from "antd";
import {
     useGetCompletedExchangesQuery,
} from "../../redux/features/exchange/exchangeApi.js";
import moment from "moment";
import ListLoading from "../Loader/ListLoading.jsx";

const columns = [
    {
        title: "S.N.",
        dataIndex: "key",
    },
    {
        title: "Exchange ID",
        dataIndex: "id",
    },
    {
        title: "Transaction or Batch",
        dataIndex: "transaction",
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
        title: "Date & Time",
        dataIndex: "date",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
];

const History = () => {
    const {data, isLoading, isError} = useGetCompletedExchangesQuery();
    const exchanges = data?.data || [];




    const tableData = [];



    if (!isLoading && !isError && exchanges?.length > 0) {
        for (let i = 0; i < exchanges.length; i++) {
            tableData.push({
                key: Number(i + 1),
                id: exchanges[i]?._id,
                transaction: exchanges[i].transactionOrBatch,
                sendAmount: exchanges[i].sendAmount,
                receiveAmount: exchanges[i].receiveAmount,
                date: moment(exchanges[i].createdAt).format('LLLL'),
                status: (
                    <>
                        <button className={`text-white cursor-not-allowed font-bold py-2 px-4 rounded bg-green-500`}>
                            {exchanges[i].status}
                        </button>
                    </>
                )
            });
        }

    }




    return (
        <>

            <section id="main" className="py-6">
                <h1 className="text-center text-3xl font-bold mb-3">Completed Exchanges</h1>
                {
                    isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <>

                            <div className="p-2 shadow-md rounded-md">
                                <Table style={{minWidth: 1200}} columns={columns} dataSource={tableData} scroll={{x:true, y: 400}}/>
                            </div>
                        </>
                    )
                }
            </section>
        </>
    );
};

export default History;