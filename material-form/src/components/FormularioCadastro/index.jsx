import React, { useState } from 'react';
import { TextField, Button, Container, Switch, FormControlLabel, Typography } from '@mui/material'

function FormularioCadastro() {

    let [nome, setNome] = useState('')
    return (
        <>

            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" >Formulário de Cadastro</Typography>
                <TextField id="nome" value={nome} onChange={(event) => {
                    let tmpNome = event.target.value;

                    if (tmpNome.length >= 3) {
                        tmpNome = setNome.tmpNome.substr(0, 3)

                    }
                    setNome(tmpNome)
                }
                } label="Nome" variant="outlined" color="secondary" fullWidth margin="normal" />
                <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
                <TextField id="cpf" label="cpf" variant="outlined" fullWidth margin="normal" />

                <FormControlLabel label="Promoções" control={<Switch name="promocoes" defaultChecked={true} ></Switch>} />

                <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked={true} ></Switch>} />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

            </Container>
        </>
    );
}

export default FormularioCadastro;