import React from 'react'
import "./Home.css"
import reactLogo from '../assets/react.svg'


const Home = (props) => {
    let id  = 12223403
  return (
    <div id='App-header'>
        <img src="{reactlogo}" alt="" />
    <h1 id='Name-Heading'> Hello {props.name}</h1>
    <p>
      This is a react component using props 
    </p>
    <p>You are {props.age} years old</p>
    <p>your registration id is : {id}</p>
  </div>
  );
}

export default Home
