import React from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCpf }) {

    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />

            <DadosUsuario />

            <DadosEntrega />
        </>
    );
}

export default FormularioCadastro;