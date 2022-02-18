import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [etapaAtual, setEtapaAtual] = useState(0)


    const formularios = [
        <DadosUsuario aoEnviar={proximo} />,
        <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf} />,
        <DadosEntrega aoEnviar={aoEnviar} />
    ]

    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <>
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" >Formulário de Cadastro</Typography>
                
                { formularios[etapaAtual] }

            </Container>
        </>
    );
}


export default FormularioCadastro;