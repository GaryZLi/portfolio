import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import TaskbarWindow from '../../components/TaskbarWindow';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 5,
        overflow: 'hidden',
    }
});

const Windows = ({taskbarWindows}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {taskbarWindows.map(window => <TaskbarWindow key={window.text} icon={window.icon} text={window.text}/>)}
        </div>
    );
};

const mapStateToProps = ({taskbarWindows}) => ({taskbarWindows});

export default connect(mapStateToProps)(Windows);