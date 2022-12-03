import { useEffect } from 'react';
import { useState } from 'react';
import Jokes from './Components/Jokes';
import './App.scss';

function App() {
  
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setJokes(result.jokes);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      );
  }, []);

  return (
    <div className="App">
      <div className="App-header">
         <h1>joke-on-you</h1>
      <ul>
        {jokes?.map((joke) => (
          <Jokes key={joke.id} joke={joke} />
        ))}
      </ul>
      </div>
    </div>
  );
}


export default App;
