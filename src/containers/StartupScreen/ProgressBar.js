import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {updateScreen} from '../../actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        height: 30,
        width: 200,
        marginTop: 100,
        borderRadius: 5,
        border: '2px solid gray',
        position: 'relative',
    },
    progressContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        overflow: 'hidden',
    },
    progress: {
        height: '80%',
        minWidth: 10,
        backgroundColor: '#2d5feb',
        marginLeft: 3,
        borderRadius: 2,
    },
})

const ProgressBar = ({updateScreen}) => {
    const classes = useStyles();
    const [position, setPosition] = useState(0);

    useEffect(() => {
        setTimeout(( ) => updateScreen('loginScreen'), 5000);

        const progressing = setInterval(() => {
            setPosition(prev => {
                if (prev < 250) {
                    return prev + 10;
                }
                else {
                    return 0;
                }
            })
        }, 100);

        return () => clearInterval(progressing);

        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.progressContainer} style={{marginLeft: position}}>
                <div className={classes.progress}/>
                <div className={classes.progress}/>
                <div className={classes.progress}/>
            </div>
        </div>
    );
};

const mapDisptachToProps = {
    updateScreen,
}

export default connect(null, mapDisptachToProps)(ProgressBar);