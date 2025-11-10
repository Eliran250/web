import Sidebar from '../../sidebar/Sidebar'
import './homeStyle.scss'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Welcome to our web</h1>
        <Sidebar />
      </div>
    </>
  )
}

export default Home