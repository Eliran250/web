import { useNavigate } from "react-router-dom"

const EmployeesMangement = () => {

    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/employees")}>View and edit employees</button>
            <button onClick={() => navigate("/addEmployees")}>Add employees</button>
        </>
    )
}

export default EmployeesMangement