import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import {updateScreen} from '../../actions';
import grassland from '../../picSrc/grassland.png';
import MainCpp from '../MainCpp';
import CmdPrompt from '../CmdPrompt';
import IE from '../IE/index.js';
import Taskbar from '../Taskbar';
import Menu from '../Menu';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
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
});

const DesktopScreen = ({
    windows,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {windows['main.cpp'] && <MainCpp/>}
                {windows['Command Prompt'] && <CmdPrompt/>}
                {windows['Internet Explorer'] && <IE/>}
                <Menu/>
            </div>
            <Taskbar/>
        </div>
    );
};

const mapStateToProps = ({
    windows,
}) => ({
    windows,
});

const mapDispatchToProps = {
    updateScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopScreen);