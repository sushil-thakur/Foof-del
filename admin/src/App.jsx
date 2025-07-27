import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/Sidebar/SideBar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';

const App = () => {
 const url = "https://foof-del-backend.onrender.com";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add  url={url}/>}/>
           <Route path='/list' element={<List url={url}/>}/>
            <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
    
      </div>
      
    </div>
  )
}

export default App
