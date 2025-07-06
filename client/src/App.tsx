import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/style.scss'
import Home from './components/home/Home'
import ChatContainer from './components/chat/ChatContainer'
import Header from './components/header-footer/Header'
import Footer from './components/header-footer/Footer'

function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<ChatContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
