import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import MinimizeButton from '../components/MinimizeButton';
import MaximizeButton from '../components/MaximizeButton';
import CloseButton from '../components/CloseButton';
import {
    updateVisibility,
    updateWindow,
    updateView,
    removeTaskbarWindow,
} from '../actions';

const useStyles = makeStyles({
    root: {
        height: 40,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    name: {
        marginLeft: 10,
    },
    buttonContainer: {
        height: '100%',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
    },
    draggable: {
        '&:hover': {
            cursor: 'grab',
        },
        '&:active': {
            cursor: 'grabbing',
        },
    }
})

const WindowTop = ({
    name,
    color,
    max,
    draggable,
    updateWindow,
    updateView,
    updateVisibility,
    removeTaskbarWindow,
}) => {
    const classes = useStyles();

    const handleClick = action => {
        switch (action) {
            case 'minimize':
                updateVisibility(name, false);
                break;
            case 'maximize':
                break;
            default:
                updateWindow(name, false);
                updateVisibility(name, false);
                updateView('');
                removeTaskbarWindow(name);
                break;
        };
    };

    return (
        <div className={draggable? [classes.root, classes.draggable].join(' ') : classes.root}>
            <div className={classes.name} style={{color}}>
                {name}
            </div>
            <div className={classes.buttonContainer}>
                <MinimizeButton height='90%' width={50} color={color} onClick={() => handleClick('minimize')}/>
                {max && <MaximizeButton height='90%' width={50} color={color} onClick={() => handleClick('maximize')}/>}
                <CloseButton height='90%' width={50} color={color} onClick={() => handleClick('close')}/>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateView,
    updateVisibility,
    updateWindow,
    removeTaskbarWindow,
};

export default connect(null, mapDispatchToProps)(WindowTop);