import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return (
				<li key={igKey}>
					<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
				</li>
				);
		});

	return (
		<Aux>
			<h3>Your order</h3>
			<p>Ingredients:</p>
			<p>Total price: {props.price.toFixed(2)}</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Checkout?</p>
			<Button btntype="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
			<Button btntype="Success" clicked={props.purchaseContinued}>Continue</Button>
		</Aux>
		);
};

export default orderSummary;