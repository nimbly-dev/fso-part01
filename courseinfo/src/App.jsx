import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course}/>
      <Content contentName={part1} contentExercise={exercises1}/>
      <Content contentName={part2} contentExercise={exercises2}/>
      <Content contentName={part3} contentExercise={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App