import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>
const Parts = ( {part},{exercises}) => {
  return(
  <p>
  {part} {exercises}
  </p>
  )
}

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
      <Title course={course} />
      <Parts part={part1} exercises={exercises1} />
      <Parts part={part2} exercises={exercises2} />
      <Parts part={part3} exercises={exercises3} />

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
