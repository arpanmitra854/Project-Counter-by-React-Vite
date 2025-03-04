import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0;
  let addValue = () => {
    counter++;
    setCounter(counter);
    console.log("Clicked", Math.random());
  }

  let removeValue = () => {
    counter--;
    setCounter(counter);
    console.log("Clicked", Math.random());
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
