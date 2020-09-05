import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {updateScreen} from '../../actions';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        '&:hover': {
            cursor: 'pointer',
        },
    }
})

const BlackScreen = ({updateScreen}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={() => updateScreen('startupScreen')}/>
    );
};

const mapDispatchToProps = {
    updateScreen,
};

export default connect(null, mapDispatchToProps)(BlackScreen);