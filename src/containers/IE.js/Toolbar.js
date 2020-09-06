import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import arrow from '../../picSrc/arrow.png';
import Tab from '../../components/Tab';

const useStyles = makeStyles({
    root: {
        height: 40,
        width: '100%',
        paddingTop: 1,
        paddingBottom: 1,
        borderBottom: '1px solid gray',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
    },
    arrowContainer: {
        height: '100%',
        width: 100,
        minWidth: 60,
        display: 'flex',
        justifyContent: 'space-around',
    },
    leftArrow: {
        maxHeight: '90%',
        maxWidth: '40%',
        transform: 'rotate(180deg)',
        '&:hover': {
            cursor: 'pointer',
        },
        '&:active': {
            boxShadow: 'inset 0px 0px 5px rgb(220,220,220)',
        }
    },
    rightArrow: {
        maxHeight: '90%',
        maxWidth: '40%', 
        '&:hover': {
            cursor: 'pointer',
        },
        '&:active': {
            boxShadow: 'inset 0px 0px 5px rgb(220,220,220)',
        }
    },
    url: {
        height: '80%',
        width: 250,
        marginLeft: 10,
        minWidth: 100,
        fontSize: 20,
        padding: '1px 2px 1px 10px',
        border: '1px solid black',
    },
    tabsContainer: {
        borderLeft: '1px solid gray',
        height: '100%',
        overflowX: 'auto',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 10,
        scrollbarWidth: 0,
        '&::-webkit-scrollbar': {
            width: 0,
            height: 0,
            background: 'transparent',
        },
    }
});

const Toolbar = ({tabs}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input id='urlInput' className={classes.url} onChange={e => console.log(e)}/>
            <div className={classes.arrowContainer}>
                <img className={classes.leftArrow} draggable='false' src={arrow} alt='arrow'/>
                <img className={classes.rightArrow} draggable='false' src={arrow} alt='arrow'/>
            </div>
            <div className={classes.tabsContainer}>
                {tabs.map(name => <Tab key={name} name={name}/>)}
            </div>
        </div>
    )
};

const mapStateToProps = ({tabs}) => ({tabs});

export default connect(mapStateToProps)(Toolbar);