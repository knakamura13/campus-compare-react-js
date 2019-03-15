// Import npm packages
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

// Import custom files
import './../App.css';




/****************
 Component Class
*****************/


export default class Details extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (			
			<div>
				{/* Header / nav bar */}
				<Header title="University Details"/>

		  		{/* Large screen width (desktop device) */}
		  		<MediaQuery minWidth={992}>
		  			<h1>University Name</h1>
				</MediaQuery>

				{/* Medium screen width (sized like a tablet) */}
		  		<MediaQuery minWidth={768} maxWidth={991}>
		  			<h1>University Name</h1>
				</MediaQuery>

				{/* Small screen width (mobile device) */}
		  		<MediaQuery maxWidth={767}>
		  			<h1>University Name</h1>
				</MediaQuery>
			</div>
		);
	}
};
