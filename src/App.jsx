import { useState } from 'react';
import './App.css'

function App() {
  let [count , setCounter] = useState(0);
function IncreaseCounter(){
  setCounter(count+1)
}
  return (
    <>
    <div className="count">
      <button onClick={IncreaseCounter}> areen {count}</button>
    </div>
    </>
  )
}

export default App