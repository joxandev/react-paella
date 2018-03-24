import React from 'react';
import { Link } from 'react-router-dom';
import store from '../stores/store.js';



const welcome = (props) =>{
    const st = store;
   
   return (
        <div>
        <h1>Welcome to {props.title}</h1>
        <h2>You have {store.ingredientsCount} ingredients</h2>
        
        <button onClick={props.clicked}>Say Hello</button>
        <Link to='/ingredients'>Enter</Link>
        </div>
    )
}  

   

export default welcome;
