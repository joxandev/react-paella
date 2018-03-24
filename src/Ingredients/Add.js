import React from 'react';
import {Link} from 'react-router-dom';
const add = (props) =>
(
    <div>
        <input onChange={(e)=>{props.change(e)}} type='text' value={props.newIngredient} />
        <button onClick={props.clicked}> Add Ingredient </button>
        <p><Link to='/'>Back home</Link></p>
        <p>New Component</p>
    </div>

    )


export default add;
