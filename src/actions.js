import * as types from './action-types';

export const updateScreen = screen => ({
    type: types.UPDATE_SCREEN,
    screen
});

export const updateView = view => ({
    type: types.UPDATE_VIEW,
    view,
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

export const updateIE = on => ({
    type: types.UPDATE_IE,
    on,
});

export const updateIEVisibility = visible => ({
    type: types.UPDATE_IE_VISIBILITY,
    visible,
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

export const addTaskbarWindow = (icon, name) => ({
    type: types.ADD_TASKBAR_WINDOW,
    icon,
    name,
});