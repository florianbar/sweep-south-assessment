import React from 'react';

import classes from './index.module.css';

const Card = props => {
    let cardClass = [classes.card];
    if (props.clicked) {
        cardClass.push(classes.is_clickable);
    }

    return (
        <div 
            className={cardClass.join(" ")} 
            onClick={props.clicked}
        >
            <img
                className={classes.card__photo} 
                src={props.image} 
                alt={props.title} 
            />
            <div className={classes.card__title}>
                {props.title}
            </div>
            <div className={classes.card__subtitle}>
                {props.subtitle}
            </div>
        </div>
    );
};

export default Card;