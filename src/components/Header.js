import React, { Component } from 'react';

class Header extends Component {
  render() {
  	return (
  		// Display a simple header/nav-bar with a title.
  		<div style={headerStyle}>
			<h1>{ this.props.title }</h1>
		</div>
  	);
  }
}

export default Header;

var headerStyle = {
	position: 'fixed',
	top: '0',
	right: '0',
	left: '0',
	height: '150px',
	lineHeight: '150px',
	color: '#fff',
	backgroundColor: '#344955',
	zIndex: '99999',
	boxShadow: '0px 2px 5px #00000050'
}