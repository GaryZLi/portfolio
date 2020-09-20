import React, { useState, useRef, useEffect } from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';
import {
    updateView,
} from '../../actions';

const useStyles = makeStyles({
    root: {
        width: '70%',
        minWidth: 330,
        maxWidth: 800,
        position: 'absolute',
        backgroundColor: 'blue',
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
        height: 355,
        width: '100%',
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'white',
        paddingLeft: 10,
    }
});

const MainCpp = ({
    view,
    visible,
    updateView,
}) => {
    const classes = useStyles();
    const containerRef = useRef();
    const [position, setPosition] = useState([0, 0]);
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
            onMouseDown={() => view === 'main.cpp' || updateView('main.cpp')}
            style={{
                left: position[0],
                top: position[1],
                zIndex: view === 'main.cpp'? 10 : 5,
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
                    name='main.cpp'
                    color='white'
                    draggable
                />
            </div>
            <div className={classes.contentContainer}>
                <div
                    className={classes.content}
                    style={{
                        fontSize: window.innerWidth <= 520
                            ? window.innerWidth / 50 + 5
                            : 16
                    }}
                >
                    <div style={{ height: '5px'}}/>
                    <span style={{color: 'grey'}}>#include&ensp;</span> <span style={{color: 'brown'}}>{"<iostream>"}</span> 
                    <div/>
                    <span style={{color: 'grey'}}>#include&ensp;</span> <span style={{color: 'brown'}}>"GaryLi.h"</span>
                    <div style={{ height: '5px'}}/>
                    <span style={{color: 'blue'}}>int</span> main ()&nbsp;
                    <div style={{ height: '5px'}}/>
                    {'{'}
                    <div style={{ height: '5px'}}/>
                    &emsp; <span style={{color: 'rgb(29, 216, 200)'}}>GaryLi</span>&ensp;Info;
                    <div style={{ height: '5px'}}/>
                    &emsp; {'std::cout'}&ensp;{'<<'}&ensp;Info.Name&ensp;{'<<'}&ensp;std::endl;
                    <div style={{ height: '5px'}}/>
                    &emsp; {'std::cout'}&ensp;{'<<'}&ensp;Info.Age&ensp;{'<<'}&ensp;std::endl;
                    <div style={{ height: '5px'}}/>
                    &emsp; {'std::cout'}&ensp;{'<<'}&ensp;Info.Education&ensp;{'<<'}&ensp;std::endl;
                    <div style={{ height: '5px'}}/>
                    &emsp; {'std::cout'}&ensp;{'<<'}&ensp;Info.Skills&ensp;{'<<'}&ensp;std::endl;
                    <div style={{ height: '5px'}}/>
                    &emsp; {'std::cout'}&ensp;{'<<'}&ensp;Info.Hobbies&ensp;{'<<'}&ensp;std::endl;
                    <div style={{ height: '5px'}}/>
                    &emsp; {'std::cout'}&ensp;{'<<'}&ensp;Info.Resume&ensp;{'<<'}&ensp;std::endl;
                    <div style={{ height: '5px'}}/>
                    &emsp; <span style={{color: 'blue'}}>return</span> 0;
                    <div style={{ height: '5px'}}/>
                    {'}'}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({
    view,
    visibility,
}) => {
    const visible = visibility['main.cpp'];
    
    return {
        view,
        visible,
    };
};

const mapDisptachToProps = {
    updateView,
};

export default connect(mapStateToProps, mapDisptachToProps)(MainCpp);