
const PerfectMoneyDetails = ({exchange}) => {
    const {_id, user, email,sendAmount, sendAccount, receiveAccount, receiveAmount, information, transactionOrBatch} = exchange || {};
    const {name:sendAccountName} = sendAccount[0] || {};
    const {name:receiveAccountName} = receiveAccount[0] || {};
    const {perfectUID, contactNumber} = information || {};
    const {username, email:userEmail} = user[0] || {};


    return (
        <>
            <section className="pt-6 pb-20">
                <div className="flex items-center justify-center">
                    <div className="w-[40%]">
                        <div className="flex bg-[#f9f9f9] border-l border-r border-t border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Exchange ID</p>
                            <p className="uppercase">{_id}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>User Name</p>
                            <p>{username}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>User Email</p>
                            <p>{userEmail}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Transaction Number/Batch</p>
                            <p>{transactionOrBatch}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Email</p>
                            <p>{email}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Send Account Name</p>
                            <p>{sendAccountName}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Receive Account Name</p>
                            <p>{receiveAccountName}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Send Amount</p>
                            <p>{sendAmount}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Receive Amount</p>
                            <p>{receiveAmount}</p>
                        </div>
                        <div className="flex border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Perfect Money UID EX: U38448381</p>
                            <p>{perfectUID}</p>
                        </div>
                        <div className="flex bg-[#f9f9f9] border-l border-r border-b border-gray-300 py-3 px-2 justify-between rounded">
                            <p>Contact Number</p>
                            <p>{contactNumber}</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PerfectMoneyDetails;