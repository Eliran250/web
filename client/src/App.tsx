import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatContainer from './components/chat/ChatContainer'
import Header from './components/header-footer/Header'
import Footer from './components/header-footer/Footer'
import Signup from './components/signup&login/Signup'
import Login from './components/signup&login/Login'
import Profile from './components/profile/Profile'
import Calender from './components/calender/Calender'
import { ContextProvider } from './context/Context'
import Post from './components/post/Post'
import PostedFile from './components/post/PostedFile'
import EmployeesContainer from './components/employees/view&EditEmployees/EmployeesView&EditContainer'
import Home from './components/pages/home/Home'
import AddEmployees from './components/employees/addEmployees/AddEmployees'
import NotFound from './components/notFound/NotFound'
import AdminManger from './components/admin/AdminPanel'
import './style/style.scss'

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
            <Route path='/calender' element={<Calender />} />
            <Route path='/post' element={<Post />} />
            <Route path='/postedFile' element={<PostedFile />} />
            <Route path='/AdminManger' element={<AdminManger />} />
            <Route path='/employees' element={<EmployeesContainer />} />
            <Route path='/AddEmployees' element={<AddEmployees />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
