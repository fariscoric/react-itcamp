import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes, UNSAFE_RouteContext } from 'react-router-dom'
import Index from './components/pages/Index'
import About from './components/pages/About'
import { UserContext } from './components/UserContext'
function App() {

  const [value, setValue] = useState("initial value")
  return (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages/">About</Link>
          </li>
        </ul>
      </nav>
  <UserContext.Provider value={{value , setValue}}>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/pages" element={<About />}/>
    </Routes>
  </UserContext.Provider>
    </div>
  </Router>
  );
}

export default App;