import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';
import Toolbar from './Toolbar';
import {
    updateView,
    updateScrollTop,
} from '../../actions';
import {
    tabs,
} from '../../data';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: 'rgb(14, 190, 224)',
    },
    content: {
        height: `calc(100% - ${83}px)`,
        width: '100%',
        backgroundColor: 'white',
        // display: 'flex',
        // display: '-webkit-flex',
        // display: '-ms-flexbox',
        // webkitFlexDirection: 'column', 
        // msFlexDirection: 'column',
        // flexDirection: 'column',
        // alignItems: 'center',
        // margin: 'auto',
        overflow: 'auto',
    },
});

const IE = ({
    view,
    visible,
    tabIndex,
    updateView,
    updateScrollTop,
}) => {
    const classes = useStyles();

    

    return (
        <div
            className={classes.root}
            onMouseDown={() => view === 'Internet Explorer' || updateView('Internet Explorer')}
            onTouchStart={() => view === 'Internet Explorer' || updateView('Internet Explorer')}
            style={{
                zIndex: view === 'Internet Explorer'? 10 : 5,
                visibility: visible? 'visible' : 'hidden',
            }}
            onScroll={e => updateScrollTop(e.target.scrollTop)}
        >
            <WindowTop name='Internet Explorer' color='black' />
            <Toolbar/>
            <div className={classes.content} ref={e => e? e.scrollTop = 0 : null}>
                {tabs[tabIndex]?.component}
            </div>
        </div>
    );
};

const mapStateToProps = ({
    view,
    visibility,
    currentTab,
}) => {
    const visible = visibility['Internet Explorer'];
    const tabIndex = currentTab.index;

    return {
        view,
        visible,
        tabIndex,
    }
};

const mapDispatchToProps = {
    updateView,
    updateScrollTop,
};

export default connect(mapStateToProps, mapDispatchToProps)(IE);