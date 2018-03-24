import React from 'react';
import {observer} from 'mobx-react'

const list = (props) => {
    const items = props.ingredients.map(
        item => <p key={item.id}>{item.name}
         <button onClick={()=>props.clicked(item.name)}>Details</button>
         <button onClick={()=>props.remove(item.id)}>Delete</button></p>
    );

    return(
        <div>
        <h3>These are my Ingredients</h3>
        {items}
        </div>

    )

}





export default observer(list);