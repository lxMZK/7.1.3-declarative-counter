import React, { useState } from 'react'

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{changeCounter(counter+1)}}>+</button>
      <button onClick={()=>{changeCounter(counter-1)}}>-</button>
      <button id='change' onClick={()=>{changeCounter(Number(prompt("Input Value:")))}}>Change Value</button>
    </div>
  )
}

export default App