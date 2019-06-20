import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

	//this can be a functional component
	componentWillUpdate() {
		console.log('[OrderSummary] Will update!');
	}	

	render () {

		const ingredientSummary = Object.keys(this.props.ingredients)
		.map(igKey => {
			return (
				<li key={igKey}>
					<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
				</li>
				);
		});

		return (
			<Aux>
				<h3>Your order</h3>
				<p>Ingredients:</p>
				<p>Total price: {this.props.price.toFixed(2)}</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p>Checkout?</p>
				<Button btntype="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
				<Button btntype="Success" clicked={this.props.purchaseContinued}>Continue</Button>
			</Aux>
			);
	}
}

export default OrderSummary;