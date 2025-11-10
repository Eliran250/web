import { IoMdChatbubbles, IoMdVideocam } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { firstName, lastName, user } from '../../localStorage/localStorage';
import { GiSwordsEmblem } from "react-icons/gi";
import { MdAdminPanelSettings, MdGroups } from "react-icons/md";
import './headerStyle.scss'

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className="header-container">
            <h2 onClick={() => navigate('/')} className='title'>Web <GiSwordsEmblem /></h2>
            <div className='icons'>
                <IoMdChatbubbles onClick={() => navigate("/chat")} />
                <FaSquarePlus onClick={() => navigate("/post")} />
                <SlCalender onClick={() => navigate("/calender")} />
                <MdAdminPanelSettings onClick={() => navigate("/adminpanel")} />
                <MdGroups onClick={() => navigate("/groups")} />
                <IoMdVideocam onClick={() => navigate("/video")} />
                <div className="profile-icon" onClick={() => user ? navigate("/profile") : navigate("/signup")}>
                    <img
                        src={user ? `https://avatar.iran.liara.run/username?username=${firstName} ${lastName}}` : "https://avatar.iran.liara.run/username?username=P"}
                        alt="Profile"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header