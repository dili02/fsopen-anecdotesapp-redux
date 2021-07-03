import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllAnecdotes } from './reducers/anecdoteReducer'

import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import AnecdoteFilter from './components/AnecdoteFilter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAnecdotes())
  }, [dispatch])

  return (
    <div>
      <NewAnecdote />
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteFilter />
      <AnecdoteList />
    </div>
  )
}

export default App