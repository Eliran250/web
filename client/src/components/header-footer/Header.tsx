import './headerStyle.scss'
import { IoMdChatbubbles } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <header className="header-container">
                <h1 className='title'>EG-web</h1>
                <div className='icons'>
                    <div className="chat-icon" onClick={() => navigate("/chat")}>
                        <IoMdChatbubbles />
                    </div>
                    <div className="add-icon" onClick={() => navigate("/add")}>
                        <FaSquarePlus />
                    </div>
                    <div className="calender-icon" onClick={() => navigate("/calender")}>
                        <SlCalender />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header