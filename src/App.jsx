import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/landing-page/LandingPage'
import About from './components/about/About'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/About" element={<About />} />
    
    </Routes>
    </>
  )
}

export default App
