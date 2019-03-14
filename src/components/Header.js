import React, { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
  render() {
  	return (
  		// Header with a logo and title.
  		<div style={headerStyle}>
  			<img src={logo} alt="Logo" style={logoStyle}/>
			<h1>{ this.props.title }</h1>
		</div>
  	);
  }
}

export default Header;

const headerStyle = {
	color: '#fff',
	backgroundColor: '#27ae60',
	height: '200px',
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	fontSize: '1.2em',
	zIndex: '99999',
	boxShadow: '0px 2px 5px #00000050',
	textShadow: '2px 2px 5px #00000050',
}

const logoStyle = {
	height: '70px',
	width: '70px',
	margin: '0 auto 0 auto',
}