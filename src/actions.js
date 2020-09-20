import * as types from './action-types';

export const clearState = () => ({
    type: types.CLEAR_STATE,
});

export const updateMobile = mobile => ({
    type: types.UPDATE_MOBILE,
    mobile,
});

export const updateScreen = screen => ({
    type: types.UPDATE_SCREEN,
    screen
});

export const updateView = view => ({
    type: types.UPDATE_VIEW,
    view,
});

export const updateMenu = active => ({
    type: types.UPDATE_MENU,
    active,
});

export const updateProjectsList = on => ({
    type: types.UPDATE_PROJECTS_LIST,
    on,
});

export const updateCommandList = cmd => ({
    type: types.UPDATE_COMMAND_LIST,
    cmd,
});

export const updateWindow = (window, open) => ({
    type: types.UPDATE_WINDOW,
    window,
    open,
});

export const updateVisibility = (window, visible) => ({
    type: types.UPDATE_VISIBILITY,
    window,
    visible,
});

export const updateInput = input => ({
    type: types.UPDATE_INPUT,
    input,
});

export const updateTab = tab => ({
    type: types.UPDATE_TAB,
    tab,
});

export const updateScrollTop = scrollTop => ({
    type: types.UPDATE_SCROLLTOP,
    scrollTop,
});

export const addTaskbarWindow = name => ({
    type: types.ADD_TASKBAR_WINDOW,
    name,
});

export const removeTaskbarWindow = name => ({
    type: types.REMOVE_TASKBAR_WINDOW,
    name,
});