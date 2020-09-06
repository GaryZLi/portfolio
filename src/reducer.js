import * as types from './action-types';

export const initialState = {
    mobile: window.innerWidth < 900,
    screen: 'startupScreen',
    view: 'startupScreen',
    ieView: 0, 
    menu: false,
    projectsList: false,
    input: '',
    visibility: {
        'main.cpp': false,
        'Command Prompt': false,
        'Internet Explorer': false,
    },
    maximized: {
        'Command Prompt': false,
        'main.cpp': false,
    },
    windows: {
        'main.cpp': false,
        'Command Prompt': false,
        'Internet Explorer': false,
    },
    taskbarWindows: [
        // 'Internet Explorer',
    ],
    tabs: [
        'About Me',
        'Resume',
        'ai Message',
        'Transcend Life',
        'User Login Database',
        'Website Blocker',
        'Keylogger',
        'Yelp Decision Maker',
        'Rob the Mafia',
        'QuakeUp',
    ],
    cmdList: [],
};

let temp;

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_MOBILE:
            return {
                ...state,
                mobile: action.mobile,
            };

        case types.UPDATE_SCREEN:
            return {
                ...state,
                screen: action.screen,
            };

        case types.UPDATE_VIEW:
            return {
                ...state,
                view: action.view,
            };

        case types.UPDATE_MENU:
            return {
                ...state,
                menu: !state.menu,
            };

        case types.UPDATE_WINDOW:            
            temp = state.windows;
            temp[action.window] = action.open;
            return {
                ...state,
                windows: {
                    ...temp,
                },
            };

        case types.UPDATE_VISIBILITY:            
            temp = state.visibility;
            temp[action.window] = action.visible;

            return {
                ...state,
                visibility: {
                    ...temp,
                },
            };

        case types.UPDATE_PROJECTS_LIST:
            return {
                ...state,
                projectsList: action.on,
            }

        case types.UPDATE_COMMAND_LIST:
            return {
                ...state,
                cmdList: [
                    ...state.cmdList,
                    action.cmd,
                ]
            };
        
        case types.UPDATE_INPUT:
            return {
                ...state,
                input: action.input,
            };

        case types.ADD_TASKBAR_WINDOW:
            if (!state.taskbarWindows.includes(action.name)) {
                return {
                    ...state,
                    taskbarWindows: [
                        ...state.taskbarWindows,
                        action.name,
                    ],
                };
            }
            
            return state;
        
        case types.REMOVE_TASKBAR_WINDOW:
            temp = state.taskbarWindows.filter(name => name !== action.name);

            return {
                ...state,
                taskbarWindows: [
                    ...temp,
                ]
            };

        default:
            return state;
    }
}

export default mainReducer;