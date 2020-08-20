import React from 'react'

function DisplayErro({ erro }) {

    if (erro.networkError) {
        return (
            <div>
                Você parece estar offline, alguns recursos podem não estar disponíveis.
            </div>
        );
    } else {
        return (
            <div>
                Algum tipo de erro ainda desconhecido foi lançado. Verificar logs.
            </div>
        )
    }


}

export default DisplayErro;