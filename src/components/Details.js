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

		// Retrieve selected University (Object) from previous page.
		const selectedUniversity = props.location.state.university;

		// Update state and reload page.
		this.state.university = selectedUniversity;
	}

	render() {
		return (			
			<div>
				{/* Header / nav bar */}
				<Header title="University Details"/>

		  		{/* Large screen width (desktop device) */}
		  		<MediaQuery minWidth={992}>
		  			<div style={{...universityDetailStyle.main, ...universityDetailStyle.large}}>
		  				<h1>{this.state.university.name}</h1>
		  				<img style={{...universityImageStyle.main, ...universityImageStyle.large}} src={this.state.university.image_url} alt="university-yelp" />
		  				<div>
							<b>Address</b>
		  					<p>{this.state.university.location.display_address[0]}</p>
		  					<p>{this.state.university.location.display_address[1]}</p>
		  				</div>
		  				<a style={yelpUrlStyle} href={this.state.university.url}>Visit on Yelp</a>
		  			</div>
				</MediaQuery>

				{/* Medium screen width (sized like a tablet) */}
		  		<MediaQuery minWidth={708} maxWidth={991}>
		  			<div style={{...universityDetailStyle.main, ...universityDetailStyle.medium}}>
		  				<h1>{this.state.university.name}</h1>
		  				<img style={{...universityImageStyle.main, ...universityImageStyle.medium}} src={this.state.university.image_url} alt="university-yelp" />
						<div>
							<b>Address</b>
		  					<p>{this.state.university.location.display_address[0]}</p>
		  					<p>{this.state.university.location.display_address[1]}</p>
		  				</div>
						<a style={yelpUrlStyle} href={this.state.university.url}>Visit on Yelp</a>
		  			</div>
				</MediaQuery>

				{/* Small screen width (mobile device) */}
		  		<MediaQuery maxWidth={707}>
		  			<div style={{...universityDetailStyle.main, ...universityDetailStyle.small}}>
		  				<h1>{this.state.university.name}</h1>
		  				<img style={{...universityImageStyle.main, ...universityImageStyle.small}} src={this.state.university.image_url} alt="university-yelp" />
		  				<div>
							<b>Address</b>
		  					<p>{this.state.university.location.display_address[0]}</p>
		  					<p>{this.state.university.location.display_address[1]}</p>
		  				</div>
		  				<a style={yelpUrlStyle} href={this.state.university.url}>Visit on Yelp</a>
		  			</div>
				</MediaQuery>
			</div>
		);
	}
};




/*************
 Local Styles
**************/


/* Main grid view listing local businesses */
const universityDetailStyle = {
	main: {
		height: '100%',
		width: '100%',
		padding: '20px',
	},
	large: {
		marginTop: '140px',
	},
	medium: {
		marginTop: '120px',
	},
	small: {
		marginTop: '50px',
	}
}

const universityImageStyle = {
	main: {
		width: '400px',
		height: 'auto',
		margin: '15px auto auto',
	},
	large: {
	},
	medium: {
	},
	small: {
		width: '100%',
		height: 'auto',
	}
}

const yelpUrlStyle = {
	color: '#fff',
	background: '#700',
	display: 'block',
	margin: '20px 0 0',
	padding: '15px 20px 15px 20px',
	width: '130px',
	textAlign: 'center',
	border: 'none',
	borderRadius: '10px',
	fontStyle: 'bold',
	fontSize: '16px',
}
