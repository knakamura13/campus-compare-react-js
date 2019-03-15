// Import npm packages
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';

// Import custom files
import './../App.css';




/****************
 Component Class
*****************/


export default class Error extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (			
			<div>
				{/* Header / nav bar */}
				<Header title="Page Not Found"/>

		  		{/* Large screen width (desktop device) */}
		  		<MediaQuery minWidth={992}>
		  			<p style={{...errorParagraphStyle.main, ...errorParagraphStyle.large}}>
		  				Try changing the url path to "/home" instead.

		  				<Link style={errorLinkStyle} to="/">Take me there.</Link>
		  			</p>
				</MediaQuery>

				{/* Medium screen width (sized like a tablet) */}
		  		<MediaQuery minWidth={768} maxWidth={991}>
		  			<p style={{...errorParagraphStyle.main, ...errorParagraphStyle.medium}}>
		  				Try changing the url path to "/home" instead.

		  				<Link style={errorLinkStyle} to="/">Take me there.</Link>
		  			</p>
				</MediaQuery>

				{/* Small screen width (mobile device) */}
		  		<MediaQuery maxWidth={767}>
		  			<p style={{...errorParagraphStyle.main, ...errorParagraphStyle.small}}>
		  				Try changing the url path to "/home" instead.

		  				<Link style={errorLinkStyle} to="/">Take me there.</Link>
		  			</p>
				</MediaQuery>
			</div>
		);
	}
};




/*************
 Local Styles
**************/


const errorParagraphStyle = {
	main: {
		position: 'absolute',
		textAlign: 'center',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		fontSize: '1.2em'
	},
	large: {
		top: '200px'
	},
	medium: {
		top: '180px'
	},
	small: {
		top: '75px'
	}
}

const errorLinkStyle = {
	color: '#fff',
	background: '#700',
	display: 'block',
	margin: '20px auto auto',
	padding: '15px 20px 15px 20px',
	border: 'none',
	borderRadius: '10px',
	fontStyle: 'bold',
	fontSize: '16px',
}