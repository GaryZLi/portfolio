import React, { useEffect } from 'react';
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

    useEffect(() => {
        const handleClickClosingMenu = e => {
            if (menu && e.path && (!e.path.includes(document.getElementById('menu')) && !e.path.includes(document.getElementById('startMenu')))) {
                updateMenu();
            }
        };

        document.addEventListener('click', handleClickClosingMenu);

        return () => document.removeEventListener('click', handleClickClosingMenu);
    }, [menu, updateMenu]);

    return (
        <div
            id='menu'
            tabIndex={-1}
            className={classes.root}
            style={{visibility: menu? 'visible' : 'hidden'}}
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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);