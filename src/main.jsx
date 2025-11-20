import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import About from './pages/About'
import Studio from './pages/Studio'
import Portfolio from './pages/Portfolio'
import Aetherflo from './pages/Aetherflo'
import Untethered from './pages/Untethered'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aetherflo" element={<Aetherflo />} />
        <Route path="/untethered" element={<Untethered />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
