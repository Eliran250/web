import { useState } from 'react';
import type { User } from '../../../types/interfaces/employees';
import EmployeesPopup from '../../popup/employeesPopup/EmployeesPopup';
import './pageinationStyle.scss'

interface IProps {
    setCourentPage: any,
    courentPage: number,
    numberArr: number[],
    courentData: any
}

const PageinationEmployees = ({ setCourentPage, courentPage, numberArr, courentData }: IProps) => {

    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleClick = (user: User) => {
        setSelectedUser(user);
        setOpenPopup(true);
    }

    return (
        <div className='employees-container'>
            {courentData.map((item: any) => (
                <div className="card" onClick={() => handleClick(item)} key={item.id}>
                    <img src={item.image} alt="" />
                </div>
            ))}
            <div className="pageination-container">
                <button onClick={() => setCourentPage(courentPage > 1 ? courentPage - 1 : 1)}>Prev</button>
                <div className="pageination">
                    {numberArr.map((pageNumber: number, index: number) => (
                        <div className={`eace-page ${courentPage === pageNumber ? "active" : ""}`} key={index}>
                            {pageNumber}
                        </div>
                    ))}
                </div>
                <button onClick={() => setCourentPage(courentPage < numberArr.length ? courentPage + 1 : numberArr.length)}>Next</button>
            </div>
            {openPopup && (
                <EmployeesPopup selectedUser={selectedUser} openPopup={openPopup} setOpenPopup={setOpenPopup} />
            )}
        </div>
    )
}

export default PageinationEmployees