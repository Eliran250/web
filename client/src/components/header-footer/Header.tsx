import './headerStyle.scss'
import { IoMdChatbubbles } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { firstName, lastName, user } from '../../localStorage/localStorage';
import { GiSwordsEmblem } from "react-icons/gi";

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <header className="header-container">
                <h1 onClick={() => navigate('/')} className='title'>Web <GiSwordsEmblem /></h1>
                <div className='icons'>
                    <div className="chat-icon" onClick={() => navigate("/chat")}>
                        <IoMdChatbubbles />
                    </div>
                    <div className="add-icon" onClick={() => navigate("/post")}>
                        <FaSquarePlus />
                    </div>
                    <div className="calender-icon" onClick={() => navigate("/calender")}>
                        <SlCalender />
                    </div>
                    <div className="profile-icon" onClick={() => user ? navigate("/profile") : navigate("/signup")}>
                        <img
                            src={user ? `https://avatar.iran.liara.run/username?username=${firstName} ${lastName}}` : "https://avatar.iran.liara.run/username?username=P"}
                            alt="Profile"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header