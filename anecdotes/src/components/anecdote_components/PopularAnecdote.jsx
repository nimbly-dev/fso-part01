/* eslint-disable react/prop-types */

const PopularAnecdote = ({voteValue, anecdote})=>{
    if(!anecdote || anecdote === 0 || voteValue === 0)
        return(
            <div>
                <p>No Vote Data</p>
            </div>
        )
    else
        return(
            <div>
                <p>{anecdote}</p>
                <p>Has: {voteValue} votes</p>
            </div>
        )
}

export default PopularAnecdote;