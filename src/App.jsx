import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <main className='bg-slate-300/20'>
    <BrowserRouter>
    <Toaster />
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App