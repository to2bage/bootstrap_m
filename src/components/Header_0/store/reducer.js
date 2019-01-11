const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "":
            return newState;
        default:
            return newState;
    }
}