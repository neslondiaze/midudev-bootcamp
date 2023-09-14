import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';

const Button = (props) => {
  return(
    <button onClick={props.handleClick(props.value)}>
    {props.text}
  </button>
    )
}


const App = () => {
  // save clicks of each button to its own state
  //const [good, setGood] = useState(0)
  //const [neutral, setNeutral] = useState(0)
  //const [bad, setBad] = useState(0)

  const [counters, setCounters] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const [clicks, setClicks] = useState(0)


  const setToGood = () =>{
    setCounters({
      ...counters,
      good: counters.good + 1
    })
    setClicks((prevClicks) => prevClicks + 1)
  }

  const setToNeutral = () =>{
    setCounters({
      ...counters,
      neutral: counters.neutral + 1
    })
    setClicks((prevClicks) => prevClicks + 1)
  }

  const setToBad = () =>{
    setCounters({
      ...counters,
      bad: counters.bad + 1
    })
    setClicks((prevClicks) => prevClicks + 1)
  }

  const positive = () => counters.good / clicks
  


  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={()=> setToGood} text="good" />
      <Button handleClick={()=> setToNeutral} text="neutral" />
      <Button handleClick={()=> setToBad} text="bad" />

      <h2>Statistics</h2>
        <p>good: <strong>{counters.good}</strong></p>
        <p>neutral: <strong>{counters.neutral}</strong></p>
        <p>bad: <strong>{counters.bad}</strong></p>

        <p>total: <strong>{clicks}</strong></p>

        <p>average: <strong>{clicks}</strong></p>
        <p>positive: <strong>{positive}</strong></p>



    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)