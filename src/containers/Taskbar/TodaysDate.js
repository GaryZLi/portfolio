import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    date: {
        height: '100%',
        width: 120,
        borderLeft: '2px black solid',
        backgroundColor: '#22aae0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        color: 'white',
    }
});

const TodaysDate = () => {
    const classes = useStyles();
    let today = new Date();

    return (
        <div className={classes.date}>
            <div className={classes.dateText}>
                {today.toLocaleDateString()}
            </div>
            <div className={classes.dateText}>
                {today.toLocaleString('en', {weekday: 'long'})}
            </div>
        </div>
    );
};

export default TodaysDate;