import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import TabIcon from '../../picSrc/tabIcon.png';
import {
    updateTab,
} from '../../actions';

const useStyles = makeStyles({
    root: {
        height: '90%',
        width: 200,
        minWidth: 100,
        marginLeft: 2,
        backgroundColor: '#6DC2D17D',
        border: '1px solid #68acfa',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        fontSize: 10,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#b8f3ff',
        }
    },
    icon: {
        maxHeight: '90%',
        marginLeft: 5,
        marginRight: 5,
    }
});

const Tab = ({
    name,
    index,
    updateTab,
}) => {
    const classes = useStyles();

    const handleClick = () => {
        updateTab({
            name,
            index,
        });
    };

    return (
        <div className={classes.root} onClick={handleClick}>
            <img className={classes.icon} src={TabIcon} alt='tab icon'/>
            {name}
        </div>
    );
};

const mapDispatchToProps = {
    updateTab,
};

export default connect(null, mapDispatchToProps)(Tab);