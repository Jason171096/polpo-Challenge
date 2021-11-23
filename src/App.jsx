import './App.css';
import { Button } from './components/Button/Button';
import chuckImg from './sources/chuckNorris.jpg';
import request from './utils/request'

function App() {
  return (
    <div className="App">
      <img width="200px" src={chuckImg} alt="Chuck Norris" />
      <h1 className="title">Chuck Norris Jokes</h1>
      <Button fetchUrl={request.fetchRandom.url} title={request.fetchRandom.title}/>
      <h2 className="title">Category Joke</h2>
      <Button fetchUrl={request.fetchNerdy.url} title={request.fetchNerdy.title}/>
      <Button fetchUrl={request.fetchExplicit.url} title={request.fetchExplicit.title}/>
    </div>
  );
}

export default App;
