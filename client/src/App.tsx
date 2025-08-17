import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/style.scss'
import Home from './components/home/Home'
import ChatContainer from './components/chat/ChatContainer'
import Header from './components/header-footer/Header'
import Footer from './components/header-footer/Footer'
import Signup from './components/signup&login/Signup'
import Login from './components/signup&login/Login'
import Profile from './components/profile/Profile'
import { ContextProvider } from './context/context'
function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat' element={<ChatContainer />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
