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


  return (
    <>
      <p><b>Give Feedback</b></p>
      <br/>
      <Button label={'Good'} handleClick={handleGoodClick}/>
      <Button label={'Neutral'} handleClick={handleNeutralClick}/>
      <Button label={'Bad'} handleClick={handleBadClick}/>
      <br/>
      <p><b>Statistics</b></p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
