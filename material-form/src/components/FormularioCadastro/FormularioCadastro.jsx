import { Container, Typography, Stepper, StepLabel, Step } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validacoes }) {
    const [etapaAtual, setEtapaAtual] = useState(0)

    const [dadosColetados, setDados] = useState({})

    useEffect(() => {
        if (etapaAtual === formularios.length) {
            aoEnviar(dadosColetados)
        }
    })
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,

        <Typography variant='h5'>Cadastro realizado!</Typography>
    ]

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados })

        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <>
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" >Formulário de Cadastro</Typography>

                <Stepper activeStep={etapaAtual}>
                    <Step><StepLabel>Login</StepLabel></Step>
                    <Step><StepLabel>Pessoal</StepLabel></Step>
                    <Step><StepLabel>Entrega</StepLabel></Step>
                    <Step><StepLabel>Finalização</StepLabel></Step>
                </Stepper>

                {formularios[etapaAtual]}

            </Container>
        </>
    );
}


export default FormularioCadastro;