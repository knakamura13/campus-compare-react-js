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
					<Route path="/" exact component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/details" component={Details} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}
