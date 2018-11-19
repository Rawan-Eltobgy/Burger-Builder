import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) =>{
    //extracts the keys of the object and returns an array of keys
    let transformedIngredients = Object.keys(props.ingredients).map(igkey =>{
        return [...Array(props.ingredients[igkey])].map((_,i) => {
           return <BurgerIngredient key = {igkey + i} type={igkey} />
        });
        //ewduce((prevVal, currVal))
    }).reduce((arr, el)=> {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0){
        transformedIngredients = <p> Please start adding ingredients </p>
    }
     return (
         <div className={classes.Burger}>
         <BurgerIngredient type = "bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />
         </div>
     );
};
export default burger;