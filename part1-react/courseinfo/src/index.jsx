import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'


const WarningNotUse = () =>{
  return (
    <h1>Todavía no se ha usado el contador</h1>
  )
}

const ListOfClicks = ({clicks}) =>{
  //console.log({clicks})
  //debugger;
  return (
    <p>{clicks.join(", ")}</p>
  )
}

const App = () => {
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(0)

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: 'Mensaje en el estado'
  })

  const [clicks, setClicks] = useState(0);

  const handleClickLeft = ()=>{
    setCounters({
      ...counters,
      left: counters.left + 1,
    })
    setClicks((prevClicks) => [...prevClicks, "L"])
  }

  const handleClickRight = ()=>{
    setCounters({
      ...counters,
      right: counters.right + 1,
    })
    setClicks((prevClicks) => [...prevClicks, "R"])

  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>clicks totales: {clicks.length}</p>
      {clicks.length === 0
      ? <WarningNotUse />
      : <ListOfClicks clicks={clicks}/>
      }
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))