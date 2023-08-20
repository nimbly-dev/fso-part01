/* eslint-disable react/prop-types */

const SelectedAnecdote = ({selected, anecdotes})=>{
    return(
        <div>
            <p>{anecdotes[selected]}</p>
        </div>
    )
}

export default SelectedAnecdote;