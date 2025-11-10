import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import PortfolioHome from './pages/home'
import Contact from './pages/contact'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
