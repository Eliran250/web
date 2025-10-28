import { year } from '../../date/date'
import './footerStyle.scss'

const Footer = () => {

    return (
        <>
            <footer className="footer-container">
                <h3 className='title'>© {year} Eliran Giladi. All rights reserved.</h3>
            </footer>
        </>
    )
}

export default Footer