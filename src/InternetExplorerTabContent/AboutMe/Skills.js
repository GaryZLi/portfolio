import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
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
                            <div
                                className={classes.skillProgress}
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                        <div style={{ marginLeft: `${skill.level}%` }}>
                            {`${skill.level}%`}
                        </div>
                    </div>
                );
            })
    )
};

export default Skills;