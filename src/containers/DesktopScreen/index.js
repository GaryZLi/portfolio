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
import Cloud from '../Cloud';

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
        backgroundImage: `url(${grassland})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        overflow: 'hidden',
        zIndex: 10,
    },
    clouds: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(44, 188, 255)',
        position: 'fixed',
        zIndex: -1,
    },
});

const DesktopScreen = ({
    windows,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.clouds}>
                {Array(6).fill(true).map((e, i) => <Cloud key={i} number={i % 4}/>)}
            </div>
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