import React, { useState, useRef, useEffect } from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';
import {
    updateView,
} from '../../actions';

const useStyles = makeStyles({
    root: {
        width: 300,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    topContainer: {
        width: '100%',
    },
    contentContainer: {
        height: 360,
        width: '100%',
        display: 'flex',
    },
    content: {
        width: '100%',
        backgroundColor: '#ffffb3',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        overflow: 'auto',
    },
    heading: {
        fontWeight: 600,
        marginTop: 20,
    },
    list: {
        marginTop: 5,
    }
});

const Help = ({
    view,
    visible,
    updateView,
}) => {
    const classes = useStyles();
    const containerRef = useRef();
    const [position, setPosition] = useState([window.innerWidth / 2 - 150, window.innerHeight / 2 - 200]);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        const handleMove = e => {
            if (dragging) {
                setPosition([e.clientX - dragging[0], e.clientY - dragging[1]]);
            }
        };

        document.addEventListener('mousemove', handleMove);

        return () => document.removeEventListener('mousemove', handleMove);
    }, [dragging]);
    
    const handleTouch = e => {
        if (dragging) {
            setPosition([e.touches[0].clientX - dragging[0], e.touches[0].clientY - dragging[1]]);
        }
    };

    return (
        <div
            className={classes.root}
            ref={containerRef}
            onMouseDown={() => view === 'Help' || updateView('Help')}
            onTouchStart={() => view === 'Help' || updateView('Help')}
            style={{
                left: position[0],
                top: position[1],
                zIndex: view === 'Help'? 10 : 5,
                visibility: visible? 'visible' : 'hidden',
            }}
        >
            <div
                className={classes.topContainer}
                onMouseDown={e => setDragging([e.clientX - containerRef.current.offsetLeft, e.clientY - containerRef.current.offsetTop])}
                onMouseUp={() => setDragging(false)}
                onTouchStart={e => setDragging([e.touches[0].clientX - containerRef.current.getBoundingClientRect().x, e.touches[0].clientY - containerRef.current.getBoundingClientRect().y])}
                onTouchEnd={() => setDragging(false)}
                onTouchMove={handleTouch}
            >
                <WindowTop
                    name='Help'
                    color='black'
                    draggable
                />
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <div className={classes.heading}>
                        Start Menu
                    </div>
                    <ul className={classes.list}>
                        <li>
                            contains different contents and windows of the website.
                        </li>
                        <li>
                            can be opened and closed by clicking.
                        </li>
                    </ul>
                    <div className={classes.heading}>
                        Internet Explorer
                    </div>
                    <ul className={classes.list}>
                        <li>
                            typing into the input field can change the tab.
                        </li>
                        <li>
                            clicking the arrow buttons help navigate through the tabs.
                        </li>
                        <li>
                            clicking the tabs will display certain contents.
                        </li>
                    </ul>
                    <div className={classes.heading}>
                        Windows
                    </div>
                    <ul className={classes.list}>
                        <li>
                            can be repositioned by dragging the top.
                        </li>
                        <li>
                            minimize button will minimize the window.
                        </li>
                        <li>
                            exit button will close the window.
                        </li>
                        <li>
                            taskbar window at the bottom to the right of the start menu can be used to minimize the window.
                        </li>
                    </ul>
                    <div className={classes.heading}>
                        Command Prompt
                    </div>
                    <ul className={classes.list}>
                        <li>
                            typing into the white square can execute certain commands on this website.
                        </li>
                        <li>
                            type 'help' to see a list of commands.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({
    view,
    visibility,
}) => {
    const visible = visibility['Help'];
    
    return {
        view,
        visible,
    };
};

const mapDisptachToProps = {
    updateView,
};

export default connect(mapStateToProps, mapDisptachToProps)(Help);