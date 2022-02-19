import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ email, senha })
            }}>
                <TextField value={email} onChange={(event) => { setEmail(event.target.value) }} required id="email" name="email" label="email" type="email" variant="outlined" fullWidth margin="normal" />

                <TextField value={senha} onChange={(event) => { setSenha(event.target.value) }} required id="senha" name="senha" label="senha" type="password" variant="outlined" fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
            </form>

        </>
    )
}

export default DadosUsuario;