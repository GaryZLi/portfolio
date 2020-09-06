import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';
import Toolbar from './Toolbar';
import AboutMe from './Pages/AboutMe';
import {
    updateView,
} from '../../actions';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        overflowY: 'auto',
        paddingBottom: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const IE = ({
    view,
    visible,
    updateView,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}
            onMouseDown={() => view === 'Internet Explorer' || updateView('Internet Explorer')}
            style={{
                zIndex: view === 'Internet Explorer'? 10 : 5,
                visibility: visible? 'visible' : 'hidden',
            }}
        >
            <WindowTop name='Internet Explorer' color='black' />
            <Toolbar/>
            <div className={classes.content}>
                <AboutMe/>
            </div>
        </div>
    );
};

const mapStateToProps = ({
    view,
    visibility,
}) => {
    const visible = visibility['Internet Explorer'];
    
    return {
        view,
        visible,
    }
};

const mapDispatchToProps = {
    updateView,
};

export default connect(mapStateToProps, mapDispatchToProps)(IE);