import * as types from './action-types';

export const initialState = {
    mobile: window.innerWidth < 900,
    screen: 'desktopScreen',
    view: 'startupScreen',
    menu: false,
    projectsList: false,
    input: '',
    scrollTop: 0,
    taskbarWindows: [],
    cmdList: [],
    visibility: {
        'main.cpp': false,
        'Command Prompt': false,
        'Internet Explorer': false,
    },
    windows: {
        'main.cpp': false,
        'Command Prompt': false,
        'Internet Explorer': false,
    },
    currentTab: {
        name: 'About Me',
        index: 0,
    },
};

let temp;

const mainReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case types.CLEAR_STATE:
            return initialState;

        case types.UPDATE_MOBILE:
            return {
                ...state,
                mobile: action.mobile,
            };

        case types.UPDATE_SCREEN:
            temp = JSON.parse(JSON.stringify(initialState));
            temp.screen = action.screen;

            return {
                ...temp,
            };

        case types.UPDATE_VIEW:
            return {
                ...state,
                view: action.view,
            };

        case types.UPDATE_MENU:
            return {
                ...state,
                menu: action.active === undefined? !state.menu : action.active,
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
                cmdList: action.cmd
                    ? [
                        ...state.cmdList,
                        action.cmd,
                    ]
                    : [],
            };
        
        case types.UPDATE_INPUT:
            return {
                ...state,
                input: action.input,
            };

        case types.UPDATE_TAB:
            temp = state;

            return {
                ...state,
                currentTab: action.tab,
                view: 'Internet Explorer',
                visibility: {
                    ...state.visibility,
                    'Internet Explorer': true,
                },
                windows: {
                    ...state.windows,
                    'Internet Explorer': true,
                },
            };

        case types.UPDATE_SCROLLTOP:
            return {
                ...state,
                scrollTop: action.scrollTop,
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