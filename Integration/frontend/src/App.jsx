import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
   
      const response = axios.get("/api/jokes");
      response.then((res) => {setJokes(res.data); console.log(res.data);});
    
  }, []);

  return (
    <>
      <h1>Jitesh is a Full stack developer</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <label htmlFor={joke.id}>{joke.title}</label>
          <input type="text" id={joke.id} value={joke.joke} />
        </div>
      ))}
    </>
  );
}

export default App;
