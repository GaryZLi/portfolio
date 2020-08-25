import * as types from './action-types';

export const updateScreen = screen => ({
    type: types.UPDATE_SCREEN,
    screen
});

export const updateMenu = () => ({
    type: types.UPDATE_MENU,
});

export const updateProjectsList = on => ({
    type: types.UPDATE_PROJECTS_LIST,
    on,
});

export const updateCommandList = cmd => ({
    type: types.UPDATE_COMMAND_LIST,
    cmd,
});

export const updateMainCpp = on => ({
    type: types.UPDATE_MAIN_CPP,
    on,
});

export const updateMainCppVisibility = visible => ({
    type: types.UPDATE_MAIN_CPP_VISIBILITY,
    visible,
});

export const updateCmdPrompt = on => ({
    type: types.UPDATE_CMD_PROMPT,
    on,
});

export const updateCmdPromptVisibility = visible => ({
    type: types.UPDATE_CMD_PROMPT_VISIBILITY,
    visible,
});