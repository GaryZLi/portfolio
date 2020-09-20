import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Profile from './Profile';
import Content from './Content';
import SystemButtonsContainer from './SystemButtonsContainer';
import { updateMenu } from '../../actions';

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
        outline: 'none',
    },
});

const Menu = ({
    menu,
    updateMenu,
}) => {
    const classes = useStyles();

    if (menu) {
        setTimeout(() => document.getElementById('menu').focus(), 100);
    }

    return (
        <div
            id='menu'
            tabIndex={-1}
            className={classes.root}
            style={{visibility: menu? 'visible' : 'hidden'}}
            onBlur={() => setTimeout(() => updateMenu(false), 100)}
        >
            <Profile/>
            <Content/>
            <SystemButtonsContainer/>
        </div>
    );
};

const mapStateToProps = ({menu}) => ({menu});

const mapDispatchToProps = {
    updateMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);