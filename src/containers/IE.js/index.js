import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0ebee0',
    }
});

const IE = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <WindowTop text='Internet Explorer' color='black' />
        </div>
    );
};

export default connect()(IE);