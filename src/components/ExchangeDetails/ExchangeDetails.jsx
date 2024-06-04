import {useParams} from "react-router-dom";
import {useGetExchangeQuery} from "../../redux/features/exchange/exchangeApi.js";
import Details from "./Details.jsx";
import DetailsLoading from "../Loader/DetailsLoading.jsx";

const ExchangeDetails = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetExchangeQuery(id);
    const exchange = data?.data || {};
    const {receiveAccountId} = exchange || {};


    return (
        <>

            <section className="min-h-[80vh] py-6">
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-[80%]">
                        {
                            isLoading ? (
                                <>
                                    <DetailsLoading/>
                                </>
                            ) : (
                                <>

                                    <Details receiveAccountId={receiveAccountId} exchange={exchange}/>
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExchangeDetails;