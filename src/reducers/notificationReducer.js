const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case '@notification/set':
            clearTimeout(state.delay);
            return action.message

        case '@notification/clear':
            return null

        default:
            return state
    }
}

/*
    ACTIONS CREATORS
*/
export const setNotification = (message, delay) => {
    return async (dispatch) => {
        dispatch({
            type: '@notification/set',
            message,
            delay: setTimeout(() => {
                dispatch(clearNotification(null))
            }, delay)
        })
    }
}

export const clearNotification = () => {
    return {
        type: '@notification/clear',
        message: null
    }
}

export default notificationReducer