import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Profile from './Profile';
import Content from './Content';
import SystemButtonsContainer from './SystemButtonsContainer';
import { connect } from 'react-redux';

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
        zIndex: 100,
    },
});

const Menu = ({menu}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}
            style={{visibility: menu? 'visible' : 'hidden'}}
        >
            <Profile/>
            <Content/>
            <SystemButtonsContainer/>
        </div>
    );
};

const mapStateToProps = ({menu}) => ({menu});

export default connect(mapStateToProps)(Menu);