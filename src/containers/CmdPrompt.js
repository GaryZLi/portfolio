import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import WindowTop from '../components/WindowTop';
import {
    updateCommandList,
    updateCmdPrompt,
    updateCmdPromptVisibility
} from '../actions';

const useStyles = makeStyles({
    root: {
        width: '70%',
        minWidth: 330,
        maxWidth: 800,
        backgroundColor: 'white',
        position: 'absolute',
    },
    topContainer: {
        width: '100%',
    },
    content: {
        height: 300,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        overflowY: 'auto',
    },
    blink: {
        visibility: 'visible',
        height: 5,
        width: 20,
        backgroundColor: 'white',
        marginTop: 'auto',
    }
});

const CmdPrompt = ({
    cmdList,
    updateCommandList,
    updateCmdPrompt,
    updateCmdPromptVisibility,
}) => {
    const classes = useStyles();
    const containerRef = useRef();
    const [position, setPosition] = useState([0, 0]);
    const [dragging, setDragging] = useState(false);
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setBlink(prev => !prev), 800);
        const cmdInput = document.getElementById('cmdInput');

        const handleEnter = textInput => {
            // const temp = textInput;

            if (textInput.toLowerCase().substr(0, 4) === 'echo') {
                updateCommandList(`C:\\src>${textInput}`);
                updateCommandList(textInput.substr(4).trim());
            }

            switch(textInput.toLowerCase()) {
                case 'help':
                    updateCommandList('C:\\src>help');
                    updateCommandList("C:\\src> ['LOGOFF', 'SHUTDOWN', 'RESTART', 'resume', 'about me', 'IE', 'main.cpp', 'cls', 'exit', 'minimize this', 'minimize main.cpp', 'minimize internet explorer', 'maximize internet explorer', 'close main.cpp', 'close internet explorer', 'echo', projectName, and more hidden commands :]");
                    break;
                case 'about me':
                    // this.props.switchProject('about me');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'resume':
                                    console.log()

                    // this.props.switchProject('resume');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'ai message':
                                    console.log()

                    // this.props.switchProject('ai message');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'transcend life':
                                    console.log()

                    // this.props.switchProject('transcend life');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'user login database':
                                    console.log()

                    // this.props.switchProject('user login database');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'windows website blocker':
                console.log()

                    // this.props.switchProject('windows website blocker');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'keylogger':
                                    console.log()

                    // this.props.switchProject('keylogger');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'yelp decision generator':
                console.log()

                    // this.props.switchProject('yelp decision generator');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'rob the mafia':
                                    console.log()

                    // this.props.switchProject('rob the mafia');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'quakeup':
                                    console.log()

                    // this.props.switchProject('quakeup');
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;                
                // case 'ie':
                                    console.log()

                case 'internet explorer':
                    // this.props.openWindow('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'main':
                                    console.log()

                case 'main.cpp':
                    // this.props.openWindow('main.cpp');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'cls':
                                    console.log()

                    // this.setState(() => ({commands: []}));
                    break;
                case 'logoff':
                case 'log off':
                    // this.props.changeScreens('LoginScreen');
                    break;
                case 'shutdown':
                case 'shut down':
                    // this.props.changeScreens('BlackScreen');
                    break;
                case 'quit':
                case 'exit':
                    // this.props.close('Command Prompt');
                    break;
                case 'min':
                case 'min this':
                case 'minimize':
                case 'minimize this':
                    // this.props.toggle('Command Prompt');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'min main':
                                    console.log()

                case 'min main.cpp':
                case 'minimize main':
                case 'minimize main.cpp':
                    // this.props.toggle('main.cpp');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'min ie':
                                    console.log()

                case 'min internet explorer':
                case 'minimize ie':
                case 'minimize internet explorer':
                    // this.props.toggle('IE');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'max ie':
                                    console.log()

                case 'max internet explorer':
                case 'maximize ie':
                case 'maximize internet explorer':
                    // this.props.maximize();
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'close main':
                                    console.log()
                                    break;

                case 'close main.cpp':
                    // this.props.close('main.cpp');
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'close ie':
                                    console.log()
                                    break;

                case 'close internet explorer':
                    // this.props.close('IE')
                //     this.setState(prev => {
                //         const cmds = prev.commands;
                //         cmds.push(`C:\\src>${temp}`);
                //     })
                //     break;
                // case 'echo':
                                    console.log()

                    break
                default:
                    // this.setState(prev => {
                    //     const cmds = prev.commands;
    
                    //     cmds.push(`C:\\src>${textInput}`)
                    //     cmds.push(`'${textInput}' is not recognized as an internal or external command, operable program or batch file. Try 'help' for a list of commands.`)},
                    // () => {this.cmdPromptDi
// splay.current.scrollTop = this.cmdPromptDisplay.current.scrollHeight})
console.log()

                    break;
            }
        };

        // only if command prompt is visible
        const handleInput = e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleEnter(cmdInput.innerText);
                cmdInput.innerText = '';
            }
            else if (e.key === 'Backspace') {
                cmdInput.innerText = cmdInput.innerText.substring(0, cmdInput.innerText.length - 1);
            }
            else if (e.keyCode === 32) {
                cmdInput.innerText += '\u00A0';
            }
            else if (e.key.length === 1) {
                cmdInput.innerText += e.key;
            }
        }

        document.addEventListener('keyup', handleInput);
                
        return () => {
            clearInterval(timer);
            document.removeEventListener('keyup', handleInput);
        }
    }, []);

    const handleMove = e => {
        if (dragging) {
            e.persist();
            setPosition([e.clientX - dragging[0], e.clientY - dragging[1]]);
        }
    };

    const handleTouch = e => {
        if (dragging) {
            setPosition([e.touches[0].clientX - dragging[0], e.touches[0].clientY - dragging[1]]);
        }
    };

    return (
        <div className={classes.root}
            ref={containerRef}
            style={{
                left: position[0],
                top: position[1],
            }}
        >
            <div className={classes.topContainer}
                style={{cursor: dragging? 'grabbing' : 'default'}}
                onMouseDown={e => setDragging([e.clientX - containerRef.current.offsetLeft, e.clientY - containerRef.current.offsetTop])}
                onMouseUp={() => setDragging(false)}
                onMouseLeave={() => setDragging(false)}
                onMouseMove={handleMove}
                onTouchStart={e => setDragging([e.touches[0].clientX - containerRef.current.getBoundingClientRect().x, e.touches[0].clientY - containerRef.current.getBoundingClientRect().y])}
                onTouchEnd={() => setDragging(false)}
                onTouchMove={handleTouch}
            >
                <WindowTop text='Command Prompt'
                    color='black'
                    handleMin={() => updateCmdPromptVisibility(false)}
                    handleClose={() => {
                        updateCmdPrompt(false);
                        updateCmdPromptVisibility(false)
                    }}
                />
            </div>
            <div className={classes.content}>
                <div style={{height: '5px'}}/>
                    {'C:\\src>g++ -o main main.cpp'}
                    <div style={{height: '5px'}}/>
                    {'C:\\src>./main'}
                    <div style={{height: '5px'}}/>
                    <span style={{textDecoration: 'underline'}}>Name</span>: Gary Li
                    <div style={{height: '5px'}}/>
                    <span style={{textDecoration: 'underline'}}>Age</span>: 22
                    <div style={{height: '5px'}}/>
                    <span style={{textDecoration: 'underline'}}>Education</span>: University of California, Irvine
                    <div style={{height: '5px'}}/>
                    <span style={{textDecoration: 'underline'}}>Major</span>: Computer Science
                    <div style={{height: '5px'}}/>
                    <span style={{textDecoration: 'underline'}}>Skills</span>: C&ensp;|&ensp;C++&ensp;|&ensp;Python&ensp;|&ensp;Java&ensp;|&ensp;NodeJS&ensp;|&ensp;HTML&ensp;|&ensp;CSS&ensp;|&ensp;JavaScript&ensp;|&ensp;ReactJS&ensp;|&ensp;React Native
                    <div style={{height: '5px'}}/>
                    <span style={{textDecoration: 'underline'}}>Hobbies</span>: Skateboarding&emsp;|&emsp;Breakdancing&emsp;|&emsp;Running&emsp;|&emsp;Swimming&emsp;|&emsp;Eating
                    <div style={{height: '5px'}}/>
                    {/* <span style={{textDecoration: 'underline'}}>Resume</span>: <span className='resume' onClick={() => this.props.switchProject('resume')}>Gary Li's Resume</span> */}
                    <div style={{height: '5px'}}/>
                    {cmdList.map((cmd, id) => (
                        <div key={id}>{cmd}</div>
                    ))}
                    <div style={{ display: 'flex'}}>
                        {'C:\\src>'}
                        <span id='cmdInput'
                            contentEditable
                            spellCheck='false'
                            suppressContentEditableWarning
                            style={{
                                maxWidth: 'calc(100% - 100px)',
                                backgroundColor: 'white',
                                minWidth: 10,
                                minHeight: 10,
                                color: 'black',
                                outline: 'none',
                                paddingRight: 4,
                                caretColor: 'white',
                            }}
                        />
                        <div className={classes.blink} style={{visibility: blink? 'visible' : 'hidden'}}/>
                    </div>
            </div>
        </div>
    );
};

const mapStateToPros = ({cmdList}) => ({cmdList});

const mapDispatchToProps = {
    updateCommandList,
    updateCmdPrompt,
    updateCmdPromptVisibility,
};

export default connect(mapStateToPros, mapDispatchToProps)(CmdPrompt);