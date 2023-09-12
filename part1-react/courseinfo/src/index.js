import React from 'react'
import ReactDOM from 'react-dom'
import Header from './componests/Header.js'
import Content from './componests/Content.js'
import Total from './componests/Total.js'




const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header courses={course} />

      <Content  />
      
      <Total msg='Number of exercises' total={exercises1 + exercises2  + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
