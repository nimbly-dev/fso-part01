 /* eslint-disable no-unused-vars */
import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

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
    if(!good || !neutral || !bad)
      return 0
    else
      return (good - bad)/(good + neutral +bad)
  }

  const getPositiveFeedback = ()=>{
    if(!good || !neutral || !bad)
      return 0
    else
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
      <Statistics count={good} label={'Good'}/>
      <Statistics count={neutral} label={'Neutral'}/>
      <Statistics count={bad} label={'Bad'}/>
      <Statistics count={getTotal()} label={('All')}/> 
      <Statistics count={getAverage()} label={'Average'}/>
      <Statistics count={getPositiveFeedback()} label={'Positive'} appendToEndOfLine={'%'}/>
    </>
  )
}

export default App
