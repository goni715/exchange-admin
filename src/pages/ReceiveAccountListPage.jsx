import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ReceiveAccountList from "../components/ReceiveAccountList/ReceiveAccountList.jsx";

const ReceiveAccountListPage = () => {
    return (
        <>
            <Navbar/>
            <ReceiveAccountList/>
            <Footer/>
        </>
    );
};

export default ReceiveAccountListPage;