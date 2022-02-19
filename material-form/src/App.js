import './App.css';
import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCpf, validarSenha } from './models/cadastro';
import { Container, Typography } from '@mui/material';

import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
  return (
    <>

      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" >Formulário de Cadastro</Typography>

        <ValidacoesCadastro.Provider value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}>

          <FormularioCadastro aoEnviar={aoEnviarForm} />

        </ValidacoesCadastro.Provider>
      </Container>
    </>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
