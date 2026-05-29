import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Agents from './pages/agents'
import Navbar from './components/navbar/navbar.jsx'
import Fullscreennav from './components/navbar/fullscreennav.jsx'





const App = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="relative classname='overflow-x-hidden">
      <Navbar setOpen={setNavOpen} />
      <Fullscreennav navOpen={navOpen} setOpen={setNavOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App

