import React from 'react';
import {makeStyles} from '@material-ui/styles';
import ProgressBar from './ProgressBar';
import WindowsLogo from '../../components/WindowsLogo';

const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        height: '55%',
        width:'90%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        color: 'white',
        fontSize: 40,
    },
});

const StartupScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <WindowsLogo height={210} width={230}/>
                <div className={classes.text}>
                    WINDOWS XP
                </div>
                <ProgressBar/>
            </div>
        </div>
    )
};

export default StartupScreen;