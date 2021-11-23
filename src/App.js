import './App.css';
import { Card } from './components/card/Card';
import chuckImg from './sources/chuckNorris.jpg';
function App() {
  return (
    <div className="App">
      <img width="200px" src={chuckImg} alt="Chuck Norris" />
      <h1 className="title">Chuck Norris Jokes</h1>
      <Card title={"Random Quick Joke"}/>
      <Card title={"Category"}/>
    </div>
  );
}

export default App;
