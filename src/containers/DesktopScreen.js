import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import {updateScreen} from '../actions';
import grassland from '../picSrc/grassland.png';
import MainCpp from './MainCpp';
import CmdPrompt from './CmdPrompt';
import IE from './IE.js';
import Taskbar from './Taskbar';
import Menu from './Menu';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundColor: 'rgb(44, 188, 255)',
        backgroundImage: `url(${grassland})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        fontFamily: 'Tahoma, Geneva, Verdana, sans-serif',
        overflow: 'hidden',
    },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
});

const DesktopScreen = ({
    view,
    menu,
    mainCpp,
    mainCppVisible,
    cmdPrompt,
    cmdPromptVisible,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {mainCpp && mainCppVisible && <MainCpp/>}
                {cmdPrompt && cmdPromptVisible && <CmdPrompt/>}
                {menu && <Menu/>}
                <IE/>
            </div>
            <Taskbar/>
        </div>
    );
};

const mapStateToProps = ({
    view,
    menu,
    mainCpp,
    mainCppVisible,
    cmdPrompt,
    cmdPromptVisible,
}) => ({
    view,
    menu,
    mainCpp,
    mainCppVisible,
    cmdPrompt,
    cmdPromptVisible
});

const mapDispatchToProps = {
    updateScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopScreen);