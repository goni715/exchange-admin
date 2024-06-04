import {
    useSendExchangeConfirmEmailMutation,
    useUpdateExchangeMutation
} from "../../redux/features/exchange/exchangeApi.js";

const RocketDetails = ({exchange}) => {
    const {_id, user, email,sendAmount, sendAccount, receiveAccount, receiveAmount, information, transactionOrBatch, status} = exchange || {};
    const {name:sendAccountName} = sendAccount[0] || {};
    const {name:receiveAccountName} = receiveAccount[0] || {};
    const {rocketNumber, contactNumber} = information || {};
    const {username, email:userEmail} = user[0] || {};
    const [updateExchange] = useUpdateExchangeMutation();
    const [sendExchangeConfirmEmail, {isLoading}] = useSendExchangeConfirmEmailMutation();



    //update status
    const handleUpdateStatus = (status, id) => {
        updateExchange({
            id,
            data:{
                status
            }
        })
    }



    //Send Email
    const handleSendEmail = (email) => {
        sendExchangeConfirmEmail({
            email
        })
    }





    return (
        <>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 bg-[#f9f9f9] border-l border-r border-t border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Exchange ID</p>
                <p className="uppercase">{_id}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">User Name</p>
                <p>{username}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">User Email</p>
                <p>{userEmail}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Transaction Number/Batch</p>
                <p>{transactionOrBatch}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Email</p>
                <p>{email}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Send Account Name</p>
                <p>{sendAccountName}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Receive Account Name</p>
                <p>{receiveAccountName}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Send Amount</p>
                <p>{sendAmount}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Receive Amount</p>
                <p>{receiveAmount}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Rocket Personal Number</p>
                <p>{rocketNumber}</p>
            </div>
            <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                <p className="font-bold">Contact Number</p>
                <p>{contactNumber}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
                <div className="w-full md:w-1/2">
                    <label className="block pb-2 font-bold" htmlFor="status">Change Status</label>
                    <select key={Date.now()} defaultValue={status}
                            onChange={(e) => handleUpdateStatus(e.target.value, _id)}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            id="status">
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Timeout">Timeout</option>
                        <option value="Denied">Denied</option>
                        <option value="Completed">Completed</option>
                        <option value="Awaiting Payment">Awaiting Payment</option>
                        <option value="Awaiting Confirmation">Awaiting Confirmation</option>
                    </select>
                </div>
                <div className="flex items-end w-full md:w-1/2">
                    <button disabled={isLoading} onClick={() => handleSendEmail(userEmail)}
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {isLoading ? "Sending..." : "Send Confirmation Email"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default RocketDetails;