import './footerStyle.scss'
const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <footer className="footer-container">
                <h3 className='title'>© {year} Eliran Giladi. All rights reserved.</h3>
            </footer>
        </>
    )
}

export default Footer