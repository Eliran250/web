import axios from "axios";
import { useEffect, useState } from "react";
import Employees from "./Employees";
import type { User, UsersResponse } from "../../types/interface/employees";

const EmployeesContainer = () => {

    const [data, setData] = useState<UsersResponse | null>(null);
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    const handleClick = (user: User) => {
        setSelectedUser(user);
        setOpenPopup(true);
    }

    useEffect(() => {
        const handleFileGet = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleFileGet()
    }, [])

    return (
        <>
            <Employees data={data} openPopup={openPopup} handleClick={handleClick} selectedUser={selectedUser} setOpenPopup={setOpenPopup}/>
        </>
    )
}

export default EmployeesContainer