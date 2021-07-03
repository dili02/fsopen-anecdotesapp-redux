import { getAll, createNew, update } from '../services/anecdote'

const initialState = []

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case '@anecdotes/new':
      return [...state, action.data]

    case '@anecdotes/get_all':
      return action.data

    case '@anecdotes/vote_add':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )

    default:
      return state
  }
}

/*
   ACTIONS CREATORS
*/

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const anecdoteToChange = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const updatedAnecdote = await update(anecdoteToChange)
    const { id } = updatedAnecdote
    dispatch({
      type: '@anecdotes/vote_add',
      data: { id }
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await createNew(content)
    dispatch({
      type: '@anecdotes/new',
      data: newAnecdote
    })
  }
}

export const getAllAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch({
      type: '@anecdotes/get_all',
      data: anecdotes
    })
  }
}

export default reducer