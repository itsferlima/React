import './App.css';
import HellowWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  return (
    <div className="App">
      <HellowWord/>
      <Frase></Frase>
      <SayMyName nome="Fernanda"/>
      <SayMyName nome="Daniel"/>
      <Pessoa nome="Fernanda" idade="23" profissao="Desenvolvedora"/>
    </div>
  );
}

export default App;
