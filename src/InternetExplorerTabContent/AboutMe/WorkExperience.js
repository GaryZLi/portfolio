import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    job: {
        marginBottom: 30,
    },
    jobCompany: {
        fontSize: 25,
        fontWeight: 600,
    },
    year: {
        fontSize: 30,
        marginBottom: 10,
    },
    yearContainer: {
        paddingLeft: 20,
    },
    jobInfo: {
        marginTop: 10,
        fontStyle: 'italic',
    },
});

const WorkExperience = ({
    jobs,
    mobile,
}) => {
    const classes = useStyles();

    let experience = {};
    let years;
    
    jobs.forEach(job => 
        experience[job.start.year]
            ? experience[job.start.year].push(job)
            : experience[job.start.year] = [job]
    );

    for (const year in experience) {
        experience[year].sort((a, b) => b.start.month - a.start.month);
    }
    
    years = Object.keys(experience).sort((a, b) => b - a);

    return years.map(year => {
        return (
            <div key={year}>
                <div className={classes.year}>
                    {year}
                </div>
                <div className={classes.yearContainer}>
                    {
                        experience[year].map(job => {
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
                                    <div className={classes.jobInfo}>
                                        {job.info}
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
                </div>
            </div>
            
        )
    })  
};

export default WorkExperience;