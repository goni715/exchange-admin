import {useGetInformationQuery} from "../../redux/features/information/InformationApi.js";
import EditForm from "./EditForm.jsx";

const EditInformation = () => {
    const {data, isLoading, isError} = useGetInformationQuery();
    const information = data?.data || {};

    if (!isLoading && !isError && information?._id) {
        return (
            <>
                <section className="px-12 py-10">
                    <h1 className="text-center py-6 text-3xl font-bold">Edit Admin Information</h1>
                    <EditForm information={information}/>
                </section>
            </>
        );
    }
};

export default EditInformation;