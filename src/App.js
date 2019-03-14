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
				name: 'Stanford University',
				distance: 1
			},
			{
				id: 2,
				name: 'University of California: Berkeley',
				distance: 1
			},
			{
				id: 3,
				name: 'Palo Alto University',
				distance: 1
			},
			{
				id: 4,
				name: 'Stanford University',
				distance: 1
			},
			{
				id: 5,
				name: 'University of California: Berkeley',
				distance: 1
			},
			{
				id: 6,
				name: 'Palo Alto University',
				distance: 1
			}
		]
	}

	render() {
		return (
			<div className="App">
				{/* Header / nav bar */}
				<Header title="Campus Compare"/>

				{/* Display a dynamic grid of Yelp businesses */}
				<div style={universitiesGridStyle}>
					<University universities={this.state.universities} />
				</div>
			</div>
		);
	}
}

export default App;

var universitiesGridStyle = {
	position: 'absolute',
	top: '150px',
	width: '100%',
	backgroundColor: '#E0E0E0',
	display: 'flex',
	flexWrap: 'wrap',
	alignContent: 'flex-start',
	justifyContent: 'center'
}