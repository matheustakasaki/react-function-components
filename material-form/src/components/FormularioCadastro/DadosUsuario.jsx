import React from 'react';
import { TextField, Button, Container } from '@mui/material';
function DadosUsuario() {
    return (
        <>

            <Container component="article" maxWidth="sm">

                <form >
                    <TextField id="email" label="email" type="email" variant="outlined" fullWidth margin="normal" />
                    <TextField id="senha" label="senha" type="password" variant="outlined" fullWidth margin="normal" />
                    <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
                </form>

            </Container>
        </>
    )
}

export default DadosUsuario;