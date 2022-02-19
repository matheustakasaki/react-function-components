import React from 'react';


const ValidacoesCadastro = React.createContext(
    // Informações default para o provider
    { cpf: semValidacao, senha: semValidacao, nome: semValidacao }
);

function semValidacao(dados) {
    console.log(dados);

    return { valido: true, texto: '' }
}
export default ValidacoesCadastro