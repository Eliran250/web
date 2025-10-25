import { useEffect, useState } from "react";
import { fetchEmployees } from "../../../api/emplyeesApi";
import PageinationEmployees from "../../pageination/pageinaitionEmployees/PageinationEmployees";

const EmployeesContainer = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchEmployees()
            .then(setData)
            .catch(console.error)
    }, []);

    return (
        <>
            {data && <PageinationEmployees data={data} />}
        </>
    )
}

export default EmployeesContainer