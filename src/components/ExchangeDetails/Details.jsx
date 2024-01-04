import RocketDetails from "./RocketDetails.jsx";
import DutchBanglaDetails from "./DutchBanglaDetails.jsx";
import NagadDetails from "./NagadDetails.jsx";
import BkashDetails from "./BkashDetails.jsx";
import CityBankDetails from "./CityBankDetails.jsx";
import PerfectMoneyDetails from "./PerfectMoneyDetails.jsx";
import BracBankDetails from "./BracBankDetails.jsx";

const Details = ({receiveAccountId, exchange}) => {

    if(receiveAccountId === "658d2f2161d015e063fd92f4"){
        return(
            <RocketDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "658d2f3a61d015e063fd92f8"){
        return(
            <DutchBanglaDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "658d2f0f61d015e063fd92f1"){
        return(
            <NagadDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "658d2f7561d015e063fd92ff"){
        return(
            <BkashDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "658d2f5161d015e063fd92fb"){
        return(
            <CityBankDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "65930fa44798ee030c6d54f3"){
        return(
            <PerfectMoneyDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "6593e3150bf1828210763a67"){
        return(
            <BracBankDetails exchange={exchange}/>
        )
    }
};

export default Details;