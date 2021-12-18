import React from 'react'

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
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}  />
      <br/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header =({course})=>{
  return(
    <>
      <div>
        <h1>{course}</h1>
      </div>
    </>
  )
}

const Content =({part1, part2, part3, exercises1, exercises2, exercises3})=>{
  return(
    <>
      <div>
        <p>{part1} exercises1 are {exercises1}</p>
        <p>{part2}exercises2 are {exercises2}</p>
        <p>{part3}exercises3 are {exercises3}</p>
      </div>
    </>
  )
}

const Total=({exercises1, exercises2, exercises3})=>{
  return(
    <>
     <div>
        <p>Total exercises are {exercises1+ exercises2 + exercises3}</p>
     </div>
    </>
  )
}

export default App