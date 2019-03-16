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
		// Format a URL for the univerisity's location on Google Maps.
		const mapLat = this.state.university.coordinates.latitude;
		const mapLong = this.state.university.coordinates.longitude;
		const mapURL = "https://www.google.com/maps/@"+ mapLat +","+ mapLong +",17z";	

		return (		
			<div>
				{/* Header / nav bar */}
				<Header title={this.state.university.name}/>

		  		{/* Large screen width (desktop device) */}
		  		<MediaQuery minWidth={992}>
		  			<div style={{...universityDetailStyle.main, ...universityDetailStyle.large}}>
		  				<img style={{...universityImageStyle.main, ...universityImageStyle.large}} src={this.state.university.image_url} alt="university-yelp" />
		  				
		  				<div style={{...universityInfoStyle.main, ...universityInfoStyle.large}}>
			  				<div>
								<b>Address</b>
			  					<p>{this.state.university.location.display_address[0]}</p>
			  					<p>{this.state.university.location.display_address[1]}</p>
			  				</div>
			  				<div>
			  					<a style={mapUrlStyle} href={mapURL}>View on Google Maps</a>
			  				</div>

			  				<div style={dividerStyle}></div>

			  				<div>
								<b>Phone number</b>
			  					<p>{this.state.university.display_phone}</p>
			  				</div>
			  				<div>
			  					<a style={mapUrlStyle} href={"tel:" + this.state.university.phone}>Call {this.state.university.name}</a>
			  				</div>
		  				</div>

		  				<a style={yelpUrlStyle} href={this.state.university.url}>Visit on Yelp</a>
		  			</div>
				</MediaQuery>

				{/* Medium screen width (sized like a tablet) */}
		  		<MediaQuery minWidth={708} maxWidth={991}>
		  			<div style={{...universityDetailStyle.main, ...universityDetailStyle.medium}}>
		  				<img style={{...universityImageStyle.main, ...universityImageStyle.medium}} src={this.state.university.image_url} alt="university-yelp" />
		  				
		  				<div style={{...universityInfoStyle.main, ...universityInfoStyle.medium}}>
			  				<div>
								<b>Address</b>
			  					<p>{this.state.university.location.display_address[0]}</p>
			  					<p>{this.state.university.location.display_address[1]}</p>
			  				</div>
			  				<div>
			  					<a style={mapUrlStyle} href={mapURL}>View on Google Maps</a>
			  				</div>

			  				<div style={dividerStyle}></div>

			  				<div>
								<b>Phone number</b>
			  					<p>{this.state.university.display_phone}</p>
			  				</div>
			  				<div>
			  					<a style={mapUrlStyle} href={"tel:" + this.state.university.phone}>Call {this.state.university.name}</a>
			  				</div>
		  				</div>

						<a style={yelpUrlStyle} href={this.state.university.url}>Visit on Yelp</a>
		  			</div>
				</MediaQuery>

				{/* Small screen width (mobile device) */}
		  		<MediaQuery maxWidth={707}>
		  			<div style={{...universityDetailStyle.main, ...universityDetailStyle.small}}>
		  				<img style={{...universityImageStyle.main, ...universityImageStyle.small}} src={this.state.university.image_url} alt="university-yelp" />
		  				
		  				<div style={{...universityInfoStyle.main, ...universityInfoStyle.small}}>
			  				<div>
								<b>Address</b>
			  					<p>{this.state.university.location.display_address[0]}</p>
			  					<p>{this.state.university.location.display_address[1]}</p>
			  				</div>
			  				<div>
			  					<a style={mapUrlStyle} href={mapURL}>View on Google Maps</a>
			  				</div>

			  				<div style={dividerStyle}></div>

			  				<div>
								<b>Phone number</b>
			  					<p>{this.state.university.display_phone}</p>
			  				</div>
			  				<div>
			  					<a style={mapUrlStyle} href={"tel:" + this.state.university.phone}>Call {this.state.university.name}</a>
			  				</div>
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
		maxWidth: '700px',
		padding: '20px',
		margin: '0 auto 0 auto',
	},
	large: {
		width: '100%',
		marginTop: '160px',
	},
	medium: {
		width: '100%',
		marginTop: '140px',
	},
	small: {
		width: '100%',
		marginTop: '70px',
	}
}

const universityImageStyle = {
	main: {
		height: 'auto',
	},
	large: {
		width: '400px',
	},
	medium: {
		width: '100%',
	},
	small: {
		width: '100%',
		height: 'auto',
	}
}

const universityInfoStyle = {
	main: {
		padding: '15px',
		border: '1px solid #ddd',
		borderRadius: '8px',
		maxWidth: '50%'
	},
	large: {
		float: 'right',
	},
	medium: {
		float: 'none',
		marginTop: '20px'
	},
	small: {
		float: 'none',
		marginTop: '20px'
	}
}
const dividerStyle = {
	height: '1px',
	width: '100%',
	margin: '5px auto 5px',
	background: '#ddd'
}

const mapUrlStyle = {
	color: '#900',
	textDecoration: 'underline',
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