import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Add from './pages/Add'
import Order from './pages/Order'
import Login from './components/Login'
export const backendUrl=import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token, setToken] = useState('')
  return (
    <div className='bg-gray-50 min-h-screen'>
      {token === ""
        ? <Login />
        :
        <>
          <Navbar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/order' element={<Order />} />
              </Routes>

            </div>
          </div>
        </>
      }


    </div>
  )
}

export default App