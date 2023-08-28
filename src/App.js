import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Login } from './pages/Login'
import { Register } from "./pages/Register"
function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      
        <Router>
      <Navbar/>
      
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={ currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
       
        </Routes >        
        
        <Footer />
      </Router>
    </div>
  )
}

export default App
