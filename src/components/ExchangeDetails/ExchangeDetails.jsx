import {useParams} from "react-router-dom";
import {useGetExchangeQuery} from "../../redux/features/exchange/exchangeApi.js";
import Details from "./Details.jsx";

const ExchangeDetails = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetExchangeQuery(id);
    const exchange = data?.data || {};
    const {receiveAccountId} = exchange || {};

    // decide what to render
    let content = null;
    if (isLoading) content = "Loading...";

    if (!isLoading && isError)
        content = <div className="col-span-12">Something Went wrong</div>;

    if (!isLoading && !isError && !exchange?._id) {
        content = <div className="col-span-12">No Exchange found!</div>;
    }


    if (!isLoading && !isError && exchange?._id) {
        content = <Details receiveAccountId={receiveAccountId} exchange={exchange}/>
    }

    return (
        <>
            {content}
        </>
    );
};

export default ExchangeDetails;