import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {
    updateVisibility,
    updateView,
} from '../actions';

const useStyles = makeStyles({
    root: {
        height: '85%',
        width: 200,
        minWidth: 120,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 5,
        backgroundColor: '#22aae0',
        '&:hover': {
            backgroundColor: '#50c5f3',
            cursor: 'pointer',
        }
    },
    icon: {
        height: 30,
        marginLeft: 10,
    },
    name: {
        marginLeft: 5,   
    }
});

const TaskbarWindow = ({
    icon,
    name,
    updateVisibility,
    updateView,
}) => {
    const classes = useStyles();

    const handleClick = () => {
        updateVisibility(name, true);
        updateView(name);
    };

    return (
        <div className={classes.root} onClick={handleClick}>
            {typeof icon === 'string' && (
                <img className={classes.icon} src={icon} alt='icon' draggable='false'/>
            )}
            {typeof icon === 'object' && (
                <div className={classes.icon}>
                    {icon}
                </div>
            )}
            <div className={classes.name}>
                {name}
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateVisibility,
    updateView,
};

export default connect(null, mapDispatchToProps)(TaskbarWindow);