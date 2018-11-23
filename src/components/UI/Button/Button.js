import React from 'react';
import classes from './Button.css';
const button = (props) => (
    <button 
    //to convert this array to a string and get the corresponding css.
    className = {[classes.Button, classes[props.btnType]].join(' ')}
    onClick = {props.clicked}> 
    {props.children} 
     </button>
);
export default button;