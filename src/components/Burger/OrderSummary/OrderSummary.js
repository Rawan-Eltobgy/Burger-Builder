import React from 'react';
import Aux from '../../../hoc/_Aux'
//import classes from './Modal.css';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}:</span>
                        {props.ingredients[igKey]}
                    </li>);
        }
    );
return(
    <Aux>
    <h3> <strong>Your Order</strong></h3>
    <p>Your burger has the following ingredients: </p>
    <ul>
        {ingredientSummary}
    </ul>
    <p> Continue to check out? </p>
    </Aux>
);
};
    

export default orderSummary;