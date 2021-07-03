import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterAnecdoteReducer'

const AnecdoteFilter = ({ filterChange }) => {
    const style = {
        marginBottom: 10
    }

    //const dispatch = useDispatch()

    const handleChange = e => {
        const valueToFilter = e.target.value
        filterChange(valueToFilter)
    }

    return (
        <div style={style}>
            Filter: <input type="text" name="filter" onChange={handleChange}/>
        </div>
    )
}

export default connect(
    null,
    { filterChange }
)(AnecdoteFilter)

//export default AnecdoteFilter
