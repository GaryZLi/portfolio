import React, { useEffect, useRef, useState } from 'react';
import {makeStyles} from '@material-ui/styles';
import Slide  from '@material-ui/core/Slide';
import cloud from '../../picSrc/cloud.png';
import cloud1 from '../../picSrc/cloud1.png';
import cloud2 from '../../picSrc/cloud2.png';
import cloud3 from '../../picSrc/cloud3.png';
import cloud4 from '../../picSrc/cloud4.png';

const clouds = [
    cloud,
    cloud1,
    cloud2,
    cloud3,
    cloud4,
];

const useStyles = makeStyles({
    root: {
        zIndex: 1,
        maxWidth: Math.min(300, window.innerWidth / 2),
        maxHeight: 300,
        width: '30',
        top: 0,
        position: 'fixed',
    },
});

const Cloud = ({number}) => {
    const classes = useStyles();
    const [active, setActive] = useState(false);
    const direction = useRef(~~(Math.random() * 2) % 2 === 0);
    const timeout = useRef(20000 + Math.random() * 300000);
    const top = useRef(Math.random() * 40);
    const delay = useRef(~~(1 + Math.random() * 2) % 2 === 0);

    useEffect(() => {
        let timer, t;

        let clock = () => {
            setActive(true);

            timer = setInterval(() => {
                setActive(false);
            }, timeout.current)
        };

        if (delay.current) {
            delay.current = false;
            
            t = setTimeout(() => {
                clock();
            }, (3 + Math.random() * 3) * 1000);
        }
        else {
            clock();
        }

        return () => {
            clearInterval(timer);
            clearTimeout(t);
        };
    }, [active]);
    
    const style = {
        [`${direction.current? 'left' : 'right'}`]: window.innerWidth + 500,
        top: `${top.current}%`,
    };

    return (
        <div>
            {active && (
                <Slide
                    in
                    direction={direction.current? 'right' : 'left'}
                    timeout={timeout.current}
                    style={style}
                >
                    <img className={classes.root} src={clouds[number]} alt='cloud'/>
                </Slide>
            )}
        </div>
        
    );
};

export default Cloud;