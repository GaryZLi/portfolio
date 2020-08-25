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
        fontFamily: 'Tahoma, Geneva, Verdana, sans-serif',
        '&:hover': {
            backgroundColor: '#50c5f3',
        }
    },
    icon: {
        height: 30,
        marginLeft: 10,
    },
    text: {
        marginLeft: 5,   
    }
});

const TaskbarWindow = ({
    icon,
    text,
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
            <div className={classes.text}>
                {text}
            </div>
        </div>
    );
};

export default TaskbarWindow;