import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import './App.css';
import BlackScreen from './containers/BlackScreen';
import StartupScreen from './containers/StartupScreen';
import LoginScreen from './containers/LoginScreen';
import DesktopScreen from './containers/DesktopScreen';
import {
	updateMobile,
	updateInput,
	updateView,
} from './actions';

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%',
		fontFamily: 'Tahoma, Geneva, Verdana, sans-serif',
	}
});

const App = ({
	screen,
	mobile,
	view,
	input,
	updateMobile,
	updateView,
}) => {
	const classes = useStyles();
	let screenType;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 900) {
				if (!mobile) updateMobile(true);
			}
			else {
				if (mobile) updateMobile(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	
	}, [mobile, updateMobile]);

	useEffect(() => {        
		const cmdInput = document.getElementById('cmdInput');
		const ieInput = document.getElementById('urlInput');

        const handleInput = e => {
			if (view === 'Internet Explorer' && ieInput) {
				ieInput.focus();
			}
			else {
				if (cmdInput) {
					cmdInput.focus();
					if (view !== 'Command Prompt') updateView('Command Prompt');
				}
			}

			// if (e.key === 'Enter') {
			// 	e.preventDefault();

			// 	// handleEnter from actions
			// 	// handleEnter(inputRef.current.innerText);
			// }
			// else if (e.key === 'Backspace') {

			// 	// inputRef.current.innerText = inputRef.current.innerText.substring(0, inputRef.current.innerText.length - 1);
			// }
			// else if (e.keyCode === 32) {
			// 	// inputRef.current.innerText += '\u00A0';
			// }
			// else if (e.key.length === 1) {
			// 	// inputRef.current.innerText += e.key;
			// }
			// // updateInput(input + e.key);
        }

        document.addEventListener('keydown', handleInput);
                
		return () => document.removeEventListener('keydown', handleInput);
		
    }, [view, updateView]);

	switch (screen) {
		case 'startupScreen':
			screenType = <StartupScreen/>;
			break;
		
		case 'loginScreen':
			screenType = <LoginScreen/>;
			break;

		case 'desktopScreen':
			screenType = <DesktopScreen/>;
			break;

		default:
			screenType = <BlackScreen/>;
	}

	return (
		<div className={classes.root}>
			{screenType}
		</div>
	);
}

const mapStateToProps = ({
	screen,
	mobile,
	view,
	input,
}) => ({
	screen,
	mobile,
	view,
	input,
});

const mapDispatchToProps = {
	updateMobile,
	updateInput,
	updateView,
};

const equal = (prev, next) => prev.screen === next.screen && prev.view === next.view && prev.mobile && next.mobile;

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App, equal));