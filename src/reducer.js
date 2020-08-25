import * as types from './action-types';
import ie from './picSrc/IE.png';

export const initialState = {
    screen: 'desktopScreen',
    view: 'startupScreen',
    menu: false,
    projectsList: false,
    mainCppVisible: false,
    mainCpp: false,
    cmdPromptVisible: false,
    cmdPrompt: false,
    taskbarWindows: [
        {
            icon: ie,
            text: 'Internet Explorer',
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
            console.log(action.visible)
            return {
                ...state,
                cmdPromptVisible: action.visible,
            };

        default:
            return state;
    }
}

export default mainReducer;