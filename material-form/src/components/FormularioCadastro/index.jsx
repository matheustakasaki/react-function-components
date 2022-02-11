import React from 'react';
import { TextField, Button, Container } from '@mui/material'

function FormularioCadastro() {
    return (
        <>

            <Container component="article" maxWidth="sm">
                <h1>Formulário de Cadastro</h1>
                <TextField id="nome" label="Nome" variant="outlined" color="secondary" fullWidth margin="normal" />
                <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
                <TextField id="cpf" label="cpf" variant="outlined" fullWidth margin="normal" />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

            </Container>
        </>
    );
}

export default FormularioCadastro;