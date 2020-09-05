import * as types from './action-types';

export const initialState = {
    screen: 'desktopScreen',
    view: 'startupScreen',
    menu: false,
    projectsList: false,
    mainCpp: false,
    mainCppVisible: false,
    mainCppMaximized: false,
    cmdPrompt: true,
    cmdPromptVisible: true,
    cmdPromptMaximized: false,
    ie: false,
    ieVisible: false,
    taskbarWindows: [
        {
            icon: 'ie',
            name: 'Internet Explorer',
        },
    ],
    cmdList: [],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case types.UPDATE_IE:
            return {
                ...state,
                ie: action.on,
            }

        case types.UPDATE_IE_VISIBILITY:
            return {
                ...state,
                ieVisible: action.visible,
            }

        case types.UPDATE_MAIN_CPP:
            return {
                ...state,
                mainCpp: action.on,
            };

        case types.UPDATE_MAIN_CPP_VISIBILITY:
            return {
                ...state,
                mainCppVisible: action.visible,
            };

        case types.UPDATE_CMD_PROMPT:
            return {
                ...state,
                cmdPrompt: action.on,
            };

        case types.UPDATE_CMD_PROMPT_VISIBILITY:
            return {
                ...state,
                cmdPromptVisible: action.visible,
            };

        case types.ADD_TASKBAR_WINDOW:
            return {
                ...state,
                taskbarWindows: [
                    ...state.taskbarWindows,
                    {
                        icon: action.icon,
                        name: action.name,
                    },
                ],
            }

        default:
            return state;
    }
}

export default mainReducer;