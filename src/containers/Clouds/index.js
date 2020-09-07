import React from 'react';
import {makeStyles} from '@material-ui/styles';
import cloud1 from '../../picSrc/cloud.png';

const useStyles = makeStyles({
    root: {
        zIndex: 1
    },
    animation: {
        transform: 'translateY(0%) scale(1)',
        transition: 'all 1000ms ease-in-out',
        maxWidth: 300,
        maxHeight: 300,
        left: 50,
        top: 0,
        position: 'fixed',
        animation: '103s ease-in in infinite reverse both running slidein',
    }
});

const Clouds = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.animation} src={cloud1} alt='cloud'/>
        </div>
    );
};

export default Clouds;