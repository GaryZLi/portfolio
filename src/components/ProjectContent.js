import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { projects } from '../data';

const useStyles = makeStyles({
    root: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        display: 'inline-flex',
        maxWidth: 500,
        marginTop: 50,
        margin: 'auto',
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: Math.min(window.innerWidth * .7 / 5, 70),
        color: '#0ebee0',
        paddingBottom: 10,
        borderBottom: '1px solid black',
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        width: '100%',
        paddingBottom: 100,
    },
    heading: {
        fontSize: Math.min(window.innerWidth * .7 / 8, 30),
        color: '#0ebee0',
        display: 'flex',
        textAlign: 'center',
        marginTop: 20,
    },
    pictures: {
        alignItems: 'center',
    },
    picture: {
        marginBottom: 10,
        maxWidth: '90%',
        maxHeight: 400,
    },
    techContainer: {
        height: 150,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    tech: {
        height: 50,
        maxWidth: 70, 
        marginTop: 10,
        marginRight: 10,
    },
    detailContainer: {
        // minHeight: 100,
    },
    link: {
        textDecorationColor: 'blue',
        color: 'blue',
    },
});

const ProjectContent = ({
    projectName,
    mobile,
}) => {
    const classes = useStyles();

    const style = {
        width: mobile? '100%' : '50%',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                {projectName}
            </div>
            <div
                className={classes.content}
                style={{
                    flexDirection: mobile? 'column-reverse' : 'row',
                    justifyContent: projects[projectName].images? undefined : 'center',
                }}
            >
                {projects[projectName].images && (
                    <div
                        className={classes.pictures}
                        style={{
                            ...style,
                            marginTop: mobile? 100 : 0,
                        }}
                    >
                        {projects[projectName].images
                            .map((image, id) => 
                                // eslint-disable-next-line
                                <img
                                    className={classes.picture}
                                    key={id}
                                    src={image}
                                    alt='project image'
                                />
                            )
                        }
                    </div>
                )}
                <div style={{
                        ...style,
                        justifyContent: mobile? 'center' : undefined,
                    }}
                >
                    <div>
                        <div
                            className={classes.heading}
                            style={{justifyContent: mobile || !projects[projectName].images? 'center' : 'flex-start'}}
                        >
                            BUILT WITH
                        </div>
                        <div
                            className={classes.techContainer}
                            style={{
                                justifyContent: mobile || !projects[projectName].images? 'space-evenly' : 'flex-start',
                                width: projects[projectName].tech.length * 70,
                                margin: mobile || !projects[projectName].images? 'auto' : undefined,
                            }}
                        >
                            {projects[projectName].tech.map((tech, id) => 
                                <img
                                    key={id}
                                    className={classes.tech}
                                    src={tech}
                                    alt='tech'
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <div
                            className={classes.heading}
                            style={{justifyContent: mobile || !projects[projectName].images? 'center' : 'flex-start'}}
                        >
                            PURPOSE
                        </div>
                        <div className={classes.detailContainer}>
                            {projects[projectName].purpose}
                        </div>
                    </div>
                    <div>
                        <div
                            className={classes.heading}
                            style={{justifyContent: mobile || !projects[projectName].images? 'center' : 'flex-start'}}
                        >
                            WHAT I LEARNED
                        </div>
                        <div className={classes.detailContainer}>
                            {projects[projectName].WIL}
                        </div>
                    </div>
                    {projects[projectName].additionalDetails && (
                        <div>
                            <div
                                className={classes.heading}
                                style={{justifyContent: mobile || !projects[projectName].images? 'center' : 'flex-start'}}
                            >
                                ADDITIONAL DETAILS
                            </div>
                            <div className={classes.detailContainer}>
                                {projects[projectName].additionalDetails.map(detail => {
                                    const [Github, link] = detail.split(' ');

                                    if (Github === 'Github:') {
                                        return (
                                            <div key={detail}>
                                                - {Github} <a className={classes.link} href={link}>{link}</a>
                                            </div>
                                        );
                                    }

                                    return <div key={detail}>- {detail}</div>;
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({mobile}) => ({mobile});

export default connect(mapStateToProps)(ProjectContent);