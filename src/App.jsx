import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0;
  let addValue = () => {
    if(counter >= 20) {
      alert("Value can't be greater than 20");
      setCounter(20);
    }else{
      counter++;
      setCounter(counter);  
    }
    console.log("Clicked", Math.random());
  }

  let removeValue = () => {
    if(counter <= 0) {
      setCounter(0);
      alert("Value can't be lesser than 0");
    }else{
      counter--;
      setCounter(counter);
    }
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
