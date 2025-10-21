import { useState } from 'react';
import './pageinationStyle.scss'
import type { User } from '../../../types/interface/employees';
import EmployeesPopup from '../../popup/employeesPopup/EmployeesPopup';

interface IProps {
    setCourentPage: any,
    courentPage: number,
    newArr: number[],
    courentData: any
}

const PageinationEmployees = ({ setCourentPage, courentPage, newArr, courentData }: IProps) => {

    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleClick = (user: User) => {
        setSelectedUser(user);
        setOpenPopup(true);
    }

    return (
        <div className='employees-container'>
            {openPopup && (
                <EmployeesPopup selectedUser={selectedUser} openPopup={openPopup} setOpenPopup={setOpenPopup} />
            )}
            {courentData.map((item: any) => (
                <div className="card" onClick={() => handleClick(item)} key={item.id}>
                    <img src={item.image} alt="" />
                </div>
            ))}
            <div className="pageination-container">
                <button onClick={() => setCourentPage(courentPage - 1)}>Prev</button>
                <div className="pageination">{newArr.map((pageNumber: number, index: number) => (
                    <div className="eace-page" key={index}>{pageNumber}</div>
                ))}</div>
                <button onClick={() => setCourentPage(courentPage + 1)}>Next</button>
            </div>
        </div>
    )
}

export default PageinationEmployees