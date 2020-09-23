import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../../components/WindowTop';
import DefaultContent from './DefaultContent';
import Cursor from './Cursor';
import { tabs } from '../../data';
import {
    updateCommandList,
    updateScreen,
    updateTab,
    updateView,
    updateWindow,
} from '../../actions';

const commands = [
    'logoff',
    'shutdown',
    'restart',
    'main.cpp',
    'internet explorer',
    'command prompt',
    'clear',
    'echo',
    ...tabs.map(tab => tab.name),
];

const useStyles = makeStyles({
    root: {
        width: '70%',
        minWidth: 330,
        maxWidth: 800,
        backgroundColor: 'white',
        position: 'absolute',
        border: '1px solid #e3e3e3',
    },
    topContainer: {
        width: '100%',
    },
    content: {
        height: 300,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        overflowWrap: 'break-word',
        overflowY: 'auto',
    },
    input: {
        maxWidth: '90%',
        backgroundColor: 'white',
        minWidth: 10,
        minHeight: 10,
        color: 'black',
        outline: 'none',
        paddingRight: 4,
        caretColor: 'transparent',
        overflow: 'hidden',
        userSelect: 'text',
    },
});

const CmdPrompt = ({
    cmdList,
    view,
    visible,
    updateCommandList,
    updateView,
    updateScreen,
    updateWindow,
    updateTab,
}) => {
    const classes = useStyles();
    const containerRef = useRef();
    const contentRef = useRef();
    const inputRef = useRef();
    const [position, setPosition] = useState([0, 0]);
    const [dragging, setDragging] = useState(false);

    // handle mouse dragging
    useEffect(() => {
        const handleMove = e => {
            if (dragging) {
                setPosition([e.clientX - dragging[0], e.clientY - dragging[1]]);
            }
        };

        document.addEventListener('mousemove', handleMove);

        return () => document.removeEventListener('mousemove', handleMove);
    }, [dragging]);

    const handleEnter = () => {
        let textInput = inputRef.current.innerText;
        inputRef.current.innerText = '';

        updateCommandList(`C:\\src>${textInput}`);

        if (textInput.substr(0, 4) === 'echo') {
            return updateCommandList(textInput.substr(4).trim());
        }

        textInput = textInput.toLowerCase();

        if (textInput === 'help') {
            return commands.forEach((command, i) => updateCommandList(`${i + 1}) ${command}`));
        }
    
        let index = commands.findIndex(command => command.toLowerCase() === textInput);

        if (index >= 0) {
            if (commands[index] === 'logoff') {
                updateScreen('loginScreen');
            }
            else if (commands[index] === 'restart') {
                updateScreen('startupScreen');
            }
            else if (commands[index] === 'shutdown') {
                updateScreen('blackScreen');
            }
            else if (commands[index] === 'main.cpp') {
                updateWindow('main.cpp', true);
            }
            else if (commands[index] === 'internet explorer') {
                updateWindow('Internet Explorer', true);
            }
            else if (commands[index] === 'command prompt') {
                updateWindow('Command Prompt', true);
            }
            else if (commands[index] === 'clear') {
                updateCommandList();
            }
            else {
                updateTab({
                    name: commands[index],
                    index: tabs.findIndex(tab => commands[index] === tab.name),
                })
            }
        }
        else {
            updateCommandList(`'${textInput}' is not recognized as an internal or external command, operable program or batch file. Try 'help' for a list of commands.`);
        }

    };

    const handleTouchMove = e => {
        if (dragging) {
            setPosition([e.touches[0].clientX - dragging[0], e.touches[0].clientY - dragging[1]]);
        }
    };

    return (
        <div
            className={classes.root}
            ref={containerRef}
            onMouseDown={() => view === 'Command Prompt' || updateView('Command Prompt')}
            onTouchStart={() => view === 'Command Prompt' || updateView('Command Prompt')}
            style={{
                left: position[0],
                top: position[1],
                zIndex: view === 'Command Prompt'? 10 : 5,
                visibility: visible? 'visible' : 'hidden',
            }}
        >
            <div
                className={classes.topContainer}
                onMouseDown={e => setDragging([e.clientX - containerRef.current.offsetLeft, e.clientY - containerRef.current.offsetTop])}
                onMouseUp={() => setDragging(false)}
                onTouchStart={e => setDragging([e.touches[0].clientX - containerRef.current.getBoundingClientRect().x, e.touches[0].clientY - containerRef.current.getBoundingClientRect().y])}
                onTouchEnd={() => setDragging(false)}
                onTouchMove={handleTouchMove}
            >
                <WindowTop
                    name='Command Prompt'
                    color='black'
                    draggable
                />
            </div>
            <div
                className={classes.content}
                ref={contentRef}
            >
                <DefaultContent/>
                {cmdList.map((cmd, id) => (
                    <div key={id}>{cmd}</div>
                ))}
                <div style={{ display: 'flex' }}>
                    {'C:\\src>'}
                    <span
                        id='cmdInput'
                        className={classes.input}
                        contentEditable
                        spellCheck='false'
                        suppressContentEditableWarning
                        ref={inputRef}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleEnter();
                            }
                        }}
                    />
                    <Cursor/>
                </div>
            </div>
        </div>
    );
};

const mapStateToPros = ({
    cmdList,
    view,
    visibility,
}) => {
    const visible = visibility['Command Prompt'];
    
    return {
        cmdList,
        view,
        visible,
    }
};

const mapDispatchToProps = {
    updateCommandList,
    updateView,
    updateScreen,
    updateWindow,
    updateTab,
};

export default connect(mapStateToPros, mapDispatchToProps)(CmdPrompt);