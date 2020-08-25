import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import ListWrapper from '../../components/ListWrapper';
import {updateProjectsList} from '../../actions';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        boxShadow: '10px 10px 8px #000, 5px 10px 8px #000',
        borderColor: '#000',
        borderLeftWidth: 1,
        borderTopLeftRadius: 10,
        borderTopWidth: 1,
        bottom: 0,
    },
    list: {
        height: 30,
        width: '100%',
        '&:hover': {
            backgroundColor: '#379bf8',
            cursor: 'pointer',
        }
    },
    firstList: {
        borderTopLeftRadius: 10,
    }
});

const ProjectsList = ({updateProjectsList}) => {
    const classes = useStyles();
    const list = [
        'ai Message',
        'Transcend Life',
        'User Login Database',
        'Windows Website Blocker',
        'Keylogger',
        'Yelp Decision Generator',
        'Rob the Mafia',
        'QuakeUp',
    ];

    return (
        <div className={classes.root} onMouseEnter={() => updateProjectsList(true)} onMouseLeave={() => updateProjectsList(false)}>
            {list.map((proj, id) => 
                <ListWrapper
                    key={proj}
                    className={
                        id === 0
                        ? [classes.list, classes.firstList].join(' ')
                        : classes.list} text={proj}
                />
            )}
        </div>
    );
};

const mapStatetoProps = ({projectsList}) => ({projectsList});

const mapDispatchToProps = {
    updateProjectsList,
};

export default connect(mapStatetoProps, mapDispatchToProps)(ProjectsList);