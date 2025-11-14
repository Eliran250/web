import './homeStyle.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <h1 className='title'>Linear is a purpose-built tool for <br /> planning and building products</h1>
        <p className="subtitle">
          Streamline your workflow, track issues, and ship faster — all in one elegant interface.
        </p>
        <div className="cards">
          <div className="card-1">
            <h1>Innovative Design</h1>
            <p>A modern, intuitive interface that makes managing your team effortless</p>
          </div>
          <div className="card-2">
            <h1>Smart Analytics</h1>
            <p>Get actionable insights on attendance, performance, and productivity</p>
          </div>
          <div className="card-3">
            <h1>Cloud-Based Access</h1>
            <p>Manage your employees from anywhere, on any device</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home