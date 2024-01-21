import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import head from "./assets/images/brainpulse.gif"
import spinGif from "./assets/images/spintail.gif"
import tail from "./assets/images/tailmove.gif"
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import CoinFlip from './pages/CoinFlip';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/flip' element={<CoinFlip/>} />
      </Routes>
    </div>
  );
}

export default App;
