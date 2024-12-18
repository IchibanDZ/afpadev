import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Apropos from './components/Apropos/Apropos'
import Cgv from './components/Cgv/Cgv'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/header" element={<Header />} />
      <Route path="/cgv" element={<Header />} />
    </Routes>
  </Router>
  )
}

export default App
