import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Ingredients from './Ingredients/Ingredients.js';
import Welcome from './Welcome/Welcome.js';


import './App.css';

class App extends Component {
   
    constructor(){
        super();
        this.state={name:'Jose'};
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello=()=>{
        alert('Say Hello');
    }
    render() {
       
        return(
            <Switch>
                <Route exact path='/' component={Welcome} />
        {/* <Route exact path='/' render={()=>(<Welcome title={this.state.name} clicked={this.sayHello} />)} /> */}
                <Route path='/ingredients' component={Ingredients} />
            </Switch>
        );
    }
}

export default App;
