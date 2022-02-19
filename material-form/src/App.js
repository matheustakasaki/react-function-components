import './App.css';
import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCpf, validarSenha } from './models/cadastro';

function App() {
  return (
    <>
      <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}></FormularioCadastro>
    </>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
