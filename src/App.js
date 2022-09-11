import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import './App.css'
import NextUI from './components/NextUI/NextUI'
import { Routes, Route, Link } from 'react-router-dom';


export default function App() {
  return (
    <div className='card-container'>
      <h1>Welcome to React Router</h1>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="about" element={<h1> About Page</h1>}/>
      </Routes>
    </div>
  )
}