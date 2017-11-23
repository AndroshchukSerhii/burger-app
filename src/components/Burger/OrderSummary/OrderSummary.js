/**
 * Created by windows on 23.11.2017.
 */

import React from 'react';
import Aox from '../../../hoc/Aox';
import Button from '../../UI/Button/Button';

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
            <p><strong>Price:</strong> {props.price.toFixed(2)}$</p>
            <p>Continue</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aox>
    )
};

export default orderSummary;