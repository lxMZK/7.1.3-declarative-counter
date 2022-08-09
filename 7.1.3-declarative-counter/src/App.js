import React, { useState } from 'react'

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <main>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => { changeCounter(counter + 1) }}>+</button>
        <button onClick={() => { changeCounter(counter - 1) }}>-</button>
        <button id='change' onClick={() => { changeCounter(Number(prompt("Input Value:", counter))) }}>Change Value</button>
      </div>
    </main>
  )
}

export default App