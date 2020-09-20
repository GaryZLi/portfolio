import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TaskbarWindows from './TaskbarWindows';
import StartMenu from './StartMenu';
import TodaysDate from './TodaysDate';

const useStyles = makeStyles({
    root: {
        height: 45,
        width: '100%',
        backgroundColor: '#1c7eff',
        borderTop: '3px solid #5faef8',
    },
    container: {
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
})

const Taskbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <StartMenu/>
                <TaskbarWindows/>
                <TodaysDate/>
            </div>
        </div>
    );
};

export default Taskbar;