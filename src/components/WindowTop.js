import React from 'react';
import {makeStyles} from '@material-ui/styles';
import MinimizeButton from '../components/MinimizeButton';
import MaximizeButton from '../components/MaximizeButton';
import CloseButton from '../components/CloseButton';

const useStyles = makeStyles({
    root: {
        height: 40,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
    },
    buttonContainer: {
        height: '100%',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
    },
    draggable: {
        '&:hover': {
            cursor: 'grab',
        },
        '&:active': {
            cursor: 'grabbing',
        },
    }
})

const WindowTop = ({
    text,
    color,
    max,
    draggable,
    handleMin,
    handleMax,
    handleClose,
}) => {

    const classes = useStyles();
    return (
        <div className={draggable? [classes.root, classes.draggable].join(' ') : classes.root}>
            <div className={classes.text} style={{color}}>
                {text}
            </div>
            <div className={classes.buttonContainer}>
                <MinimizeButton height='90%' width={50} color={color} onClick={handleMin}/>
                {max && <MaximizeButton height='90%' width={50} color={color} onClick={handleMax}/>}
                <CloseButton height='90%' width={50} color={color} onClick={handleClose}/>
            </div>
        </div>
    );
};

export default WindowTop;