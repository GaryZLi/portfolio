import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'black',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    }
});

const CmdPromptIcon = ({
    height,
    width,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{height, width}}>
            <div className={classes.text} style={{fontSize: height / 2}}>
                C:\
            </div>
        </div>
    );
};

export default CmdPromptIcon;