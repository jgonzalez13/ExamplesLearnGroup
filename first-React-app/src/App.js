import React from 'react';
import './App.css';
import MiPrimerComponente from './components/MiprimerComponente'
import Todo from './components/todo/Todo.container'

function App() {
  return (
    <div className="App">
      <Todo />
      <h1>Bienidos a React Js</h1>
      <MiPrimerComponente 
        color="" 
        name="Corpus"
        message="Soy el primero"
      />
      <MiPrimerComponente 
        color="blue"
        name="Juan" 
        message="Soy el segundo"
      />
      <MiPrimerComponente 
        color="yellow" 
        name="Maldito Cubo"
        message="Soy el Tercero"
      />
    </div>
  );
}

export default App;
