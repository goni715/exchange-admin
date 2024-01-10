import RocketDetails from "./RocketDetails.jsx";
import DutchBanglaDetails from "./DutchBanglaDetails.jsx";
import NagadDetails from "./NagadDetails.jsx";
import BkashDetails from "./BkashDetails.jsx";
import CityBankDetails from "./CityBankDetails.jsx";
import PerfectMoneyDetails from "./PerfectMoneyDetails.jsx";
import BracBankDetails from "./BracBankDetails.jsx";

const Details = ({receiveAccountId, exchange}) => {

    if(receiveAccountId === "659d8a30510cf0bdd944d2ca"){
        return(
            <RocketDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "659d8a51510cf0bdd944d2ce"){
        return(
            <DutchBanglaDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "659d8a02510cf0bdd944d2c6"){
        return(
            <NagadDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "659d8963510cf0bdd944d2ba"){
        return(
            <BkashDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "659d8995510cf0bdd944d2be"){
        return(
            <CityBankDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "659d8a92510cf0bdd944d2d2"){
        return(
            <PerfectMoneyDetails exchange={exchange}/>
        )
    }
    if(receiveAccountId === "659d891c510cf0bdd944d2b4"){
        return(
            <BracBankDetails exchange={exchange}/>
        )
    }
};

export default Details;