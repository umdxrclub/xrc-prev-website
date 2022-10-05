/**
 * Definition of the ItemCard component
 */

import React from 'react';

function ItemCard(props) {

	/* Alternate card colors */
	const color = (props.id % 2 == 0) ? "red" : "purple";

	const image = (props.image != undefined && props.image != "") ? "images/items/" + props.image : "images/XR_Club_Logo_with_Outer_Circle.png";

	return (
		<div className={`card member-card ${color}-glass`}>
			<img className="card-profile" src={image} alt={`Image of ${props.title}`}/>
			<div className="card-header">{props.title.toUpperCase()}</div>
			<p className="item-caption">{props.subtitle}</p>
		</div>
	);
}

export default ItemCard;
