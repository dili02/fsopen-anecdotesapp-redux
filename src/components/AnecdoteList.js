import React from 'react'
import { connect } from 'react-redux'
//import { voteAnecdote } from '../reducers/anecdoteReducer'
//import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

/* const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const vote = votedAnecdote => {
        dispatch(voteAnecdote(votedAnecdote))
        dispatch(setNotification(`You voted ${votedAnecdote.content}`, 5000))
    }

    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
            <button onClick={() =>
                vote(anecdote)}
            >
                vote
            </button>
            </div>
        </div>
    )
} */

const AnecdoteList = ({ anecdotes }) => {
   /*  const anecdotes = useSelector(({ filter, anecdotes }) => {
        console.log(filter)
        console.log(anecdotes)

        if ( filter !== '') {
            return anecdotes
                    .filter(anecdote =>
                        anecdote
                            .content
                            .toLowerCase()
                            .includes(filter.toLowerCase())
                    )
        }

        return anecdotes
      }) */

    return (
        <div>
            {
                anecdotes
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                    />
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    if ( state.filter !== '') {
        return {
            anecdotes: state.anecdotes
            .filter(anecdote =>
                anecdote
                    .content
                    .toLowerCase()
                    .includes(state.filter.toLowerCase())
            )
        }
    }

    return {
        anecdotes: state.anecdotes
    }
}

const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList);
export default ConnectedAnecdoteList;

//export default AnecdoteList
