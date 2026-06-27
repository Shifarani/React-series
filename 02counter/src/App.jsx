import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      alert("Max limit reached (20)")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("Min limit reached (0)")
    }
  }

  return (
    <>
      <h1>Coffee aur react</h1>

      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value {counter}
      </button>

      <br /><br />

      <button onClick={removeValue}>
        Remove value {counter}
      </button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App