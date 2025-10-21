import { useEffect, useState } from "react";
import PageinationContainer from "../pageination/pageinationContainer/PageinationContainer";
import { fetchEmployees } from "../../api/emplyeesApi";

const EmployeesContainer = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchEmployees()
            .then(setData)
            .catch(console.error)
    }, []);

    return (
        <>
            {data && <PageinationContainer data={data} />}
        </>
    )
}

export default EmployeesContainer