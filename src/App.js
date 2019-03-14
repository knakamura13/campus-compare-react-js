import React, { Component } from 'react';
import University from './components/University';
import Header from './components/Header';
import './App.css';

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