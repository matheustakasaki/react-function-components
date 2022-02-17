import { Container, TextField, Button } from '@mui/material';
import React from 'react';

function DadosEntrega() {
    return (
        <>

            <Container component="article" maxWidth="sm">

                <form>
                    <TextField id="cep" label="CEP" type="number" variant="outlined" margin="normal" />
                    <TextField id="endereco" label="Endereço" type="text" variant="outlined" fullWidth margin="normal" />
                    <TextField id="numero" label="Número" type="number" variant="outlined" margin="normal" />
                    <TextField id="estado" label="Estado" type="text" variant="outlined" margin="normal" />
                    <TextField id="cidade" label="Cidade" type="text" variant="outlined" margin="normal" />
                    <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
                </form>

            </Container>
        </>
    )
}

export default DadosEntrega