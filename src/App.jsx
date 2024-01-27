import { useState } from 'react'
import LandingPage from './components/landing-page/LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>  
    </>
  )
}

export default App
