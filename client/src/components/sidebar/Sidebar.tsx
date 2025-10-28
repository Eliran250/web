import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go'
import { IoMdVideocam } from "react-icons/io";
import { MdAdminPanelSettings, MdGroups } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebarStyle.scss'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <>
            <div className={`sidebar-container ${isOpen ? "open" : "close"}`}>
                <div className="sideBar-main-icon">
                    {isOpen ? <GoSidebarCollapse onClick={() => setIsOpen(!isOpen)} /> : <GoSidebarExpand onClick={() => setIsOpen(!isOpen)} />}
                </div>
                <div className="icon" onClick={() => navigate("/adminManger")}>
                    <MdAdminPanelSettings /> {isOpen && "Admin panel"}
                </div>
                <div className="icon" onClick={() => navigate("/groups")}>
                    <MdGroups /> {isOpen && "Groups"}
                </div>
                <div className="icon" onClick={() => navigate("/video")}>
                    <IoMdVideocam /> {isOpen && "Video"}
                </div>
            </div>
        </>
    )
}

export default Sidebar