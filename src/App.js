import './App.css';
import React from 'react';
import { useState } from 'react';
import CryptoForm from './components/CryptoForm/CryptoForm'
import Posts from './components/Posts/Posts'


export default function App() {

    return (
      <div className='card-container'>
        <Posts />
      </div>
  )
} 
