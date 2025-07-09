import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/Home.jsx"

// function Home(props){
  // if you use props you have to use props.name and props.age and you can use that variable anywhere
  // but if you only define (name,age) like this you are not able to access new variables in the form of props
  // return (<div>
  //   <h1> Hello {props.name}</h1>
  //   <p>
  //     This is a react component using props 
  //   </p>
  //   <p>You are {props.age} years old</p>
  // </div>);
  
  
  
  
  // but now for calling the function we do not use Home()
  //we call it like a tag like <Home/> like this
  //all this because it is a jsx file 

// }

createRoot(document.getElementById('root')).render(

      <App />

);
