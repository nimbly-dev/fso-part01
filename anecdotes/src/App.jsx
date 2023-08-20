/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Anecdote from './components/anecdote_components/Anecdote';
import Button from './components/Button';
import PopularAnecdote from './components/anecdote_components/PopularAnecdote';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const zeroFilledArray = new Array(anecdotes.length).fill(0);
   
  const [selected, setSelected] = useState(0)
  const [popularAnecdoteIndex, setPopularAnecdoteIndex] = useState(0)
  const [voteValue, setVoteValue] = useState(zeroFilledArray)

  const handleRandomAnecdoteClick = ()=>{
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const handleVoteClick = ()=>{
    const newVoteValue = {...voteValue}
    newVoteValue[selected]++;
    if(newVoteValue[popularAnecdoteIndex] < newVoteValue[selected]){
      setPopularAnecdoteIndex(selected)
    }

    setVoteValue(newVoteValue)
  }

  return (
    <div>
      <p><b>Anecdote of the day</b></p>
      <Anecdote anecdotes={anecdotes} selected={selected}/>
      <Button handleClick={()=>handleRandomAnecdoteClick()} label={'Next Anecdote'}/>
      <Button handleClick={()=>handleVoteClick()} label={'Vote Anecdote'}/>
      <p><b>Anecdotes with most votes</b></p>
      <PopularAnecdote anecdote={anecdotes[popularAnecdoteIndex]} voteValue={voteValue[popularAnecdoteIndex]}/>
    </div>
  )
}

export default App