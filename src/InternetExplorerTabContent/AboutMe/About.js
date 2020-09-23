import React from 'react';
import { makeStyles } from '@material-ui/styles';
import profilePic from '../../picSrc/profile.jpg';

const useStyles = makeStyles({
    aboutMe: {
        display: 'flex',
        width: '100%',
    },
    profilePic: {
        width: '90%',
        height: '90%',
        maxHeight: 500,
        maxWidth: 400,
        minWidth: 300,
        minHeight: 400,
        boxShadow: '15px 15px 8px #555',
        borderRadius: 15,
    },
    description: {
        minWidth: 300,
        maxWidth: 600,
    },
});

const About = ({mobile}) => {
    const classes = useStyles();

    return (
        <div
            className={classes.aboutMe}
            style={{
                flexDirection: mobile? 'column' : 'row',
                
                justifyContent: mobile? 'space-between' : 'center',
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
                Welcome to my personal portfolio.
                I can capture who I am as a person better on here than a piece of paper. 
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
    )
};

export default About;