import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = ({ createAnecdote, setNotification }) => {
    //const dispatch = useDispatch()

    const addAnecdote = async (e) => {
        e.preventDefault()

        const content = e.target.content.value

        e.target.content.value = ''

        createAnecdote(content)
        setNotification(`New Anecdote ${content}`, 5000)
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="content" /></div>
                <button>create</button>
            </form>
        </>
    )
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

export default connect(
    null,
    mapDispatchToProps
)(NewAnecdote)

//export default NewAnecdote
