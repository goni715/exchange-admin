import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SendAccountList from "../components/SendAccountList/SendAccountList.jsx";

const SendAccountListPage = () => {
    return (
        <>
            <Navbar/>
            <SendAccountList/>
            <Footer/>
        </>
    );
};

export default SendAccountListPage;