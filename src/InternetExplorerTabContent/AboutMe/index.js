import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    jobs,
    schools,
    skills,
} from '../../data';
import Intro from './Intro';
import About from './About';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

const useStyles = makeStyles({
    root: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 100,
        fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
    },
    title: {
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        paddingBottom: 50,
        fontSize: 30,
        borderBottom: '1px solid black',
        color: '#0ebee0',
    },
});

const AboutMe = ({mobile}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Intro/>

            <div className={classes.title}>
                ABOUT
            </div>
            <About mobile={mobile}/>

            <div className={classes.title}>
                Work Experience
            </div>
            <WorkExperience jobs={jobs} mobile={mobile}/>

            <div className={classes.title}>
                Skills
            </div>
            <Skills skills={skills}/>

            <div className={classes.title}>
                Education
            </div>
            <Education schools={schools}/>
        </div>
    );
};

const mapStateToProps = ({mobile}) => ({mobile});

export default connect(mapStateToProps)(AboutMe);