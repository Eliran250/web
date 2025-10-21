import { useEffect, useState } from "react";
import { fetchEmployees } from "../api/EmplyeesApi";
import PageinationContainer from "../pageination/pageinationContainer/PageinationContainer";

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