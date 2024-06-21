import {Table} from "antd";
import {
    useDeleteUserMutation,
    useGetUsersQuery,
    useMakeAdminMutation,
    useRemoveAdminMutation
} from "../../redux/features/user/userApi.js";
import {DeleteAlert} from "../../helper/DeleteAlert.js";
import ListLoading from "../Loader/ListLoading.jsx";

const columns = [
    {
        title: "S.N.",
        dataIndex: "key",
    },
    {
        title: "User Name",
        dataIndex: "username",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
    {
        title: "Remove",
        dataIndex: "remove",
    }
];

const UserList = () => {
    const {data, isLoading, isError} = useGetUsersQuery();
    const users = data?.data || [];
    const [makeAdmin,{isLoading:loading}] = useMakeAdminMutation();
    const [removeAdmin, {isLoading:removeLoading}] = useRemoveAdminMutation();
    const [deleteUser] = useDeleteUserMutation();




    const tableData = [];



    //update status
    const handleMakeAdmin = (id) => {
        makeAdmin(id)
    }

 const handleRemoveAdmin = (id) => {
     removeAdmin(id)
 }





//DeleteUser
    const DeleteUser = async (id) => {
        let Result = await DeleteAlert();
        if(Result.isConfirmed ===true){
            deleteUser(id)
        }
    }





    if (!isLoading && !isError && users?.length > 0) {
        for (let i = 0; i < users.length; i++) {
            tableData.push({
                key: Number(i + 1),
                username: users[i]?.username,
                email: users[i]?.email,
                action: (
                    <>
                        {users[i]?.role ==="user" ? (
                                <button disabled={loading} onClick={()=>handleMakeAdmin(users[i]?._id)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                    Make Admin
                                </button>
                            ) : (
                                <button disabled={removeLoading} onClick={()=>handleRemoveAdmin(users[i]?._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Remove Admin
                                </button>
                            )
                        }

                    </>
                ),
                remove: (
                    <button onClick={() => DeleteUser(users[i]?._id)}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Delete User
                    </button>
                )
            });
        }

    }


    return (
        <>

            <section id="main" className="py-6">
                <h1 className="text-center font-bold text-3xl mb-3">User List</h1>
                {
                    isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <>

                            <div className="p-2 shadow-md rounded-md">
                                    <Table columns={columns} dataSource={tableData} scroll={{x:true, y: 400}}/>
                            </div>
                        </>
                    )
                }
            </section>
        </>
    );
};

export default UserList;