import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    title: {
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        paddingBottom: 50,
        fontSize: 30,
        borderBottom: '1px solid black',
        color: '#0ebee0',
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
});

const Education = ({schools}) => {
    const classes = useStyles();

    return (    
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
                            {school.experience}
                        </div>
                    </div>
                </div>
            )
        })
    )
};

export default Education;