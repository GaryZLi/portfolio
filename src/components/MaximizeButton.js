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
    maxButton: {
        height: '55%',
        width: '45%',
        borderWidth: '2px',
        borderStyle: 'solid',
    }
});

const MaximizeButton = ({
    height,
    width,
    color,
    onClick,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{height, width}} onClick={() => onClick()}>
            <div className={classes.maxButton} style={{borderColor: color}}/>                
        </div>
    );
};

export default MaximizeButton;