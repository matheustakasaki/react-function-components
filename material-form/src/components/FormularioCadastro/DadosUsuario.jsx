import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
function DadosUsuario({ aoEnviar, validacoes }) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [erros, setErros] = useState({ senha: { valido: true, texto: '' } })

    function validarCampos(e) {
        const { name, value } = e.target
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);

        setErros(novoEstado)

    }

    function possoEnviar() {

        for (let campo in erros) {
            if (!erros[campo].valido) {

                return false
            }
        }
        return true;
    }
    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();

                if (possoEnviar()) {
                    aoEnviar(email, senha)
                }
                aoEnviar({ email, senha })
            }}>
                <TextField value={email} onChange={(event) => { setEmail(event.target.value) }} onBlur={validarCampos} error={!erros.senha.valido} helperText={erros.senha.texto} required id="email" name="email" label="email" type="email" variant="outlined" fullWidth margin="normal" />

                <TextField value={senha} onChange={(event) => { setSenha(event.target.value) }} required id="senha" name="senha" label="senha" type="password" variant="outlined" fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary"> Próximo </Button>
            </form>

        </>
    )
}

export default DadosUsuario;