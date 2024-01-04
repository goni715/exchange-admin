import {useGetAllContactQuery, useUpdateContactStatusMutation} from "../../redux/features/contact/contactApi.js";
import {Table} from "antd";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Message",
        dataIndex: "message"
    },
    {
        title: "Status",
        dataIndex: "status",
    }
];

const ContactList = () => {
    const {data, isLoading, isError} = useGetAllContactQuery();
    const contacts = data?.data || [];
    const [updateContactStatus] = useUpdateContactStatusMutation();



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
    const handleUpdateStatus = (status, id) => {
        updateContactStatus({
            id,
            data:{
                status
            }
        })
    }



    if (!isLoading && !isError && contacts?.length > 0) {
        for (let i = 0; i < contacts.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: contacts[i].name,
                email: contacts[i].email,
                message: contacts[i].message,
                status: (
                    <>
                        <select key={Date.now()} defaultValue={contacts[i].status} onChange={(e)=>handleUpdateStatus(e.target.value, contacts[i]?._id)} className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                            <option value="Submitted">Submitted</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </>
                ),
            });
        }

    }




    return (
        <>
            {content}
            <section id="main" className="py-10">
                <h1 className="text-center font-bold text-3xl mb-3">Contact List</h1>
                <div className="px-12 bg-white w-auto overflow-x-auto">
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </section>
        </>
    );
};

export default ContactList;