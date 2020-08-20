import React from 'react'
import styled from 'styled-components'
import UserGrid from '../componentes/UserGrid'
import UnstyledList from '../componentes/UnstyledList'
import userQueries from '../graphql/user.queries'
import { useLocation, useParams } from 'react-router-dom'
import { Usuario } from '../types/Usuario'
import { useQuery } from '@apollo/react-hooks'
import Loading from '../componentes/Loading'
import DisplayErro from '../componentes/DisplayErro'


const UserDetailsHeader = styled.div`
    @media (max-width: 600px) {
        display: grid;
        padding: 10px;
        grid-template-columns: 1fr 6fr;
        grid-column-gap: 15px;
        background-color: #fbfbfb;
        font-size:small;
    }
    @media (min-width: 601px) {
        display: grid;
        padding: 10px;
        grid-template-columns: 1fr 10fr;
        grid-column-gap: 15px;
        background-color: #fbfbfb;
    }
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 400px;
    border-radius: 50%;
`;

const FriendsAreaHeader = styled.div`
    margin-top: 55px;
    margin-left: 25px;
    margin-bottom: 0px;
`;

function PaginaUsuario() {

    const location = useLocation();
    const { id } = useParams();


    let usuario = null;

    if (location.state) {
        //se o objeto for passado pelo pushstate do react-router, usamos ele.
        //caso contrário, é pedido ao GraphQL para recuperar pelo id - para caso
        //de refresh na url de usuário.
        usuario = location.state as Usuario
    }

    // const { loading, data, error } = useQuery(userQueries.QUERY_SEARCH_BY_ID, { variables: { id }, skip: location.state != undefined });
    const { loading, data, error } = useQuery(userQueries.QUERY_SEARCH_BY_ID, { variables: { id } });

    if (usuario == null && data && data.searchById) usuario = data.searchById as Usuario;

    if (loading) return <Loading />;
    if (error && !usuario) return <DisplayErro erro={error} />;

    return (
        <>

            <UserDetailsHeader>
                <Img src={usuario.picture} />
                <div>
                    <UnstyledList>
                        <li><span>Nome: <span className="bold">{usuario.name}</span></span></li>
                        <li><span>Age: <span className="bold">{usuario.age}</span></span></li>
                        <li><span>Email: <span className="bold">{usuario.email}</span></span></li>
                    </UnstyledList>
                </div>
            </UserDetailsHeader>

            <div>
                <FriendsAreaHeader>
                    <h2>Amigos</h2>
                    {usuario.friends ? null : <span>Nenhum amigo :(</span>}
                </FriendsAreaHeader>
                <UserGrid users={usuario.friends} />
            </div>
        </>
    );
}

export default PaginaUsuario;