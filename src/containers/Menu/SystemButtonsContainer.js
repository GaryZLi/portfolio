import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import restart from '../../picSrc/restart.png';
import shutdown from '../../picSrc/shutdown.png';
import logoff from '../../picSrc/logoff.png';
import {
    clearState,
    updateScreen,
} from '../../actions';

const useStyles = makeStyles({
    systemButtonsRoot: {
        height: 60,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    systemButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        '&:hover': {
            cursor: 'pointer',
            '& $systemButtonText': {
                textDecoration: 'underline',
            },
            '& $systemButton': {
                boxShadow: '2px 2px 8px #50C5F3, -2px -2px 8px #50C5F3',
            },
        }
    },
    systemButton: {
        width: '10vw',
        maxWidth: 45,
        borderRadius: '50%',
    },
    systemButtonText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5,
    }
});

const SystemButtonsContainer = ({
    updateScreen,
    clearState,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.systemButtonsRoot}>
            <div
                className={classes.systemButtonContainer}
                onClick={() => updateScreen('loginScreen')}
            >
                <img className={classes.systemButton} src={logoff} alt='logoff'/>
                <div className={classes.systemButtonText}>
                    Logoff
                </div>
            </div>
            <div
                className={classes.systemButtonContainer}
                onClick={() => updateScreen('startupScreen')}
            >
                <img className={classes.systemButton} src={restart} alt='restart'/>
                <div className={classes.systemButtonText}>
                    Restart
                </div>
            </div>
            <div
                className={classes.systemButtonContainer}
                onClick={() => updateScreen('blackScreen')}
            >
                <img className={classes.systemButton} src={shutdown} alt='shutdown'/>
                <div className={classes.systemButtonText}>
                    Shutdown
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateScreen,
    clearState,
};

export default connect(null, mapDispatchToProps)(SystemButtonsContainer);