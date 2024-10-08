import './App.css';
import HellowWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Item from './components/Item';

function App() {

  return (
    <div className="App">
      <HellowWord/>
      <Frase></Frase>
      <List></List>
      <Item></Item>
      <SayMyName nome="Fernanda"/>
      <SayMyName nome="Daniel"/>
      <Pessoa nome="Fernanda" idade="23" profissao="Desenvolvedora"/>
    </div>
  );
}

export default App;
