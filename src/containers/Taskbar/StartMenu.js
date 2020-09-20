import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import WindowsLogo from '../../components/WindowsLogo';
import { updateMenu } from '../../actions';

const useStyles = makeStyles({
    startMenu: {
        height: '100%',
        width: 100,
        backgroundColor: '#25c011',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: '20px 100%',
        borderBottomRightRadius: '20px 100%',
        userSelect: 'none',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#38E921'
        },
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginLeft: 5,
    },
});

const StartMenu = ({
    updateMenu,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.startMenu} onClick={() => updateMenu()}>
            <WindowsLogo height={30} width={30}/>
            <div className={classes.text}>
                Start
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    updateMenu,
};

export default connect(null, mapDispatchToProps)(StartMenu);