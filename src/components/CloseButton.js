import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '&:hover': {
            backgroundColor: 'red',
            cursor: 'pointer',
        }
    },
    left: {
        height: 30,
        width: 2,
        transform: 'rotate(45deg)',
        position: 'absolute',
        borderRadius: 100,
    },
    right: {
        height: 30,
        width: 2,
        transform: 'rotate(-45deg)',
        position: 'absolute',
        borderRadius: 50,
    }
});

const CloseButton = ({
    height,
    width,
    color,
    onClick,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{height, width}} onClick={() => onClick()}>
            <div className={classes.left} style={{backgroundColor: color}}/>         
            <div className={classes.right} style={{backgroundColor: color}}/>         
        </div>
    );
};

export default CloseButton;