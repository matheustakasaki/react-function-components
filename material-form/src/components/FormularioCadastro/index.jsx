import React, { useState } from 'react';
import { TextField, Button, Container, Switch, FormControlLabel, Typography } from '@mui/material'

function FormularioCadastro() {

    let [nome, setNome] = useState('')
    let [sobrenome, setSobrenome] = useState('')
    let [cpf, setCpf] = useState('')
    let [promocoes, setPromocoes] = useState(true)
    let [novidades, setNovidades] = useState(true)
    return (
        <>

            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" >Formulário de Cadastro</Typography>

                <form onSubmit={(event) => {
                    event.preventDefault();

                    console.log()
                }}>
                    <TextField id="nome" value={nome} onChange={(event) => {
                        let tmpNome = event.target.value;

                        if (tmpNome.length >= 3) {
                            tmpNome = setNome.tmpNome.substr(0, 3)

                        }
                        setNome(tmpNome)
                    }
                    } label="Nome" variant="outlined" color="secondary" fullWidth margin="normal" />

                    <TextField id="sobrenome" value={sobrenome} onChange={(event) => {

                        setSobrenome(event.target.value)
                    }
                    } label="Sobrenome" variant="outlined" fullWidth margin="normal" />

                    <TextField id="cpf" value={cpf} onChange={(event) => {

                        setCpf(event.target.value)
                    }
                    } label="cpf" variant="outlined" fullWidth margin="normal" />

                    <FormControlLabel label="Promoções" control={<Switch checked={promocoes} onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }} name="promocoes" defaultChecked={promocoes} ></Switch>} />

                    <FormControlLabel label="Novidades" control={<Switch checked={novidades} onChange={(event) => {
                        setNovidades(event.target.checked)
                    }} name="novidades" defaultChecked={novidades} ></Switch>} />

                    <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

                </form>


            </Container>
        </>
    );
}

export default FormularioCadastro;