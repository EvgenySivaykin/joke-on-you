import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Jokes from './Components/Jokes';
import './App.scss';





function App() {

  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
    .then(res => setJokes(res.data.map(j => ({...j, show: true}))));

  }, []);


  // useEffect(() => {
  //   axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
  //   .then(res => setJokes(res.data.map(b => ({...b, show: true}))));
  // }, []);






  return (
    <div className="App">
      <div className="App-header">
        {/* <h1>Joke-on-you</h1> */}
        <ul>
          {/* {
            jokes?.map(j => <li key={j.id}>
              <h3>{j.type}</h3>
            </li>)
          } */}
          {
            jokes?.map(j => (j.show === true) ? <Jokes key={j.id} joke={j} /> : null)
          }
        </ul>

      </div>
    </div>
  );
}

export default App;
