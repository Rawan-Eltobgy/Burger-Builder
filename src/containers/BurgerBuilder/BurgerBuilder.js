import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
        totalPrice: 6 ,//as a base price
        purchaseable : false
    }

    updatePurchaseState(ingredients) {
        //this create an array of string enteries
        const sum = Object.keys(ingredients)
            .map(igKey => {
                //have an array of values
                return ingredients[igKey];
            })
            //to get the sum of all ingredients, starting from sum 0, sum-> curr sum, el->ingr[key]
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }
    addIngredientHandler = (type) =>{
        const newCount = this.state.ingredients[type] +1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        const updatedIngredients = {...this.state.ingredients}; //copying
        updatedIngredients[type] = newCount;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);

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
        this.updatePurchaseState(updatedIngredients);
        }
        else{
            return <p>You can't decrease more</p>
        }
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
        <Aux>
                <Modal> <OrderSummary ingredients ={this.state.ingredients}/> </Modal>
       <Burger ingredients ={this.state.ingredients} />
        <BuildControls
            ingredientAdded = {this.addIngredientHandler}
            ingredientDeleted={this.removeIngredientHandler}
            price={this.state.totalPrice} 
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
        />
        </Aux>
        );
    }
}
export default BurgerBuilder;