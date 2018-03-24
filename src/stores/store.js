import {observable, action, computed} from 'mobx';

class Store{
    @observable ingredients = [
        {id:1, name:'Tomates'}
    ];

    @action addIngredient(ingredient){
        this.ingredients.push({id:Date.now(),name:ingredient})
    }

    @action delete(id){
        const index = this.ingredients.findIndex(item=> item.id ===id);
        this.ingredients.splice(index,1);
    }

    @computed get ingredientsCount(){
        return this.ingredients.length;
    }

   

}

const store = new Store();
export default store;


