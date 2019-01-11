import {
    INIT_LIST,
    INPUT_FOCUS,
    INPUT_BLUR
} from "./actionTypes";

const defaultState = {
    focused: false,
    list: []
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INIT_LIST:
            newState.list = action.data;
            return newState;
        case INPUT_FOCUS:
            newState.focused = true;
            return newState;
        case INPUT_BLUR:
            newState.focused = false;
            return newState;
        default:
            return newState;
    }
}