import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import './App.css';
import BlackScreen from './containers/BlackScreen';
import StartupScreen from './containers/StartupScreen';
import LoginScreen from './containers/LoginScreen';
import DesktopScreen from './containers/DesktopScreen';

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%',
	}
});

function App({screenType}) {
	const classes = useStyles();
	let screen;

	switch (screenType) {
		case 'startupScreen':
			screen = <StartupScreen/>;
			break;
		
		case 'loginScreen':
			screen = <LoginScreen/>;
			break;

		case 'desktopScreen':
			screen = <DesktopScreen/>;
			break;

		default:
			screen = <BlackScreen/>;
	}

	return (
		<div className={classes.root}>
			{screen}
		</div>
	);
}

const mapStateToProps = ({screen}) => ({
	screenType: screen,
})

export default connect(mapStateToProps)(App);