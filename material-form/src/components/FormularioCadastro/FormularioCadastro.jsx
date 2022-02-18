import { Container, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [etapaAtual, setEtapaAtual] = useState(0)


    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }
    function formularioAtual(etapa) {
        switch (etapa) {
            case 0:
                return <DadosUsuario aoEnviar={proximo} />;
            case 1:
                return <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
            case 2:
                return <DadosEntrega />
            default:
                return <Typography> Erro ao selecionar formulário</Typography>
        }
    }
    return (
        <>

            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" >Formulário de Cadastro</Typography>
                {/* <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} /> */}


                {formularioAtual(etapaAtual)}
                {/* <DadosUsuario /> */}

                {/* <DadosEntrega /> */}

            </Container>
        </>
    );
}


export default FormularioCadastro;