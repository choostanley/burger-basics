import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
	let ingredient = null;

	switch (props.type) {
		case ('bread-bottom'):
			ingredient = <div className={classes.BreadBottom}></div>;
			break;
		case ('bread-top'):
			ingredient = (
				<div className={classes.BreadTop}>
					<div className={classes.Seed1}></div>
					<div className={classes.Seed2}></div>
				</div>
				);
			break;
		case ('meat'):
			<div className={classes.Meat}></div>;
			break;
		case ('cheese'):
			<div className={classes.Cheese}></div>;
			break;
		case ('salad'):
			<div className={classes.Salad}></div>;
			break;
		case ('bacon'):
			<div className={classes.Bacon}></div>;
			break;
		default:
			ingredient = null;
	}
	return ingredient;
};

export default burgerIngredient;