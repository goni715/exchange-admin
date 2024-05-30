import {FaHistory, FaPiggyBank, FaSignOutAlt, FaUsers} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import {
    MdContactMail
} from "react-icons/md";
import {IoMdHome} from "react-icons/io";
import {Link, useLocation} from "react-router-dom";
import {logout} from "../../helper/SessionHelper.js";
import {FaCircleDollarToSlot} from "react-icons/fa6";
import {GiPiggyBank} from "react-icons/gi";
import {IoInformationCircle} from "react-icons/io5";




const MobileMenu = ({showMenu, setShowMenu}) => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div
                className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 h-screen z-20 w-72 bg-dark-purple dark:text-white px-5 pb-5 pt-8 md:hidden transition-all duration-500 rounded-r-xl shadow-md`}>
                {/* logo part*/}
                <div className="flex gap-x-4 items-center">
                    <img src={logo} className="cursor-pointer duration-500" alt="logo"/>
                    <h1 className={`text-white origin-left font-semibold text-xl duration-300 ${!open && "scale-0"}`}>Admin</h1>
                </div>
                {/* logo part ended*/}


                <ul className="pt-6 space-y-3">
                    <Link to="/" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/" && "bg-light-white"}`}>
                        <IoMdHome size={22}/>
                        <span className="origin-left duration-300">Home</span>
                    </Link>
                    <Link to="/users" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/users" && "bg-light-white"}`}>
                        <FaUsers size={22}/>
                        <span className="origin-left duration-300">User List</span>
                    </Link>
                    <Link to="/history" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/history" && "bg-light-white"}`}>
                        <FaHistory size={22}/>
                        <span className="origin-left duration-300">History</span>
                    </Link>
                    <Link to="/send-accounts" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/send-accounts" && "bg-light-white"}`}>
                        <FaPiggyBank size={22}/>
                        <span className="origin-left duration-300">Send-Accounts</span>
                    </Link>
                    <Link to="/receive-accounts" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/receive-accounts" && "bg-light-white"}`}>
                        <GiPiggyBank size={22}/>
                        <span className="origin-left duration-300">Receive-Accounts</span>
                    </Link>
                    <Link to="/rate-list" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/rate-list" && "bg-light-white"}`}>
                        <FaCircleDollarToSlot size={22}/>
                        <span className="origin-left duration-300">Rate-List</span>
                    </Link>
                    <Link to="/information" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/information" && "bg-light-white"}`}>
                        <IoInformationCircle size={22}/>
                        <span className="origin-left duration-300">Information</span>
                    </Link>
                    <Link to="/contacts" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/teachers" && "bg-light-white"}`}>
                        <MdContactMail size={22}/>
                        <span className="origin-left duration-300">Contact List</span>
                    </Link>
                    <li onClick={()=>logout()} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <FaSignOutAlt size={22}/>
                        <span className="origin-left duration-300">Logout</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;