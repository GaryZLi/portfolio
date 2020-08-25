import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#0000FF',
        borderRadius: 5,
    },
    content: {
        backgroundColor: 'white',
        height: '70%',
        width: '80%',
    }
});

const MainCppIcon = ({
    height,
    width,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{height, width}}>
            <div className={classes.content} style={{marginTop: height / 5}}/>
        </div>
    );
};

export default MainCppIcon;