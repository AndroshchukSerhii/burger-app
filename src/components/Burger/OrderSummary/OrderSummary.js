/**
 * Created by windows on 23.11.2017.
 */

import React from 'react';
import Aox from '../../../hoc/Aox'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    });
    return (
        <Aox>
            <h3>Your Order</h3>
            <p>A burger with this ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue</p>
        </Aox>
    )
};

export default orderSummary;