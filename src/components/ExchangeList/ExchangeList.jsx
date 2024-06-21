import {Table} from "antd";
import {
    useGetAllExchangeQuery
} from "../../redux/features/exchange/exchangeApi.js";
import {useNavigate} from "react-router-dom";
import moment from "moment/moment";
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
        title: "Date",
        dataIndex: "date",
    },
    {
        title: "Details",
        dataIndex: "details",
    }
];

const ExchangeList = () => {
    const navigate = useNavigate();
    const {data, isLoading, isError} = useGetAllExchangeQuery();
    const exchanges = data?.data || [];





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
                        <button className={`text-white cursor-not-allowed font-bold py-2 px-4 rounded ${(exchanges[i].status==="Processing" && "bg-yellow-500") || (exchanges[i].status==="Cancelled" && "bg-lime-500") || (exchanges[i].status==="Timeout" && "bg-blue-500") || (exchanges[i].status==="Completed" && "bg-green-500") || (exchanges[i].status==="Pending" && "bg-gray-500") || (exchanges[i].status==="Awaiting Payment" && "bg-cyan-500") || (exchanges[i].status==="Awaiting Confirmation" && "bg-fuchsia-500") || (exchanges[i].status==="Denied" && "bg-red-500")}`}>
                            {exchanges[i].status}
                        </button>
                    </>
                ),
                date: moment(exchanges[i].createdAt).format('LLLL'),
                details: (
                    <>
                        <button onClick={()=>navigate(`/exchange-details/${exchanges[i]?._id}`)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                            View Details
                        </button>
                    </>
                ),
            });
        }

    }




    return (
        <>

            <section id="main" className="py-6">
                <h1 className="text-center text-3xl font-bold mb-3">Exchange List</h1>
                {
                    isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <>

                            <div className="p-2 shadow-md rounded-md">
                                <Table style={{minWidth:1200}} columns={columns} dataSource={tableData} scroll={{x: true, y: 400}}/>
                            </div>
                        </>
                    )
                }
            </section>
        </>
    );
};

export default ExchangeList;