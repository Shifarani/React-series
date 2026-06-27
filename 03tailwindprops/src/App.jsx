import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "shifa",
    age: 19
  }
  let newArr = [1,2,3]

  return (
    <>
      {/* Heading */}
      <h1 className="text-2xl font-bold text-blue-500 bg-pink-200">
        Tailwind test
      </h1>

      <Card username="Coffee aur code" btnText="Click me"/>
      {/* ye repeat krne se 2 cards aa jayegnge */}
      <Card username="Shifa or react" btnText="Visit me"/>
    </>
  )
}

export default App