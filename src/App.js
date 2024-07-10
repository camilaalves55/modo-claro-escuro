import React, { useState } from 'react';
import './App.css';
import AlterarFundo from './components/AlterarFundo';

function App() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarModo = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div className={`App ${modoEscuro ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <h2>Aplicação Modo Claro/Escuro</h2>
      </header>
      <main>
        <AlterarFundo modoEscuro={modoEscuro} alternarModo={alternarModo} />
        <p>Hello World!</p>
      </main>
    </div>
  );
}

export default App;