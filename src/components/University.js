import React, { Component } from 'react';

class University extends Component {
  render() {
  	// Map each university to its own square card.
  	return this.props.universities.map((university) =>  (
			<div style={cardContainerStyle}>
				<p style={cardIndexStyle}>{ university.id }</p>
				<b style={cardTitleStyle}>{ university.name }</b>
				<p style={cardSubtitleStyle}>{ university.distance } miles away</p>
			</div>
  	));
  }
}

export default University;

// TODO: Use screen width divided by num-rows.
let defaultHeightWidth = '320px';


var cardContainerStyle = {
	backgroundColor: "#fff",
	margin: '10px',
	padding: '12px',
	minWidth: defaultHeightWidth,
	maxWidth: defaultHeightWidth,
	height: defaultHeightWidth,
	boxShadow: '2px 2px 5px #00000033',
	textAlign: 'center'
}

var cardIndexStyle = {
	color: '#4A6572',
	height: '20px',
	width: '20px',
	marginTop: '-12px',
	marginLeft: '-6px',
	textAlign: 'center',
	fontSize: '2em',
	marginBottom: '15px'
}

var cardTitleStyle = {
	color: '#232F34',
	fontSize: '18px'
}

var cardSubtitleStyle = {
	color: '#4A6572',
	fontSize: '0.8em'
}