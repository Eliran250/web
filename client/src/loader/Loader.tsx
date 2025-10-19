import './loaderStyle.scss'
const Loader = () => {
    return (
        <div className="loader-fullscreen">
            <div className="loader-wrapper">
                <span className="loader-letter">L</span>
                <span className="loader-letter">o</span>
                <span className="loader-letter">a</span>
                <span className="loader-letter">d</span>
                <span className="loader-letter">i</span>
                <span className="loader-letter">n</span>
                <span className="loader-letter">g</span>
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loader