import React, { Component } from 'react';

class University extends Component {
  render() {
  	// Map each university to its own square card.
  	return this.props.universities.map((university) =>  (
			<div style={cardContainerStyle}>
				<p style={cardIndexStyle}>{ university.id }</p>
				<img style={cardImageStyle} src={university.image} alt="university-yelp" />
				<div style={cardFooterStyle}>
					<b style={cardTitleStyle}>{ university.name }</b>
					{/* Display either `miles` or `mile` based on `university.distance`. */}
					{university.distance > 1 &&
						<p style={cardSubtitleStyle}>{ university.distance } miles away</p>
					}
					{university.distance <= 1 &&
						<p style={cardSubtitleStyle}>{ university.distance } mile away</p>
					}
				</div>
			</div>
  	));
  }
}

export default University;

// TODO: Use screen width divided by num-rows.
const defaultHeightWidth = '320px';

const defaultBorderRadius = '8px';

/* Card container */
const cardContainerStyle = {
	position: 'relative',
	backgroundColor: "#fff",
	margin: '10px',
	padding: '12px',
	minWidth: defaultHeightWidth,
	maxWidth: defaultHeightWidth,
	height: defaultHeightWidth,
	boxShadow: '2px 2px 5px #00000033',
	textAlign: 'center',
	borderRadius: defaultBorderRadius,
}

/* Card index text */
const cardIndexStyle = {
	color: '#000',
	fontWeight: 'bold',
	height: '0',
	width: '0',
	position: 'absolute',
	top: '4px',
	left: '10px',
	fontSize: '2em',
	zIndex: '990',
	textShadow: '-1px -1px 0 #ffffff88, 	\
							1px -1px 0 #ffffff88, 		\
							-1px 1px 0 #ffffff88, 		\
							1px 1px 0 #ffffff88',
}

const cardImageStyle = {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	height: '100%',
	width: '100%',
	borderRadius: defaultBorderRadius,
}

/* Foot section */
const cardFooterStyle = {
	height: '80px',
	padding: '16px 8px 8px',
	position: 'absolute',
	bottom: '0',
	right: '0',
	left: '0',
	backgroundColor: '#00000099',
	borderBottomRightRadius: defaultBorderRadius,
	borderBottomLeftRadius: defaultBorderRadius,
}
const cardTitleStyle = {
	color: '#fff',
	fontSize: '18px',
}
const cardSubtitleStyle = {
	color: '#fff',
}