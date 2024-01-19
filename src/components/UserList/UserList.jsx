import {Table} from "antd";
import {useGetUsersQuery, useMakeAdminMutation, useRemoveAdminMutation} from "../../redux/features/user/userApi.js";

const columns = [
    {
        title: "SNo",
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
    }
];

const UserList = () => {
    const {data, isLoading, isError} = useGetUsersQuery();
    const users = data?.data || [];
    const [makeAdmin,{isLoading:loading}] = useMakeAdminMutation();
    const [removeAdmin, {isLoading:removeLoading}] = useRemoveAdminMutation();



    //decision how to render
    let content = null;

    if (isLoading) {
        content = <li className="m-2 text-center">Loading...</li>;
    }

    if (!isLoading && isError) {
        content = (
            <h1>some error occured</h1>
        );

    }


    const tableData = [];



    //update status
    const handleMakeAdmin = (id) => {
        makeAdmin(id)
    }

    const handleRemoveAdmin = (id) => {
        removeAdmin(id)
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
            });
        }

    }




    return (
        <>
            {content}
            <section id="main" className="py-10">
                <h1 className="text-center font-bold text-3xl mb-3">User List</h1>
                <div className="px-12 bg-white w-auto overflow-x-auto">
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </section>
        </>
    );
};

export default UserList;