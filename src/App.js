'use strict';

import React, { Component } from 'react';
import University from './components/University';
import Header from './components/Header';
import './App.css';

// Yelp Fusion API Credentials.
// Property of Unibui Inc.
const API_CLIENT = process.env.REACT_APP_YELP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_YELP_API_KEY;

(function fetchYelpBusinesses(businessType, maxDistance) {
    let result = {};
    
    // TODO: 
   	// (in progress) Fetch results from Yelp.
   	
	const yelp = require('yelp-fusion');

	// Place holder for Yelp Fusion's API Key. Grab them
	// from https://www.yelp.com/developers/v3/manage_app
	const apiKey = '5PhACrZEOw4XW_8PBt8VxZTc7ZYkLpatvmNVJLKG60slfnAj_I3ajJfnriq2ZTM_hLSaDyFH2yIJ0by6TZqvwtCPqaRgDunoMdjFLtV4HpQtYYPWSG06nWa-JqDvW3Yx';

	const searchRequest = {
	  term: 	'Four Barrel Coffee',
	  location: 'san francisco, ca',
	  limit: 	'50'
	};

	const client = yelp.client(apiKey);

	client.search(searchRequest).then(response => {
	  const body = response.jsonBody;
	  const prettyJson = JSON.stringify(body, null, 4);
	  console.log(prettyJson);
	}).catch(e => {
	  console.log(e);
	});

    return result;
})();

class App extends Component {
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
				{/* Header / nav bar */}
				<Header title="CAMPUS COMPARE"/>

				{/* Display a dynamic grid of Yelp businesses */}
				<div style={universitiesGridStyle}>
					<University universities={this.state.universities} />
				</div>
			</div>
		);
	}
}

export default App;

const universitiesGridStyle = {
	position: 'absolute',
	top: '200px',
	height: '100%',
	width: '100%',
	padding: '10px',
	display: 'flex',
	flexWrap: 'wrap',
	alignContent: 'flex-start',
	justifyContent: 'center'
}
