import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterAnecdoteReducer from './reducers/filterAnecdoteReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterAnecdoteReducer
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)