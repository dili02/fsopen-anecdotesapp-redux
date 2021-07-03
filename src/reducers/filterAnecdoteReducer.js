const filterAnecdoteReducer = (state = "", action) => {
    switch (action.type) {
        case '@filter/anecdotes':
            return action.filter

        default:
            return state
    }
}

export const filterChange = filter => {
    return {
        type: '@filter/anecdotes',
        filter
    }
}

export default filterAnecdoteReducer