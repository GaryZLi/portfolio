import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: '#9b9898',
            cursor: 'pointer',
        }
    },
    minButton: {
        height: '5%',
        width: '55%',
        backgroundColor: 'black',
    }
});

const MinimizeButton = ({
    height,
    width,
    color,
    onClick,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{height, width}} onClick={() => onClick()}>
            <div className={classes.minButton} style={{backgroundColor: color}}/>                
        </div>
    );
};

export default MinimizeButton;