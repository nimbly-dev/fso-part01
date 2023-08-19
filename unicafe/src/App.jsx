/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Button from './components/Button'
import Stat from './components/Stat'

function App() {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = ()=>{
    setGood(good + 1)
  }

  const handleNeutralClick = ()=>{
    setGood(neutral + 1)
  }

  const handleBadClick = ()=>{
    setGood(bad + 1)
  }

  return (
    <>
      <p><b>Give Feedback</b></p>
      <br/>
      <Button label={'Good'} handleClick={handleGoodClick}/>
      <Button label={'Neutral'} handleClick={handleNeutralClick}/>
      <Button label={'Bad'} handleClick={handleBadClick}/>
      <br/>
      <p><b>Statistics</b></p>
      <Stat count={good} label={'Good'}/>
      <Stat count={neutral} label={'Neutral'}/>
      <Stat count={bad} label={'Bad'}/>
    </>
  )
}

export default App
