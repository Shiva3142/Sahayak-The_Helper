let userInitialState = {
    user: false,
    username: null,
}
function updateUser(state, action) {
    if (action.type === "LOGIN") {
        return ({
            user: action.user,
            username: action.username,
        })
    }
    else if (action.type === "LOGOUT") {
        return ({
            user: action.user,
            username: action.username,
        })
    }
    return state;
}

export {userInitialState,updateUser}