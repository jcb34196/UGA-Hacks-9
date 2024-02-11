import React from 'react';
import './card.css';

const card = (props) => {
    const classes = 'card' + props.movieCardName; 
    return <div className = {classes}>{props.children}</div>
};
export default card;