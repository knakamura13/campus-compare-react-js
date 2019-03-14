// Import npm packages
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

// Import custom components
import University from './components/University';
import Header from './components/Header';

// Import custom files
import './App.css';




/**********
 Constants
***********/


// Create an instance of `yelp-fusion`'s custom class.
const yelp = require('yelp-fusion');

// Yelp Fusion API Credentials; Property of Unibui Inc.
// eslint-disable-next-line
const API_CLIENT = process.env.REACT_APP_YELP_CLIENT_ID;

// eslint-disable-next-line
const API_KEY = process.env.REACT_APP_YELP_API_KEY;

<<<<<<< HEAD
(function fetchYelpBusinesses(businessType, maxDistance) {
    let result = {};
    
    // TODO: 
   	// (in progress) Fetch results from Yelp.
	const yelp = require('yelp-fusion');

	// Place holder for Yelp Fusion's API Key. Grab them
	// from https://www.yelp.com/developers/v3/manage_app
	const apiKey = API_KEY;
=======
>>>>>>> f220809... Major refactor and additional dynamic styling.



/****************
 Component Class
*****************/


export default class App extends Component {
	// TODO: Populate state using Yelp Fusion API.
	state = {
		universities: [
			{
				id: 1,
				image: 'https://placeimg.com/320/320/animals',
				name: 'Stanford University',
				distance: 1
			},
			{
				id: 2,
				image: 'https://placeimg.com/320/320/arch',
				name: 'University of California: Berkeley',
				distance: 1
			},
			{
				id: 3,
				image: 'https://placeimg.com/320/320/nature',
				name: 'Palo Alto University',
				distance: 1
			},
			{
				id: 4,
				image: 'https://placeimg.com/320/320/people',
				name: 'Stanford University',
				distance: 1
			},
			{
				id: 5,
				image: 'https://placeimg.com/320/320/tech',
				name: 'University of California: Berkeley',
				distance: 1
			},
			{
				id: 6,
				image: 'https://placeimg.com/320/320/arch/grayscale',
				name: 'Palo Alto University',
				distance: 1
			}
		]
	}

	render() {
		return (
			<div className="App">
		  		{/* Large screen width (desktop device) */}
		  		<MediaQuery minWidth={992}>
					{/* Header / nav bar */}
					<Header title="Campus Compare"/>

					{/* Display a dynamic grid of Yelp businesses */}
					<div style={{...universitiesGridStyle.main, ...universitiesGridStyle.large}}>
						<University universities={this.state.universities} />
					</div>
				</MediaQuery>

				{/* Medium screen width (sized like a tablet) */}
		  		<MediaQuery minWidth={768} maxWidth={991}>
					{/* Header / nav bar */}
					<Header title="Campus Compare"/>

					{/* Display a dynamic grid of Yelp businesses */}
					<div style={{...universitiesGridStyle.main, ...universitiesGridStyle.medium}}>
						<University universities={this.state.universities} />
					</div>
				</MediaQuery>

				{/* Small screen width (mobile device) */}
		  		<MediaQuery maxWidth={767}>
					{/* Header / nav bar */}
					<Header title="Campus Compare"/>

					{/* Display a dynamic grid of Yelp businesses */}
					<div style={{...universitiesGridStyle.main, ...universitiesGridStyle.small}}>
						<University universities={this.state.universities} />
					</div>
				</MediaQuery>
			</div>
		);
	}
}




/*****************
 Custom Functions
******************/


/* 
 * Query local businesses from Yelp using the Yelp Fusion API.
 * Note: Uses npm package `yelp-fusion`.
 *
 * @param 	searchTerm	String 	Describes the business type, name, or other attribute.
 * @param	location	String	Describes the search location based on zip code, address, city, etc.
 * @param 	radius		Int 	Sets the radius of the search area that matched businesses must reside in.
 */
(function fetchYelpBusinesses(searchTerm, location, radius) {
    let result = {};

	const apiKey = API_KEY;

	// TODO: Replace with function parameters.
	// Populate some query parameters.
	const searchRequest = {
	  term: 	'Four Barrel Coffee',
	  location: 'san francisco, ca',
	  limit: 	'50'
	};

	// Authenticate with Yelp Fusion API.
	const client = yelp.client(apiKey);

	// Execute an API request.
	client.search(searchRequest).then(response => {
	  const body = response.jsonBody;

	  // Set the result which is this function's output.
	  result = body;

	  // For debugging purposes:
	  const prettyJson = JSON.stringify(body, null, 4);
	  console.log(prettyJson);
	}).catch(e => {
		// Handle errors thrown by Yelp Fusion.
	 	console.log(e);
	});

    return result;
})(); /* End: fetchYelpBusinesses */




/*************
 Local Styles
**************/


/* Main grid view listing local businesses */
const universitiesGridStyle = {
	main: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		padding: '10px',
		display: 'flex',
		flexWrap: 'wrap',
		alignContent: 'flex-start',
		justifyContent: 'center',
	},
	large: {
		top: '140px',
	},
	medium: {
		top: '120px',
	},
	small: {
		top: '50px',
	}
}
