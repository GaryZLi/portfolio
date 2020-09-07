import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import profilePic from '../../../picSrc/profile.jpg';
import {
    jobs,
    schools,
    skills,
} from '../../../data';

const useStyles = makeStyles({
    root: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 100,
        fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
    },
    intro: {
        width: '100%',
        textAlign: 'center',
        marginTop: 100,
        fontSize: 30,
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
        width: '90%',
        height: '90%',
        maxHeight: 500,
        maxWidth: 400,
        minWidth: 300,
        boxShadow: '15px 15px 8px #555',
        borderRadius: 15,
    },
    description: {
        minWidth: 300,
    },
    schoolContainer: {
        minWidth: 300,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 20,
    },
    schoolInfo: {
        width: '100%',
        borderBottom:  '1px solid #e3e3e3',
        paddingBottom: 20,
        marginLeft: 30,
    },
    schoolImg: {
        height: 56,
        width: 56,
    },
    schoolName: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 600,
    },
    schoolDegree: {
        fontSize: 14,
    },
    schoolYear: {
        color: '#00000099',
        fontSize: 14,
    },
    skillsContainer: {
        width: '100%',
        paddingBottom: 30,
    },
    skillProgressContainer: {
        border: '2px solid #22aae0',
        height: 20,
        width: '100%',
        borderRadius: 20,
    },
    skillProgress: {
        height: '100%',
        backgroundColor: '#22aae0',
        borderRadius: 20,
    },
    job: {
        marginBottom: 30,
    },
    jobCompany: {
        fontSize: 25,
        fontWeight: 600,
    }
});

const AboutMe = ({mobile}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.intro}>
                <span style={{color: '#1cba47'}}>console</span>
                .
                <span style={{color: '#f2dd27'}}>log</span>
                (
                <span style={{color: '#f5a62f'}}>'Hello! My name is Gary.'</span>
                );
            </div>
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
                Work Experience
            </div>
            {
                jobs.map(job => {
                    return (
                        <div
                            key={job.company}
                            className={classes.job}
                            style={{
                                maxWidth: mobile? '90%' : '70%',
                            }}
                        >
                            <div className={classes.jobCompany}>
                                {job.company}
                            </div>
                            <div>
                                {job.position} - {job.location}
                            </div>
                            <div>
                                {job.years}
                            </div>
                            <ul>
                                {
                                    job.description.map((description, id) => <li key={id}>{description}</li>)
                                }
                            </ul>
                        </div> 
                    );
                })
            }
            <div className={classes.title}>
                Skills
            </div>
            {
                skills
                    .sort((a, b) => -(a.level - b.level))
                    .map(skill => {
                        return (
                            <div
                                key={skill.name}
                                className={classes.skillsContainer}>
                                <div>
                                    {skill.name}
                                </div>
                                <div className={classes.skillProgressContainer}>
                                    <div
                                        className={classes.skillProgress}
                                        style={{width: `${skill.level}%`}}
                                    />
                                </div>
                                <div style={{marginLeft: `${skill.level}%`}}>
                                    {`${skill.level}%`}
                                </div>
                            </div>
                        );
                    })
            }
            <div className={classes.title}>
                Education
            </div>
            {
                schools.map(school => {
                    return (
                        <div    
                            key={school.name}
                            className={classes.schoolContainer}
                            style={{marginRight: 'auto'}}
                        >
                            <img className={classes.schoolImg} src={school.icon} alt={school.name}/>
                            <div className={classes.schoolInfo}>
                                <div className={classes.schoolName}>
                                    {school.name}
                                </div>
                                <div className={classes.schoolDegree}>
                                    {school.degree}
                                </div>
                                <div className={classes.schoolYear}>
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