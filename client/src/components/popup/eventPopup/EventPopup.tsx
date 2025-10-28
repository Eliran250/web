import { GiCrossedAxes } from "react-icons/gi";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { myContext } from "../../../context/Context";
import './eventPopupStyle.scss'

const EventPopup = () => {

    const { isOpenEventPopup, setIsOpenEventPopup, fullDate } = myContext()

    const [eventName, setEventName] = useState<string>("");
    const [priority, setPriority] = useState<string>("");

    const handleSave = () => {
        if (!eventName || !priority) {
            toast.error("Fill all the fields");
            return;
        }
        try {
            const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
            const event = { "eventName": eventName, "eventPriority": priority, eventFullDate: fullDate };
            storedEvents.push(event);
            localStorage.setItem("events", JSON.stringify(storedEvents));
            toast.success("Event created");
            setEventName("");
            setPriority("");
        }
        catch (error: any) {
            toast.error(error);
        }
    }

    return (
        <dialog open={isOpenEventPopup}>
            <GiCrossedAxes size={20} className='exist-button' onClick={() => setIsOpenEventPopup(false)} />
            <h1 className='event-popup-title'>Add an event</h1>
            <input type="text" placeholder="Add an event" onChange={(e) => setEventName(e.target.value)} />
            <select id="priority" onChange={(e) => setPriority(e.target.value)}>
                <option disabled value="">Select</option>
                <option value="Low">Low</option>
                <option value="Mid">Mid</option>
                <option value="High">High</option>
            </select>
            <button className='event-popup-button' onClick={() => handleSave()}>Enter</button>
            <ToastContainer />
        </dialog>
    )
}

export default EventPopup