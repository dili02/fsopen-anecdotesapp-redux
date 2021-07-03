import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, voteAnecdote, setNotification }) => {
    //const dispatch = useDispatch()

    const vote = votedAnecdote => {
        voteAnecdote(votedAnecdote)
        setNotification(`You voted ${votedAnecdote.content}`, 5000)
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
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification
}

export default connect(
    null,
    mapDispatchToProps
)(Anecdote)