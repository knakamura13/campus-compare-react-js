// Import npm packages
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import custom components
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';
import Error from './components/Error';

// Import custom files
import './App.css';




/****************
 Component Class
*****************/


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					{/* Both paths / and /home take the user to the Home.js component */}
					<Route path="/" exact component={Home} />
					<Route path="/home" component={Home} />

					{/* Display details for whichever business is set to this.state.university */}
					<Route path="/details" component={Details} />

					{/* Redirect to the Error component if the path is not defined in this Switch */}
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}
