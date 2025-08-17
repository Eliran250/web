import { GoSidebarExpand } from 'react-icons/go'
import { IoMdVideocam } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

import './sidebarStyle.scss'
import { MdGroups } from 'react-icons/md';
import { myContext } from '../../context/context';

const Sidebar = () => {

    const { isOpen, setIsOpen } = myContext()


    return (
        <>
            {isOpen ?
                <div className="sidebar-container">
                    <div className="sidebar-icons">
                        <div className="sidebar-logo">
                            <GoSidebarExpand onClick={() => setIsOpen(!isOpen)} />
                            <div className="sidebar-icons-feeds">
                                <p>Friends <FaUserFriends /></p>
                                <p>Groups <MdGroups /></p>
                                <p>Video <IoMdVideocam /></p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="sidebar-container-2">
                    <div className="sidebar-icons-2">
                        <div className="sidebar-logo">
                            <GoSidebarExpand onClick={() => setIsOpen(!isOpen)} />
                            <div className="sidebar-icons-feeds">
                                <p>Friends <FaUserFriends /></p>
                                <p>Groups <MdGroups /></p>
                                <p>Video <IoMdVideocam /></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Sidebar