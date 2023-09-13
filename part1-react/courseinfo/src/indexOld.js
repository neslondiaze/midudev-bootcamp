import React from 'react'
import ReactDOM from 'react-dom'
import Header from './componests/Header.js'
import Content from './componests/Content.js'
import Total from './componests/Total.js'
import { useState } from 'react'

const Counter = ({number}) =>{
  return <h1>{number}</h1>
}


const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const [contador, setContador] = useState(0)
  
  console.log('render')

  const handleClick = () =>{
    setContador(contador + 1) 
  }

  const handleClickReset = () =>{
    setContador(0);
  }

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? 'Es par' : 'Es impar';


  return (
    <div>
      <Header courses={course} />
      <Content  />
      <Total msg='Number of exercises' total={exercises1 + exercises2  + exercises3} />
    
    <p>El valor de contador es:</p>
    <Counter number={contador} />
    <p>{mensajePar}</p>
    <button onClick={handleClick}>Incremetar</button>
    <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
