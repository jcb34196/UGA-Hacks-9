import React from 'react';
import './addButton.css';

const addButton = (props) => {
    return(
    <button 
    className = "button"
    type={props.type || 'button'}
    onClick={props.onClick}>
     {props.children}
    </button>
    );
};
export default addButton;