import { useState } from 'react';


// Criando hook customizado
// é necessário que o nome do hook comece com 'use'
function useErros(validacoes) {

    const estadoInicial = criarEstadoInicial(validacoes)

    const [erros, setErros] = useState({ estadoInicial })

    function validarCampos(e) {
        const { name, value } = e.target
        const novoEstado = { ...erros };
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

    return [erros, validarCampos, possoEnviar]
}

// função para criar estado inicial aos componentes e possibilitar que seja alterado depois

function criarEstadoInicial(validacoes) {
    const estadoInicial = {}
    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: '' }
    }

    return estadoInicial
}

export default useErros