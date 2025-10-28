import './calenderStyle.scss'
import { year, month, daysInMonth, startDay, today, months } from '../../date/date'
import EventPopup from '../popup/eventPopup/EventPopup';
import { myContext } from '../../context/Context';
import { events } from '../../localStorage/localStorage';

const Calender = () => {

    const { setFullDate, setIsOpenEventPopup, fullDate } = myContext()

    const cells = []

    for (let i = 0; i < startDay; i++) {
        cells.push(null);
    }
    for (let d = 0; d < daysInMonth; d++) {
        cells.push(d);

    }

    const rows = []

    for (let i = 0; i < cells.length; i += 7) {
        rows.push(cells.slice(i, i + 7));

    }
    return (
        <>
            <div className="calender-container">
                {events.map((event: { eventName: string; eventPriority: string }, index: number) => (
                    <div key={index}>
                        {event.eventName}
                        {event.eventPriority}
                    </div>
                ))}
                <h1 className='calender-year'>Year: {year}</h1>
                <h1 className='calender-month'>Month: {months[month]}</h1>
                <table className='calender-table' border={1}>
                    <thead>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((day, colIndex) => (
                                    <td onClick={() => {
                                        day &&
                                            setFullDate((prev) => [...prev, `${day}/${month + 1}/${year}`]);
                                        setIsOpenEventPopup(true);
                                    }} className={`
                                        ${today == day ? "today" : ""} 
                                        ${fullDate.includes(`${day}/${month + 1}/${year}`) ? "selected-event" : ""}`}
                                        key={colIndex}>
                                        {day || ""}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <EventPopup />
            </div>
        </>
    )
}

export default Calender