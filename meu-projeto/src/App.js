import './App.css';

function App() {

  const name = 'fer'

  const newName = name.toUpperCase()

  function sum(a, b){
    return a+b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1> Olá</h1>
      <h2> Ola {newName}</h2>
      <h3> Some: {sum(1, 2)}</h3>
      <img src={url} alt=" minha img" />
    </div>
  );
}

export default App;
