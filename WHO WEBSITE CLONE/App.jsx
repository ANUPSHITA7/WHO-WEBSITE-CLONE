import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Futter from './Components/Futter/Futter'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>

        </Routes>
      </Router>
      <Futter/>
      
    </div>
  )
}

export default App
