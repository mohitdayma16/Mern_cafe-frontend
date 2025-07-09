import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home"
import Temp from './components/Temp'

function App() {
  return (
    <>
    <Home name="Mohit Dayma - Aman ke papa" age="21"/> 
    <Temp />
    </>
  );
}

export default App
