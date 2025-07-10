import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home"
import Temp from './components/Temp'
import Register from './components/Register'

function App() {
  return (
    <>
    <Home name="Mohit Dayma" age="21"/> 
    <br />  
    <Temp />
    <div>
      <h1>Cafe Frontend</h1>
      <Register/>
      <h3>This is footer</h3>
    </div>
    </>
  );
}

export default App
