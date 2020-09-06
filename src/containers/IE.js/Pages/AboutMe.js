import React, { useState } from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {Slide} from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';
import profilePic from '../../../picSrc/profile.jpg';
import OaklandHigh from '../../../picSrc/oaklandHigh.jpg';
import Laney from '../../../picSrc/laney.jpg';
import UCI from '../../../picSrc/uci.png';
import CoA from '../../../picSrc/CoA.png';

const useStyles = makeStyles({
    root: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    aboutMe: {
        display: 'flex',
        width: '100%',
    },
    profilePic: {
        maxHeight: 500,
        maxWidth: 400,
        boxShadow: '15px 15px 8px #555',
        borderRadius: 15,
    },
    description: {
        minWidth: 300,
    },
    schoolContainer: {
        minWidth: 300,
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    schoolImg: {
        minHeight: 80,
        minWidth: 80,
        height: '100%',
        width: '100%',
        maxHeight: 150,
        maxWidth: 150,
        marginRight: 10,
    },
    schoolName: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 10,
    }
});

const schoolMapping = [
    {
        name: 'University of California, Irvine',
        icon: UCI,
        degree: 'B.S. in Computer Science',
        years: '2018 - 2020',
    },
    {
        name: 'Laney College',
        icon: Laney,
        degree: 'A.S.T in Mathematics',
        years: '2016 - 2018',
    },
    {
        name: 'College of Alameda',
        icon: CoA,
        degree: 'A.S.T in Mathematics',
        years: '2016 - 2018',
    },
    {
        name: 'Oakland High School',
        icon: OaklandHigh,
        degree: 'High School Diploma',
        years: '2012 - 2016',
    }
];

const AboutMe = ({mobile}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                ABOUT
            </div>
            <div
                className={classes.aboutMe}
                style={{
                    flexDirection: mobile? 'column' : 'row',
                    justifyContent: mobile? 'space-between' : 'space-between',
                    alignItems: mobile? 'center' : '',
                }}
            >
                <img className={classes.profilePic} src={profilePic} alt='profile' draggable='false'/>
                <div
                    className={classes.description}
                    style={{
                        marginLeft: mobile? 0 : 50,
                        marginTop: mobile? 50: 0,
                        fontSize: window.innerWidth < 500? 16 : 22,
                    }}
                >
                    Hello my name is Gary Li.
                    I am unable to capture who I am as much on a piece of paper, so welcome to my personal portfolio.
                    I am a graduate from University of California, Irvine with a Bachelors of Science in Computer Science.
                    Sometimes, I love going to Youtube on Google Chrome's incognito mode and play a song.
                    The automatically generated playlist usually helps me discover new songs that I have not heard of before.
                    Some of my favorite findings include Day 1 by HONNE, My Favorite Clothes by RINI, and Butterfly by UMI.
                    Aside from the random fact, I got into computers at a young age.
                    My first computer in fact did have the Windows XP operating system, thus, the Windows XP theme.
                    By 7th grade, I downloaded and injected my first hack in an online FPS game.
                    My interest in what computers could do peaked.
                    However, I was not exposed to any sorts of programming until community college because my high school did not offer any computer courses.
                    I majored in math in community college then transferred to UC Irvine to pursue my love and interest in computers.
                </div>
            </div>
            <div className={classes.title}>
                Education
            </div>
            {
                schoolMapping.map(school => {
                    return (
                        <div    
                            key={school.name}
                            className={classes.schoolContainer}
                            style={{marginRight: 'auto'}}
                        >
                            <img className={classes.schoolImg} src={school.icon} alt={school.name}/>
                            <div>
                                <div className={classes.schoolName}>
                                    {school.name}
                                </div>
                                <div>
                                    {school.degree}
                                </div>
                                <div style={{fontStyle: 'italic'}}>
                                    {school.years}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = ({mobile}) => ({mobile});

export default connect(mapStateToProps)(AboutMe);