import React from 'react'
import './App.css'
const App = () => {
 
  // Exercice 1.3
  const course = 'Half Stack application development'

  const parts=[
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
   {
      name: 'Using props to pass data',
      exercises: 7
    }
    ,{
        name: 'State of a component',
        exercises: 14
      }
  ]
  console.log(parts[0].name);
  return (
    <div className='app'>
      <Header course={course} />
      <Contents topic={parts[0].name} />
      <Contents topic={parts[1].name} />
      <Contents topic={parts[2].name} />
      <Total total1={parts[0].exercises} total2={parts[1].exercises} total3={parts[2].exercises} />
    </div>
  )
}

const Header =({course})=>{
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}
const Contents =({ topic})=>{
  return(
    <div>
      <p>{topic} </p>
    </div>
  )
}
const Total =({total1, total2, total3})=>{
  return(
    <div>
      <h4>The total exeecises are</h4>
      <p>{total1 + total2 +  total3}</p>
    </div>
  )
}

export default App