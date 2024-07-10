import React from 'react';

const AlterarFundo = ({ modoEscuro, alternarModo }) => {
  return (
      <button onClick={alternarModo}>
        {modoEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
  );
};

export default AlterarFundo;
