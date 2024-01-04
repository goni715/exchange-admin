import Navbar from "../components/Navbar.jsx";
import ExchangeList from "../components/exchange/ExchangeList.jsx";
import Footer from "../components/Footer.jsx";

const ExchangeListPage = () => {
    return (
        <>
            <Navbar/>
            <ExchangeList/>
            <Footer/>
        </>
    );
};

export default ExchangeListPage;