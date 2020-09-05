import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import {updateScreen} from '../../actions';
import grassland from '../../picSrc/grassland.png';
import MainCpp from '../MainCpp';
import CmdPrompt from '../CmdPrompt';
import IE from '../IE.js/index.js';
import Taskbar from '../Taskbar';
import Menu from '../Menu';

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
    mainCpp,
    mainCppVisible,
    cmdPrompt,
    cmdPromptVisible,
    ie,
    ieVisible,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {mainCpp && mainCppVisible && <MainCpp/>}
                {cmdPrompt && cmdPromptVisible && <CmdPrompt/>}
                {ie && ieVisible && <IE/>}
                <Menu/>
            </div>
            <Taskbar/>
        </div>
    );
};

const mapStateToProps = ({
    ie,
    ieVisible,
    mainCpp,
    mainCppVisible,
    cmdPrompt,
    cmdPromptVisible,
}) => ({
    ie,
    ieVisible,
    mainCpp,
    mainCppVisible,
    cmdPrompt,
    cmdPromptVisible
});

const mapDispatchToProps = {
    updateScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopScreen);