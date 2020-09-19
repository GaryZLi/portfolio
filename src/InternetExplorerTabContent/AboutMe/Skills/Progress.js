import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Slide from '@material-ui/core/Slide';
import SkillLevel from './SkillLevel';

const useStyles = makeStyles({
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
    levelContainer: {
        overflow: 'hidden',
    },
});

const Progress = ({
    active,
    skill,
}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.skillProgressContainer}>
                <Slide
                    in={active}
                    direction='right'
                    timeout={skill.level * 35}
                    mountOnEnter
                    unmountOnExit
                >
                    <div
                        className={classes.skillProgress}
                        style={{ width: `${skill.level}%` }}
                    />
                </Slide>
            </div>
            <div className={classes.levelContainer}>
                <Slide
                    in={active}
                    direction='right'
                    timeout={skill.level * 35}
                    mountOnEnter
                    unmountOnExit
                >
                    <div style={{ marginLeft: `${skill.level}%` }}>
                        <SkillLevel active={active} level={skill.level}/>
                    </div>
                </Slide>
            </div>
        </>
    )
}

export default React.memo(Progress, (a, b) => a.active === b.active);