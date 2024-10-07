import './App.css';
import HellowWord from './components/HelloWord';

function App() {

  const name = 'sejam todos bem vindos'

  const newName = name.toUpperCase()

  function sum(a, b){
    return a+b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1> Ola {newName}</h1>
      <h2> Some: {sum(1, 2)}</h2>
      <img src={url} alt=" minha img" />
      <HellowWord/>
    </div>
  );
}

export default App;
