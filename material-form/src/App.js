import './App.css';
import React from 'react';
import FormularioCadastro from './components/FormularioCadastro';

function App() {
  return (
    <>
      <FormularioCadastro aoEnviar={aoEnviarForm}></FormularioCadastro>
    </>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
