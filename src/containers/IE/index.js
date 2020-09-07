import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';
import Toolbar from './Toolbar';
import {
    updateView,
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
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const IE = ({
    view,
    visible,
    tabIndex,
    updateView,
}) => {
    const classes = useStyles();
console.log(view === 'Internet Explorer')
    return (
        <div
            className={classes.root}
            onMouseDown={() => view === 'Internet Explorer' || updateView('Internet Explorer')}
            style={{
                zIndex: view === 'Internet Explorer'? 10 : 5,
                visibility: visible? 'visible' : 'hidden',
            }}
        >
            <WindowTop name='Internet Explorer' color='black' />
            <Toolbar/>
            <div className={classes.content}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(IE);