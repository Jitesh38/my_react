import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter >= 20) {
      console.log("value cannot be added now");
    } else {
      setCounter(counter + 1);
    }
    // console.log(counter)
  };
  const decValue = () => {
    if (counter == 0) {
      console.log("values cannot be reduced now.");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Jitesh Prajapati | Full-stack developer</h1>
      <h3> Counter Value : {counter} </h3>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;
