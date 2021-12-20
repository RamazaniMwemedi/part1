import React from 'react'
import './App.css'
const App = () => {
 
  // Exercice 1.5
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  console.log(course.parts[0].name);

  return (
    <div className='app'>
      <Header course={course.name} />
      <Contents topic={course.parts[0].name} />
      <Contents topic={course.parts[1].name} />
      <Contents topic={course.parts[2].name} />
      <Total total1={course.parts[0].exercises} total2={course.parts[1].exercises} total3={course.parts[2].exercises}/>
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
      <p>{total1+ total2+ total3} </p>
    </div>
  )
}

export default App