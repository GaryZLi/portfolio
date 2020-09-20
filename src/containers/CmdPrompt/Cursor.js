import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    blink: {
        visibility: 'visible',
        height: 5,
        width: 20,
        backgroundColor: 'white',
        marginTop: 'auto',
    },
});

const Cursor = () => {
    const classes = useStyles();
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setBlink(prev => !prev), 800);

        return () => clearInterval(timer);
    }, []);

    

    return <div className={classes.blink} style={{ visibility: blink ? 'visible' : 'hidden' }} />
};

export default Cursor;