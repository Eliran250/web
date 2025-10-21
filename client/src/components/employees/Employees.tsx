import Loader from "../../loader/Loader";
import type { User, UsersResponse } from "../../types/interface/employees";
import EmployeesPopup from "../popup/employeesPopup/EmployeesPopup";
import './employeesStyle.scss'

interface IProps {
    data: UsersResponse | null,
    openPopup: boolean,
    handleClick: (user: User) => void,
    selectedUser: User | null,
    setOpenPopup: (openPopup: boolean) => void,
    setPage: (number: number) => void,
    page: number,
    newArr: number[]
}

const Employees = ({ data, openPopup, handleClick, selectedUser, setOpenPopup, setPage, page, newArr }: IProps) => {

    if (!data) return <div><Loader /></div>;

    return (
        <div className="employees-container">

            <div className="pageination-container">
                <button onClick={() => setPage(page - 1)}>Prev</button>
                <div className="pageination">{newArr.map((pageNumber: number, index: number) => (
                    <div className="eace-page" key={index}>{pageNumber}</div>
                ))}</div>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>

            {data?.users?.map((user: any) => (
                <div className="card" key={user.id} onClick={() => handleClick(user)}>
                    <img src={user.image} alt={user.firstName} />
                    <p>Name: {user.firstName} {user.lastName}</p>
                </div>
            ))}

            {openPopup && (
                <EmployeesPopup selectedUser={selectedUser} openPopup={openPopup} setOpenPopup={setOpenPopup} />
            )}
        </div>
    )
}

export default Employees