import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Progress from './Progress';

const useStyles = makeStyles({
    skillsContainer: {
        width: '100%',
        paddingBottom: 30,
    },
});

const Skills = ({
    skills,
    scrollTop,
}) => {
    const classes = useStyles();
    const [active, setActive] = useState({});
    // const [timers, setTimers] = useState({});

    return (
        skills
            .sort((a, b) => b.level - a.level)
            .map(skill => {
                return (
                    <div
                        key={skill.name}
                        className={classes.skillsContainer}
                        ref={e => e && !active[skill.name] && scrollTop >= e.offsetTop - window.innerHeight + 83 && 
                            setActive(prev => ({
                                ...prev,
                                [skill.name]: true,
                            }))
                        }
                    >
                        <div>
                            {skill.name}
                        </div>
                        <Progress active={active[skill.name]} skill={skill}/>
                    </div>
                );
            })
    )
};

const mapStateToProps = ({scrollTop}) => ({scrollTop});

export default connect(mapStateToProps)(Skills);