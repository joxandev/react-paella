import React, {Component } from 'react';
import {observer} from 'mobx-react';
import List from './List.js';
import Add from './Add.js';

import store from '../stores/store.js';
@observer
class Ingredients extends Component {



    constructor() {
        super();
        this.state = {
            ingredients: ['Rice'],
            value:'',
        };
        this.addIngredient = this.addIngredient.bind(this);
        this.remove = this.remove.bind(this);

    }

    addIngredient = (e,ingredient) => {
        // const newState = { ...this.state
        // };
        // newState.ingredients = [...newState.ingredients, newState.value];
        // newState.value ='';
        // this.setState(newState);
        console.log({id:Date.now(),name:this.state.value});

        store.ingredients.push({id:Date.now(),name:this.state.value});

    }

    handleChange =(e)=>{
        const newState = { ...this.state };
        newState.value =e.target.value;
        this.setState(newState);

    }

    showDetails = (value) => {
        alert(value);
    }

    remove(id){
        store.delete(id)
    }

    loadData() {
        const newState = {
            ingredients: ['Arroz', 'Tomate']
        };

        this.setState(newState);
        console.log('Item added');
    }

    componentWillMount() {



    }
    render() {


        // const {ingredients} = this.state;

        const {ingredients} = store;
        return(
            <div>
                <Add newIngredient={this.state.value} change={this.handleChange} clicked={this.addIngredient} />
                <h2>Ingredrients List</h2>
                <List ingredients={store.ingredients} remove={this.remove} clicked={this.showDetails} />

            </div>
        )
    }


}

export default Ingredients;
