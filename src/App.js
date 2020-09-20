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
			if (e.key?.length === 1) {
				if (view === 'Internet Explorer' && ieInput) {
					ieInput.focus();
					ieInput.selectionStart = 100;
				}
				else {
					if (cmdInput) {
						cmdInput.focus();
						cmdInput.selectionStart = 100;
						if (view !== 'Command Prompt') updateView('Command Prompt');
					}
				}
			}
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
}) => ({
	screen,
	mobile,
	view,
});

const mapDispatchToProps = {
	updateMobile,
	updateView,
};

const equal = (prev, next) => prev.screen === next.screen && prev.view === next.view && prev.mobile && next.mobile;

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App, equal));