import { useState } from 'react';
import type { User } from '../../../types/interfaces/employees';
import EmployeesPopup from '../../popup/employeesPopup/EmployeesPopup';
import { usePageination } from '../../../hooks/usePageination';
import './pageinationStyle.scss'

interface IProps {
    data: any,
}

const PageinationEmployees = ({ data }: IProps) => {

    const { courentData, courentPage, numberArr, setCourentPage } = usePageination({ data });

    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleCardClick = (user: User) => {
        setSelectedUser(user);
        setOpenPopup(true);
    }

    return (
        <div className='employees-container'>
            {courentData.map((item: any) => (
                <div className="card" onClick={() => handleCardClick(item)} key={item.id}>
                    <img src={item.image} alt="" />
                </div>
            ))}
            <div className="pageination-container">
                <button onClick={() => setCourentPage(courentPage > 1 ? courentPage - 1 : 1)}>Prev</button>
                <div className="pageination">
                    {numberArr.map((pageNumber: number, index: number) => (
                        <div className={`eace-page ${courentPage === pageNumber ? "active" : ""}`} key={index} onClick={() => setCourentPage(pageNumber)}>
                            {pageNumber}
                        </div>
                    ))}
                </div>
                <button onClick={() => setCourentPage(courentPage < numberArr.length ? courentPage + 1 : numberArr.length)}>Next</button>
            </div>
            <EmployeesPopup selectedUser={selectedUser} openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </div>
    )
}

export default PageinationEmployees