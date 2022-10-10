import { useState } from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
