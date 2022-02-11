import React from 'react';
import { TextField, Button, Container } from '@mui/material'

function FormularioCadastro() {
    return (
        <>

            <Container component="article" maxWidth="sm">
                <TextField id="nome" label="Nome" variant="outlined" color="secondary" fullWidth />
                <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth />
                <TextField id="cpf" label="cpf" variant="outlined" fullWidth />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

            </Container>
        </>
    );
}

export default FormularioCadastro;