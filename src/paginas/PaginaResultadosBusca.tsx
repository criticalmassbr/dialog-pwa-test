import React from 'react'
import UserGrid from '../componentes/UserGrid'
import Loading from '../componentes/Loading'
import DisplayErro from '../componentes/DisplayErro'
import userQueries from '../graphql/user.queries'
import { useQuery } from "@apollo/react-hooks"
import { useSelector } from 'react-redux'


function PaginaResultadosBusca() {

    //O toLowerCase serve para que duas strings de busca não gerarem duas entradas no cache só por motivos de case.

    const termoBusca: string = useSelector((state: any) => state.app.termo_busca_usuario)
    const { loading, data, error } = useQuery(userQueries.QUERY_SEARCH_USERS, { variables: { name: termoBusca.toLowerCase() } });

    if (loading) return <Loading />;
    if (error) return <DisplayErro erro={error} />;

    return (
        <>
            {termoBusca ? <div><span>Busca pelo termo "{termoBusca}"</span></div> : null}
            {data.list?<UserGrid users={data.list || []} />:<span>Nenhum resultado encontrado.</span>}
        </>
    );
}

export default PaginaResultadosBusca;