import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Slide from '@material-ui/core/Slide';
import VisibilitySensor from 'react-visibility-sensor';

const useStyles = makeStyles({
    skillsContainer: {
        width: '100%',
        paddingBottom: 30,
    },
    skillProgressContainer: {
        height: 20,
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    skillProgress: {
        height: '100%',
        backgroundColor: '#22aae0',
        borderRadius: 20,
    },
});

const Skills = ({ skills }) => {
    const classes = useStyles();
    
    return (
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
                            <Slide in direction='right' timeout={3000} mountOnEnter unmountOnExit>
                                <div
                                    className={classes.skillProgress}
                                    style={{ width: `${skill.level}%` }}
                                />
                            </Slide>
                        </div>
                        <Slide in direction='right' timeout={3000} mountOnEnter unmountOnExit>
                            <div style={{ marginLeft: `${skill.level}%` }}>
                                {`${skill.level}%`}
                                <VisibilitySensor active={false} onChange={e => console.log(skill.name)}>
                                    <div>
                                        {console.log(skill.name)}
                                    </div>
                                </VisibilitySensor>
                            </div>
                        </Slide>
                    </div>
                );
            })
    )
};

export default Skills;