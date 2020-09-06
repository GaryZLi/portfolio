import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import WindowsLogo from '../../components/WindowsLogo';
import TaskbarWindows from './TaskbarWindows';
import {updateMenu} from '../../actions';

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
    startMenu: {
        height: '100%',
        width: 100,
        backgroundColor: '#25c011',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: '20px 100%',
        borderBottomRightRadius: '20px 100%',
        userSelect: 'none',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#38E921'
        },
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginLeft: 5,
    },
    date: {
        height: '100%',
        width: 120,
        borderLeft: '2px black solid',
        backgroundColor: '#22aae0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        color: 'white',
    }
})

const Taskbar = ({updateMenu}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <StartMenu onClick={updateMenu}/>
                <TaskbarWindows/>
                <TodaysDate/>
            </div>
        </div>
    );
};

const StartMenu = ({onClick}) => {
    const classes = useStyles();

    return (
        <div className={classes.startMenu} onClick={() => onClick()}>
            <WindowsLogo height={30} width={30}/>
            <div className={classes.text}>
                Start
            </div>
        </div>
    )
}

const TodaysDate = () => {
    const classes = useStyles();
    let today = new Date();

    return (
        <div className={classes.date}>
            <div className={classes.dateText}>
                {today.toLocaleDateString()}
            </div>
            <div className={classes.dateText}>
                {today.toLocaleString('en', {weekday: 'long'})}
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateMenu,
};

export default connect(null, mapDispatchToProps)(Taskbar);