// Import npm packages
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route } from 'react-router-dom';

// Import custom components
import University from './University';
import Header from './Header';

// Import custom files
import './../App.css';




/**********
 Constants
***********/


// Create an instance of `yelp-fusion`'s custom class.
const yelp = require('yelp-fusion');

// Yelp Fusion API Credentials; Property of Unibui Inc.
const API_KEY = process.env.REACT_APP_YELP_API_KEY;

const NewRoute = () => {
	return (
		<div>
			<p> new route </p>
		</div>
	)
}




/****************
 Component Class
*****************/


// Record how many items have loaded in total.
var iterations = 0;
var pagesLoaded = 0;

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			universities: [],
			showPagingButton: false
		};

		// Load 50 more items.
		var offset = pagesLoaded * 50;
		pagesLoaded += 1;

		const searchRequest = {
			term: 		'University',
			location: 	'94306',
			limit: 		'50',
			offset: 	offset
		};

		// Authenticate with Yelp Fusion API.
		const client = yelp.client(API_KEY);	// API_KEY defined as a secret variable in `.env`.

		// Store the current state to help update the state from within the `client.search` scope.
		let temp_state = this.state;

		// Execute an API request.
		client.search(searchRequest).then(response => {
			const yelp_universities = response.jsonBody.businesses;

			yelp_universities.forEach(function(university, i) {
				// Replace the unique id of each university with an index value.
				yelp_universities[i].id = iterations++;

				// Check if yelp has an image for each university.
				if (!university.image_url) {
					// Replace the university's image_url with a randomized placeholder image.
					yelp_universities[i].image_url = "https://picsum.photos/320/?random";
				}

				temp_state.universities.push(yelp_universities[i]);
			});

			// Unhide the 'show more' button.
			temp_state.showPagingButton = true;

			// Update the state and then reload the page.
			this.setState({ state: temp_state });
		}).catch(e => {
			// Handle errors thrown by Yelp Fusion.
		 	console.log(e);
		});
	}

	loadMoreUniversities = () => {
		// Load 50 more items.
		var offset = pagesLoaded * 50;
		pagesLoaded += 1;

		const searchRequest = {
			term: 		'University',
			location: 	'94306',
			limit: 		'50',
			offset: 	offset
		};

		// Authenticate with Yelp Fusion API.
		const client = yelp.client(API_KEY);	// API_KEY defined as a secret variable in `.env`.

		// Store the current state to help update the state from within the `client.search` scope.
		let temp_state = this.state;

		// Execute an API request.
		client.search(searchRequest).then(response => {
			const yelp_universities = response.jsonBody.businesses;

			yelp_universities.forEach(function(university, i) {
				// Replace the unique id of each university with an index value.
				yelp_universities[i].id = iterations++;

				// Check if yelp has an image for each university.
				if (!university.image_url) {
					// Replace the university's image_url with a randomized placeholder image.
					yelp_universities[i].image_url = "https://picsum.photos/320/?random";
				}

				temp_state.universities.push(yelp_universities[i]);
			});

			// Update the state and then reload the page.
			this.setState({ state: temp_state });
		}).catch(e => {
			// Handle errors thrown by Yelp Fusion.
		 	console.log(e);
		});
	};

	render() {
		const { showPagingButton } = this.state;

		return (			
			<div className="App">
		  		{/* Large screen width (desktop device) */}
		  		<MediaQuery minWidth={992}>
					{/* Header / nav bar */}
					<Header title="Campus Compare"/>

					{/* Display a dynamic grid of Yelp businesses */}
					<div style={{...universitiesGridStyle.main, ...universitiesGridStyle.large}}>
						<University universities={this.state.universities} />
						{ showPagingButton 
							? <button type="button" onClick={this.loadMoreUniversities} style={loadMoreStyle}>Load 50 more</button>
		                    : null
		                }
					</div>
				</MediaQuery>

				{/* Medium screen width (sized like a tablet) */}
		  		<MediaQuery minWidth={768} maxWidth={991}>
					{/* Header / nav bar */}
					<Header title="Campus Compare"/>

					{/* Display a dynamic grid of Yelp businesses */}
					<div style={{...universitiesGridStyle.main, ...universitiesGridStyle.medium}}>
						<University universities={this.state.universities} />
						{ showPagingButton 
							? <button type="button" onClick={this.loadMoreUniversities} style={loadMoreStyle}>Load 50 more</button>
		                    : null
		                }
					</div>
				</MediaQuery>

				{/* Small screen width (mobile device) */}
		  		<MediaQuery maxWidth={767}>
					{/* Header / nav bar */}
					<Header title="Campus Compare"/>

					{/* Display a dynamic grid of Yelp businesses */}
					<div style={{...universitiesGridStyle.main, ...universitiesGridStyle.small}}>
						<University universities={this.state.universities} />
						{ showPagingButton 
							? <button type="button" onClick={this.loadMoreUniversities} style={loadMoreStyle}>Load 50 more</button>
		                    : null
		                }
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
const universitiesGridStyle = {
	main: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		padding: '30px 10px 10px',
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

// Width and height of the square cards.
const cardWidth = '320px';

/* Load more button (styled like a card) */
const loadMoreStyle = {
	position: 'relative',
	backgroundColor: "#fff",
	fontSize: '1.33em',
	fontWeight: 'bold',
	margin: '10px',
	padding: '12px',
	minWidth: cardWidth,
	maxWidth: cardWidth,
	height: cardWidth,
	boxShadow: '2px 2px 5px #00000050',
	textAlign: 'center',
	borderRadius: '8px',
	cursor: 'pointer',
}
