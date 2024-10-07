import './App.css';
import HellowWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <HellowWord/>
      <SayMyName nome="Fernanda"/>
      <SayMyName nome="Daniel"/>
      <Pessoa nome="Fernanda" idade="23" profissao="Desenvolvedora"/>
    </div>
  );
}

export default App;
