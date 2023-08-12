import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  //Did 1.3 on my 1.2 commit
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        key: 'fundReact',
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        key: 'propsData',
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        key:'componentState',
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App