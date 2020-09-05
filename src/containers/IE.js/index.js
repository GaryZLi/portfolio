import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';
import {
    updateView,
} from '../../actions';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0ebee0',
        position: 'absolute',
    }
});

const IE = ({
    view,
    updateView,
}) => {
    const classes = useStyles();
console.log(view === 'Internet Explorer')
    return (
        <div className={classes.root}
            onMouseDown={() => updateView('Internet Explorer')}
            style={{zIndex: view === 'Internet Explorer'? 10 : 5}}
        >
            <WindowTop text='Internet Explorer' color='black' />
        </div>
    );
};

const mapStateToProps = ({view}) => ({view});

const mapDispatchToProps = {
    updateView,
};

export default connect(mapStateToProps, mapDispatchToProps)(IE);