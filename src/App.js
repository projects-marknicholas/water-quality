import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Pages
import Home from './pages/home'
import About from './pages/about'

// Tools
import Sidebar from './pages/sidebar'

// CSS
import './App.css'

function App() {
  return (
    <div className='main-section'>
      <Router>
        <Sidebar/>
        <div className='main-dash'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
