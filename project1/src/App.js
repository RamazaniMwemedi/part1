import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const goodClickHandler=()=>{
  setGood(good+1)
}
const neutralClickHandler=()=>{
  setNeutral(neutral+1)
}
const badClickHandler=()=>{
  setBad(bad+1)
}

let all = good+ bad + neutral;
let average= all/3;
let positive= (good / neutral)*100

  return (
    <div>
      <h1>Give feedback</h1>
    <Button  name='good' handler={goodClickHandler}/> 
    <Button  name='neutral' handler={neutralClickHandler}/> 
    <Button  name='bad' handler={badClickHandler}/> 
    <br/>
    <Statics name='good' results={good}/>
    <Statics name='neutral' results={neutral}/>
    <Statics name='bad' results={bad}/>
    <Statics name='all' results={all}/>
    <Statics name='average' results={average}/>
    <Statics name='positive' results={positive}/>
    </div>
  )
}

export default App

const Button =(props)=>{
  return(
    <>
    <button onClick={props.handler}>{props.name}</button>
    </>
  )
}

const Statics =(props)=>{
  return(
    <>
      <p>{props.name} {props.results}</p>
    </>
  )
}