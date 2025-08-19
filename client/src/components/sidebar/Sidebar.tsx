import { GoSidebarCollapse,GoSidebarExpand } from 'react-icons/go'
import { IoMdVideocam } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

import './sidebarStyle.scss'
import { MdGroups } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <>
            <div className={`sidebar-container ${isOpen ? "open" : "close"}`}>
                <div className="sideBar-main-icon">
                    {isOpen ? <GoSidebarCollapse onClick={() => setIsOpen(!isOpen)} /> : <GoSidebarExpand onClick={() => setIsOpen(!isOpen)} />}
                </div>
                <div className="icon" onClick={()=>navigate("/friends")}>
                    <FaUserFriends /> {isOpen && "Friends"}
                </div>
                <div className="icon" onClick={()=>navigate("/groups")}>
                    <MdGroups /> {isOpen && "Groups"}
                </div>
                <div className="icon" onClick={()=>navigate("/video")}>
                    <IoMdVideocam /> {isOpen && "Video"}
                </div>
            </div>
        </>
    )
}

export default Sidebar