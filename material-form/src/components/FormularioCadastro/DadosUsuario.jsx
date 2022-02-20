import React, { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';
function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);


    // Este componente está com erro no campo de senha
    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();

                if (possoEnviar()) {
                    aoEnviar(email, senha)
                }
            }}>
                <TextField value={email} onChange={(event) => { setEmail(event.target.value) }} required id="email" name="email" label="email" type="email" variant="outlined" fullWidth margin="normal" />

                <TextField value={senha}
                    onChange={(event) => {
                        setSenha(event.target.value);
                    }}
                    onBlur={validarCampos}
                    error={!erros.senha.valido}
                    helperText={erros.senha.texto}
                    id="senha"
                    name="senha"
                    label="senha"
                    type="password"
                    required
                    variant="outlined"
                    margin="normal"
                    fullWidth />
                <Button type="submit" variant="contained" color="primary"> Próximo </Button>
            </form>

        </>
    )
}

export default DadosUsuario;