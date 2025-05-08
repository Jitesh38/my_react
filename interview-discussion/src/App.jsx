import { useState } from 'react'

function App() {
  const [count, setCount] = useState()

  return (
    <>
    <p>{count}</p>
    <input type="number" name="" id="" onBlur={(e)=>setCount(Number(e.target.value))} />
    <br />
    <button onClick={()=>setCount(count*5)}>Multiply by 5</button>
      
    </>
  )
}

export default App
