import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import TaskbarWindow from '../../components/TaskbarWindow';
import ie from '../../picSrc/IE.png';
import CmdPromptIcon from '../../components/CmdPromptIcon';
import MainCppIcon from '../../components/MainCppIcon';

const iconMap = {
    'Internet Explorer': ie,
    'Command Prompt': <CmdPromptIcon height={30} width={30}/>,
    'main.cpp': <MainCppIcon height={30} width={30}/>,
}

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 5,
        overflowX: 'scroll',
        scrollbarWidth: 0,
        '&::-webkit-scrollbar': {
            width: 0,
            height: 0,
            background: 'transparent',
        },
    }
});

const Windows = ({taskbarWindows}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {taskbarWindows.map(name => <TaskbarWindow key={name} icon={iconMap[name]} name={name}/>)}
        </div>
    );
};

const mapStateToProps = ({taskbarWindows}) => ({taskbarWindows});

export default connect(mapStateToProps)(Windows);