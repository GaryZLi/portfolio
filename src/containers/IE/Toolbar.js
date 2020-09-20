import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import arrow from '../../picSrc/arrow.png';
import Tab from '../../components/Tab';
import {
    tabs
} from '../../data';
import {
    updateTab,
    // updateInput,
} from '../../actions';

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
    urlContainer: {
        position: 'relative',
    },
    url: {
        marginLeft: 10,
        width: 200,
        minWidth: 100,
        fontSize: 20,
        padding: '1px 2px 1px 10px',
    },
    urlList: {
        position: 'absolute',
        maxHeight: 300,
        width: `calc(100% - ${12}px)`,
        minWidth: 100,
        minHeight: 35,
        fontSize: 20,
        backgroundColor: 'white',
        left: 10,
        borderRadius: 5,
        border: '1px solid black',
        overflow: 'auto',
        zIndex: 3,
    },
    urlOption: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        '&:hover': {
            backgroundColor: '#a4d3fc',
            cursor: 'pointer',
        }
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

const Toolbar = ({
    currentTab,
    updateTab,
    // updateInput,
}) => {
    const classes = useStyles();
    const [url, setUrl] = useState(currentTab.name);
    const [listOpened, setListOpened] = useState(false);
    const tabLength = tabs.length;

    useEffect(() => setUrl(currentTab.name), [currentTab]);

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            updateTab({
                name: url,
                index: tabs.findIndex(tab => tab.name.toLowerCase() === url.toLowerCase())
            });
        }
    };

    const handleClick = position => {
        if (position === 'left') {
            if (currentTab.index > 0) {
                updateTab({
                    name: tabs[currentTab.index - 1].name,
                    index: currentTab.index - 1,
                })
            }
        }
        else {
            if (currentTab.index < tabLength - 1) {
                updateTab({
                    name: tabs[currentTab.index + 1].name,
                    index: currentTab.index + 1,
                })
            }
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.urlContainer}>
                <input
                    id='urlInput'
                    autoComplete='off'
                    autoCorrect='off'
                    spellCheck='false'
                    className={classes.url}
                    value={url}
                    onFocus={() => setListOpened(true)}
                    onBlur={() => setListOpened(false)}
                    onChange={e => setUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {listOpened && (
                    <div className={classes.urlList}>
                        {tabs
                            .filter(tab => tab.name.toLowerCase().includes(url.toLowerCase()))
                            .map(tab =>
                                <div
                                    key={tab.name}
                                    className={classes.urlOption}
                                    onMouseDown={() => 
                                        updateTab({
                                            name: tab.name,
                                            index: tabs.findIndex(t => t.name === tab.name)
                                        })
                                    }
                                >
                                    {tab.name}
                                </div>
                            )
                        }
                    </div>
                )}
            </div>
            <div className={classes.arrowContainer}>
                <img className={classes.leftArrow} draggable='false' src={arrow} alt='arrow' onClick={() => handleClick('left')}/>
                <img className={classes.rightArrow} draggable='false' src={arrow} alt='arrow' onClick={() => handleClick('right')}/>
            </div>
            <div className={classes.tabsContainer}>
                {tabs.map((tab, index) => <Tab key={tab.name} name={tab.name} index={index}/>)}
            </div>
        </div>
    )
};

const mapStateToProps = ({currentTab}) => ({currentTab});

const mapDispatchToProps = {
    updateTab,
    // updateInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);