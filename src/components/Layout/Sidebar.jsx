import {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward, IoMdHome} from "react-icons/io";
import {
     MdContactMail
} from "react-icons/md";
import {FaHistory, FaPiggyBank, FaSignOutAlt, FaUsers} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import {Link, useLocation} from "react-router-dom";
import {logout} from "../../helper/SessionHelper.js";
import {FaCircleDollarToSlot} from "react-icons/fa6";
import {GiPiggyBank} from "react-icons/gi";
import {IoInformationCircle} from "react-icons/io5";


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();
    const path = location.pathname;



    return (
        <>
            {/*Sidebar started*/}

            <div
                className={`${open ? 'w-72' : 'w-20'} hidden md:block sidebar h-screen px-5 pb-5 pt-8 duration-300 bg-dark-purple rounded-r-xl relative`}>
                {/* logo part*/}
                <div className="flex gap-x-4 items-center">
                    <img src={logo} className="cursor-pointer duration-500" alt="logo"/>
                    <h1 className={`text-white origin-left font-semibold text-xl duration-300 ${!open && "scale-0"}`}>Admin</h1>
                </div>
                {/* logo part ended*/}

                {open ? (
                    <>
                        <div
                            onClick={() => setOpen(!open)}
                            className="bg-red-400 p-1.5 border-dark-purple absolute -right-4 top-9 rounded-full cursor-pointer">
                            <IoIosArrowBack className="text-xl text-white"/>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            onClick={() => setOpen(!open)}
                            className="bg-red-400 p-1.5 border-dark-purple absolute -right-5 top-9 rounded-full cursor-pointer">
                            <IoIosArrowForward className="text-xl text-white"/>
                        </div>
                    </>
                )
                }


                {/*menu-items*/}
                <ul className="pt-6 space-y-3">
                    <Link to="/"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/" && "bg-light-white"}`}>
                        <IoMdHome size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Home</span>
                    </Link>
                    <Link to="/users"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/users" && "bg-light-white"}`}>
                        <FaUsers size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>User List</span>
                    </Link>
                    <Link to="/history"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/history" && "bg-light-white"}`}>
                        <FaHistory size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>History</span>
                    </Link>
                    <Link to="/send-accounts"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/send-accounts" && "bg-light-white"}`}>
                        <FaPiggyBank size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Send-Accounts</span>
                    </Link>
                    <Link to="/receive-accounts"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/receive-accounts" && "bg-light-white"}`}>
                        <GiPiggyBank size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Receive-Accounts</span>
                    </Link>
                    <Link to="/rate-list"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/rate-list" && "bg-light-white"}`}>
                        <FaCircleDollarToSlot size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Rate-List</span>
                    </Link>
                    <Link to="/information"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/information" && "bg-light-white"}`}>
                        <IoInformationCircle size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Information</span>
                    </Link>
                    <Link to="/contacts"
                          className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path === "/contacts" && "bg-light-white"}`}>
                        <MdContactMail size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Contact List</span>
                    </Link>
                    <li onClick={() => logout()}
                        className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <FaSignOutAlt size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Logout</span>
                    </li>
                </ul>
                {/*menu-items ended*/}
            </div>


            {/*Sidebar Ended*/}

        </>
    );
};

export default Sidebar;