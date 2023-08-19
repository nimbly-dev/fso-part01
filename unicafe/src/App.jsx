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
    setNeutral(neutral + 1)
  }

  const handleBadClick = ()=>{
    setBad(bad + 1)
  }

  const getTotal = ()=>{
    return good + neutral + bad
  }
  
  const getAverage = ()=>{
    return (good - bad)/(good + neutral +bad)
  }

  const getPositiveFeedback = ()=>{
    return (good / (good + neutral + bad)) * 100
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
      <Stat count={getTotal()} label={('All')}/> 
      <Stat count={getAverage()} label={'Average'}/>
      <Stat count={getPositiveFeedback()} label={'Positive'} appendToEndOfLine={'%'}/>
    </>
  )
}

export default App
