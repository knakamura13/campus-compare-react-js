import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import logo from '../logo.png';

// Header with a logo and title.
class Header extends Component {
  render() {
  	return (
  		<div>
	  		{/* Large screen width (desktop device) */}
	  		<MediaQuery minWidth={992}>
		  		<div style={{...headerStyle.main, ...headerStyle.large}}>
		  			<img src={logo} alt="Logo" style={{...logoStyle.main, ...logoStyle.large}}/>
					<h1>{ this.props.title }</h1>
				</div>
			</MediaQuery>

			{/* Medium screen width (sized like a tablet) */}
	  		<MediaQuery minWidth={768} maxWidth={991}>
		  		<div style={{...headerStyle.main, ...headerStyle.medium}}>
		  			<img src={logo} alt="Logo" style={{...logoStyle.main, ...logoStyle.medium}}/>
					<h1>{ this.props.title }</h1>
				</div>
			</MediaQuery>

			{/* Small screen width (mobile device) */}
	  		<MediaQuery maxWidth={767}>
		  		<div style={{...headerStyle.main, ...headerStyle.small}}>
		  			<img src={logo} alt="Logo" style={{...logoStyle.main, ...logoStyle.small}}/>
					<h1>{ this.props.title }</h1>
				</div>
			</MediaQuery>
		</div>
  	);
  }
}

export default Header;

const headerStyle = {
	main: {
		color: '#fff',
		backgroundColor: '#700',
		position: 'fixed',
		top: '0',
		right: '0',
		left: '0',
		display: 'flex',
		zIndex: '99999',
		boxShadow: '0px 2px 5px #00000050',
		textShadow: '2px 2px 5px #00000050',
	},
	large: {
		height: '130px',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	medium: {
		height: '120px',
		fontSize: '14px',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	small: {
		height: '50px',
		fontSize: '12px',
		paddingTop: '8px',
		flexDirection: 'row',
		justifyContent: 'center',
	}
}

const logoStyle = {
	main: {
		margin: '0 auto 0 auto',
	},
	large: {
		height: '70px',
		width: '70px',
	},
	medium: {
		height: '60px',
		width: '60px',
	}, 
	small: {
		height: '50px',
		width: '50px',
		position: 'absolute',
		top: '0',
		left: '5px',
	}
}