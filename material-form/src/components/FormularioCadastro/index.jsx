import React from 'react';
import { TextField, Button } from '@mui/material'

function FormularioCadastro() {
    return (
        <>
            <TextField id="nome" label="Nome" variant="outlined" color="secondary" fullWidth/>
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth/>
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth/>

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </>
    );
}

export default FormularioCadastro;