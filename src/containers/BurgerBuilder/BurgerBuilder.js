import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES ={
    salad: 0.5,
    bacon: 2.5,
    cheese: 1,
    meat: 4
}

class BurgerBuilder extends Component {
    state ={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 6 //as a base price
    }
    addIngredientHandler = (type) =>{
        const newCount = this.state.ingredients[type] +1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        const updatedIngredients = {...this.state.ingredients}; //copying
        updatedIngredients[type] = newCount;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount > 0){
        const newCount = oldCount - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        const updatedIngredients = { ...this.state.ingredients }; //copying
        updatedIngredients[type] = newCount;
        //...this.state.ingredients[type]: newCount
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        }
        else{
            return <p>You can't decrease more</p>
        }
    }
    render(){
        return (
        <Aux>
       <Burger ingredients ={this.state.ingredients} />
        <BuildControls
            ingredientAdded = {this.addIngredientHandler}
            ingredientDeleted={this.removeIngredientHandler}
            price={this.state.totalPrice} 
        />
        </Aux>
        );
    }
}
export default BurgerBuilder;