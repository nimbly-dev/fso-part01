/* eslint-disable react/prop-types */
const Hello = (props) =>{
  return(
    <>
      <p>Hello {props.name}, you are {props.age}</p>
    </>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const ObjectMapper = ({dataArray}) =>{

  console.log('Object mapper: {}' ,dataArray)
  const mappedObjInHtmlForm = dataArray.map(element => {
    <li key={element.id}>
      <p>Obj Name: {element.objName}</p>
      <p>Obj Value: {element.objValue}</p>
    </li>
  });

  console.log(mappedObjInHtmlForm)

  return(
      <ul>
        {mappedObjInHtmlForm}
      </ul>
  )
}

const App = () => {
  const age = 23;
  const dataArray = [
    {id:'1',objName: 'obj1', objValue: 'nice'},
    {id:'2',objName: 'obj2', objValue: 'one'}
  ]

  const stringList = ['Test1','Test2'];

  return (
    <div>
      <p>Hello world</p>
      <Hello name='Theo' age='23'/>
      <Hello name='Test1' age={age}/>
      <Hello name='Test2' age={23+12}/>
      {stringList}
      <>
        <p>Printing obj here: </p>
        <ObjectMapper dataArray={dataArray}/>
      </>
      <Footer/>
    </div>
  )
}

export default App