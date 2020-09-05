import React from 'react';
import {makeStyles} from '@material-ui/styles';

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
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
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

export default TaskbarWindow;