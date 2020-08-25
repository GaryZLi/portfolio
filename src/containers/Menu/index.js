import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Profile from './Profile';
import Content from './Content';
import SystemButtonsContainer from './SystemButtonsContainer';

const useStyles = makeStyles({
    root: {
        bottom: 0,
        position: 'absolute',
        width: '95%',
        maxWidth: 400,
        height: '30',
        backgroundColor: '#1c7eff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

const Menu = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Profile/>
            <Content/>
            <SystemButtonsContainer/>
        </div>
    );
};

export default Menu;