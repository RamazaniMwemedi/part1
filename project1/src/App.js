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
    <h1>Statics</h1>
    <Contents good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    
    </div>
  )
}

export default App

const Contents=(props)=>{
  if (props.all===0){
    return(
      <>
        <h3>No feedback given</h3>
      </>
    )
  }else{

  return(
    <>
  <Statics name='good' results={props.good}/>
    <Statics name='neutral' results={props.neutral}/>
    <Statics name='bad' results={props.bad}/>
    <Statics name='all' results={props.all}/>
    <Statics name='average' results={props.average}/>
    <Statics name='positive' results={props.positive} />
  </>)
  }
}

const Button =(props)=>{
  return(
    <>
    <button onClick={props.handler}>{props.name} {props.i}</button>
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