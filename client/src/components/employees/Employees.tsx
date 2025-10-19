import Loader from "../../loader/Loader";
import type { UsersResponse } from "../../types/interface/employees";
import EmployeesPopup from "../popup/employeesPopup/EmployeesPopup";
import './employeesStyle.scss'

const Employees = ({ data, openPopup, handleClick, selectedUser,setOpenPopup }: { data: UsersResponse | null, openPopup: any, handleClick: (any), selectedUser: any,setOpenPopup:any }) => {

    if (!data) return <div><Loader /></div>;
    
    return (
        <div className="employees-container">
            {data?.users?.map((user: any) => (
                <div className="card" key={user.id} onClick={() => handleClick(user)}>
                    <img src={user.image} alt={user.firstName} />
                    <p>Name: {user.firstName} {user.lastName}</p>
                </div>
            ))}
            {openPopup && (
                <EmployeesPopup selectedUser={selectedUser} openPopup={openPopup} setOpenPopup={setOpenPopup}/>
            )}
        </div>
    )
}

export default Employees