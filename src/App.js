import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import './App.css'
import PersonList from './components/PersonList/PersonList'
import PersonAdd from './components/PersonList/PersonAdd'
import PersonDelete from './components/PersonList/PersonDelete'

export default function App() {
  return (
    <div className='card-container'>
      <PersonAdd/>
      <PersonList/>
      <PersonDelete/>
    </div>
  )
}