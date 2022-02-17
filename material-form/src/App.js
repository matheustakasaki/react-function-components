import './App.css';
import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function App() {
  return (
    <>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}></FormularioCadastro>
    </>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 dígitos' }
  }
  else {
    return { valido: true, texto: '' }
  }
}

export default App;
