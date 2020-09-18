import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Accordian from '@material-ui/core/Accordion';
import AccordianSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactTypingEffect from 'react-typing-effect';

const useStyles = makeStyles({
    intro: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 100,
        fontSize: 30,
    },
    accordian: {
        boxShadow: 'none',
    },
    console: {
        width: '100%',
    },
    cursor: {
        height: 10,
        width: 1,
        backgroundColor: 'black'
    },
});

const Intro = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);

    return (
        <div className={classes.intro}>
            <Accordian
                className={classes.accordian}
                defaultExpanded
                onChange={() => setExpanded(!expanded)}
            >
                <AccordianSummary expandIcon={<ExpandMoreIcon/>}/>
                <div>
                    <span style={{color: '#1cba47'}}>execute</span>
                    .
                    <span style={{color: '#f2dd27'}}>typing</span>
                    (
                    <span style={{color: '#f5a62f'}}>'Hello! My name is Gary.'</span>
                    );
                </div>
                <div className={classes.console}>
                    {expanded && (
                        <ReactTypingEffect
                            text='Hello! My name is Gary.'
                            speed={30}
                            eraseDelay={2000}
                        />
                    )}
                </div>
            </Accordian>
        </div>
    )
};

export default Intro;