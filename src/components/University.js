// Import npm packages
import React, { Component } from 'react';




/****************
 Component Class
*****************/


export default class University extends Component {
  render() {
  	// Map each university to its own square card.
  	return this.props.universities.map((university) =>  (
		<div style={cardContainerStyle}>
			<p style={cardIndexStyle}>{ university.id + 1 }</p>
			<img style={cardImageStyle} src={university.image_url} alt="university-yelp" />
			<div style={cardFooterStyle.container}>
				<b style={cardFooterStyle.title}>{ university.name }</b>
				{/* Display either `miles` or `mile` based on `university.distance`. */}
				{university.distance > 1 &&
					<p style={cardFooterStyle.subtitle}>{ university.distance } miles away</p>
				}
				{university.distance <= 1 &&
					<p style={cardFooterStyle.subtitle}>{ university.distance } mile away</p>
				}
			</div>
		</div>
	));
  }
}




/*************
 Local Styles
**************/


// Width and height of the square cards.
const cardWidth = '320px';

// Corner radius of the square cards.
const cardBorderRadius = '8px';

/* Card container */
const cardContainerStyle = {
	position: 'relative',
	backgroundColor: "#fff",
	margin: '10px',
	padding: '12px',
	minWidth: cardWidth,
	maxWidth: cardWidth,
	height: cardWidth,
	boxShadow: '2px 2px 5px #00000033',
	textAlign: 'center',
	borderRadius: cardBorderRadius,
}

/* Card index number (counter) */
const cardIndexStyle = {
	color: '#fff',
	fontWeight: 'bold',
	height: '0',
	width: '0',
	position: 'absolute',
	top: '4px',
	left: '10px',
	fontSize: '2em',
	zIndex: '990',
	textShadow: '-1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000',
}

/* Card image (background) */
const cardImageStyle = {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	height: '100%',
	width: '100%',
	borderRadius: cardBorderRadius,
}

/* Card footer section */
const cardFooterStyle = {
	container: {
		height: '80px',
		padding: '16px 8px 8px',
		position: 'absolute',
		bottom: '0',
		right: '0',
		left: '0',
		backgroundColor: '#00000099',
		borderBottomRightRadius: cardBorderRadius,
		borderBottomLeftRadius: cardBorderRadius,
	},
	title: {
		color: '#fff',
		fontSize: '18px',
	},
	subtitle: {
		color: '#fff',
	}
}