import './App.css';
import React from 'react';
import { useState } from 'react';
import CryptoForm from './components/CryptoForm/CryptoForm'
import PostsList from './components/Posts2/PostsList'


export default function App() {

    return (
      <div className='card-container'>
        <PostsList />
      </div>
  )
} 
