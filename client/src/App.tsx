import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/style.scss'
import Home from './components/home/Home'
import ChatContainer from './components/chat/ChatContainer'

function App() {

  return (
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat' element={<ChatContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
