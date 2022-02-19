import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material'

function DadosPessoais({ aoEnviar, validacoes }) {

    let [nome, setNome] = useState('')
    let [sobrenome, setSobrenome] = useState('')
    let [cpf, setCpf] = useState('')
    let [promocoes, setPromocoes] = useState(true)
    let [novidades, setNovidades] = useState(true)

    const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } })

    function validarCampos(e) {
        const { name, value } = e.target
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);

        setErros(novoEstado)

    }
    return (
        <>


            <form onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
            }}>
                <TextField id="nome" name="nome" value={nome} onChange={(event) => {
                    let tmpNome = event.target.value;

                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0, 3)

                    }
                    setNome(tmpNome)
                }
                } label="Nome" color="secondary" variant="outlined" fullWidth margin="normal" />

                <TextField id="sobrenome" name="sobrenome" value={sobrenome} onChange={(event) => {

                    setSobrenome(event.target.value)
                }
                } label="Sobrenome" variant="outlined" fullWidth margin="normal" />

                <TextField id="cpf" error={!erros.cpf.valido} helperText={erros.cpf.texto} name="cpf" value={cpf} onChange={(event) => { setCpf(event.target.value) }}
                    onBlur={validarCampos}
                    label="cpf" variant="outlined" fullWidth margin="normal" />

                <FormControlLabel name="promocoes" label="Promoções" control={<Switch checked={promocoes} onChange={(event) => {
                    setPromocoes(event.target.checked)
                }} name="promocoes"></Switch>} />

                <FormControlLabel name="novidades" label="Novidades" control={<Switch checked={novidades} onChange={(event) => {
                    setNovidades(event.target.checked)
                }} name="novidades" ></Switch>} />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

            </form>


        </>
    );
}

export default DadosPessoais;